import { Container, Col, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import VisionImg from "../../assets/Image/OurVision.png";
import "./EventPage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const EventPage = () => {
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

          <h2 className="img_heading">Senocare Events</h2>
        </div>
        <Container className="video__review__content">
          <Row>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/axZB5oCEmwU?si=0GqEf-5yqrBAPwXo"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/ci3kY5kTr9I?si=bjogfvGf06Xs1cLm"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/ogbPhQ0hj5U?si=BJfvYtQ1xhaIQZHM"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/FDVgSm6sSss?si=E7RW2qRZqHMJJY0O"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>

            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/_BB-rPGvKbE?si=30KDiCCTzGgp1xZ3"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/rP-EMcANuI0?si=Na8_twEKl2FbkfiX"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/6S0l3GlTvOY?si=XYQgCFjfCk07LM1P"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/G-Zy8wd_moQ?si=jpW1941OjWhP6Jnq"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>

            {/*  */}

            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/8SYapk5kdpc?si=PeIkNuvTMypWohSA"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/P63RIibOWjU?si=0kCTuruqOc3KPl43"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/BHM5_PeOdqM?si=vIaN9W_EcaBME1f_"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/nxsMo19OtaE?si=QtNArBjF1fs-lDL5"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            {/*  */}
            <Col xs={12} md={6} lg={6}>
              <iframe
                className="iframe__content"
                src="https://www.youtube.com/embed/nGve3j3gdA8?si=jMMjW9V_aWgmwqo5"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/Gh8Yp5yKqaM?si=Nk0QylY9E1NNMCuf"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/ZsSHiPO8DwQ?si=pRjGRmsGTAF9-fdX"
                title="YouTube video player"
                className="iframe__content"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/hfIG9k6gl-0?si=wEi6SyqMPvqyU0VQ"
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

export default EventPage;
