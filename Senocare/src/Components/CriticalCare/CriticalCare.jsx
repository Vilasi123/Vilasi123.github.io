import { Container, Row, Col } from "react-bootstrap";
import DoctorOnHome1 from "../../assets/Image/ServiceImg/DoctorHome1.jpg";
import DoctorOnHome2 from "../../assets/Image/ServiceImg/DoctorOnHome3.jpg";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../PallitveCare/Services.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const CriticalCare = () => {
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
                  Critical Care at Home: Senocare India's Comprehensive and
                  Affordable Solution
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={DoctorOnHome2}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col xs={12} md={12} lg={6} className="senocare__text__content">
                <p className="services__para__senocare">
                  Introduction: The practise of critical care at home has
                  emerged as a game changer in the world of healthcare, allowing
                  patients to receive intensive care in the comfort of their own
                  homes. Senocare India, a leading healthcare provider, has
                  pioneered critical care services, providing expert medical
                  attention and support to patients in need. This article delves
                  into the significance of critical care at home and how
                  Senocare India ensures top-notch services at a fraction of the
                  cost of a hospital stay.
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
                  Critical Care at Home:
                </h2>
                <p className="services__para__senocare">
                  With developments in medical technology and a trend towards
                  patient-cantered care, critical care at home has become a
                  feasible and successful option. Senocare India recognizes the
                  importance of healing in familiar surroundings and offers ICU
                  at Home services for patients who require intensive care
                  beyond the acute phase of their illness.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  The Benefits of Critical Care at Home:
                </h2>
                <h3 className="senocare__heading__third">
                  Comfort and Familiarity:
                </h3>
                <p className="services__para__senocare">
                  Home is where healing happens best. Patients can recuperate in
                  a familiar setting, surrounded by loved ones, when receiving
                  critical care at home, which can have a favourable influence
                  on the healing process.
                </p>
                <h3 className="senocare__heading__third">Personalized Care:</h3>
                <p className="services__para__senocare">
                  Senocare India's team of highly trained critical care
                  therapists, experts, and nurses provide personalized care to
                  meet each patient's unique needs, ensuring the highest quality
                  medical attention
                </p>
                <h3 className="senocare__heading__third">Lower Cost:</h3>
                <p className="services__para__senocare">
                  Critical care at home comes at a significantly lower price
                  compared to a hospital stay, alleviating financial burdens for
                  the patient and their family.
                </p>
                <h3 className="senocare__heading__third">
                  Setting Up ICU at Home:
                </h3>
                <p className="services__para__senocare">
                  Senocare India excels in setting up comprehensive ICU
                  facilities at the patient's home. The process includes:
                </p>
                <h3 className="senocare__heading__third">Medical Equipment:</h3>
                <p className="services__para__senocare">
                  Senocare India provides all essential medical equipment based
                  on the patient's specific needs, such as infusion pumps,
                  BiPAP, DVT pumps, and more, ensuring seamless care delivery.
                </p>
                <h3 className="senocare__heading__third">
                  Bed Sore Management:
                </h3>
                <p className="services__para__senocare">
                  The ICU setup at home includes choosing the right type of bed
                  to prevent bed sores and ensure patient comfort.
                </p>
                <h3 className="senocare__heading__third">
                  Critical Care Nurse:
                </h3>
                <p className="services__para__senocare">
                  <a href="/nursing-care/" className="hyper__link">
                    Qualified critical care nurses from Senocare{" "}
                  </a>{" "}
                  India administer treatments, medications, and monitor patient
                  progress while maintaining constant communication through
                  E-monitoring services.
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Critical Care Packages:
                </h2>
                <p className="services__para__senocare">
                  Senocare India offers tailored critical care packages to cater
                  to different patient requirements. These packages ensure that
                  health services are of high quality, economical, and simple to
                  implement. The packages include various clinical services,
                  nursing care, and ICU infrastructure as per the patient's
                  condition and stability.
                </p>
                <h3 className="senocare__heading__third">
                  Critical Package for Critical Home Care:
                </h3>
                <p className="services__para__senocare">
                  Suitable for patients with GCS of 8 or less, unstable vitals,
                  and dependent ventilation.
                </p>
                <h3 className="senocare__heading__third">Step-Down Package:</h3>
                <p className="services__para__senocare">
                  Designed for patients with GCS of 10 or more, stable vitals,
                  and restricted mobility.
                </p>
                <h3 className="senocare__heading__third">
                  Supportive Package:
                </h3>
                <p className="services__para__senocare">
                  Targeted at patients with GCS of 10 or more, stable vitals,
                  and limited mobility.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Why Choose Senocare India?
                </h2>
                <p className="services__para__senocare">
                  Senocare India's commitment to excellence and compassionate
                  care sets it apart from others. Reasons to choose Senocare
                  India for critical care at home include:
                </p>
                <h3 className="senocare__heading__third">
                  Certified ICU Nurses and Doctors:
                </h3>
                <p className="services__para__senocare">
                  Senocare India's team consists of highly experienced and
                  certified ICU doctors and nurses to ensure quality care for
                  quick recovery.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  Best-in-Class ICU equipments:
                </h3>
                <p className="services__para__senocare">
                  A broad variety of high-quality ICU equipment are available
                  for purchase or rental, and are delivered to the patient's
                  house along with device installation services.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  Continuous Monitoring:
                </h3>
                <p className="services__para__senocare">
                  Trained specialists monitor patient progress and recovery data
                  through state-of-the-art devices, ensuring constant patient
                  support.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  Working with Treating Physician:
                </h3>
                <p className="services__para__senocare">
                  Senocare India involves the patient's own physician in the
                  care plan design, promoting collaborative and comprehensive
                  care.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  Lower Risk of Infection:
                </h3>
                <p className="services__para__senocare">
                  Critical care at home reduces the risk of infections compared
                  to hospitals, enhancing patient safety and recovery.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={DoctorOnHome1}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h3 className="senocare__heading__third">Conclusion:</h3>
                <p className="services__para__senocare">
                  Senocare India's critical care at home services have
                  transformed healthcare delivery by providing expert medical
                  attention and support in the comfort of patients' homes.
                  Senocare India guarantees patients receive the finest care
                  possible without the burden of high hospital expenses by
                  focusing on personalised treatment, cutting-edge medical
                  equipment, and caring experts. If your loved one needs
                  critical care, choosing Senocare India is choosing excellence
                  and peace of mind.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <h3 className="senocare__heading__third ">References:</h3>
              <p className="services__para__senocare">
                <a
                  href="https://en.wikipedia.org/wiki/Intensive_care_unit"
                  target="_blank"
                  className="link__service"
                  rel="noopener noreferrer">
                  Intensive care unit
                </a>
              </p>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CriticalCare;
