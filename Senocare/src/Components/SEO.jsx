import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { seoData } from "../seoData";

const SITE_URL = "https://senocare.in";

// Normalize away a trailing slash (except for the root "/") so that routes
// like "/nursing-care" and "/nursing-care/" both resolve to the same entry.
const normalize = (pathname) => {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
};

// Build a lookup keyed by the normalized path so trailing-slash differences
// between main.jsx's route definitions and the browser's actual pathname
// never cause a lookup miss.
const seoLookup = Object.keys(seoData).reduce((map, key) => {
  map[normalize(key)] = seoData[key];
  return map;
}, {});

/**
 * Renders the <title>/<meta description>/<meta keywords>/<link canonical>
 * tags for the current route, pulling from `seoData.js` by default.
 *
 * Usage: just drop <SEO /> into a page component — no props required.
 * Any of title/description/keywords/canonical can still be overridden
 * explicitly if a page ever needs something seoData.js doesn't cover.
 */
export default function SEO({ title, description, keywords, canonical }) {
  const { pathname } = useLocation();
  const data = seoLookup[normalize(pathname)] || seoData["/"];

  const finalTitle = title || data.title;
  const finalDescription = description || data.description;
  const finalKeywords = keywords || data.keywords;
  const finalCanonical = canonical || `${SITE_URL}${pathname}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <link rel="canonical" href={finalCanonical} />
    </Helmet>
  );
}
