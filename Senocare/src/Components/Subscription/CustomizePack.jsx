import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import SEO from "../SEO";

const CustomizePack = () => {
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
    <div>
      <SEO />
      <Header />

      <div className="services__content__senocare">
        <Container>
          <Row>
            <Col>
              <h2 className="senocare__heading__third">
                Customize Your Care Plan
              </h2>
              <p className="agree__text">
                Please give us as much information as possible in the below
                form, for us to understand the needs of your parent(s) and offer
                you a Care Plan that best addresses their pain areas.
              </p>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <h4 className="senocare__heading__fourth">
                    Personal Information
                  </h4>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mt-3"
                    controlId="validationCustom01">
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

                <Row className="mt-4">
                  <h4 className="senocare__heading__fourth">
                    Parent(S) Information
                  </h4>
                  <Form.Group
                    as={Col}
                    md="6"
                    className="mt-4"
                    controlId="validationCustom01">
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

                  <Form.Group
                    as={Col}
                    md="6"
                    className="mt-4"
                    controlId="validationCustom01">
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

                  <Form className="subscription__input">
                    <p className="agree__text">
                      <b> 2A. Care Manager (CM):</b> Team of efficient and
                      compassionate CM & ACM are the best part of Senocare
                      services. You have the option to choose;
                    </p>
                    {["CM/ACM On Duty", "Dedicated CM/ACM"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                          type="radio"
                          name="Care__Manager"
                          value={type}
                          id={`default-${type}`}
                          label={type}
                        />
                      </div>
                    ))}
                    <p className="agree__text  para__agree">
                      CMs are company’s most experienced and compassionate staff
                      who builds a good rapport with the elders, such that
                      elders feel comfortable reaching out to them for their
                      various needs. The CM stays in touch with elders over a
                      phone to ensure they are keeping good and if required pay
                      periodic visit to their homes. They ensure every service
                      being provided is handled efficiently. Please tick the
                      option based on your preference/Parent(s) need.
                    </p>
                  </Form>
                  <Form className="subscription__input">
                    <p className="agree__text">
                      <b>Frequency Of Home Visit</b>
                    </p>
                    {[
                      "Once a month",
                      "Once a week",
                      "Once a fortnight",
                      "As and when required",
                    ].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                          type="radio"
                          name="Frequency_Of_Home_Visit"
                          value={type}
                          id={`default-${type}`}
                          label={type}
                        />
                      </div>
                    ))}
                  </Form>

                  <Form className="subscription__input">
                    <p className="agree__text">
                      <b>Duration Of Each Visit</b>
                    </p>
                    {[
                      "2 hours",
                      "4 hours",
                      "8 hours",
                      " As long as required",
                    ].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                          type="radio"
                          name="Duration Of Each Visit"
                          value={type}
                          id={`default-${type}`}
                          label={type}
                        />
                      </div>
                    ))}
                  </Form>

                  <Form className="subscription__input" md="12">
                    <p className="agree__text">
                      <b>3. Home Care Staff : </b>Do your parent(s) need nursing
                      or attendant care at home? Please let us know your
                      preference;
                    </p>
                    {["Nurse", "Attendant (Non-Medical)"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                          type="radio"
                          inline
                          name="Home Care Staff :"
                          value={type}
                          id={`inline-${type}`}
                          label={type}
                        />
                      </div>
                    ))}
                    <div className="border__content"></div>

                    {["Male", "Female"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                          type="radio"
                          inline
                          name="Home Care Staff Gender:"
                          value={type}
                          id={`inline-${type}`}
                          label={type}
                        />
                      </div>
                    ))}
                    <div className="border__content"></div>

                    {[" 08 Hours", "24 Hours"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                          type="radio"
                          inline
                          name="Home Care Staff Hours:"
                          value={type}
                          id={`inline-${type}`}
                          label={type}
                        />
                      </div>
                    ))}
                  </Form>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustom04"
                    className="subscription__input">
                    <p className="agree__text">
                      <b> 4. Services : </b>Senocare offers a range of services,
                      please choose from below options, the ones you think your
                      parent(s) would need.
                    </p>
                    <Form.Label className="input__label">
                      A. Health & Fitness
                    </Form.Label>
                    <Form.Select id="disabledSelect" md="12">
                      <option value="">Select Services</option>

                      <option value="Tele-consultation with doctors">
                        Tele-consultation with doctors
                      </option>
                      <option value="Home visits by doctors">
                        Home visits by doctors
                      </option>
                      <option value="Sample home collection for lab test">
                        Sample home collection for lab tests
                      </option>
                      <option value="Nurse &amp; medical attendant services">
                        Nurse &amp; medical attendant services
                      </option>
                      <option value="Hospitalisation assistance">
                        Hospitalisation assistance
                      </option>
                      <option value="Home delivery of medicines">
                        Home delivery of medicines
                      </option>
                      <option value="Rental of medical equipment">
                        Rental of medical equipment
                      </option>
                      <option value="Medical supplies (adult diapers etc)">
                        Medical supplies (adult diapers etc)
                      </option>
                      <option value="Physiotherapy">Physiotherapy</option>
                      <option value="Maintenance of medical records">
                        Maintenance of medical records
                      </option>
                      <option value="Emergency assistance for hospitalization">
                        Emergency assistance for hospitalization
                      </option>

                      <option value="Nurse_service">Nurse at home</option>
                    </Form.Select>
                    <Form.Group
                      controlId="validationCustom01"
                      className="mt-2"
                      md="12">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Details of selected service(s)"
                      />
                    </Form.Group>

                    <Form.Label className="input__label mt-4">
                      B. Home Security & Maintenance
                    </Form.Label>
                    <Form.Select id="disabledSelect" md="12">
                      <option>Select Services</option>
                      <option value="Plumber/electrician/carpenter services">
                        Plumber/electrician/carpenter services
                      </option>
                      <option value="Whitewashing of home premises">
                        Whitewashing of home premises
                      </option>
                      <option value="Deep cleaning of home premises">
                        Deep cleaning of home premises
                      </option>
                      <option value="Repair of electrical appliances">
                        Repair of electrical appliances
                      </option>
                      <option value="Pest control">Pest control</option>
                      <option value="Car repair and servicing">
                        Car repair and servicing
                      </option>
                      <option value="Managing annual maintenance contracts (AMCs)">
                        Managing annual maintenance contracts (AMCs)
                      </option>
                      <option value="Chabiwala/key maker">
                        Chabiwala/key maker
                      </option>
                      <option value="CCTV installation">
                        CCTV installation
                      </option>
                      <option value="Video doorbell and other security gadgets">
                        Video doorbell and other security gadgets
                      </option>
                      <option value="Police verification of domestic staff">
                        Police verification of domestic staff
                      </option>
                    </Form.Select>

                    <Form.Group
                      controlId="validationCustom01"
                      className="mt-2"
                      md="12">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Details of selected service(s)"
                      />
                    </Form.Group>
                    {/*  */}
                    <Form.Label className="input__label mt-4">
                      C. Travel & Tours
                    </Form.Label>
                    <Form.Select id="disabledSelect" md="12">
                      <option value="">Select Services</option>

                      <option value="Passport services">
                        Passport services
                      </option>
                      <option value="Visa assistance">Visa assistance</option>
                      <option value="Air ticket booking (domestic and international)">
                        Air ticket booking (domestic and international)
                      </option>
                      <option value="Hotel booking (domestic and international)">
                        Hotel booking (domestic and international)
                      </option>
                      <option value="Train ticket booking">
                        Train ticket booking
                      </option>
                      <option value="Foreign exchange services">
                        Foreign exchange services
                      </option>
                      <option value="Car rental">Car rental</option>
                      <option value="Driver on call">Driver on call</option>
                      <option value="Travel insurance">Travel insurance</option>
                      <option value="Escorted tours and holidays for seniors">
                        Escorted tours and holidays for seniors
                      </option>
                    </Form.Select>
                    <Form.Group controlId="validationCustom01" className="mt-2">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Details of selected service(s)"
                      />
                    </Form.Group>

                    {/*  */}

                    <Form.Label className="input__label mt-4">
                      D. Forms & Filing
                    </Form.Label>
                    <Form.Select id="disabledSelect" md="12">
                      <option value="">Select Services</option>

                      <option value="Filing of income tax return">
                        Filing of income tax return
                      </option>
                      <option value="Banking assistanc">
                        Banking assistance
                      </option>
                      <option value="Legal documentation assistance">
                        Legal documentation assistance
                      </option>
                      <option value="Aadhar card/voter ID assistance">
                        Aadhar card/voter ID assistance
                      </option>
                      <option value="Senior citizenship card">
                        Senior citizenship card
                      </option>
                    </Form.Select>
                    <Form.Group
                      controlId="validationCustom01"
                      md="12"
                      className="mt-2">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Details of selected service(s)"
                      />
                    </Form.Group>

                    {/*  */}
                    <Form.Label className="input__label mt-4">
                      E. Technology & Troubleshooting
                    </Form.Label>
                    <Form.Select id="disabledSelect" md="12">
                      <option value="">Select Services</option>
                      <option value="Virtual meeting assistance (Zoom/Google Hangouts)">
                        Virtual meeting assistance (Zoom/Google Hangouts)
                      </option>
                      <option value="Creating and using social media accounts">
                        Creating and using social media accounts
                      </option>
                      <option value="Installation and usage of popular apps (Zomato/Uber/Netflix)">
                        Installation and usage of popular apps
                        (Zomato/Uber/Netflix)
                      </option>
                      <option value="Hardware repair and maintenance">
                        Hardware repair and maintenance
                      </option>
                      <option value="Personalized tutorials for using common apps">
                        Personalized tutorials for using common apps
                      </option>
                    </Form.Select>
                    <Form.Group
                      md="12"
                      controlId="validationCustom01"
                      className="mt-2">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Details of selected service(s)"
                      />
                    </Form.Group>

                    {/*  */}

                    <Form.Label className="input__label mt-4">
                      F. Memories & Milestones
                    </Form.Label>
                    <Form.Select id="disabledSelect">
                      <option value="">Select Services</option>

                      <option value="Curating special events and occasions">
                        Curating special events and occasions
                      </option>
                      <option value="Personalized gifts and experiences">
                        Personalized gifts and experiences
                      </option>
                      <option value="Florist services">Florist services</option>
                      <option value="Home salon and spa services">
                        Home salon and spa services
                      </option>
                      <option value="Personalized family photo-shoots">
                        Personalized family photo-shoots
                      </option>
                      <option value="Festival décor and essentials">
                        Festival décor and essentials
                      </option>
                      <option value="Hawan and pooja services">
                        Hawan and pooja services
                      </option>
                      <option value="Runner services">Runner services</option>
                      <option value="Movie and theatre tickets">
                        Movie and theatre tickets
                      </option>
                    </Form.Select>
                    <Form.Group
                      controlId="validationCustom01"
                      md="12"
                      className="mt-2">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Details of selected service(s)"
                      />
                    </Form.Group>

                    <Form.Label className="input__label mt-4">
                      <b>
                        5. Please share details of any service that your
                        parent(s) need but are not listed above, or any special
                        request.
                      </b>
                    </Form.Label>

                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Please share details of service / special request here">
                      <Form.Control
                        as="textarea"
                        md="12"
                        placeholder="Leave a comment here"
                        style={{ height: "100px" }}
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form className="subscription__input" md="12">
                    <p className="agree__text">
                      <b>
                        {" "}
                        6. Please select the duration of the selected services.
                      </b>
                    </p>
                    {["3 Months", "6 Months", "Yearly"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                          type="radio"
                          name="Duration Of Services"
                          value={type}
                          id={`default-${type}`}
                          label={type}
                        />
                      </div>
                    ))}
                  </Form>
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

export default CustomizePack;
