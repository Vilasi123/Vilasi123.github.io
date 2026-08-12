import { LazyLoadImage } from "react-lazy-load-image-component";
import Banner from "../../assets/Image/SenoServices/safety&security.png";

import { Container, Row, Col, Button } from "react-bootstrap";
import ContentImg from "../../assets/Image/SenoServices/forms.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";
const MemoriesandMilestones = () => {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <div className="header__image">
          <LazyLoadImage src={Banner} className="img-fluid background__img" />
          <h2 className="img_heading">Memories & Milestones</h2>
        </div>
        <Container className="services__content__senocare">
          <Row>
            <Col>
              <h1 className="service__heading__senocare">
                Allow us to help you celebrate every special occasion and
                milestone in style
              </h1>
              <p className="services__para__senocare">
                Whether it’s a birthday, an anniversary, a festival, or a simple
                hawan or pooja, let each event bring them joy but leave the
                organization and responsibility to us. We’ll take care of
                everything, including the decoration, the gifts, and the food
                and all we’ll leave for them is beautiful memories to cherish.
                Even if it isn’t a special occasion, allow us to help you turn
                an ordinary day into a special one by treating your parents to a
                surprise – a manicure or pedicure, a massage or facial, or even
                just a haircut, all at their doorstep!
              </p>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col md={12} lg={6}>
              <LazyLoadImage
                src={ContentImg}
                className="img-fluid senocare__service__img"
              />
            </Col>
            <Col md={12} lg={6}>
              <div>
                <ul>
                  <li> Curating special events & occasions</li>
                  <li>Personalised gifts & experiences</li>
                  <li>Florist services</li>
                  <li>Home salon & spa services</li>
                  <li>Personalised family photo-shoots</li>
                  <li>Festival décor and essentials</li>
                  <li>Hawan and pooja services</li>
                  <li>Runner services</li>
                  <li>Movie & theatre tickets</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col xs={12}>
              <h2 className="senocare___heading__sencond">
                Other Care Services
              </h2>
            </Col>
            <Col className="d-flex gap-4">
              <Button
                size="md"
                variant="outline-primary"
                href="/health-fitness/"
                className="services__button">
                Health & Fitness
              </Button>
              <Button
                size="md"
                variant="outline-primary"
                href="safety-homecare/"
                className="services__button">
                SAFETY & HOME MAINTENANCE
              </Button>
              <Button
                size="md"
                href="/travel-tours/"
                variant="outline-primary"
                className="services__button">
                TRAVEL & TOURS
              </Button>
              <Button
                size="md"
                variant="outline-primary"
                href="/form-filing/"
                className="services__button">
                FORMS & FILING
              </Button>
              <Button
                size="md"
                variant="outline-primary"
                href="/technology-troubleshooting/"
                className="services__button">
                TECHNOLOGY & TROUBLESHOOTING
              </Button>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col>
              <p className="services__para__senocare">
                All services are subject to our Terms and Conditions. For any
                enquiries, please contact us on{" "}
                <a href="mailto:info@senocare.in" className="hyper__link">
                  info@senocare.in
                </a>
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default MemoriesandMilestones;
