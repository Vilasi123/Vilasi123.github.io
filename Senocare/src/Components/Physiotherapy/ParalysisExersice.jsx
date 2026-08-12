import { Container, Row, Col } from "react-bootstrap";
import "./Physiotherapy.css";
import ParalysisImg2 from "../../assets/Image/physiotherapySection/paralysisTreatment.jpg";
import ParalysisImg from "../../assets/Image/physiotherapySection/paralysisTreatment1.jpg";
import ParalysisImg1 from "../../assets/Image/physiotherapySection/paralysisTreatment2.jpg";

import Accordion from "react-bootstrap/Accordion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const ParalysisExercise = () => {
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
                  Empowering Recovery: Home Physiotherapy Exercises for
                  Paralysis
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={ParalysisImg}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6} className="service__link__section">
                <div>
                  <ul>
                    <li>
                      <a
                        href="/physiotherapy-home-service/cupping-therapy-for-headaches/"
                        rel="noopener noreferrer">
                        Cupping Therapy for Headaches
                      </a>
                    </li>
                    <li>
                      <a
                        href="/physiotherapy-home-service/cupping-therapy-for-neck-pain/"
                        rel="noopener noreferrer">
                        Cupping Therapy for Neck Pain
                      </a>
                    </li>
                    <li>
                      <a
                        href="/physiotherapy-home-service/dry-needling/"
                        rel="noopener noreferrer">
                        Dry Needling Therapy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/physiotherapy-home-service/physiotherapy-for-lumbar-spondylosis/"
                        rel="noopener noreferrer">
                        Managing Lumbar Spondylosis with Physiotherapy
                      </a>
                    </li>
                    <li>
                      <a
                        href=" /physiotherapy-home-service/paralysis-treatment-at-home/"
                        rel="noopener noreferrer">
                        Paralysis treatment at home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/physiotherapy-home-service/physiotherapy-exercises-for-paralysis/"
                        rel="noopener noreferrer">
                        Physiotherapy Exercises for Paralysis
                      </a>
                    </li>
                    <li>
                      <a
                        href="/physiotherapy-home-service/electrotherapy-in-physiotherapy/"
                        rel="noopener noreferrer">
                        Electrotherapy in Physiotherapy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/physiotherapy-home-service/ultrasound-therapy/"
                        rel="noopener noreferrer">
                        Ultrasound Therapy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/physiotherapy-home-service/parkinsons-disease-treatment/"
                        rel="noopener noreferrer">
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
                <h2 className="senocare___heading__sencond">
                  Physiotherapy Exercises for Paralysis
                </h2>
                <p className="services__para__senocare">
                  Paralysis, whether caused by injury or neurological
                  conditions, presents significant challenges. However, hope and
                  progress can be found through physiotherapy exercises for
                  paralysis that can be performed at home. These exercises, when
                  pursued with determination and consistency, contribute to
                  regaining strength and improving overall quality of life for
                  individuals with paralysis.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Range of Motion Exercises for Paralysis
                </h2>
                <p className="services__para__senocare">
                  Maintaining joint flexibility is crucial for individuals with
                  paralysis. Simple range of motion exercises can be
                  incorporated into daily routines. These exercises involve
                  gently moving each joint through its full range of motion. For
                  example, swinging the arms and legs in a controlled manner,
                  bending and extending the knees, and rotating the wrists can
                  prevent stiffness and contractures as well as initiate
                  voluntary control.(1)
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Strengthening Exercises for Paralysis
                </h2>
                <p className="services__para__senocare">
                  Strengthening the muscles that are still functional is
                  essential. Even if the range of motion is limited, these
                  exercises can help slow muscle atrophy and improve overall
                  strength and posture. In cases with extreme muscle weakness,
                  strengthening exercises can be done in assistance with
                  electrical stimulation. Some effective exercises include leg
                  lifts, seated squats, pelvic bridging which can be further
                  progressed towards resistance band exercises. It’s important
                  to follow a customized exercise plan designed in consultation
                  with a physiotherapist.(2)
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={ParalysisImg1}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  Seated Balance and Stability Exercises for Paralysis
                </h2>
                <p className="services__para__senocare">
                  Maintaining balance and stability while sitting is crucial for
                  daily life. Individuals with paralysis can work on seated
                  balance exercises, such as sitting upright without support,
                  shifting weight from side to side, and reaching for objects
                  placed at various distances. This once achieved by the patient
                  can then be switched towards more difficult tasks including
                  balance training on a Swiss ball which can be later on
                  substituted with locomotor training (3) (4)
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Seated Balance and Stability Exercises for Paralysis
                </h2>
                <p className="services__para__senocare">
                  Maintaining balance and stability while sitting is crucial for
                  daily life. Individuals with paralysis can work on seated
                  balance exercises, such as sitting upright without support,
                  shifting weight from side to side, and reaching for objects
                  placed at various distances. This once achieved by the patient
                  can then be switched towards more difficult tasks including
                  balance training on a Swiss ball which can be later on
                  substituted with locomotor training (3) (4)
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Passive Stretching for Paralysis
                </h2>
                <p className="services__para__senocare">
                  In cases of severe paralysis, caregivers can assist with
                  passive stretching exercises. Gently moving the limbs through
                  their full range of motion, even when the individual cannot do
                  it themselves, helps prevent contractures and maintain joint
                  health.(1)
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Assistive Devices for Paralysis
                </h2>
                <p className="services__para__senocare">
                  While not exercises in the traditional sense, learning to use
                  assistive devices like wheelchairs and mobility aids
                  effectively is an essential part of home physiotherapy for
                  paralysis. A physiotherapist can provide guidance on using
                  these devices safely and efficiently. (5)
                </p>
                <p className="services__para__senocare">
                  It’s important to remember that progress in physiotherapy for
                  paralysis can be slow and challenging, but small gains can
                  lead to significant improvements over time. Before beginning
                  any home physiotherapy regimen, it’s crucial to consult with a
                  qualified physiotherapist or healthcare professional who can
                  tailor a program to individual needs and provide ongoing
                  support. With commitment and the right guidance, individuals
                  with paralysis can work towards regaining their independence
                  and improving their overall well-being from the comfort of
                  their homes.
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={ParalysisImg2}
                  className="img-fluid senocare__service__img"
                />
              </Col>

              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  Breathing Exercises for Paralysis
                </h2>
                <p className="services__para__senocare">
                  Deep breathing exercises are essential to maintain lung health
                  and prevent respiratory complications. Diaphragmatic
                  breathing, chest expansion exercises, and cough-assist
                  techniques help maintain good lung function. In cases of chest
                  congestion, gentle vibrations and forced expiratory techniques
                  are extremely beneficial.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">Bibliography</h2>
                <p className="services__para__senocare">
                  1. Billington ZJ, Henke AM, Gater DR Jr. Spasticity Management
                  after Spinal Cord Injury: The Here and Now. J Pers Med. 2022
                  May 17;12(5):808. doi: 10.3390/jpm12050808. PMID: 35629229;
                  PMCID: PMC9144471.
                </p>{" "}
                <p className="services__para__senocare">
                  2. Knutson JS, Fu MJ, Sheffler LR, Chae J. Neuromuscular
                  Electrical Stimulation for Motor Restoration in Hemiplegia.
                  Phys Med Rehabil Clin N Am. 2015 Nov;26(4):729-45. doi:
                  10.1016/j.pmr.2015.06.002. Epub 2015 Aug 14. PMID: 26522909;
                  PMCID: PMC4630679.
                </p>{" "}
                <p className="services__para__senocare">
                  3. Harkema SJ, Hillyer J, Schmidt-Read M, Ardolino E, Sisto
                  SA, Behrman AL. Locomotor training: as a treatment of spinal
                  cord injury and in the progression of neurologic
                  rehabilitation. Arch Phys Med Rehabil. 2012 Sep;93(9):1588-97.
                  doi: 10.1016/j.apmr.2012.04.032. PMID: 22920456.
                </p>{" "}
                <p className="services__para__senocare">
                  4. Gulzar A, Waris M; Qurat Ul Ain. Effects of 8 weeks
                  functional training programme on posture control and
                  functional mobility in spastic hemiplegic cerebral palsy. J
                  Pak Med Assoc. 2022 Jul;72(7):1278-1281. doi:
                  10.47391/JPMA.3476. PMID: 36156543.
                </p>{" "}
                <p className="services__para__senocare">
                  5. Wäckerlin S, Gemperli A, Sigrist-Nix D, Arnet U. Need and
                  availability of assistive devices to compensate for impaired
                  hand function of individuals with tetraplegia. J Spinal Cord
                  Med. 2020 Jan;43(1):77-87. doi: 10.1080/10790268.2018.1479054.
                  Epub 2018 Jun 4. PMID: 29863967; PMCID: PMC7006670.
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

export default ParalysisExercise;
