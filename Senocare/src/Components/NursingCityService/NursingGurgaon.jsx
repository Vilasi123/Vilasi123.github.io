import Footer from "../Footer/Footer";
import "../PallitveCare/Services.css";
import Header from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BannerImg from "../../assets/Image/Nursing/landing-banner-img.jpg";
import ContentImg from "../../assets/Image/Nursing/home-care-service-img1.jpg";
import elderCare from "../../assets/Image/Nursing/elder-services.png";
import CareImg from "../../assets/Image/Nursing/best-homecare-service-img.jpg";
import CareImgSec from "../../assets/Image/Nursing/home-care-service-img1.jpg";
import CareImgThird from "../../assets/Image/Nursing/home-care-service-img3.jpg";
import CareImgFourth from "../../assets/Image/Nursing/home-care-service-img4.jpg";
import MultilevelCarousel from "../HomePage/ClientTestimonial/ReactTesti";
import Media from "../HomePage/Media/Media";
import Accordion from "react-bootstrap/Accordion";
import Contact from "../HomePage/LoveToHear/Contact";
import ReachOutUs from "../FormReactOut/ReachOutUS";
import SEO from "../SEO";

const NursingGurgaon = () => {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <div className="header__image">
          <LazyLoadImage
            src={BannerImg}
            className="img-fluid background__img"
          />
          <h2 className="img_heading">Home Nursing Services in Gurgaon</h2>
        </div>
        <Container className="services__content__senocare">
          <Row>
            <Col md={12} lg={6}>
              <p className="services__para__senocare mt-3">
                Senocare’s home patient care services in Gurgaon are an
                important aspect of home care. It encourages quicker healing and
                lowers the chance of infection. It is also less expensive than
                hospital care. To be at home, surrounded by family, can assist
                your loved one’s health. Your loved one will also benefit from
                the individualised attention and care that such a service
                provides.
              </p>
            </Col>
            <Col md={12} lg={6} className="service__link__city">
              <div>
                <h2 className="senocare___heading__sencond "> Our Services</h2>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Nursing Care in Noida
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Nursing Care in Delhi
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col>
              <LazyLoadImage
                src={ContentImg}
                className="img-fluid senocare__service__img"
              />
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col>
              <h1 className="service__heading__senocare ">
                What home care services does Senocare provide in Gurgaon?
              </h1>
              <h2 className="senocare___heading__sencond">
                Senocare provides an array of home patient care service in
                Gurgaon which includes:
              </h2>
              <h3 className="senocare__heading__third">Nursing Care at Home</h3>
              <p className="services__para__senocare">
                Senocare hires professionally trained and experienced staff to
                take care of your loved one, with utmost precision, compassion
                and awareness. The staff is empathetic, firm and attentive, to
                ensure overall well being, quick healing and intelligent
                company.
              </p>
              <h3 className="senocare__heading__third">
                Attendant Care at Home
              </h3>
              <p className="services__para__senocare">
                Your loved one’s requirements aren’t just confined to medical
                issues. Senocare has professionally qualified attendants who
                will look after their daily needs. The team has been personally
                screened and is well-versed in caring for your loved one.
              </p>
              <h3 className="senocare__heading__third">At home doctor visit</h3>
              <p className="services__para__senocare">
                Amidst the rise of uncertainties in the environment, we aim to
                bring the comfort of a doctor consultation at home. We have
                in-house doctors, available 24×7, for your loved ones, at the
                comfort of your home.
              </p>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col xs={12}>
              <h2 className="senocare___heading__sencond">
                What are the different kinds of home nursing care services
                Senocare offers in Gurgaon?
              </h2>
            </Col>
            <Col xs={12} md={6}>
              <ul>
                <li> Home nurse for ICU</li>
                <li>Urinary catheterization</li>
                <li>Post-surgical care</li>
                <li> Home care in COVID-19</li>
                <li>Wound care</li>
              </ul>
            </Col>
            <Col xs={12} md={6}>
              <LazyLoadImage src={elderCare} className="img-fluid" />
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col xs={12}>
              <h2 className="senocare___heading__sencond">
                Why nursing care at home is a good idea
              </h2>
            </Col>
            <Col xs={12} md={6}>
              <LazyLoadImage src={CareImgThird} className="img-fluid" />
            </Col>

            <Col xs={12} md={6}>
              <p className="services__para__senocare">
                Nursing care or patient care service in Gurgaon are a wonderful
                method to give seniors a sense of security as they recuperate.
                Thus it allows family members to focus on giving support and
                compassion to the elderly by ensuring that other requirements
                are met, both at home and by our nurses. In Gurgaon, a nurse at
                home assists with
              </p>
              <ul>
                <li>Setting up for hospital beds and equipment</li>
                <li>Critical(ICU) care at home</li>
                <li>Post Operative care at home</li>
                <li>Chemo therapy at home</li>
                <li>Dementia care at home</li>
              </ul>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col xs={12} md={6}>
              <LazyLoadImage src={CareImgFourth} className="img-fluid" />
            </Col>
            <Col xs={12} md={6}>
              <ul>
                <li>Post Stroke care</li>
                <li>Elderly care</li>
                <li>Wound Management, Dressing care</li>
                <li>IV (Intravenous drugs) administration</li>
                <li>Vital monitoring at home</li>
              </ul>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col xs={12} md={6}>
              <h2 className="senocare___heading__sencond">
                Why is Senocare considered the best home care service in Gurgaon{" "}
              </h2>
              <p className="services__para__senocare">
                Senocare is the finest in its sector because it emphasises
                high-quality care and responsibility. We have specially
                qualified nurses and attendants to care for your loved one’s
                requirements. Whenever it comes to our clients’ happiness, we
                always go over and above.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <LazyLoadImage src={CareImg} className="img-fluid" />
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col>
              <h2 className="senocare___heading__sencond">
                What our Happy Customers Say
              </h2>
              <MultilevelCarousel />
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col>
              <Media />
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col>
              <h2 className="senocare___heading__sencond">
                Frequently Asked Questions (FAQs):
              </h2>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q1. What are the charges for Home Nursing Services in
                      Gurgaon ?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Charges for home nursing services in Gurgaon May fluctuate
                      as per requirement. They start from Rs 1200/- and can go
                      up, as per the elder’s requirements.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q2. What to expect from an at home Doctor visit ?{" "}
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Our on call doctor to visit your home, perform necessary
                      tests, prescribe medicines if necessary and inform about
                      the next steps.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q3. Where can we find a trusted Home Nurse in Gurgaon ?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      At Senocare, we personally verify and provide
                      professionally trained nurses and attendants.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q4. How can I know that the caregivers are trustworthy?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Senocare takes full responsibility of providing utmost
                      care along with accountability of the safety and
                      caregiving capability of the staff provided.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q5. What all do you provide under elder home care?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Under patient care services in Gurgaon, we provide
                      comprehensive support that encompasses both medical and
                      non-medical assistance. It includes services such as
                      attendant care, home nursing, ICU care at home, medical
                      equipment rentals, and basic purchases.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q6. Do the nurses / attendants work for you on a regular
                      basis or on a contract basis?
                    </h5>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      We have a range of nurses and attendants, some on payroll
                      and some on a contract basis.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q7. Do you verify their credentials, and if so, how do you
                      go about doing so?
                    </h5>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Our nurses are hired after
                    </p>
                    <ul>
                      <li>Professional background check</li>
                      <li>Police verification and</li>
                      <li>Through references</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q8. I am unable to decide whether I should engage an
                      attendant or nurse, could you help guide?
                    </h5>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Our senOcare team will help you and assist you according
                      to your needs and requirements.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q9. What is the cost for an attendant? Are they fixed?
                    </h5>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Under patient care services in Gurgaon, the cost of the
                      attendant is decided as per the requirements and needs of
                      the patient.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q10. What are the attendant's services?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Attendants help with the following tasks:
                    </p>
                    <ul>
                      <li> Assisting with WC, bedpan, urinals, catheters</li>{" "}
                      <li>
                        Repositioning bed-bound patients to assist prevent bed
                        sores
                      </li>{" "}
                      <li>Assisting with oral medication</li>{" "}
                      <li>Assisting with light workouts</li>{" "}
                      <li>Walking assistance</li> <li>Bathing assistance</li>{" "}
                      <li>Clothing assistance</li>{" "}
                      <li>Brushing teeth and denture care</li>{" "}
                      <li>Diaper change</li>
                      <li>Assistance with light exercises</li>
                      <li>Nail care, hair care, shaving</li>
                      <li>Checking vitals</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q11. In terms of elder care, what is the difference
                      between the services of an attendant and a nurse?
                    </h5>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li> IV cannula care</li> <li>IM administration</li>{" "}
                      <li>Oxygen administration</li> <li>Tracheostomy care</li>{" "}
                      <li>Wound dressing</li> <li>Injection</li>{" "}
                      <li>Insulin administration</li>{" "}
                      <li>Urinary catheter care</li>
                      <li>Vital monitoring</li>
                      <li>Ryle’s tube feeding</li>
                      <li>Assistance in daily activities</li>
                    </ul>
                    <p className="accordian__para">
                      Are all included in the services that are provided by the
                      nurse, whereas the services that are provided by the
                      attendants are answered in the previous question.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q12. What if the attendant's services aren't to our
                      liking?
                    </h5>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para">
                      Home nursing service in Delhi provides you the opportunity
                      to change your attendant if the patient is dissatisfied.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q13. What happens if the attendant leaves in the middle of
                      the meal for some reason?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      If the situation worsens, a replacement attendant will be
                      assigned to you as quickly as possible.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q14. Where else do you provide senOcare services besides
                      Hyderabad?
                    </h5>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      senOcare services are available in{" "}
                      <a href=" /nursing-care-delhi/" className="hyper__link">
                        {" "}
                        Delhi
                      </a>
                      , Faridabad, Ghaziabad,{" "}
                      <a href=" /nursing-care-gurgaon/" className="hyper__link">
                        Gurgaon
                      </a>{" "}
                      and{" "}
                      <a href=" /nursing-care-noida/" className="hyper__link">
                        Noida.
                      </a>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q15. Are your nurses competent to provide post-operative
                      home care?
                    </h5>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Yes, our nurses can provide post-operative home care.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <ReachOutUs />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default NursingGurgaon;
