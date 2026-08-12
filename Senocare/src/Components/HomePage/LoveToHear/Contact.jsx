import { Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ContactImg from "../../../assets/Image/con-img.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Contact.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Spinner from "react-bootstrap/Spinner";
import * as yup from "yup";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const MySwal = withReactContent(Swal);

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Enter Valid name")
      .required("Enter Name")
      .min(3, "Enter Valid name")
      .max(20, "Character length must not exceed 15"),
    lastName: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Enter Valid name")
      .required("Enter your first name")
      .min(3, "Enter Valid name")
      .max(20, "Character length must not exceed 15"),
    email: yup
      .string()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Enter Valid Email id")
      .required(),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      state: "",
      zip: "",
      term: false,
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);

      emailjs
        .sendForm(
          "service_yggxgio",
          "template_m4rz3mg",
          formRef.current,
          "kcI-OxebYAAAwLD8r",
        )
        .then(() => {
          MySwal.fire({
            icon: "success",
            title: "Form Submitted Successfully",
            timer: 1500,
            showConfirmButton: false,
          });
        })
        .catch((err) => {
          MySwal.fire({
            icon: "error",
            title: "Failed to Submit",
            timer: 1500,
            showConfirmButton: false,
          });
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
          resetForm();
        });
    },
  });

  return (
    <Container className="contact__info">
      <Row className="row__contact">
        <Col xs={12} sm={12} lg={6} className="text-center">
          <LazyLoadImage src={ContactImg} className="img-fluid" />
        </Col>

        <Col className="form__section" xs={12} sm={12} lg={6}>
          <div>
            <h3 className="contact__heading">
              WE'D LOVE TO HEAR FROM YOU Drop Us a Line
            </h3>

            <Form
              name="contact"
              onSubmit={formik.handleSubmit}
              noValidate
              ref={formRef}
            >
              {/* Hidden field */}
              <input type="hidden" name="form_type" value="Contact Form" />

              <Row className="mb-3">
                {/* First Name */}
                <Form.Group as={Col} md="4">
                  <Form.Label className="input__label">First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    value={formik.values.firstName}
                    onChange={(e) =>
                      formik.setFieldValue("firstName", e.target.value)
                    }
                    placeholder="First name"
                    isInvalid={!!formik.errors.firstName}
                    isValid={
                      formik.touched.firstName && !formik.errors.firstName
                    }
                  />
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Last Name */}
                <Form.Group as={Col} md="4">
                  <Form.Label className="input__label">Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    value={formik.values.lastName}
                    onChange={(e) =>
                      formik.setFieldValue("lastName", e.target.value)
                    }
                    placeholder="Last name"
                    isInvalid={!!formik.errors.lastName}
                    isValid={formik.touched.lastName && !formik.errors.lastName}
                  />
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Email */}
                <Form.Group as={Col} md="4">
                  <Form.Label className="input__label">Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="user_email"
                      value={formik.values.email}
                      onChange={(e) =>
                        formik.setFieldValue("email", e.target.value)
                      }
                      placeholder="Email"
                      isInvalid={!!formik.errors.email}
                      isValid={formik.touched.email && !formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                {/* City */}
                <Form.Group as={Col} md="4">
                  <Form.Label className="input__label">City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                  />
                </Form.Group>

                {/* State */}
                <Form.Group as={Col} md="4">
                  <Form.Label className="input__label">State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    name="state"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                  />
                </Form.Group>

                {/* Zip */}
                <Form.Group as={Col} md="4">
                  <Form.Label className="input__label">Zip</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip"
                    name="zip"
                    value={formik.values.zip}
                    onChange={formik.handleChange}
                  />
                </Form.Group>
              </Row>

              {/* Terms */}
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  name="term"
                  onChange={formik.handleChange}
                  isInvalid={!!formik.errors.term}
                  label="Agree to terms and conditions"
                />
              </Form.Group>

              <Button type="submit" disabled={loading}>
                {loading && (
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                {loading ? "Submitting..." : "Contact Us"}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
