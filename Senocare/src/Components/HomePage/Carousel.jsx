import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import Slide1 from "../../assets/Image/Slide1.jpg";
import Slide2 from "../../assets/Image/Slide2.jpg";
import Slide3 from "../../assets/Image/Slide3.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  // const [text, setText] = useState("Hello WOrld");

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={2500}>
        <LazyLoadImage src={Slide1} className="d-block w-100" />
        {/* <CarouselExpampleImage element={text} /> */}
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <LazyLoadImage src={Slide2} className="d-block w-100" />
        {/* <CarouselExpampleImage element={text} /> */}
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipi,lscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <LazyLoadImage src={Slide3} className="d-block w-100" />
        {/* <CarouselExpampleImage element="First Slide" /> */}
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
