import CarePackage from "./CarePackage/CarePackage";
import ControlledCarousel from "./Carousel";
import ChooseSenocare from "./ChooseSenocare/ChooseSenocare";
import ClientTestimonial from "./ClientTestimonial/ClientTestimonial";
import OurStory from "./OurStory/OurStory";
// import MediaSection from "./Media/Media";
import Media from "./Media/Media";
import Contact from "./LoveToHear/Contact";

const HomeMain = () => {
  return (
    <>
      <ControlledCarousel />
      <OurStory />
      <ClientTestimonial />
      <ChooseSenocare />
      <CarePackage />
      <Media />
      <Contact />
    </>
  );
};

export default HomeMain;
