import { Container, Row, Col } from "react-bootstrap";
import Physio7 from "../../assets/Image/PhysiotherapySection/Physio7.jpg";
import Physio8 from "../../assets/Image/PhysiotherapySection/Physio8.jpg";
import Physio9 from "../../assets/Image/PhysiotherapySection/Physio9.jpg";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import Accordion from "react-bootstrap/Accordion";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "../PallitveCare/Services.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const PhysiotherapyFaridabad = () => {
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
                  Elevate Your Well-being with Senocare’s Home Physiotherapy in
                  Faridabad
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Physio7}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col xs={12} md={12} lg={6}>
                <p className="services__para__senocare">
                  Discover the convenience and effectiveness of home
                  physiotherapy in Faridabad with Senocare Home. This innovative
                  service is designed to bring the benefits of physiotherapy
                  directly to your home, ensuring that you receive personalized
                  care comfortably . Senocare brings professional healthcare
                  services to your doorstep, offering personalized care that
                  caters to your unique needs.
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
                        className="hyper__link">
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
                  Why Choose Senocare Home Physiotherapy in Faridabad
                </h2>
                <h3 className="senocare__heading__third">
                  Experienced and Certified Therapists
                </h3>
                <p className="services__para__senocare">
                  Our team comprises highly qualified physiotherapists dedicated
                  to providing top-notch care.
                </p>
                <h3 className="senocare__heading__third">
                  Tailored Treatment Plans
                </h3>
                <p className="services__para__senocare">
                  Senocare crafts individualized physiotherapy plans that
                  address your specific health concerns.
                </p>
                <h3 className="senocare__heading__third">
                  Comfort and Convenience
                </h3>
                <p className="services__para__senocare">
                  With no commuting hassles; Senocare’s home physiotherapy
                  brings the clinic experience to your living room.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  What Is a Home Physiotherapist?
                </h2>
                <p className="services__para__senocare">
                  A home physiotherapist is a certified professional who
                  delivers rehabilitation services in the comfort of your home.
                  They assess, diagnose, and treat a range of physical
                  conditions, promoting healing and improved mobility.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Types of Physio Treatment at Home in Faridabad
                </h2>
                <h3 className="senocare__heading__third">
                  Orthopedic Physiotherapy:
                </h3>
                <p className="services__para__senocare">
                  Targeting musculoskeletal issues such as joint pain,
                  fractures, and sprains.
                </p>
                <h3 className="senocare__heading__third">
                  Neurological Physiotherapy:
                </h3>
                <p className="services__para__senocare">
                  Addressing conditions like stroke, multiple sclerosis, and
                  spinal cord injuries. • Pediatric Physiotherapy: Catering to
                  children with developmental delays or musculoskeletal issues.
                  (1)
                </p>
                <h3 className="senocare__heading__third">
                  Geriatric Physiotherapy:
                </h3>
                <p className="services__para__senocare">
                  Focusing on the unique needs of the elderly, enhancing their
                  strength and mobility.(2)
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Physio8}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  How Long Does Each Home Physiotherapy Session Last
                </h2>

                <p className="services__para__senocare">
                  Senocare understands the value of your time; sessions
                  typically last between 45 minutes to an hour, ensuring a
                  comprehensive yet efficient approach to your rehabilitation.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Advantages of Physiotherapy at Home with Senocare
                </h2>
                <h3 className="senocare__heading__third">Personalized Care</h3>{" "}
                <p className="services__para__senocare">
                  Tailored treatment plans for your specific needs.
                </p>
                <h3 className="senocare__heading__third">Time Efficiency</h3>
                <p className="services__para__senocare">
                  Skip the travel time and receive care in the comfort of your
                  home.
                </p>
                <h3 className="senocare__heading__third">Enhanced Comfort</h3>
                <p className="services__para__senocare">
                  Familiar surroundings contribute to a positive healing
                  environment.
                </p>
                <h3 className="senocare__heading__third">Family Involvement</h3>
                <p className="services__para__senocare">
                  Involve family members in the rehabilitation process for
                  better support.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Is it Safe to Conduct a Home Physiotherapy Session in
                  Faridabad
                </h2>
                <p className="services__para__senocare">
                  Yes, Senocare prioritizes safety by adhering to stringent
                  hygiene protocols. Our therapists are trained to create a
                  secure environment for each session, ensuring your well-being
                  is our top priority.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Physio9}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  What to Expect from Home Physiotherapy in Faridabad
                </h2>
                <p className="services__para__senocare">
                  Anticipate a professional and compassionate approach from
                  Senocare’s therapists. They will conduct a thorough
                  assessment, discuss treatment goals with you, and tailor
                  sessions to your comfort and progress.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Symptoms that Need Physiotherapy
                </h2>
                <h3 className="senocare__heading__third">Persistent Pain</h3>
                <p className="services__para__senocare">
                  Addressing chronic pain in joints, muscles, or nerves.
                </p>
                <h3 className="senocare__heading__third">Limited Mobility</h3>
                <p className="services__para__senocare">
                  Improving movement and functionality.
                </p>
                <h3 className="senocare__heading__third">
                  Post-Surgery Rehabilitation
                </h3>
                <p className="services__para__senocare">
                  Speeding up recovery after surgical procedures.(3)
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Conditions that Need Physiotherapy
                </h2>
                <h3 className="senocare__heading__third">Arthritis</h3>
                <p className="services__para__senocare">
                  Managing pain and improving joint function.
                </p>
                <h3 className="senocare__heading__third">Sports Injuries</h3>
                <p className="services__para__senocare">
                  Facilitating recovery from sports-related injuries.
                </p>
                <h3 className="senocare__heading__third">Respiratory Issues</h3>
                <p className="services__para__senocare">
                  Enhancing lung function through targeted exercises. Elevate
                  your well-being with Senocare’s home physiotherapy in
                  Faridabad. Experience personalized care, convenience, and
                  professional expertise brought to your doorstep. Prioritize
                  your health with Senocare’s commitment to your physical
                  well-being.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">Bibliography</h2>
                <p className="services__para__senocare">
                  https://www.physio-pedia.com/Introduction_to_Paediatric_Physiotherapy
                </p>
                <p className="services__para__senocare">
                  https://www.physio-pedia.com/Overview_of_Principles_of_Geriatrics_Rehabilitation
                </p>
                <p className="services__para__senocare">
                  https://cartilage.org/patient/about-cartilage/cartilage-repair/what-is-postoperative-rehabilitation/
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

export default PhysiotherapyFaridabad;
