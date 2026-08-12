import puppeteer from "puppeteer-core";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { seoData } from "./src/seoData.js";

const PORT = 4173;
const routes = Object.keys(seoData);

// Chrome path
const CHROME_PATH =
  process.env.CHROME_PATH ||
  (process.platform === "win32"
    ? "C:/Program Files/Google/Chrome/Application/chrome.exe"
    : process.platform === "darwin"
    ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    : "/usr/bin/google-chrome");

// Recycle the browser after this many routes to bound memory growth over a
// long prerender run — several pages embed multiple multi-MB images.
const BROWSER_RESTART_EVERY = 15;

// We only need the rendered HTML structure (for SEO content and Helmet's
// title/meta), not the actual image/font/media bytes. Blocking these request
// types cuts memory and network usage per page dramatically — this was the
// main cause of Chrome crashing partway through long prerender runs on pages
// that embed several multi-MB images (e.g. /photo-gallery/, /nursing-care).
const BLOCKED_RESOURCE_TYPES = new Set(["image", "media", "font"]);

function outputPaths(route) {
  if (route === "/") {
    return [path.resolve("dist/index.html")];
  }

  const clean = route.replace(/^\/|\/$/g, "");

  // Write BOTH forms so the prerendered page is found regardless of how the
  // URL is requested:
  //   dist/<route>/index.html  -> served when the URL has a trailing slash
  //                                (also what Apache's default DirectorySlash
  //                                redirect resolves to)
  //   dist/<route>.html        -> served for the exact bare path (no trailing
  //                                slash), which is how every route in
  //                                main.jsx is actually defined. Without this,
  //                                static file servers that don't auto-append
  //                                a trailing slash (e.g. `vite preview`'s
  //                                sirv server) fall through to the SPA shell
  //                                and silently serve the home page's HTML.
  return [
    path.resolve("dist", clean, "index.html"),
    path.resolve("dist", `${clean}.html`)
  ];
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function waitForServer(url) {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch (e) {}

    await new Promise((r) => setTimeout(r, 500));
  }

  throw new Error("Vite preview server did not start");
}

function killServer(server) {
  return new Promise((resolve) => {
    if (!server.pid) return resolve();

    if (process.platform === "win32") {
      spawn("taskkill", ["/pid", server.pid, "/T", "/F"], {
        stdio: "ignore"
      }).on("close", resolve);
    } else {
      server.kill();
      resolve();
    }
  });
}

async function launchBrowser() {
  return puppeteer.launch({
    headless: true,
    executablePath: CHROME_PATH,
    protocolTimeout: 120000,
    // Note: deliberately NOT using --single-process / --no-zygote here.
    // Those flags disable Chrome's normal multi-process crash isolation and
    // made the browser noticeably MORE prone to hard crashes during long
    // prerender runs (seen as "detached Frame" / "Connection closed" errors
    // cascading through every remaining route). They're sometimes needed in
    // minimal Docker containers, but are actively harmful on a normal
    // desktop/CI Chrome install.
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--disable-extensions",
      "--disable-background-networking",
      "--disable-default-apps",
      "--mute-audio"
    ]
  });
}

async function prerenderRoute(browser, route) {
  const seo = seoData[route];
  let page;

  try {
    page = await browser.newPage();

    // Skip loading images/fonts/media entirely — the DOM structure and
    // <img src="..."> attributes still render fine without the actual bytes,
    // and this is what keeps memory usage low enough to survive a full run.
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (BLOCKED_RESOURCE_TYPES.has(req.resourceType())) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto(`http://127.0.0.1:${PORT}${route}`, {
      waitUntil: "networkidle0",
      timeout: 60000
    });

    // Wait for React Router
    await page.waitForFunction(
      (p) => window.location.pathname === p,
      { timeout: 10000 },
      route
    );

    // Small wait for Helmet updates
    await new Promise((r) => setTimeout(r, 1500));

    let html = await page.content();

    // Remove existing SEO tags (whatever the client-side render produced)
    html = html.replace(/<title>.*?<\/title>/is, "");
    html = html.replace(/<meta name="description"[^>]*>/gi, "");
    html = html.replace(/<meta name="keywords"[^>]*>/gi, "");
    html = html.replace(/<link rel="canonical"[^>]*>/gi, "");

    const canonicalUrl = `https://senocare.in${route}`;

    // Inject fresh SEO tags sourced straight from seoData.js, so the
    // prerendered HTML always matches seoData regardless of any Helmet
    // timing quirks during the client-side render above.
    html = html.replace(
      /<\/head>/i,
      `
  <title>${escapeHtml(seo.title)}</title>
  <meta name="description" content="${escapeHtml(seo.description)}">
  <meta name="keywords" content="${escapeHtml(seo.keywords)}">
  <link rel="canonical" href="${escapeHtml(canonicalUrl)}">
</head>`
    );

    const files = outputPaths(route);

    for (const file of files) {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html, "utf8");
      console.log(`  Created ${file}`);
    }
  } finally {
    try {
      if (page && !page.isClosed()) {
        await page.close();
      }
    } catch {}
  }
}

async function main() {
  if (!fs.existsSync("dist")) {
    console.error('dist/ not found. Run "npm run build" before prerendering.');
    process.exit(1);
  }

  console.log("Starting Vite preview server...");

  const server = spawn(
    process.platform === "win32" ? "npm.cmd" : "npm",
    ["run", "preview", "--", "--host", "127.0.0.1", "--port", String(PORT)],
    { stdio: "inherit", shell: true }
  );

  let browser;

  try {
    await waitForServer(`http://127.0.0.1:${PORT}`);
    console.log("Server started");

    browser = await launchBrowser();

    const failedRoutes = [];
    let routesSinceRestart = 0;

    for (const route of routes) {
      console.log(`Prerendering ${route}`);

      // Periodically recycle the browser to bound memory growth over a long
      // run instead of waiting for it to crash under memory pressure.
      if (routesSinceRestart >= BROWSER_RESTART_EVERY) {
        console.log("  Recycling browser to keep memory usage in check...");
        try {
          await browser.close();
        } catch {}
        browser = await launchBrowser();
        routesSinceRestart = 0;
      }

      let succeeded = false;

      for (let attempt = 1; attempt <= 2 && !succeeded; attempt++) {
        try {
          if (!browser.connected) {
            console.log("  Browser disconnected, relaunching...");
            browser = await launchBrowser();
            routesSinceRestart = 0;
          }

          await prerenderRoute(browser, route);
          succeeded = true;
        } catch (err) {
          console.error(`  Attempt ${attempt} FAILED for ${route}: ${err.message}`);

          // If the browser itself died mid-route (the actual cause of the
          // previous "Connection closed" cascade), relaunch it now so the
          // retry — and every route after it — has a working browser again,
          // rather than silently failing for the rest of the run.
          if (!browser.connected) {
            try {
              await browser.close();
            } catch {}
            browser = await launchBrowser();
            routesSinceRestart = 0;
          }
        }
      }

      if (!succeeded) {
        failedRoutes.push(route);
      }

      routesSinceRestart++;
    }

    if (failedRoutes.length) {
      console.log(`\nPrerender finished with ${failedRoutes.length} failed route(s):`);
      failedRoutes.forEach((r) => console.log(`  - ${r}`));
      process.exitCode = 1;
    } else {
      console.log("\nPrerender completed successfully");
    }
  } finally {
    if (browser) {
      try {
        await browser.close();
      } catch {}
    }

    await killServer(server);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});