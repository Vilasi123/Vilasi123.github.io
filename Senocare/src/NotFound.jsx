import { Helmet } from "react-helmet-async";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Page Not Found</title>
        <meta name="description" content="Oops! This page doesn't exist." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div>
        <Header />
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1>404</h1>
          <p>Page Not Found</p>
          <p>The page you were looking for could not be found.</p>
          <Button href="/"> Return Home Page</Button>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default NotFound;
