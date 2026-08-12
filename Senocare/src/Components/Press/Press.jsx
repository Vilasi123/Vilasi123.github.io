import { Container, Row, Col } from "react-bootstrap";
import "./Press.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import InternationaBussinesstimes from "../../assets/Image/Media/International-Busi-Times.jpeg";
import InternationaBussinesstimes from "../../assets/Image/Media/Press/International-Busi-Times.jpeg";

import MidDay from "../../assets/Image/Media/Press/Mid-day.png";
import PressSection from "../../assets/Image/Media/Press/Press-section.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const Press = () => {
  return (
    <>
      <SEO />

      <div>
        <Header />
        <Container className="press__content">
          <Row>
            <Col>
              <h3 className="press__release text-center fs-2 text-md text-lg text-sm fw-bold">
                Press Releases
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className="press__imgs">
              <LazyLoadImage
                src={InternationaBussinesstimes}
                className="img-fluid press__section"
              />
            </Col>
            <Col xs={12} md={6} className="press__imgs">
              <LazyLoadImage
                src={MidDay}
                className="img-fluid press__section"
              />
            </Col>
            <Col xs={12} md={6} className="press__imgs">
              <LazyLoadImage
                src={PressSection}
                className="img-fluid press__section"
              />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Press;
