import Footer from "../Footer/Footer";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "../Header/Header";
import SEO from "../SEO";

const HomeAttendentService = () => {
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
                  Comprehensive Home Attendant Services for Elderly and Patients
                </h1>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={12} lg={6} className="senocare__text__content">
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
                        className="hyper__link">
                        Dr. Shakti Singh
                      </a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col xs={12}>
                <h2 className="senocare___heading__sencond">
                  Key Elements of Our Home Attendant Services:{" "}
                </h2>
                <p className="services__para__senocare">
                  Our home attendants are equipped to deliver a wide range of
                  essential care services, assuring our customers' safety and
                  comfort. These services include:
                </p>
              </Col>

              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Bathing & Oral Hygiene
                </h3>
                <p className="services__para__senocare">
                  Our compassionate attendants ensure proper personal hygiene
                  with bathing and oral care, maintaining the dignity and health
                  of our clients.
                </p>
              </Col>

              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Toileting & Urine Bag Care
                </h3>
                <p className="services__para__senocare">
                  We provide assistance with toileting and proper management of
                  urine bags, promoting comfort and hygiene.
                </p>
              </Col>
              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Walking & Daily Exercises
                </h3>
                <p className="services__para__senocare">
                  Encouraging mobility and physical activity is crucial. Our
                  attendants offer support with walking and daily exercises as
                  part of the care regimen.
                </p>
              </Col>

              <Col xs={12}>
                <h3 className="senocare__heading__third">Oral Feeding:</h3>
                <p className="services__para__senocare">
                  Nutritional intake is vital. Our attendants assist you with
                  oral feeding, guaranteeing appropriate nutrition for better
                  health.
                </p>
              </Col>

              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Timely Oral Medication:
                </h3>
                <p className="services__para__senocare">
                  Medication adherence is essential for recovery. Our attendants
                  make certain that customers receive their medication on time,
                  hence supporting health management.
                </p>
              </Col>
              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Oxygenation and Nebulization:{" "}
                </h3>
                <p className="services__para__senocare">
                  For clients requiring respiratory support, our trained
                  attendants handle oxygenation and nebulization procedures with
                  care.
                </p>
              </Col>
              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Temperature/BP/Sugar Check:
                </h3>
                <p className="services__para__senocare">
                  Regular health monitoring is part of our services, including
                  checking vital signs like temperature, blood pressure, and
                  sugar levels.
                </p>
              </Col>

              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Repositioning Bedridden Patients:
                </h3>
                <p className="services__para__senocare">
                  For those with limited mobility, our attendants skillfully
                  reposition bedridden patients to prevent discomfort and
                  bedsores.
                </p>
              </Col>

              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Wheelchair Support & Fall Prevention:{" "}
                </h3>
                <p className="services__para__senocare">
                  Safety is a priority. Our attendants assist with wheelchairs
                  and execute fall prevention methods.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12}>
                <h2 className="senocare___heading__sencond">
                  Why Choose Senocare India for Home Attendant Services:
                </h2>
                <p className="services__para__senocare">
                  Opting for our Home Attendant Services offers numerous
                  advantages that reflect our commitment to your well-being:
                </p>
                <p className="services__para__senocare">
                  Highest Customer Rating: With a customer rating of 4.9/5 based
                  on over 3000+ Google Reviews and the opinions of more than 340
                  users, Senocare India stands as a trusted leader in delivering
                  superior healthcare standards.
                </p>
              </Col>

              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Free Doctor Consultation:
                </h3>
                <p className="services__para__senocare">
                  Our service includes one free doctor consultation every week,
                  ensuring comprehensive medical oversight.
                </p>
              </Col>

              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Experienced & Certified Staff:
                </h3>
                <p className="services__para__senocare">
                  Our attendants undergo continuous training based on
                  international protocols, ensuring their competence in handling
                  patients with diverse needs.
                </p>
              </Col>

              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Embracing the Comfort of Home:
                </h3>
                <p className="services__para__senocare">
                  Senocare India believes that there is no place like home,
                  especially when it comes to recovery and care. Our Home
                  Attendant Services are intended to provide compassionate and
                  personalised care in the comfort of your own home. We
                  understand the difficulties that come with caring for
                  bedridden loved ones, elders, surgical recovery patients,
                  stroke survivors, and accident victims, and our committed
                  attendants are here to help.
                </p>
              </Col>

              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Book Home Attendant Services with Senocare India:
                </h3>
                <p className="services__para__senocare">
                  Experience the warmth and expertise of our certified home
                  attendants. They are more than professionals; they are caring
                  caregivers on a mission to help patients recover successfully.
                </p>
                <p className="services__para__senocare">
                  Contact us to guarantee that your loved ones receive the best
                  possible care in the comfort of their own home.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomeAttendentService;
