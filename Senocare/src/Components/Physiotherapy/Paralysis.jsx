import { Container, Row, Col } from "react-bootstrap";
import "./Physiotherapy.css";
import ParalysisImg from "../../assets/Image/physiotherapySection/Paralysis.jpg";
import ParalysisImg2 from "../../assets/Image/physiotherapySection/Paralysis1.jpg";
import ParalysisImg1 from "../../assets/Image/physiotherapySection/Paralysis2.jpg";

import Accordion from "react-bootstrap/Accordion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const Paralysis = () => {
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
                  Paralysis treatment at home
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
                <h2 className="senocare___heading__sencond mt-4">
                  What is Paralysis and Paralysis Treatment at Home?
                </h2>
                <p className="services__para__senocare">
                  A medical disorder characterized by the loss of muscular
                  function and control in part or all of the body is known as
                  paralysis. It might be transient or persistent and stem from a
                  variety of underlying factors. When the neurological system,
                  which includes the brain, spinal cord, and peripheral nerves,
                  is damaged, paralysis develops.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Paralysis is classified into numerous
                </h2>
                <h3 className="senocare__heading__third">Monoplegia</h3>
                <p className="services__para__senocare">
                  A monoplegia is a paralysis that affects only one limb, such
                  as an arm or leg.
                </p>
                <h3 className="senocare__heading__third">Hemiplegia</h3>
                <p className="services__para__senocare">
                  It is a type of paralysis that affects one side of the body
                  and is often caused by a stroke.
                </p>
                <h3 className="senocare__heading__third">Paraplegia</h3>
                <p className="services__para__senocare">
                  Paralysis of both legs and, in certain cases, the lower trunk
                  caused by spinal cord injury.
                </p>
                <h3 className="senocare__heading__third">
                  Quadriplegia (Tetraplegia)
                </h3>
                <p className="services__para__senocare">
                  Paralysis of all four limbs and the trunk, frequently caused
                  by severe spinal cord injuries or neurological disorders.
                </p>
                <h3 className="senocare__heading__third">Diplegia</h3>
                <p className="services__para__senocare">
                  It is characterized by paralysis of the same bodily component
                  on both sides, such as both legs or both arms. Generalized (or
                  complete) paralysis: paralysis that affects the entire body
                  and can be caused by illnesses such as advanced syphilis.
                </p>
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
                <h2 className="senocare___heading__sencond ">
                  The following are some of the causes of paralysis:
                </h2>
                <h3 className="senocare__heading__third">Stroke</h3>
                <p className="services__para__senocare">
                  A blockage of blood flow to the brain. Damage to the spinal
                  cord can result in a loss of motor function below the level of
                  lesion.
                </p>
              </Col>
              <Col xs={12}>
                <h3 className="senocare__heading__third">Nerve damage</h3>
                <p className="services__para__senocare">
                  Trauma, illnesses such as multiple sclerosis, and ailments
                  such as neuropathy can all cause nerve damage. Traumatic brain
                  injuries or disorders affecting the brain can result in
                  paralysis. Autoimmune diseases, such as Guillain-Barré
                  syndrome, can induce temporary paralysis. Neurodegenerative
                  illnesses, such as amyotrophic lateral sclerosis (ALS), can
                  result in gradual paralysis. Paralysis symptoms can range from
                  slight muscular weakness to full loss of motor function, and
                  the amount and severity of paralysis are determined by the
                  underlying cause and location of the injury in the
                  neurological system. Depending on the cause and prognosis,
                  treatment may include physical therapy, assistive devices,
                  drugs, or, in certain circumstances, surgery. Treatment is to
                  improve a person's function and quality of life.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond ">
                  Symptoms of Paralysis
                </h2>
                <p className="services__para__senocare">
                  Paralysis symptoms can vary greatly depending on the
                  underlying cause and location of the injury in the
                  neurological system. The loss of muscular function and control
                  in part or all of the body is characterized by paralysis. The
                  following are some frequent symptoms and indicators of
                  paralysis:
                </p>
                <h3 className="senocare__heading__third">Muscle Weakness</h3>
                <p className="services__para__senocare">
                  This is frequently the first observable sign. Afflicted
                  muscles may feel weak, and people may find it difficult to
                  move the affected body area. Complete or partial lack of
                  voluntary movement in the afflicted region, such as an arm,
                  leg, or both. Individuals with paralysis may feel diminished
                  or full loss of sensation in the afflicted region, in addition
                  to losing muscular control. They may be incapable of sensing
                  pain, touch, warmth, or pressure.
                </p>
                <h3 className="senocare__heading__third">
                  Inability to Perform Daily Activities
                </h3>
                <p className="services__para__senocare">
                  Paralysis can make doing ordinary actions like walking,
                  dressing, eating, or holding items difficult or impossible.
                </p>
                <h3 className="senocare__heading__third">
                  Muscular Spasticity or Stiffness
                </h3>
                <p className="services__para__senocare">
                  In certain situations, paralysis is followed with muscular
                  spasms, tightness, or stiffness, which can be uncomfortable
                  and make movement difficult. Deep tendon reflexes, such as the
                  knee-jerk reflex, may be missing or reduced in paralyzed
                  limbs.
                </p>
                <h3 className="senocare__heading__third">
                  Changes in Appearance
                </h3>
                <p className="services__para__senocare">
                  Due to a lack of muscular function, afflicted limbs may seem
                  smaller or atrophied depending on the severity of the
                  paralysis.
                </p>
                <h3 className="senocare__heading__third">
                  Difficulties managing the Bladder and Bowel
                </h3>
                <p className="services__para__senocare">
                  Lower-body paralysis, such as paraplegia, can cause problems
                  managing the bladder and bowel processes.
                </p>
                <h3 className="senocare__heading__third">Breathing Issues</h3>
                <p className="services__para__senocare">
                  Severe paralysis, particularly if it affects the muscles
                  involved in breathing, might cause respiratory problems. Pain
                  & Discomfort: Some people with paralysis may have pain or
                  discomfort in the paralyzed area due to nerve injury, pressure
                  sores, or other circumstances. It's vital to remember that
                  paralysis symptoms can vary widely depending on the source,
                  location, and amount of the neurological injury. The prognosis
                  and treatment options for paralysis vary depending on the
                  underlying illness. If someone develops sudden or inexplicable
                  paralysis, it is critical to seek medical help as soon as
                  possible for a correct diagnosis and treatment.
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
                <h2 className="senocare___heading__sencond ">
                  Paralysis Treatment at Home
                </h2>
                <h2 className="senocare___heading__sencond ">
                  How does physiotherapy help in Paralysis?
                </h2>
                <p className="services__para__senocare">
                  Physiotherapy, often known as physical therapy, is essential
                  in the rehabilitation and care of those who have paralysis. It
                  is a subspecialty of medicine that focuses on restoring and
                  increasing physical function, mobility, and overall well-being
                  in patients suffering from various health disorders, including
                  paralysis. Here's how physiotherapy may assist with paralysis:
                </p>
              </Col>
              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Improving Muscle Strength and Function
                </h3>
                <p className="services__para__senocare">
                  Physiotherapists collaborate with patients to create
                  personalized exercise programs targeted at strengthening
                  damaged or paralyzed muscles. To promote muscular
                  contractions, they employ procedures such as resistance
                  training and functional electrical stimulation (FES). This can
                  aid in the restoration of some muscular function and control.
                </p>
                <h3 className="senocare__heading__third">
                  Exercises for Range of Motion (ROM)
                </h3>
                <p className="services__para__senocare">
                  Physiotherapy includes exercises for range of motion (ROM)
                  that assist maintain or increase joint flexibility.
                  Maintaining joint mobility is critical for preventing
                  contractures and muscle rigidity in paralyzed limbs.
                  Physiotherapists assist patients with paralysis in learning
                  how to utilize mobility aids such as wheelchairs, walkers, and
                  orthotic devices. They teach transfer and safe mobility
                  practices, which can improve independence and quality of life.
                </p>
                <h3 className="senocare__heading__third">Gait Training</h3>{" "}
                <p className="services__para__senocare">
                  Physiotherapists give gait training to those who have partial
                  paralysis or are attempting to restore their ability to walk.
                  This includes teaching people how to walk with assistance
                  devices or braces, as well as relearning walking patterns.
                </p>
                <h3 className="senocare__heading__third">Pain Management</h3>
                <p className="services__para__senocare">
                  Some people with paralysis have pain as a result of muscle
                  spasms, joint disorders, or nerve abnormalities.
                  Physiotherapists treat pain and discomfort using a variety of
                  modalities, manual treatments, and exercises. Physiotherapists
                  analyze the risk of falls and provide techniques to lessen
                  that risk. To increase stability, they may concentrate on
                  balance and coordination exercises.
                </p>
                <h3 className="senocare__heading__third">Respiratory Care</h3>
                <p className="services__para__senocare">
                  Physiotherapists can administer breathing exercises to
                  optimize lung function and prevent respiratory problems in
                  situations of paralysis affecting the respiratory muscles.
                </p>
                <h3 className="senocare__heading__third">
                  Assistive Devices and Adaptive Techniques
                </h3>
                <p className="services__para__senocare">
                  Physiotherapists can recommend and support people who are
                  paralyzed in using assistive devices and adaptive techniques
                  to help them with everyday tasks. These may include
                  specialized wheelchairs, adaptable equipment, and dressing,
                  grooming, and transferring skills.
                </p>
                <h3 className="senocare__heading__third">Patient Education</h3>
                <p className="services__para__senocare">
                  Education is an important component of physiotherapy. Patients
                  and carers are informed about their disease, treatment plan,
                  and methods for preserving or enhancing physical function and
                  general health.
                </p>
                <p className="services__para__senocare">
                  Coping with the obstacles of paralysis may be emotionally and
                  psychologically draining. Individuals and their families are
                  frequently supported, motivated, and encouraged by
                  physiotherapists during the recovery process.
                </p>
                <p className="services__para__senocare">
                  Physiotherapy for paralysis is highly individualized and
                  focuses on each person's unique requirements and goals. It is
                  usually part of a multidisciplinary rehabilitation strategy
                  that includes input from physicians, occupational therapists,
                  and other healthcare experts. The ultimate goal is to assist
                  people who are paralyzed in achieving the best degree of
                  function, independence, and quality of life possible.
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond "> References</h2>
                <p className="services__para__senocare">
                  1. Anderson KD. Targeting recovery: priorities of the spinal
                  cord-injured population. J Neurotrauma. 2004
                  Oct;21(10):1371–1383.
                </p>
                <p className="services__para__senocare">
                  2. Spinal Cord Injury Facts and Figures at a Glance. NSCISC.
                  Published 2018.
                </p>
                <p className="services__para__senocare">
                  4. Accessed May 14, 2020. Evangelista Santos Barcelos AC,
                  Scardino FB, Patriota GC, Rotta JM, Botelho RV. Paraparesis or
                  incomplete paraplegia? How should we call it? NCBI . Published
                  April 2009. Accessed May 14, 2020.
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

export default Paralysis;
