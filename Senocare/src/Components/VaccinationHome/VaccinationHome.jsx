import { Container, Row, Col } from "react-bootstrap";
import Vaccin1 from "../../assets/Image/ServiceImg/Vaccin.jpg";
import Vaccin2 from "../../assets/Image/ServiceImg/Vaccin3.jpg";
import Vaccin3 from "../../assets/Image/ServiceImg/Vaccin2.jpg";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Accordion from "react-bootstrap/Accordion";

import "../PallitveCare/Services.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SEO from "../SEO";

const VaccinationHome = () => {
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
                  Vaccination at Home - Senocare India
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Vaccin1}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col xs={12} md={12} lg={6} className="senocare__text__content">
                <h2 className="senocare___heading__sencond">
                  Vaccination: Safeguarding Your Health with Convenience
                </h2>
                <p className="services__para__senocare">
                  Vaccination is an important step that gives protection against
                  various diseases by boosting the body's immune system. It acts
                  as a shield, protecting individuals from infections and
                  preventing the onset of serious illnesses.
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
              <Col xs={12}>
                <p className="services__para__senocare mt-5">
                  At Senocare India, we offer a range of vaccinations
                  administered in the comfort of your home. We realise the
                  importance of having access to immunisations to protect you
                  and your loved ones from hazardous infections. While visiting
                  a hospital or clinic for vaccinations can be inconvenient, our
                  on-call nursing services and experienced doctors are readily
                  available to administer vaccines at your doorstep.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  {" "}
                  Key Vaccinations Provided:
                </h2>
                <h3 className="senocare__heading__third">
                  Hepatitis B Vaccination:
                </h3>
                <p className="services__para__senocare ">
                  A three-shot series that protects against the extremely
                  contagious Hepatitis B virus, which can cause serious liver
                  diseases such as cirrhosis and liver cancer. Vaccination is
                  the best defense against this disease, as no specific
                  treatment is available once infected.
                </p>
                <h3 className="senocare__heading__third">H1N1 Vaccination:</h3>
                <p className="services__para__senocare ">
                  Shielding against the influenza virus responsible for the 2009
                  pandemic, the H1N1 vaccination is highly contagious.
                  Vaccination is especially significant since it lowers the risk
                  of infection and probable mortality caused by the virus.
                </p>
                <h3 className="senocare__heading__third">
                  Typhoid Vaccination:
                </h3>
                <p className="services__para__senocare ">
                  Protecting against the fatal 'Salmonella Typhi' virus that
                  causes Typhoid, a highly contagious disease with symptoms such
                  as high fever, stomach discomfort, and weakness.Proper
                  vaccination is vital, as Typhoid can be fatal if not promptly
                  treated.
                </p>
                <h3 className="senocare__heading__third">
                  Chicken Pox Vaccination:
                </h3>
                <p className="services__para__senocare ">
                  Guarding against the varicella-zoster virus, which causes the
                  highly contagious Chickenpox. While the condition is
                  treatable, the consequences can be severe, particularly in
                  communities with limited resources. Vaccination is the best
                  preventive measure. Vaccination against Streptococcus
                  pneumonia, the bacteria that causes pneumonia, sepsis, and
                  meningitis. Because pneumonia may be fatal, both children and
                  adults can benefit from this immunisation.
                </p>
                <h3 className="senocare__heading__third">
                  Vaccination for Cervical Cancer:
                </h3>
                <p className="services__para__senocare">
                  Protecting women from the human papillomavirus, a sexually
                  transmitted infection linked to cervical cancer. Early
                  immunisation can lower the chance of acquiring this
                  potentially deadly disease considerably.
                </p>{" "}
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Why Choose Senocare India for Vaccination?
                </h2>
                <p className="services__para__senocare">
                  At Senocare India, we prioritize your health and convenience.
                  Our experienced nurses administer vaccinations at your home or
                  corporate office, saving you the hassle of clinic visits.
                  Flu/H1N1, HBV, HAV, Typhoid, Pneumonia, Chicken Pox, DTP, MMR,
                  Shingles, meningitis, cholera, HPV/Cervical Cancer, and Zoster
                  vaccines are also available. Additional vaccines can be
                  arranged upon request.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Vaccin2}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  Vaccination's Importance:
                </h2>
                <p className="services__para__senocare">
                  Vaccination is critical for protecting yourself and others
                  from potentially fatal infections. Some of the top reasons to
                  get vaccinated are:
                </p>
                <h3 className="senocare__heading__third">
                  Protection from Harmful Diseases:
                </h3>
                <p className="services__para__senocare">
                  Vaccinations shield individuals from diseases that can be
                  fatal or cause physical disabilities.
                </p>
                <h3 className="senocare__heading__third">
                  Preventing Disease Spread:
                </h3>
                <p className="services__para__senocare">
                  By being vaccinated, you minimise your chances of becoming ill
                  and infecting vulnerable family members.
                </p>
                <h3 className="senocare__heading__third">Cost-Effective:</h3>
                <p className="services__para__senocare">
                  Vaccination is far less expensive than the medical care needed
                  to treat infectious diseases.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  The Advantages of Vaccination at Home:
                </h2>
                <p className="services__para__senocare">
                  Choosing to get vaccinated at home has various advantages:
                </p>
                <h3 className="senocare__heading__third">Convenience:</h3>
                <p className="services__para__senocare">
                  Getting vaccinated at home eliminates the need to travel to a
                  clinic or hospital.
                </p>
                <h3 className="senocare__heading__third">
                  Comfort for Children:
                </h3>
                <p className="services__para__senocare">
                  Vaccinating children at home helps reduce their stress and
                  allows for family support during the process.
                </p>
                <h3 className="senocare__heading__third">
                  Flexible Scheduling:
                </h3>
                <p className="services__para__senocare">
                  You can choose a suitable day and time for vaccination,
                  accommodating your schedule.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Vaccination Risks:
                </h2>
                <p className="services__para__senocare">
                  While vaccinations are safe and effective, they may produce
                  moderate discomfort at the injection site, such as soreness,
                  redness, tenderness, or a little fever.These symptoms
                  typically subside within a few days and are outweighed by the
                  protection vaccines provide against infectious diseases.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">Conclusion:</h2>
                <p className="services__para__senocare">
                  Prevention through vaccination is always better than cure.
                  Vaccines play a crucial role in eradicating diseases, and
                  governments worldwide recommend compulsory vaccinations for
                  children to protect them from various illnesses. Senocare
                  India strives to ensure that vaccination is accessible to all,
                  providing professional nursing services in the comfort of your
                  home.
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              {" "}
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Vaccin3}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  {" "}
                  Looking for Vaccination Near You?
                </h2>
                <p className="services__para__senocare">
                  Avoid the hassle of clinic visits by availing our vaccination
                  services at home. Simply search "vaccination near me" and
                  schedule an appointment with our experienced nurses through
                  Senocare India. Experience the convenience of quality
                  healthcare at your doorstep.
                </p>
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
                        Q: Which vaccinations are given at home?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        At Senocare India, we provide numerous vaccines at your
                        house, including H1N1, Hepatitis B, Typhoid, Pneumonia,
                        Chicken Pox, and Cervical Cancer.
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
                        Q: Which vaccines does the Universal Immunisation
                        Programme (UIP) currently provide?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Measles, diphtheria, tuberculosis, poliomyelitis,
                        whooping cough, hepatitis B, pneumonia, Japanese
                        encephalitis, tetanus, diarrhoea, rubella, and
                        pneumococcal infections are among the illnesses covered
                        by the UIP.
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
                        Q: What happens if I miss a vaccination dosage?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Missing a vaccination dosage can pose health risks. It
                        is crucial never to skip vaccinations. If you cannot
                        visit a hospital, opt for our home vaccination services
                        by booking an appointment with Senocare India.
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
                        Q: How long can vaccines stay outside the fridge?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Vaccines must not be kept outside the fridge at any
                        time, as they may spoil and become unfit for use. Proper
                        storage in the refrigerator ensures their effectiveness.
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
                        Q: Why are there several types of vaccines?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Vaccines target particular bacteria or viruses to
                        prevent a variety of illnesses. Vaccines defend against
                        a variety of ailments by strengthening the immune
                        system. It is best to speak with a healthcare
                        practitioner to establish which immunisations you
                        require for preventive and good health.
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
                        Q: Is there a specific geographic area covered by the
                        service?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        The service provider usually operates within a certain
                        radius or coverage area. When scheduling an appointment,
                        make sure to enquire about the locations they service.
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
                        Q: What are the operating hours of Doctor at Home
                        Service?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Operating hours may vary depending on the service
                        provider. Some may offer extended hours, including
                        evenings and weekends, to accommodate various schedules.
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
                        Q: Is Doctor at Home Service suitable for emergencies?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        No, Doctor at Home Service is not intended for medical
                        emergencies. In the case of a medical emergency, it is
                        essential to contact emergency services or go to the
                        nearest hospital.
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
                        Q: How much does Doctor at Home Service typically cost?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Costs may vary based on location, the complexity of the
                        health issue, and the service provider.It's a good idea
                        to inquire about the cost during the appointment
                        scheduling process.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default VaccinationHome;
