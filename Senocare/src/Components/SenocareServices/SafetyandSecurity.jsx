import { LazyLoadImage } from "react-lazy-load-image-component";
import Banner from "../../assets/Image/SenoServices/safety&security.png";

import { Container, Row, Col, Button } from "react-bootstrap";
import MaintainanceImg from "../../assets/Image/SenoServices/safety.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";
const SafetyandSecurity = () => {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <div className="header__image">
          <LazyLoadImage src={Banner} className="img-fluid background__img" />
          <h2 className="img_heading">Home Security and Maintenance</h2>
        </div>
        <Container className="services__content__senocare">
          <Row>
            <Col>
              <h1 className="service__heading__senocare">
                Avail of our top quality home security and maintenance services
              </h1>
              <p className="services__para__senocare">
                With increasing age, tasks like cleaning the home, getting the
                car repaired, or replacing a faulty faucet or fused bulb can
                become challenging, causing unnecessary stress to elderly
                seniors who live alone. With our home security and maintenance
                services for the elderly, you can arrange for a plumber,
                electrician, or carpenter service, or even organize deep
                cleaning or whitewashing of your parents’ home. We can also
                provide CCTV and video doorbell installation to enhance their
                security. Our diligent CareManagers can supervise the work
                personally and ensure that all your parents’ home security and
                maintenance needs are serviced promptly and efficiently.
              </p>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col md={12} lg={6}>
              <LazyLoadImage
                src={MaintainanceImg}
                className="img-fluid senocare__service__img"
              />
            </Col>
            <Col md={12} lg={6}>
              <div>
                <ul>
                  <li> Plumber/ electrician / carpenter services</li>
                  <li>Whitewashing of home premises</li>
                  <li>Deep cleaning of home premises</li>
                  <li>Repair of electrical appliances</li>
                  <li>Chabiwala / key maker</li>
                  <li> Pest control</li>
                  <li>Car repair & servicing</li>
                  <li>Managing annual maintenance contracts (AMCs)</li>
                  <li>Police verification of domestic staff</li>
                  <li>Video doorbell and other security gadgets</li>
                  <li>CCTV installation</li>
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
                <a href="mailto:info@senocare.in" className="hyper__link">
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

export default SafetyandSecurity;
