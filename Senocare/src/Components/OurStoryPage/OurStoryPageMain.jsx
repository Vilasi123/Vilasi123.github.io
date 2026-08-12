import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OurStoryPage from "./OurStoryPage";
import SEO from "../SEO";

const OurStoryPageMain = () => {
  return (
    <>
      <SEO />

      <div id="story">
        <Header />
        <OurStoryPage />
        <Footer />
      </div>
    </>
  );
};

export default OurStoryPageMain;
