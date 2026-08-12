import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CarePackageImg from "../../../assets/Image/CarePackage1.jpeg";
import CarePackageImg2 from "../../../assets/Image/CarePackage2.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import "./CarePackage.css";

function CarePackage() {
  return (
    <Container className="card__content">
      <Row>
        <Col className="mb-5">
          <h3 className="client__testimonial text-center fs-2 text-md text-lg text-sm fw-bold">
            Our Care Packages
          </h3>
          <p className="text-center  inner__para text-md text-lg text-sm">
            In Delhi NCR
          </p>
        </Col>
      </Row>
      <Row className="package__card px-5">
        <Col xs={12} md={6} style={{ maxWidth: "30rem" }}>
          <Card className="inini">
            <Card.Img src={CarePackageImg} className="img-fluid card_img" />
            <Card.Body>
              <Card.Title className="card__title">
                <h4>Touch of Love</h4>
              </Card.Title>
              <Card.Text className="card__text">
                <p className="truncated-para">
                  In Delhi NCR, specialised care for your parents is now
                  available. They will stay in touch with you through “Touch of
                  love”.
                </p>
              </Card.Text>
              <Button size="sm" className="button" href="/package">
                More Info
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} style={{ maxWidth: "30rem" }}>
          <Card className="inini">
            <Card.Img src={CarePackageImg2} className="img-fluid card_img" />
            <Card.Body>
              <Card.Title className="card__title">
                <h4>Customised Care Package</h4>
              </Card.Title>
              <Card.Text className="card__text">
                <p className="truncated-para">
                  We are aware that no two elders experience the identical pain
                  points, and we would be delighted to help them in addressing
                  elder's daily difficulties that go beyond our sufbscription
                  service. You can choose from more than 65 services that
                  Senocare offers.
                </p>
              </Card.Text>
              <Button size="sm" className="button" href="/care-packages/">
                More Info
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CarePackage;
