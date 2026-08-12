import { Container, Row, Col } from "react-bootstrap";
import "./SenocareServices.css";
import { Link } from "react-router-dom";

const SenocareServices = () => {
  return (
    <div className="seno__services">
      <Container>
        <Row>
          <Col>
            <h3 className="client__testimonial text-center fs-2 text-md text-lg text-sm fw-bold mb-4">
              Elder care services for Seniors in Gurgaon, Noida, Delhi
            </h3>
            <p className="para">
              Now take care of your elderly like you always wanted to! Most of
              us are guilty of not giving enough time to our parents. Well, not
              anymore. You can take better care of your senior citizens like
              never before with Senocare senior services – no matter where
              you’re. Nursing care services to homecare services, and more. Our
              services are designed to give seniors the best care for them.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="/holistic-care-gurgaon/">
              <h4>Eldercare services in Gurgaon</h4>
            </a>

            <p className="para">
              Senocare senior services are available in Gurgaon. You can opt for
              several services – homecare, nursing care, physiotherapy, and more
              and take better of your elderlies in Gurgaon while you’re away
              from home or at home. Our nurses are medically trained and
              well-experienced and ensure round-the-clock hygiene and vital
              check. Our homecare team ensures that your home is spick and span.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="/holistic-care-noida/">
              <h4>Eldercare services in Noida</h4>
            </a>
            <p className="para">
              Our senior care services are available in Noida too. We cover
              nearly all sectors, and our attendants are available
              round-the-clock to look after your loved ones. Whether it’s taking
              elderlies for a stroll or filing their ITR, or ensuring your
              elderly take medicine on time, you can count on us to do it best!
              If you’re looking for best elderly care services in Noida – our
              services are at your disposal!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="/holistic-care-delhi/">
              <h4> Eldercare services in Delhi</h4>
            </a>
            <p className="para">
              Our eldercare services are available in GK, Rohini, South
              Extension, Malviya Nagar, Saket, and many more places in Delhi.
              You can avail home care, patient care, etc. services on a
              subscription as well as ad hoc basis. Talk to us and together we
              will take the best care of your seniors. We’re just a call away!
            </p>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <a href="/holistic-care-hyderabad/">
              <h4>Eldercare services in Hyderabad</h4>
            </a>
            <p className="para">
              Avail elder care services in Hyderabad from Senocare. Be it ITR
              filling, Aadhar updation, pay utility bills, buying grocery or
              simply emptying bowels, our trained attendants will help seniors
              do their best, so you don’t have to worry. Call us on – 8800 700
              100 – and we’ll do the rest.
            </p>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default SenocareServices;
