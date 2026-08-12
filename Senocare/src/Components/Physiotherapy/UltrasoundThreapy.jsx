import { Container, Row, Col } from "react-bootstrap";
import "./Physiotherapy.css";
import ultrasoundImg from "../../assets/Image/physiotherapySection/ultrasound.jpg";
import ultrasoundImg1 from "../../assets/Image/physiotherapySection/ultrasound1.jpg";
import ultrasoundImg2 from "../../assets/Image/physiotherapySection/ultrasound2.jpg";
import Accordion from "react-bootstrap/Accordion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const UltrasoundThreapy = () => {
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
                  Exploring the Benefits of Ultrasound Therapy in Physiotherapy{" "}
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={ultrasoundImg}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6} className="service__link__section">
                <div>
                  <ul>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Cupping Therapy for Headaches
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Cupping Therapy for Neck Pain
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Dry Needling Therapy
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Managing Lumbar Spondylosis with Physiotherapy
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Paralysis treatment at home
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Physiotherapy Exercises for Paralysis
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Electrotherapy in Physiotherapy
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Ultrasound Therapy
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Parkinsons Treatment
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <div className="shakti__content__phy">
                  <div className="img__content__shakti__py">
                    <LazyLoadImage
                      src={Shakti}
                      className="img-fluid shakti__img__phy"
                    />
                  </div>

                  <div className="medically__content__phy">
                    <h5 className="medically__reviewed">
                      Content is medically reviewed by:
                    </h5>
                    <p className="drsakti">Dr. Shakti Singh</p>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <h2 className="senocare___heading__sencond mt-4">
                  What Is Ultrasound Therapy in Physiotherapy?
                </h2>
                <p className="services__para__senocare">
                  Ultrasound therapy commonly regarded as therapeutic
                  ultrasound, is a non-invasive physiotherapeutic treatment that
                  utilises sound waves to promote the healing of soft tissues
                  and alleviate pain. These high-frequency sound waves that are
                  beyond the range of human hearing produce deep heating effects
                  within the body.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond ">
                  What Are Its Types?
                </h2>
                <p className="services__para__senocare">
                  There are primarily two types of ultrasound therapy namely:
                  continuous ultrasound and pulsed ultrasound(1). The choice
                  between these types depends on the specific condition being
                  treated and the therapeutic goals.
                </p>
                <h3 className="senocare__heading__third">
                  Continuous ultrasound
                </h3>
                <p className="services__para__senocare">
                  his provides a continuous stream of sound waves. Since it is
                  continuous, this type of ultrasound produces a greater amount
                  of heat and it used in chronic conditions such as chronic back
                  aches, joint stiffness following osteoarthritis.
                </p>
                <h3 className="senocare__heading__third">Pulsed ultrasound</h3>
                <p className="services__para__senocare">
                  It delivers waves in intermittent bursts. This is used more
                  actively in acute injuries such ankle sprains.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={ultrasoundImg2}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  What Are the Treatment Parameters of Ultrasound Therapy in
                  Physiotherapy?
                </h2>
                <p className="services__para__senocare">
                  When administering ultrasound therapy, several crucial
                  treatment parameters are considered. These parameters include
                  the frequency of the ultrasound waves, the intensity or power
                  level, the treatment duration, and the choice between
                  continuous or pulsed ultrasound. The two most commonly used
                  frequencies in ultrasound therapy are 3Mhz used in superficial
                  areas and 1Mhz used for thermal affects in more deeply
                  situated areas. A higher intensity between 0.1 to 0.25 W/cm2
                  is used in pulsed ultrasound for acute injuries whereas
                  continuous ultrasound for chronic conditions works on low to
                  moderate intensities ranging between 0.25 to 1 W/cm2 (2)
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Common Injuries Treated With Ultrasound Therapy in
                  Physiotherapy
                </h2>
                <p className="services__para__senocare">
                  Ultrasound therapy is effective in treating a variety of
                  injuries and conditions. It is commonly used to address
                  musculoskeletal issues such as
                </p>
                <h3 className="senocare__heading__third">Tendonitis</h3>
                <p className="services__para__senocare">
                  Ultrasound helps reduce pain and inflammation in the tendons,
                  promoting faster healing. (3)
                </p>
                <h3 className="senocare__heading__third">
                  Sprains and Strains
                </h3>
                <p className="services__para__senocare">
                  By increasing blood flow and reducing muscle spasm, ultrasound
                  therapy can aid in the recovery of sprains and strains.
                </p>
                <h3 className="senocare__heading__third">Bursitis</h3>
                <p className="services__para__senocare">
                  The deep heating effect of ultrasound can alleviate discomfort
                  associated with bursitis, an inflammation of the fluid-filled
                  sacs that cushion joints.
                </p>
                <h3 className="senocare__heading__third">Muscle Spasms</h3>
                <p className="services__para__senocare">
                  Ultrasound can relax muscle tissue and improve flexibility,
                  making it beneficial for patients with muscle spasms.
                </p>
                <h3 className="senocare__heading__third">Bone injuries</h3>
                <p className="services__para__senocare">
                  ultrasound therapy if provided 1-2 weeks post injury helps
                  enhance bone healing. It is however not recommended for
                  unstable fractures. It is found to be extremely beneficial in
                  hairline fractures.(2)
                </p>
                <h3 className="senocare__heading__third">Varicose ulcers</h3>
                <p className="services__para__senocare">
                  it helps promote healing in case of pressure sores along with
                  varicose ulcers(2)
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">What To Expect</h2>
                <p className="services__para__senocare">
                  During an ultrasound therapy session, you can expect to lie
                  comfortably while a physiotherapist applies a water-based gel
                  to the targeted area. This gel allows for efficient
                  transmission of the ultrasound waves. The therapist will then
                  move the ultrasound probe over the injured area in a circular
                  motion, ensuring even distribution of the sound waves. Usually
                  no sensation is felt except the cool gel , however in high
                  intensities minimal heating might be felt. The session usually
                  lasts between 5 to 10 minutes.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={ultrasoundImg1}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">How Safe Is It?</h2>
                <p className="services__para__senocare">
                  Ultrasound therapy is considered safe when administered by
                  trained professionals. It is a non-invasive procedure that
                  utilizes sonic waves. However, certain precautions are taken
                  to ensure patient safety, such as avoiding the treatment over
                  areas with reduced sensation or open wounds or in areas
                  experiencing burns. Patients with specific medical conditions
                  or pregnancy should consult with their healthcare provider
                  before undergoing ultrasound therapy.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Does Ultrasound Therapy in Physiotherapy Work?
                </h2>
                <p className="services__para__senocare">
                  Numerous studies and clinical trials have supported the
                  effectiveness of ultrasound therapy in physiotherapy. It is
                  particularly beneficial in promoting tissue healing, reducing
                  pain, and improving range of motion. However, the success of
                  the treatment depends on various factors, including the
                  patient’s condition, adherence to treatment protocols, and the
                  skill of the therapist.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  What Are the Limitations of Ultrasound Therapy in
                  Physiotherapy?
                </h2>
                <p className="services__para__senocare">
                  While ultrasound therapy is a valuable tool in physiotherapy,
                  it has its limitations. It may not be the most suitable
                  treatment for all conditions or injuries. Some limitations
                  include:
                </p>
                <h3 className="senocare__heading__third">
                  Depth of Penetration
                </h3>
                <p className="services__para__senocare"></p>
                Ultrasound waves have limited penetration, making it less
                effective for deep-seated injuries.
                <h3 className="senocare__heading__third">Operator Skill</h3>
                <p className="services__para__senocare">
                  The effectiveness of ultrasound therapy can be influenced by
                  the skill and experience of the physiotherapist administering
                  the treatment.
                </p>
                <h3 className="senocare__heading__third">
                  Patient Variability
                </h3>
                <p className="services__para__senocare">
                  Individual patient responses may vary, and not everyone
                  experiences the same level of relief. In conclusion,
                  ultrasound therapy in physiotherapy is a versatile and safe
                  treatment option for a range of soft tissue injuries. While it
                  is not a panacea, when used appropriately, it can
                  significantly contribute to pain relief and the enhancement of
                  the body’s natural healing processes. Patients should discuss
                  the suitability of ultrasound therapy with their healthcare
                  providers and ensure they receive treatment from qualified
                  professionals to achieve the best results.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">Bibliography</h2>
                <p className="services__para__senocare">
                  1. Király M, Gömöri E, Kiss R, Nógrádi N, Nusser N, Hodosi K,
                  Bender T. Effects of various types of ultrasound therapy in
                  hip osteoarthritis - a double-blind, randomized, controlled,
                  follow-up study. Physiother Theory Pract. 2022
                  Dec;38(12):1958-1968. doi: 10.1080/09593985.2021.1895386. Epub
                  2021 Mar 10. PMID: 33715574.
                </p>
                <p className="services__para__senocare">
                  2. Singh,Jagmohan.Textbook of Electrotherapy ,3rd ed.Jaypee
                  Brothers Medical Publishers,2012.
                </p>
                <p className="services__para__senocare">
                  3. Akın C., Öken Ö., Köseoğlu B.F. Short-term effectiveness of
                  ultrasound treatment in patients with lateral epicondylitis:
                  randomized, single-blind, placebo-controlled, prospective
                  study. Arch Rheumatol. 2010;25(2):050–055.
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

export default UltrasoundThreapy;
