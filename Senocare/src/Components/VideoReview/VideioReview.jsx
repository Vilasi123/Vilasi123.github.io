import { Container, Col, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import VisionImg from "../../assets/Image/OurVision.png";
import "./VideoReview.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";
const VideoReview = () => {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <div className="header__image">
          <LazyLoadImage
            src={VisionImg}
            className="img-fluid background__img"
          />

          <h2 className="img_heading">Video Reviews</h2>
        </div>
        <Container className="video__review__content">
          <Row>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/0rUGmPmF3XU?si=qq7Ujj_LWJPlGUJ1"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/pR2KQL_OHAQ?si=h8yGPAoNIVB55DnZ"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/u_qoBa5x5kQ?si=sLlLUxL_oSSVLbCn"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/9dPhpkqqxH8?si=YZQlVdaf2mzbNqPJ"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default VideoReview;
