import { LazyLoadImage } from "react-lazy-load-image-component";
import Banner from "../../assets/Image/SenoServices/safety&security.png";

import { Container, Row, Col, Button } from "react-bootstrap";
import ContentImg from "../../assets/Image/SenoServices/forms.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const FormandFilling = () => {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <div className="header__image">
          <LazyLoadImage src={Banner} className="img-fluid background__img" />
          <h2 className="img_heading">Forms & Filing</h2>
        </div>
        <Container className="services__content__senocare">
          <Row>
            <Col>
              <h1 className="service__heading__senocare">
                Use our experts to help you with tedious paperwork and legal or
                banking assistance{" "}
              </h1>
              <p className="services__para__senocare">
                Tedious paperwork, including filing of Income Tax returns, are
                time consuming tasks and can be overwhelming for seniors. Not
                just in terms of putting together all the necessary documents,
                but also getting the right legal and expert assistance.
              </p>
              <p className="services__para__senocare">
                You can now get your parents’ returns filed and all their
                paperwork issues resolved even whilst being miles away from
                them. Our Forms and Filing services include tax filing support
                services for seniors as well as banking assistance, legal
                document management, and assistance with Aadhar card, voter ID
                and Senior Citizens card. With just one phone call, you can get
                our dedicated team of legal experts to help overcome all your
                parents’ tax and legal documentation issues.
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
                  <li> Filing of income tax return</li>

                  <li> Banking assistance</li>
                  <li>Legal documentation assistance</li>
                  <li>Aadhar card / voter ID assistance</li>

                  <li> Senior Citizenship card</li>
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
                <a href="info@senocare.in" className="hyper__link">
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

export default FormandFilling;
