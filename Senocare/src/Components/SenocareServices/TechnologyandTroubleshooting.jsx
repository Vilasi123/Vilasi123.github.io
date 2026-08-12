import { LazyLoadImage } from "react-lazy-load-image-component";
import Banner from "../../assets/Image/SenoServices/safety&security.png";

import { Container, Row, Col, Button } from "react-bootstrap";
import ContentImg from "../../assets/Image/SenoServices/tech.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";
const TechnologyandTroubleshooting = () => {
  return (
    <>
      <SEO />

      <div>
        <Header />
        <div className="header__image">
          <LazyLoadImage src={Banner} className="img-fluid background__img" />
          <h2 className="img_heading">Technology & Troubleshooting</h2>
        </div>
        <Container className="services__content__senocare">
          <Row>
            <Col>
              <h1 className="service__heading__senocare">
                Reduce virtual distance with our technology assistance and
                personalized tutorials
              </h1>
              <p className="services__para__senocare">
                Technology can be daunting and overwhelming for seniors. If your
                parents are struggling to navigate video calling apps and social
                media, we’re here to help! Our CareManagers can handhold seniors
                and teach them to use common apps like Zoom or Facebook. They
                can also provide troubleshooting services on the phone or in
                person. By assisting our seniors with virtual calls, social
                media and common apps, we work to bridge the digital gap between
                them and their families.
              </p>
              <p className="services__para__senocare">
                Our specialized technology services for seniors also include
                personalized tutorials to help them get accustomed to the needs
                of the digital era. Whether they want to talk to their children
                and grandchildren overseas; or virtually video chat with old
                friends and colleagues, our team of skilled and helpful experts
                will patiently guide them through the process, and end all their
                woes related to technology.
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
                  <li> Virtual meeting assistance (Zoom/Google Hangouts)</li>

                  <li> Creating & using social media accounts</li>
                  <li>
                    Installation & usage of popular apps (Zomato/Uber/Netflix)
                  </li>
                  <li>Hardware repair & maintenance</li>

                  <li> Personalised tutorials for using common apps</li>
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

export default TechnologyandTroubleshooting;
