import { LazyLoadImage } from "react-lazy-load-image-component";
import Banner from "../../assets/Image/SenoServices/safety&security.png";

import { Container, Row, Col, Button } from "react-bootstrap";
import ContentImg from "../../assets/Image/SenoServices/travel-1.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const TravelandTour = () => {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <div className="header__image">
          <LazyLoadImage src={Banner} className="img-fluid background__img" />
          <h2 className="img_heading">Travel & Tours</h2>
        </div>
        <Container className="services__content__senocare">
          <Row>
            <Col>
              <h1 className="service__heading__senocare">
                Plan your parents’ travel and escorted holidays through us
              </h1>
              <p className="services__para__senocare">
                Taking care of your parents’ travel related logistics from
                overseas has never been this easy. With our travel and tours
                elder care services, not only can you book tickets and hotels,
                but you can also get travel insurance and visa assistance for
                your parents in India. Whether you want to arrange domestic and
                international hotel bookings, car rentals or surprise your
                parents with escorted tours, our team of dedicated and
                experienced CareManagers will be happy to take care of all
                travel needs. We can also help you with renewing your parents’
                passport or arranging travel exchange for them.
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
                  <li> Passport services</li>

                  <li>Visa assistance</li>
                  <li> Air ticket booking (domestic and international)</li>
                  <li> Hotel booking (domestic and international)</li>

                  <li>Train ticket booking</li>
                  <li> Foreign exchange services</li>
                  <li> Car rental</li>
                  <li> Driver on call</li>

                  <li>Dementia</li>
                  <li>Travel insurance</li>
                  <li> Escorted tours and holidays for seniors</li>
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
                href="safety-homecare/"
                className="services__button">
                SAFETY & HOME MAINTENANCE
              </Button>
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
              <Button
                size="md"
                variant="outline-primary"
                href="/memories-milestones/"
                className="services__button">
                MEMORIES & MILESTONES
              </Button>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col>
              <p className="services__para__senocare">
                All services are subject to our Terms and Conditions. For any
                enquiries, please contact us on{" "}
                <a href="mailto:info@senocare.in" className="hyper__link">
                  {" "}
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

export default TravelandTour;
