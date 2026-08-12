import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import Palliative1 from "../../assets/Image/ServiceImg/pallitive1.jpeg";
import Palliative2 from "../../assets/Image/ServiceImg/pallitive2.jpeg";
import Palliative3 from "../../assets/Image/ServiceImg/palletiveCare.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SEO from "../SEO";

const PalliativeCare = () => {
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
                  Learning About Leukaemia and Lymphoma
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Palliative1}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col xs={12} md={12} lg={6} className="senocare__text__content">
                <p className="services__para__senocare">
                  Leukaemia and lymphoma are both blood malignancies that damage
                  the cells that make up the blood and lymphatic systems. These
                  disorders can be difficult to manage since they affect not
                  just physical health but also mental well-being. The
                  challenges associated with lymphoma, a type of blood cancer
                  targeting the lymphatic system, underscore the importance of
                  comprehensive care, including palliative care for lymphoma
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
                  Leukemia: A Blood Cell Overproduction
                </h2>
                <p className="services__para__senocare">
                  Leukemia is a type of cancer that primarily affects the
                  blood-forming tissues, such as the bone marrow and the
                  lymphatic system resulting in the overproduction of abnormal
                  white blood cells, thus hindering the normal functioning of
                  healthy blood cells. These abnormal cells, often called
                  leukemia cells, accumulate and crowd out normal cells, leading
                  to complications. (1)
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Lymphoma: Affecting the Lymphatic System
                </h2>
                <p className="services__para__senocare">
                  Lymphoma, on the other hand, specifically targets the
                  lymphatic system which is a crucial part of the body’s immune
                  system responsible for fighting infections. This can happen in
                  various areas of the body, causing symptoms such as lymph node
                  swelling, exhaustion, and unexplained weight loss. (2)
                </p>
                <p className="services__para__senocare">
                  While leukemia and lymphoma are distinct diseases, they both
                  involve abnormalities in blood cells and can manifest symptoms
                  such as fatigue, weakness, and susceptibility to infections.
                  Furthermore, these illnesses can be classified depending on
                  their aggressiveness and rate of progression. Understanding
                  the nature and features of leukaemia or lymphoma is essential
                  for developing an appropriate treatment approach. Advancements
                  in medical research and treatment options have significantly
                  improved outcomes for individuals facing these diagnoses,
                  highlighting the importance of a comprehensive and
                  personalized approach to care. Palliative care in Lymphoma is
                  proved to be the best of the treatment approach for the
                  patient as it helps in easing pain.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Palliative2}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  Palliative Care: An Overview
                </h2>
                <p className="services__para__senocare">
                  Palliative care is a comprehensive approach to healthcare that
                  focuses on enhancing the quality of life for those suffering
                  from severe diseases. Contrary to the common misconception,
                  palliative care is not synonymous with end-of-life care; it
                  can be integrated into a patient’s treatment plan at any stage
                  of their illness. Its purpose is to alleviate the symptoms and
                  stress caused by the condition. (3)
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Treating Leukemia and Lymphoma—How Palliative Care Can Help
                </h2>
                <p className="services__para__senocare">
                  When battling leukemia or lymphoma, the treatment journey is
                  often intense and multifaceted. Conventional treatments like
                  chemotherapy, radiation, and stem cell transplants can take a
                  toll on the patient’s body, leading to various side effects
                  such as fatigue, pain, and emotional distress. This is where
                  palliative care in lympoma steps is a supportive partner in
                  the overall treatment plan.
                </p>
                <p className="services__para__senocare">
                  Palliative care specialists work collaboratively with the
                  patient’s medical team to manage symptoms and enhance the
                  overall well-being of the individual. Palliative care can help
                  people enduring severe therapies cope with the side effects,
                  making the therapeutic process more comfortable. Palliative
                  care in lymphoma contributes greatly to preserving a greater
                  quality of life throughout treatment by managing pain, nausea,
                  and emotional problems. (4)
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  How to Get Palliative Care in lymphoma{" "}
                </h2>
                <p className="services__para__senocare">
                  Accessing palliative care is a crucial aspect of a
                  comprehensive approach to leukemia and lymphoma treatment. It
                  is critical to start talking about palliative care early in
                  the treatment process. Patients and their families should take
                  the initiative to express their choices and concerns to the
                  medical professionals.
                </p>
                <p className="services__para__senocare">
                  Healthcare providers, including oncologists, can facilitate
                  the integration of palliative care into the treatment plan.
                  There are several medical institutes, seeking information from
                  support groups and advocacy organizations can also provide
                  significant insights into accessible palliative care services.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12}>
                <h2 className="senocare___heading__sencond">
                  How Senocare can help in treatment trough Palliative Care
                </h2>
                <p className="services__para__senocare">
                  We at Senocare provide specialized palliative care In lymphoma
                  where our teams collaborate with the primary oncology team to
                  provide a holistic approach to patient care.
                </p>
              </Col>

              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Providing emotional support
                </h3>
                <p className="services__para__senocare">
                  Beyond the physical aspects, leukemia and lymphoma can take a
                  substantial toll on the emotional well-being of patients and
                  their families. We help address these emotional challenges.
                  Social workers and counselors, being a part of our care teams,
                  play a pivotal role in providing psychological support.
                </p>
                <p className="services__para__senocare">
                  Coping with the uncertainty of a cancer diagnosis, managing
                  the psychological strain of treatment side effects, and
                  addressing existential issues are all important parts of
                  palliative care's emotional support. By fostering open
                  communication, we provide a space for patients to express
                  their fears and anxieties thus contributing to a more
                  resilient and empowered mindset.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Improving the quality of Life through Palliative Care in
                  Lymphoma
                </h2>
                <p className="services__para__senocare">
                  Senocare takes a holistic approach, treating the patient as a
                  whole—physically, emotionally, and spiritually. Integrating
                  alternative therapies like massage, acupuncture, or
                  mindfulness practises can improve the general well-being of
                  people with leukaemia or lymphoma.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Palliative3}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  Creating a Supportive Network
                </h2>
                <p className="services__para__senocare">
                  The journey through leukemia or lymphoma is not one that
                  individuals should face alone. Our team believes that it is
                  critical to have a strong support network. This network
                  includes family, friends, and community resources in addition
                  to healthcare professionals.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">Bibliography</h2>
                <p className="services__para__senocare">
                  1. Devine SM, Larson RA. Acute leukemia in adults: recent
                  developments in diagnosis and treatment. CA Cancer J Clin.
                  1994 Nov-Dec;44(6):326-52. doi: 10.3322/canjclin.44.6.326.
                  PMID: 7953914.
                </p>
                <p className="services__para__senocare">
                  2. https://www.cancer.gov/types/lymphoma
                </p>
                <p className="services__para__senocare">
                  3. Reymond L, Parker G, Gilles L, Cooper K. Home-based
                  palliative care. Aust J Gen Pract. 2018 Nov;47(11):747-752.
                  doi: 10.31128/AJGP-06-18-4607. PMID: 31207670.
                </p>
                <p className="services__para__senocare">
                  4. Potenza L, Scaravaglio M, Fortuna D, Giusti D, Colaci E,
                  Pioli V, Morselli M, Forghieri F, Bettelli F, Messerotti A,
                  Catellani H, Gilioli A, Marasca R, Borelli E, Bigi S, Longo G,
                  Banchelli F, D'Amico R, L Back A, Efficace F, Bruera E, Luppi
                  M, Bandieri E. Early palliative/supportive care in acute
                  myeloid leukaemia allows low aggression end-of-life
                  interventions: observational outpatient study. BMJ Support
                  Palliat Care. 2021 Nov 8:bmjspcare-2021-002898. doi:
                  10.1136/bmjspcare-2021-002898. Epub ahead of print. PMID:
                  34750145.
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

export default PalliativeCare;
