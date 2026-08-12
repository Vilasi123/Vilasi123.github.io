import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState, useEffect } from "react";
import SEO from "../SEO";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const SubscribeForm = () => {
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

      <div>
        <Header />
        <div className="services__content__senocare">
          <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <h2 className="senocare__heading__third">REGISTRATION FORM</h2>
              <p className="agree__text">
                PLEASE SELECT YOUR PREFERRED PACKAGE AND DURATION
              </p>

              <Row>
                <Form.Group as={Col} md="6" className="mt-5">
                  <Form.Label className="input__label">
                    Select Package*
                  </Form.Label>
                  <Form.Select id="disabledSelect" name="Services">
                    <option value="">Select Services</option>
                    <option value="SenOcare ASSISTS">SenOcare ASSISTS</option>
                    <option value="SenOcare COMFORTS">SenOcare COMFORTS</option>
                    <option value="">SenOcare INDULGE</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="6" className="mt-5">
                  <Form.Label className="input__label">
                    Package Duration *
                  </Form.Label>
                  <Form.Select id="disabledSelect" name="Select_Months">
                    <option value="">Select Durations</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="12 Months">12 Months</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">Full Name</Form.Label>
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
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">
                    Mobile Number
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Mobile Number"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide phone no.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustomUsername">
                  <Form.Label className="input__label">Email Id</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
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
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">State</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your State"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide state.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">City</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your city"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide city.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">
                    Country of Residency *
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your country"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide country.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" className="mt-5">
                  <Form.Label className="input__label">
                    PREFERRED MODE OF COMMUNICATION*
                  </Form.Label>
                  <Form.Select id="disabledSelect" name="Select_Months">
                    <option value="">
                      Select preffered mode of communication
                    </option>
                    <option value="WHATS_APP">WHATS APP</option>
                    <option value="SMS">SMS</option>
                    <option value="EMAIL">EMAIL</option>
                    <option value="PHONE">PHONE</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              {/*  */}
              <Row className="senocare__row__content">
                <h2 className="senocare__heading__third">Member 1 Detail</h2>
                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">
                    Contact Number*
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your Phone No"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide phone no.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">Age</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your  Age"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide age.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">
                    Home Address*
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your  Address"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide address.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">State*</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your  State"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide state.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">City*</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your  City"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide city.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">Pincode*</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your  Pincode"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide pincode.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              {/*  */}

              <Row className="senocare__row__content">
                <h2 className="senocare__heading__third">
                  Member 2 Detail(Optional)
                </h2>
                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">
                    Contact Number*
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your Phone No"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide phone no.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">Age</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your  Age"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide age.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">
                    Home Address*
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your  Address"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide address.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">State*</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your  State"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide state.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">City*</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your  City"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide city.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  className="mt-5"
                  controlId="validationCustom01">
                  <Form.Label className="input__label">Pincode*</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your  Pincode"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide pincode.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button type="submit" className="form__submit__button mt-5">
                Submit form
              </Button>
            </Form>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SubscribeForm;
