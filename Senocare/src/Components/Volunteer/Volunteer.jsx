import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import VolunteerImg from "../../assets/Image/Voluntree.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Volunteer.css";
import SEO from "../SEO";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Volunteer = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <SEO />

      <div id="volunteer">
        <Header />
        <div className="header__image">
          <LazyLoadImage
            src={VolunteerImg}
            className="img-fluid background__img"
          />
          <h2 className="img_heading">Volunteer With Us</h2>
        </div>
        <Container>
          <Row>
            <Col className="form__sections">
              <div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      xs="12"
                      md="6"
                      className="mt-4"
                      controlId="validationCustom01">
                      <Form.Label className="input__label">
                        Full Name
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      xs="12"
                      md="6"
                      className="mt-4"
                      controlId="validationCustom02">
                      <Form.Label className="input__label">Age</Form.Label>
                      <Form.Control
                        required
                        type="Number"
                        placeholder="Age"
                        //   defaultValue="21"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      xs="12"
                      md="6"
                      className="mt-4"
                      controlId="validationCustomUsername">
                      <Form.Label className="input__label">Email</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          @
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Email"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide email.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      xs="12"
                      md="6"
                      className="mt-4"
                      controlId="validationCustom02">
                      <Form.Label className="input__label">
                        Contact No
                      </Form.Label>
                      <Form.Control
                        required
                        type="Number"
                        placeholder="Contact No"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="6"
                      xs="12"
                      className="mt-4"
                      controlId="validationCustom03">
                      <Form.Label className="input__label">Location</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Location"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="6"
                      xs="12"
                      className="mt-4"
                      controlId="validationCustom03">
                      <Form.Label className="input__label">
                        QUALIFICATIONS*
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Qualification"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide Heigher Qualification.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="6"
                      xs="12"
                      className="mt-4"
                      controlId="validationCustom03">
                      <Form.Label className="input__label">
                        PREVIOUS WORK EXPERIENCE (If any) *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Work Experience"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Your Work experience
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="6"
                      xs="12"
                      className="mt-4"
                      controlId="validationCustom03">
                      <Form.Label className="input__label">
                        AREA OF INTEREST (If any)
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Area of Interest"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Interest Area
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      className="mt-5"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <Button type="submit">Contact Us</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Volunteer;
