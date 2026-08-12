import { Container, Row, Col } from "react-bootstrap";
import IcuHomeImg from "../../assets/Image/ServiceImg/IcuH.jpg";
import IcuHomeImg2 from "../../assets/Image/ServiceImg/IcuH1.jpg";
import IcuHomeImg3 from "../../assets/Image/ServiceImg/IcuH2.jpg";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const IcuHome = () => {
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
                  Bringing Critical Care to Your Doorstep: ICU Care at Home with
                  Senocare
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={IcuHomeImg2}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col xs={12} md={12} lg={6} className="senocare__text__content">
                <p className="services__para__senocare">
                  In the field of healthcare, innovation is always redefining
                  the limits of convenience and quality. Senocare India's "ICU
                  at Home" service reimagines critical care by providing high
                  dependency care services to patients who have progressed from
                  the acute phase of their disease but still require extensive
                  monitoring and assistance.
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
              <Col>
                <p className="services__para__senocare mt-4">
                  This home-based critical care service combines knowledge,
                  compassion, and cutting-edge technology to safeguard patients'
                  well-being in the comfort of their own homes.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Benefits of Choosing a Doctor at Home Service
                </h2>
                <h3 className="senocare__heading__third">
                  Key Components of ICU at Home
                </h3>
                <p className="services__para__senocare">
                  Get medical attention in the comfort of your home, saving time
                  and Senocare India's ICU at Home service encompasses a
                  comprehensive range of critical care elements, designed to
                  provide a seamless and holistic healthcare experience. These
                  components include:effort.
                </p>
                <h4 className="senocare__heading__fourth">
                  Skilled Nursing Care
                </h4>
                <p className="services__para__senocare">
                  A team of skilled and{" "}
                  <a href="/nursing-care/" className="hyper__link">
                    {" "}
                    experienced nurses{" "}
                  </a>{" "}
                  provides expert medical attention and personalized care to
                  patients, ensuring their safety and comfort.
                </p>
                <h4 className="senocare__heading__fourth">
                  24x7 Vital Monitoring
                </h4>
                <p className="services__para__senocare">
                  Cutting-edge monitoring technology allows continuous tracking
                  of vital signs, providing real-time updates to healthcare
                  professionals for prompt intervention if necessary.
                </p>
                <h4 className="senocare__heading__fourth">IV Administration</h4>
                <p className="services__para__senocare">
                  Expert administration of intravenous medications and fluids
                  ensures that patients receive the necessary treatments without
                  the need for hospitalization.
                </p>
                <h4 className="senocare__heading__fourth">
                  Equipment Handling
                </h4>
                <p className="services__para__senocare">
                  The management of medical equipment and devices is handled
                  proficiently, guaranteeing accurate functioning and minimizing
                  risks.
                </p>
                <h4 className="senocare__heading__fourth">
                  Pressure Ulcer Prevention
                </h4>
                <p className="services__para__senocare">
                  Specialized care techniques are employed to prevent pressure
                  ulcers, which can often arise during extended periods of
                  immobility.
                </p>
                <h4 className="senocare__heading__fourth">
                  Care of Tubes and Catheters
                </h4>
                <p className="services__para__senocare">
                  Patients with medical tubes and catheters receive diligent
                  care to prevent infections and ensure optimal functioning.
                </p>
                <h4 className="senocare__heading__fourth">Infection Control</h4>
                <p className="services__para__senocare">
                  Stringent infection control measures are in place to maintain
                  a safe and sterile environment for the patient.
                </p>
                <h4 className="senocare__heading__fourth">Wound Dressing</h4>
                <p className="services__para__senocare">
                  Expert wound care is provided to promote healing and prevent
                  complications.
                </p>
                <h4 className="senocare__heading__fourth">DVT Prevention</h4>
                <p className="services__para__senocare">
                  Proactive measures are taken to prevent deep vein thrombosis
                  (DVT) through strategies such as mobilization and compression
                  techniques.
                </p>
                <h4 className="senocare__heading__fourth">Physiotherapy</h4>
                <p className="services__para__senocare">
                  Tailored{" "}
                  <a
                    href="/physiotherapy-home-service/"
                    className="hyper__link">
                    physiotherapy sessions{" "}
                  </a>{" "}
                  aid in maintaining mobility and promoting recovery.
                </p>
                <h4 className="senocare__heading__fourth">
                  Activities of Daily Living
                </h4>
                <p className="services__para__senocare">
                  Patients' essential requirements are provided through
                  assistance with everyday tasks, which improves their overall
                  comfort.
                </p>
                <h4 className="senocare__heading__fourth">
                  Psychological Counselling
                </h4>
                <p className="services__para__senocare ">
                  Emotional well-being is addressed through psychological
                  counseling, recognizing the importance of mental health during
                  recovery.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Why Choose ICU at Home with Senocare India
                </h2>
                <p className="services__para__senocare">
                  Opting for ICU care at home offers numerous benefits that
                  align with the patient's well-being and family's peace of
                  mind:
                </p>
                <h4 className="senocare__heading__fourth">
                  Reduction in Hospital Stay
                </h4>
                <p className="services__para__senocare ">
                  Patients can experience a reduction in the length of hospital
                  stays, as their recovery progresses in the familiar and
                  comfortable environment of their home.
                </p>
                <h4 className="senocare__heading__fourth">Emotional Support</h4>
                <p className="services__para__senocare ">
                  ICU patients receive enhanced emotional support from their
                  families and caregivers, contributing to a more holistic
                  healing process.
                </p>
                <h4 className="senocare__heading__fourth">
                  Multidisciplinary Approach
                </h4>
                <p className="services__para__senocare">
                  A diverse team of medical specialists creates the treatment
                  programmes, offering a complete and individualised approach.
                </p>
                <h4 className="senocare__heading__fourth">
                  Complication Prevention
                </h4>
                <p className="services__para__senocare ">
                  By receiving care at home, patients are less exposed to
                  hospital-acquired infections and complications.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={IcuHomeImg}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  Senocare India's Commitment:
                </h2>
                <p className="services__para__senocare">
                  Senocare India is a shining example of innovation and
                  compassionate care, providing ICU services outside of hospital
                  boundaries.With hospital-level quality, and a highly trained
                  staff, Senocare India offers a seamless transition from
                  hospital care to the comforts of home, ensuring the best
                  quality critical care for patients and improved overall
                  quality of life. Whether it's prolonged ICU stays, cancer
                  care, stroke care, or managing ventilators at home, Senocare
                  India's ICU at Home service redefines critical care and
                  promises optimal well-being for patients.
                </p>
              </Col>
              <Col>
                <p className="services__para__senocare mt-4">
                  For a seamless and personalized critical care experience that
                  brings hospital-level expertise to your doorstep, choose
                  Senocare India's ICU at Home. Take a step towards embracing
                  advanced critical care in the comfort of your own home.
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

export default IcuHome;
