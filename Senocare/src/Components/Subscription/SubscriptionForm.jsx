import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const SubscriptionForm = () => {
  // useEffect(() => {
  //   let subscriptionType = JSON.parse(localStorage.getItem("Subscription"));
  // }, []);

  const [validated, setValidated] = useState(false);

  const subscriptionText = localStorage.getItem("Subscription");
  console.log(subscriptionText, "Subscription__form");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <div>
      <SEO />
      <Header />

      <div className="services__content__senocare">
        <Container>
          <Row>
            <Col>
              <h2 className="senocare__heading__third">{subscriptionText}</h2>
              <p className="agree__text">
                Please give us as much information as possible for us to
                understand your care needs and the time our team members will
                need to spend with your parents.
              </p>
              <h4 className="senocare__heading__fourth">
                Personal Information
              </h4>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label className="input__label">Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Your Name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide Name.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
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
                        placeholder="Please enter your email id"
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
                    md="6"
                    controlId="validationCustom01"
                    className="mt-4">
                    <Form.Label className="input__label">Contact No</Form.Label>
                    <Form.Control
                      required
                      type="Number"
                      placeholder="Please enter your contact no"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide contact No.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom01"
                    className="mt-4">
                    <Form.Label>Country</Form.Label>
                    <Form.Control required type="text" placeholder="Country" />
                    <Form.Control.Feedback type="invalid">
                      Please provide country.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom03"
                    className="mt-4">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <h4 className="senocare__heading__fourth mt-5">
                  Parent(S) Information
                </h4>
                <Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label className="input__label">
                      Father Name
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Your Father Name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide Name.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label className="input__label">
                      Mother Name
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Your Mother Name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide Name.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mt-4"
                    as={Col}
                    md="6"
                    controlId="validationCustom01">
                    <Form.Label className="input__label">Contact No</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Father's contact no"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide No.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="mt-4"
                    as={Col}
                    md="6"
                    controlId="validationCustom01">
                    <Form.Label className="input__label">Contact No</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Mother's contact no"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide No.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mt-4"
                    as={Col}
                    md="6"
                    controlId="validationCustom01">
                    <Form.Label className="input__label">Age</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Father's Age"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide Age.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mt-4"
                    as={Col}
                    md="6"
                    controlId="validationCustom01">
                    <Form.Label className="input__label">Age</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Mother's Age"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide Age.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mt-4"
                    as={Col}
                    md="6"
                    controlId="validationCustom01">
                    <Form.Label className="input__label">State</Form.Label>
                    <Form.Control required type="text" placeholder="State" />
                    <Form.Control.Feedback type="invalid">
                      Please provide state.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mt-4"
                    as={Col}
                    md="6"
                    controlId="validationCustom01">
                    <Form.Label className="input__label">State</Form.Label>
                    <Form.Control required type="text" placeholder="City" />
                    <Form.Control.Feedback type="invalid">
                      Please provide city.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    className="mt-4"
                    as={Col}
                    md="6"
                    controlId="validationCustom01">
                    <Form.Label className="input__label">Pin</Form.Label>
                    <Form.Control required type="text" placeholder="Pin Code" />
                    <Form.Control.Feedback type="invalid">
                      Please provide pin code.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <div className="agree__content">
                  <p className="agree__text">
                    I, hereby authorise Senocare Services Pvt. Ltd. To contact
                    me. It will override my registry on the NCPR.
                  </p>
                  <p className="agree__text">
                    {" "}
                    By providing your contact details you have expressly
                    authorised Senocare Services to contact you in future
                    through calls/SMS/E-mails to share latest information.
                  </p>{" "}
                  <p className="agree__text">
                    <b>Terms and Conditions</b>
                  </p>
                  <p className="agree__text">
                    I hereby authorise and give consent to Senocare Services
                    Pvt. Ltd. to send me, either through itself or through any
                    third party service provider, from time to time various
                    information/alerts/SMS/ other messages or calls or
                    commercial communication, and other services on the
                    aforesaid listed telephone numbers, whether these numbers
                    are registered with National Do Not Call Registry/ listed in
                    National Customer Preference Register or not. I also confirm
                    that by sending any of such messages/calls, I will not hold
                    Senocare Services/ its third party service provider liable /
                    institute complaint under the Telecom Commercial
                    Communications Customer Preference (TRAI) Regulations, 2010
                    or such other applicable regulations including any amendment
                    thereof, as may be applicable from time to time. It will be
                    auto renewed every month and if you want to stop this
                    service please write an email to info@senocare.in before the
                    due date and call our support number{" "}
                    <a href="tel+91-8800700100." className="hyper__link">
                      +91-8800700100.
                    </a>
                  </p>
                </div>
                <Form.Group className="mb-3 mt-4">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button type="submit" className="form__submit__button">
                  Submit form
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default SubscriptionForm;
