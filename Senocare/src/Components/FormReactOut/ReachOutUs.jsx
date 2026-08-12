import { Container, Row, Col } from "react-bootstrap";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./ReachOutUS.css";

const MySwal = withReactContent(Swal);

const ReachOutUs = () => {
  const [validated, setValidated] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [validationError, setValidationError] = useState(false);

  const formRef = useRef();

  const handleServiceChange = (event) => {
    const value = event.target.value;
    setSelectedService(value);
    setValidationError(value === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // validation
    if (form.checkValidity() === false || selectedService === "") {
      event.stopPropagation();
      setValidationError(true);
      setValidated(true);
      return;
    }

    // EmailJS integration
    emailjs
      .sendForm(
        "service_yggxgio",
        "template_zen6q39",
        formRef.current,
        "kcI-OxebYAAAwLD8r",
      )
      .then(
        () => {
          MySwal.fire({
            icon: "success",
            title: "Submitted Successfully!",
            text: "We will contact you soon.",
          });

          // reset form
          form.reset();
          setSelectedService("");
          setValidated(false);
        },
        (error) => {
          MySwal.fire({
            icon: "error",
            title: "Submission Failed",
            text: "Something went wrong. Please try again!",
          });
          console.error(error);
        },
      );
  };

  return (
    <div className="form__content">
      <Container>
        <h3 className="form__heading">Sense emergency & alert all concerned</h3>

        <Row className="form__section">
          {/* FORM */}
          <Col>
            <Form
              ref={formRef}
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Row className="mb-3">
                {/* Name */}
                <Form.Group as={Col} md="6">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                  />
                </Form.Group>

                {/* Mobile */}
                <Form.Group as={Col} md="6">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    name="user_phone"
                    placeholder="Enter phone number"
                  />
                </Form.Group>

                {/* Email */}
                <Form.Group as={Col} md="6">
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control
                      type="email"
                      name="user_email"
                      placeholder="Enter email"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                {/* Service Dropdown */}
                <Form.Group as={Col} md="6">
                  <Form.Label>Service Required</Form.Label>
                  <Form.Select
                    name="service"
                    value={selectedService}
                    onChange={handleServiceChange}
                    isInvalid={validationError}
                    required
                  >
                    <option value="">Select Services</option>
                    <option>Attendants & Nurses</option>
                    <option>Home Security & Maintenance</option>
                    <option>Health & Fitness</option>
                    <option>Travel & Tour</option>
                    <option>Form & Filing</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Please choose a service
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              {/* Terms */}
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>

              <Button type="submit">Contact Us</Button>
            </Form>
          </Col>

          {/* ADDRESS */}
          <Col className="address__para">
            <p>
              Senocare Services Pvt. Ltd. <br />
              802, 08th Floor, JMD Regent Square <br />
              MG Road, Gurgaon Haryana 122002
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReachOutUs;
