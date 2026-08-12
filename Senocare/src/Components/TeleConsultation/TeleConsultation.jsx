import { Container, Row, Col } from "react-bootstrap";
import Tele1 from "../../assets/Image/ServiceImg/tele.webp";
import Tele2 from "../../assets/Image/ServiceImg/tele1.webp";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../PallitveCare/Services.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const TeleConsultation = () => {
  return (
    <>
      <SEO />
      <div>
        <Header />

        <div className="services__content__senocare">
          <Container>
            <Row>
              <Col>
                <h1 className="service__heading__senocare">
                  Tele consultation for Senior Citizens
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Tele1}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col xs={12} md={12} lg={6} className="senocare__text__content">
                <h3 className="senocare__heading__third">
                  Video and Audio Consultation
                </h3>
                <p className="services__para__senocare">
                  Senocare’s tele consultation service is an easy way to consult
                  geriatricians while sitting in the comfort of your home. No
                  more scheduling appointments or missing appointments.
                </p>
                <div className="shakti__content">
                  <div className="img__content__shakti">
                    <LazyLoadImage
                      src={Shakti}
                      className="img-fluid shakti__img"
                    />
                  </div>
                  <div className="medically__content">
                    <h5 className="medically__reviewed">
                      Content is medically reviewed by:
                    </h5>
                    <p className="drsakti">
                      <a
                        href="https://www.linkedin.com/in/dr-shakti-singh-6ba74819a/"
                        target="blank"
                        className="drsk">
                        Dr. Shakti Singh
                      </a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Benefits of tele consultation
                </h2>
                <h3 className="senocare__heading__third">Top doctors</h3>
                <p className="services__para__senocare">
                  Senocare teleconsultation services allow patients to interact
                  with doctors.Based on their request,video or audio based
                  tele-consults will be planned. The prescription is sent to
                  your email and Whatsapp. In case, there’s a need for physical
                  examination, the doctor will refer to someone.
                </p>
                <h3 className="senocare__heading__third">Available 24/7</h3>
                <p className="services__para__senocare">
                  Senocare tele consulting doctors are available 24/7. So, you
                  can consult doctors as and when you need it.
                </p>
                <h3 className="senocare__heading__third">No commute</h3>
                <p className="services__para__senocare">
                  Avoid commuting to clinics and save your seniors from
                  inconvenience.
                </p>
                <h3 className="senocare__heading__third">Affordable</h3>
                <p className="services__para__senocare">
                  Get premium consultation at an affordable price.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Tele2}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h3 className="senocare__heading__third">
                  How Teleconsultation Works
                </h3>
                <p className="services__para__senocare">
                  ☛ Calls us on 8800 700 100<br></br>☛ We will book a slot
                  convenient for you.<br></br>☛ Call us on the scheduled time
                  and get the consultation
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Treatments covered for Live Tele consultations
                </h2>
                <p className="services__para__senocare">
                  We cover all ailments for treatment, as well as take emergency
                  cases. Our treatments include
                </p>
                <p className="services__para__senocare">
                  ☛{" "}
                  <a
                    href="https://blog.senocare.in/physiotherapy-at-home-gurgaon-clf6zjm981105001knyrb41azjx/"
                    target="blank"
                    className="hyper__link">
                    Arthritis
                  </a>{" "}
                  <br></br>☛ Diabetes<br></br>☛ Hypertension<br></br>☛{" "}
                  <a
                    href="https://blog.senocare.in/complications-of-alzheimers-disease-clg26euvg1415311jnqr245haqd/"
                    target="blank"
                    className="hyper__link">
                    Alzheimer’s Disease
                  </a>{" "}
                  (and other{" "}
                  <a href="/dementia/" className="hyper__link">
                    {" "}
                    dementia
                  </a>
                  )<br></br>☛ Depression
                  <br></br>
                  ☛Chronic Pulmonary Disease (COPD)<br></br>☛ Chronic Kidney
                  Disease (CKD)
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Why Choose Senocare for Tele consultation
                </h2>
                <p className="services__para__senocare">
                  Our tele consulting doctors are available 24/7. So, you will
                  always find a doctor to consult for your symptoms. Along with
                  consultation, we offer eldercare services, which makes us a
                  one stop for all things senior care. You can{" "}
                  <a href="/" className="hyper__link">
                    {" "}
                    rent{" "}
                  </a>{" "}
                  <a href="/" className="hyper__link">
                    medical equipments{" "}
                  </a>{" "}
                  from us too. From consultation to care services for elders, we
                  offer you everything your need.
                </p>{" "}
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TeleConsultation;
