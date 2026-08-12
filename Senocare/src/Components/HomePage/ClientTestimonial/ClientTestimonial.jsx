import { Container, Row, Col } from "react-bootstrap";
import "./ClientTestimonial.css";
import ReactTesti from "./ReactTesti";

const ClientTestimonial = () => {
  return (
    <Container className="py-5">
      <Row className="pb-4">
        <Col>
          <h3 className="client__testimonial text-center fs-2 text-md text-lg text-sm fw-bold">
            Client Testimonial
          </h3>
        </Col>
      </Row>
      <Row>
        <center>
          <ReactTesti />
        </center>
      </Row>
    </Container>
  );
};

export default ClientTestimonial;
