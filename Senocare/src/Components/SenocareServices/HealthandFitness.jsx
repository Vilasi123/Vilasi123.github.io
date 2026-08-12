import { LazyLoadImage } from "react-lazy-load-image-component";
import Banner from "../../assets/Image/SenoServices/safety&security.png";

import { Container, Row, Col, Button } from "react-bootstrap";
import ContentImg from "../../assets/Image/SenoServices/Health-and-fitness.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const HealthandFitness = () => {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <div className="header__image">
          <LazyLoadImage src={Banner} className="img-fluid background__img" />
          <h2 className="img_heading">Health & Fitness</h2>
        </div>
        <Container className="services__content__senocare">
          <Row>
            <Col>
              <h1 className="service__heading__senocare">
                Give your parents access to the very best medical care,
                including home medical support{" "}
              </h1>
              <p className="services__para__senocare">
                Don’t give your parents a reason to postpone a medical
                appointment or a health check up just because it’s a challenge
                getting to the hospital or clinic. senOcare offers the very best
                medical support services for the elderly at their doorstep. We
                can arrange tele-consultations with qualified and experienced
                doctors, providing timely medical assistance at their home.
                What’s more – we can also ensure that you’re on the same call
                with your parents and the doctor or specialist, to help you make
                informed decisions relating to their wellbeing. We provide post
                surgical support services including nurses and medical
                attendants, and we also offer emergency assistance for
                hospitalization, home delivery of medicines and sample home
                collection for lab tests. Reach out to us for any kind of
                medical assistance or support for your parents.
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
                  <li>
                    <a href="/tele-consultation/" className="hyper__link">
                      {" "}
                      Tele-consultation with doctors
                    </a>
                  </li>
                  <li>
                    <a href="/doctor-on-home-visit/" className="hyper__link">
                      Home visits by doctors
                    </a>
                  </li>
                  <li> Sample home collection for lab tests</li>
                  <li>
                    <a href="/nursing-care/" className="hyper__link">
                      {" "}
                      Nurse & medical attendant services
                    </a>
                  </li>

                  <li>Hospitalisation assistance</li>
                  <li>Home delivery of medicines</li>
                  <li>
                    <a href="/featured-products/" className="hyper__link">
                      Rental of medical equipment
                    </a>
                  </li>
                  <li>
                    <a
                      href="/physiotherapy-home-service/"
                      className="hyper__link">
                      Physiotherapy{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/dementia/" className="hyper__link">
                      Dementia{" "}
                    </a>
                  </li>
                  <li>Maintenance of medical records</li>
                  <li> Emergency assistance for hospitalization</li>
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
                href="/safety-homecare/"
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
                <a
                  href="mailto:info@senocare.in"
                  target="blank"
                  className="hyper__link">
                  info@senocare.in
                </a>{" "}
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default HealthandFitness;
