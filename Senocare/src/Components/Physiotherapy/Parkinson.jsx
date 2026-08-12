import { Container, Row, Col } from "react-bootstrap";
import "./Physiotherapy.css";
import parkinsonImg from "../../assets/Image/physiotherapySection/parkinson.jpg";
import parkinsonImg1 from "../../assets/Image/physiotherapySection/parkinson1.jpg";
import parkinsonImg2 from "../../assets/Image/physiotherapySection/parkinson2.jpg";
import Accordion from "react-bootstrap/Accordion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SEO from "../SEO";

const Parkinson = () => {
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
                  Parkinson’s Disease Treatment
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={parkinsonImg}
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
                  What is Parkinson’s Disease?
                </h2>
                <p className="services__para__senocare">
                  Parkinson’s disease is a neurodegenerative disorder which is
                  progressive and affects movement primarily . It occurs when
                  dopamine producing nerve cells (neurons) in the brain
                  gradually break down or die resulting in low levels of
                  dopamine which is a chemical messenger crucial for smooth,
                  controlled muscle movements. Individuals with Parkinson’s
                  experience tremors, stiffness, and difficulty with balance and
                  coordination.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Symptoms of Parkinson’s Disease
                </h2>
                <p className="services__para__senocare">
                  The symptoms of Parkinson’s disease can vary but often include
                  tremors, bradykinesia (slowed movements), muscle stiffness,
                  and impaired balance (1). Patients may also experience the
                  following major symptoms:
                </p>
                <h3 className="senocare__heading__third">Motor Symptoms-</h3>
                <ul>
                  <li>Decreased ability of muscles to generate force</li>
                  <li> Fatigue</li>
                  <li> Episodes of freezing of movement</li>
                  <li>Reduced speed of walking</li>
                  <li> Difficulty walking backwards and turning</li>
                  <li> Difficulty in performing multiple tasks</li>
                  <li> Difficulty in initiating tasks</li>
                  <li>
                    Posture: people with Parkinson’s have an excessively humped
                    mid back also called kyphosis along with a forward head. Due
                    to one sided weakness they often lean towards the weaker
                    side.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">Sensory symptoms</h3>
                <ul>
                  <li>Tremors </li>
                  <li>Pain</li>
                  <li>Tingling or prickling sensation</li>
                </ul>
                <h3 className="senocare__heading__third">Other symptoms</h3>
                <ul>
                  <li>Dementia</li>
                  <li> Difficulty swallowing</li>
                  <li>Bladder dysfunction</li>
                </ul>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Causes for Parkinson’s Disease
                </h2>
                <p className="services__para__senocare">
                  The exact cause of Parkinson’s is still unknown, but a
                  combination of genetic and environmental factors is believed
                  to contribute. Certain genetic mutations increase the risk,
                  while exposure to toxins and head injuries may also play a
                  role.(2)
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Types of Parkinson’s Disease
                </h2>
                <h3 className="senocare__heading__third">
                  Parkinson’s disease can be classified into 3 main types:
                </h3>
                <p className="services__para__senocare">
                  <b>Idiopathic Parkinson’s</b> disease consists of most cases
                  with no definite cause, here genetic factors play a major
                  role.
                </p>
                <p className="services__para__senocare">
                  <b>Secondary Parkinson’s</b> this results from a number of
                  definite conditions such as toxins like carbon monoxide,
                  tumours, trauma to the brain
                </p>
                <p className="services__para__senocare">
                  <b>Atypical Parkinson’s</b> this includes individuals which
                  show symptoms like Parkinson’s but due to some underlying
                  neurological conditions like multiple system atrophy, machaao
                  Joseph disease.
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={parkinsonImg1}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  Stages of Parkinson’s Disease
                </h2>
                <p className="services__para__senocare">
                  Parkinson’s is typically progresses in five stages based on
                  the progression of symptoms. In the early stages, symptoms may
                  be mild including tremors, rigidity, mild posture
                  abnormalities and affect only one side of the body. (3) As the
                  disease advances, symptoms worsen, impacting both sides and
                  leading to more severe motor and non-motor complications along
                  with dementia thus affecting the individuals day to day
                  activities .
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Diagnosis for Parkinson’s Disease
                </h2>
                <p className="services__para__senocare">
                  Diagnosing Parkinson’s can be challenging, as there is no
                  definitive test. Medical professionals rely on a thorough
                  medical history, a neurological examination, and sometimes
                  imaging tests such as MRI to rule out other conditions. A
                  response to Parkinson’s medication may also support the
                  diagnosis.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Parkinson’s Disease Treatment
                </h2>
                <p className="services__para__senocare">
                  Treatment aims to manage symptoms and improve quality of life.
                  Medications including levodopa, that increase dopamine levels,
                  carbidopa, are commonly prescribed. (4)Physical therapy,
                  occupational therapy, and speech therapy can help address
                  movement and communication challenges. Physiotherapy, in
                  particular, plays a crucial role in maintaining mobility and
                  preventing complications.
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Physiotherapy interventions for Parkinson’s disease
                </h2>
                <p className="services__para__senocare">
                  <b>Range of motion exercises -</b> generalised body movements
                  of all joints help maintain the available motion of the body
                  <p className="services__para__senocare"> </p>
                  <b>Muscle endurance exercises - </b>lightweight exercises with
                  increased repetition help improve muscle endurance and help in
                  better movement control.{" "}
                </p>
                <p className="services__para__senocare">
                  <b>Posture control exercises -</b> exercises to strengthen the
                  weak muscles and stretch the tight muscles with awareness
                  about right posture helps in improving chronic abnormal
                  postures{" "}
                </p>
                <p className="services__para__senocare">
                  <b>Relaxation exercises - </b>these include stretching
                  exercises and deep breathing techniques to help in relaxation
                  of the body along with improving rigidity of muscles.{" "}
                </p>
                <p className="services__para__senocare">
                  <b>Cueing strategies -</b> these include audio and visual
                  clues to help individuals initiate movement.(5){" "}
                </p>
                <p className="services__para__senocare">
                  <b>Functional training - </b>functional activities that mimic
                  daily task related movements help regain lost muscle
                  strategies{" "}
                </p>
                <p className="services__para__senocare">
                  <b>Balance exercises -</b> these help maintain balance and
                  avoid falls{" "}
                </p>
                <p className="services__para__senocare">
                  <b>Orthotics-</b> certain assistive devices help secure proper
                  posture of the body{" "}
                </p>
                <p className="services__para__senocare">
                  <b>Aerobic exercises -</b> these are extremely helpful in
                  early stages of the disease and help with movement control and
                  improved cardiovascular endurance.
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={parkinsonImg1}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  Myths About Parkinson’s Disease
                </h2>
                <p className="services__para__senocare">
                  Several misconceptions surround Parkinson’s disease, including
                  the myth that it only affects the elderly. While it is more
                  common in older adults, younger individuals can also develop
                  Parkinson’s. Another misconception is that Parkinson’s is
                  solely a movement disorder; however, it can involve a range of
                  non-motor symptoms affecting various aspects of daily life,
                  emphasizing the importance of exploring Parkinson’s Disease
                  Treatment options.
                </p>
              </Col>{" "}
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Support for People Living with Parkinson’s Disease
                </h2>
                <p className="services__para__senocare">
                  Living with Parkinson’s presents unique challenges, but
                  various support systems can make a significant difference.
                  Parkinson’s support groups provide a platform for individuals
                  to share experiences and coping strategies. Family and friends
                  can offer crucial emotional support, while healthcare
                  professionals, including neurologists and therapists, play
                  pivotal roles in managing the disease.
                </p>
                <p className="services__para__senocare">
                  In addition to medical and emotional support, staying
                  physically active is essential. Regular exercise, including
                  targeted physiotherapy exercises, can help improve mobility,
                  flexibility, and balance. It also contributes to overall
                  well-being, potentially slowing the progression of symptoms.
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  How can Senocare help?
                </h2>
                <p className="services__para__senocare">
                  Parkinson’s disease is a complex condition that requires a
                  multidisciplinary approach for effective management. We at
                  Senocare provide individuals with nurturing caregivers, proper
                  specialist consultation, doorstep delivery of medications, at
                  home physiotherapy along with emotional support . We help
                  individuals understand the symptoms, causes, and available
                  support which is crucial for both individuals living with
                  Parkinson’s and their caregivers. By dispelling myths and
                  fostering a supportive environment, we can enhance the quality
                  of life for those navigating the challenges of Parkinson’s
                  disease.
                </p>{" "}
              </Col>{" "}
            </Row>

            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">Bibliography</h2>
                <p className="services__para__senocare">
                  1. Kalia LV, Lang AE. Parkinson's disease. Lancet. 2015 Aug
                  29;386(9996):896-912. doi: 10.1016/S0140-6736(14)61393-3. Epub
                  2015 Apr 19. PMID: 25904081.
                </p>
                <p className="services__para__senocare">
                  2. Bloem BR, Okun MS, Klein C. Parkinson's disease. Lancet.
                  2021 Jun 12;397(10291):2284-2303. doi:
                  10.1016/S0140-6736(21)00218-X. Epub 2021 Apr 10. PMID:
                  33848468.
                </p>
                <p className="services__para__senocare">
                  3.
                  https://www.parkinson.org/understanding-parkinsons/what-is-parkinsons/stages.
                </p>
                <p className="services__para__senocare">
                  4. Aminoff MJ. Pharmacologic management of parkinsonism and
                  other movement disorders. In: Katzung BG, editor. Basic and
                  Clinical Pharmacology. 10th ed. New York: McGraw-Hill Lange
                  Medical; 2007. pp. 442–451.
                </p>
                <p className="services__para__senocare">
                  5. Gao C, Liu J, Tan Y, Chen S. Freezing of gait in
                  Parkinson's disease: pathophysiology, risk factors and
                  treatments. Transl Neurodegener. 2020 Apr 15;9:12. doi:
                  10.1186/s40035-020-00191-5. PMID: 32322387; PMCID:
                  PMC7161193..
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

export default Parkinson;
