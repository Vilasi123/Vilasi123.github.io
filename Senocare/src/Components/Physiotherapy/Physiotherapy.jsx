import { Container, Row, Col } from "react-bootstrap";
import "./Physiotherapy.css";
import Physio from "../../assets/Image/physiotherapySection/Physio.jpg";
import Physio1 from "../../assets/Image/physiotherapySection/Physio1.jpg";
import Physio2 from "../../assets/Image/physiotherapySection/Physio2.jpg";
import Accordion from "react-bootstrap/Accordion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";

import "./Physiotherapy.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const Physiotherapy = () => {
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
                  Physiotherapy Home Service
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Physio}
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
              <Col xs={12}>
                <p className="services__para__senocare">
                  Take better care of your loved ones with{" "}
                  <a
                    href="/physiotherapy-at-home-in-gurgaon"
                    className="hyper__link">
                    physiotherapy home service
                  </a>{" "}
                  from Senocare.{" "}
                  <a href="/arthritis" className="hyper__link">
                    Arthritis
                  </a>
                  , osteoporosis, accident, or surgery – our medically-certified
                  physiotherapists are well-trained to help recover patients
                  from injury and improve mobility.
                </p>
                <p className="services__para__senocare">
                  Physiotherapy home service is an investment in your health,
                  independence, and quality of life. It empowers you to manage
                  pain, regain mobility, improve daily activities, and live life
                  to the fullest, all within the familiar embrace of your own
                  home. Physiotherapist help individuals who have difficulty
                  moving owing to old age, a possible traumatic incident, or
                  inherent physical issues. Our physiotherapists evaluate their
                  patients' ailments, establish diagnoses, and develop
                  personalised treatment regimens based on those diagnoses.Take
                  better care of your loved ones with physiotherapy home service
                  from Senocare.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  What is Physiotherapy?
                </h2>
                <p className="services__para__senocare">
                  Physiotherapy is a healthcare profession focusing on
                  maximizing the correct movement and function. It involves the
                  assessment, diagnosis, treatment and prevention of various
                  conditions and injuries using physical methods.
                  Physiotherapists, also referred to as physical therapists,
                  help individuals regain their musculoskeletal strength and
                  maintain their physical well-being.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Who is a Physiotherapist?
                </h2>
                <p className="services__para__senocare">
                  A physiotherapist is a highly trained healthcare professional
                  with expertise in anatomy, physiology, and rehabilitation.
                  They work in close proximity with patients and develop
                  personalized treatment plans which include exercises, manual
                  therapy electrical therapy devices, and education to address
                  the specified health issues.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Benefits of Physiotherapy
                </h2>
                <h3 className="senocare__heading__third">Pain Management</h3>
                <p className="services__para__senocare">
                  Physiotherapy is a key player in managing pain without relying
                  solely on medication. Through targeted exercises and
                  techniques and use of Electrotherapeutic devices such as TENS,
                  physiotherapists help individuals alleviate pain caused by
                  various conditions, fostering long-term relief. (1)
                </p>

                <h3 className="senocare__heading__third">
                  Prevention of Surgery
                </h3>
                <p className="services__para__senocare">
                  In many cases, physiotherapy can provide effective
                  alternatives to surgical interventions. Through targeted
                  interventions and consistent rehabilitation programs,
                  physiotherapists aim to address underlying issues, reducing
                  the need for invasive procedures.
                </p>
                <h3 className="senocare__heading__third">
                  Improve Mobility and Balance
                </h3>
                <p className="services__para__senocare">
                  In individuals suffering from musculoskeletal and neurological
                  disorders or injuries, physiotherapy helps regain the lost
                  mobility and independence along with balance and coordination
                  . Tailored exercises and interventions aid in restoring and
                  maintaining optimal movement, fostering a better quality of
                  life. (2)
                </p>
                <h3 className="senocare__heading__third">
                  Post-Stroke Recovery
                </h3>
                <p className="services__para__senocare">
                  For individuals recovering from a stroke, physiotherapy plays
                  a vital role in rehabilitation. Therapists focus on restoring
                  lost functions, improving strength and developing lost motor
                  control thus helping patients regain independence in their
                  daily activities. (3)
                </p>
                <h3 className="senocare__heading__third">Managing Diabetes</h3>
                <p className="services__para__senocare">
                  Physiotherapy contributes significantly to managing diabetes
                  by promoting regular physical activity which in turn helps
                  improve the cardiac output and improves cardiovascular
                  endurance Exercise programs designed by physiotherapists help
                  control blood sugar levels and enhance overall well-being.(4)
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Physio1}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  What are the benefits of physiotherapy at home?
                </h2>
                <ul className="seno__service__ul">
                  <li>No commute to clinics</li>
                  <li>Personalized sessions</li>
                  <li>More time for exercise</li>
                </ul>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  When do you need physiotherapy?
                </h2>
                <h2 className="senocare___heading__sencond">
                  Arthritis (Knee Pain/ Shoulder Pain/ Spinal Arthritis)
                </h2>
                <p className="services__para__senocare">
                  When do you need physiotherapy? Arthritis causes inflammation
                  in the joints causing pain. Regular physiotherapy help
                  alleviate pain. Physiotherapy is helpful in both Rheumatoid
                  Arthritis (RA) as well as Osteoarthritis (OA).
                </p>
                <h3 className="senocare__heading__third">
                  Recovery from surgery
                </h3>
                <p className="services__para__senocare">
                  Hip replacement surgery, orthopaedic surgery, etc. strict
                  movement. Physiotherapy helps get people moving and regain
                  strength.
                </p>
                <h3 className="senocare__heading__third">Stroke</h3>
                <p className="services__para__senocare">
                  Stroke causes loss of movement. Physiotherapy sessions can
                  restore muscle strength and get the people who suffered stroke
                  moving.
                </p>
                <h3 className="senocare__heading__third">Meniscus wear</h3>
                <p className="services__para__senocare">
                  Meniscus wear causes excruciating pain in the knee, causing
                  difficulty in moving. Physiotherapy sessions can help
                  alleviate inflammation and get you moving again.
                </p>
                <h3 className="senocare__heading__third">Lymphoedema</h3>
                <p className="services__para__senocare">
                  Lymphoedema causes swelling in the arms and legs.
                  Physiotherapy help drain the lymph and relax the lymphatic
                  system in the body.
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Musculoskeletal Problems (Tendonitis, Bursitis, etc.)
                </h2>
                <p className="services__para__senocare">
                  Musculoskeletal problems, such as Tendonitis, Bursitis, etc.
                  cause acute pain. Physiotherapy helps alleviate the pain due
                  to musculoskeletal conditions.
                </p>
                <h3 className="senocare__heading__third">
                  Geriatric Physiotherapy
                </h3>
                <p className="services__para__senocare">
                  As we age, maintaining optimal mobility and muscle strength
                  becomes crucial. Geriatric physiotherapy focuses on addressing
                  age-related issues, enhancing flexibility, and improving
                  balance to prevent falls and preventing bad postures. Moreover
                  regular physical activity helps aid mental illness such as
                  depression in adults. (5)
                </p>
                <h3 className="senocare__heading__third">
                  Problems Related to Posture
                </h3>
                <p className="services__para__senocare">
                  Poor posture can lead to a host of problems, from chronic pain
                  to diminished mobility. Physiotherapy intervenes by assessing
                  and correcting posture issues, preventing long-term
                  complications.
                </p>
                <h3 className="senocare__heading__third">Joint Pain</h3>
                <p className="services__para__senocare">
                  {" "}
                  Whether due to arthritis or injuries, joint pain can severely
                  impact daily life. With the help of physiotherapy individuals
                  experience a decrease in pain, improved joint function and
                  muscular control with enhanced overall joint health.
                </p>
                <h3 className="senocare__heading__third">
                  Neurological Conditions
                </h3>
                <p className="services__para__senocare">
                  {" "}
                  Physiotherapy plays a pivotal role in managing neurological
                  conditions like Parkinson’s disease, (6) spinal cord injuries,
                  and{" "}
                  <a
                    href="/physiotherapy-home-service/stroke-paralysis"
                    className="hyper__link">
                    stroke/paralysis.
                  </a>
                  Therapists develop specialized plans which help prevent muscle
                  atrophy and improve mobility, strength, and independence of
                  the individuals.
                </p>
                <h3 className="senocare__heading__third">
                  Contusions or Inflammation
                </h3>
                <p className="services__para__senocare">
                  {" "}
                  After injuries or surgeries, physiotherapy aids in reducing
                  inflammation, promoting healing, and preventing complications.
                  It’s a crucial component of post-trauma recovery.
                </p>
                <h3 className="senocare__heading__third">
                  Asthma and Respiratory Issues
                </h3>
                <p className="services__para__senocare">
                  Physiotherapy extends beyond musculoskeletal concerns. For
                  individuals with asthma or respiratory problems such as lung
                  congestions, pneumonia , therapists use breathing exercises
                  and techniques to enhance lung function, improve oxygen uptake
                  and overall respiratory health.
                </p>
                <h3 className="senocare__heading__third">
                  Pediatric Physiotherapy
                </h3>
                <p className="services__para__senocare">
                  Children with developmental delays or congenital conditions
                  benefit from pediatric physiotherapy. Therapists work on motor
                  skills, coordination, and overall physical development in a
                  child-friendly manner.(7)
                </p>
              </Col>
            </Row>
            <Row className="services__content__senocare">
              <Col>
                <h2 className="senocare___heading__sencond">
                  What are the physiotherapy treatments/ procedures available at
                  home?
                </h2>
                <h3 className="senocare__heading__third">
                  ROM (Range of Motion Exercises)
                </h3>
                <p className="services__para__senocare">
                  This physiotherapy is often recommended to people who have
                  suffered orthopaedic injuries. While broken bones heal with
                  time and rest, prolonged rest can immobilize joints.
                  Physiotherapists help perform exercises that help you regain
                  muscle strength, improve motion, and heal broken bones faster.
                </p>
                <h3 className="senocare__heading__third">Electrotherapy</h3>
                <p className="services__para__senocare">
                  <a
                    href="/physiotherapy-home-service/electrotherapy-in-physiotherapy/"
                    className="hyper__link">
                    {" "}
                    Electrotherapy
                  </a>{" "}
                  uses electricity to stimulate muscles. This is often
                  recommended for people with paralysis and severely limited
                  range of motions. Electrotherapy can be used along with
                  ultrasound and laser therapy.
                </p>
                <h3 className="senocare__heading__third">Cryotherapy</h3>
                <p className="services__para__senocare">
                  Cryotherapy uses application of ice pack or ice message to
                  stimulate muscles. This is often recommended when people
                  complain of sore or stiff muscles. Cryotherapy reduces muscle
                  inflammation.
                </p>
                <h3 className="senocare__heading__third">Heat therapy</h3>
                <p className="services__para__senocare">
                  {" "}
                  Heat therapy uses application of heat pack or paraffin wax to
                  stimulate blood flow. This helps alleviate acute pain and
                  reduce stiffness.
                </p>
                <h3 className="senocare__heading__third">Ultrasound therapy</h3>
                <p className="services__para__senocare">
                  {" "}
                  <a
                    href="/physiotherapy-home-service/ultrasound-therapy/"
                    className="hyper__link">
                    {" "}
                    Ultrasound therapy
                  </a>{" "}
                  uses sound waves to alleviate pain. It is useful in treating
                  chronic pain, improving blood circulation, and accelerates
                  tissue healing.
                </p>
              </Col>
            </Row>
            <Row className="services__content__senocare">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={Physio2}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  How to Prepare for a Physiotherapy Session at Home
                </h2>
                <p className="services__para__senocare">
                  Preparing for a physiotherapy session at home involves
                  creating a comfortable space, gathering any required
                  equipment, and having a clear understanding of your
                  therapist’s recommendations. Dress comfortably, stay hydrated,
                  and communicate openly with your therapist for an effective
                  session.
                </p>
              </Col>
            </Row>
            <Row className="services__content__senocare">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Why Do Physiotherapy Exercises?
                </h2>
                <p className="services__para__senocare">
                  Physiotherapy exercises serve a large amount of purposes,
                  including improved muscle strength and voluntary control.
                  Better flexibility and joint mobility, and enhanced functional
                  abilities. It also helps improve balance and coordination
                  further preventing the risk of falls and post fall injuries.
                </p>
                <p className="services__para__senocare">
                  In conclusion, recognizing the need for physiotherapy spans a
                  broad spectrum of conditions and age groups. Whether you’re a
                  senior aiming for better mobility, an individual with joint
                  pain, or a parent seeking help for your child’s development,
                  physiotherapy offers tailored solutions to improve your
                  overall quality of life.
                </p>
              </Col>
            </Row>
            <Row className="services__content__senocare">
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
                        Q1: Can I receive Physiotherapy Home Service?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Absolutely, we offer the convenience of physiotherapy
                        sessions in the comfort of your home.
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
                        Q2: How can I avail of Physiotherapy Home Service?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Senocare India provides home-based physiotherapy. Reach
                        out to us to schedule your session.
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
                        Q3: What's involved in Physiotherapy Home Service?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Our skilled physiotherapists assess, diagnose, and treat
                        your concerns using tailored techniques such as
                        exercises and manual therapy.
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
                        Q4: Who benefits from Physiotherapy Home Service?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        If you have mobility issues, post-surgery recovery
                        needs, or face difficulty visiting a clinic, our home
                        service is ideal.
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
                        Q5: What's the cost of Physiotherapy Home Service in
                        India?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Costs vary depending on your location and treatment
                        requirements. Contact Senocare for detailed information.
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
                        Q6: Can I have Physiotherapy Home Service twice a day?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        The frequency depends on your condition; our experts
                        will advise on the suitable regimen.
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
                        Q7: Who is eligible for Physiotherapy Home Service?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Physiotherapy at home is suitable for all age groups,
                        addressing diverse physical needs.
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
                        Q8: How can I request Physiotherapy Home Service?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Get in touch with Senocare India to inquire and schedule
                        your home-based physiotherapy session.
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
                        Q9: How often should I do Physiotherapy Home Service per
                        day?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Your personalized plan will be recommended by our
                        physiotherapists based on your needs.
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
                        Q10: Do physiotherapists use hands during Home Service
                        sessions?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Certainly, hands-on techniques like manual therapy are
                        commonly used for effective treatment.
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
                        Q11: What issues can Physiotherapy Home Service treat?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Our physiotherapists address a wide array of problems,
                        from musculoskeletal to neurological conditions.
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
                        Q12: Is daily Physiotherapy Home Service suitable?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        The frequency is determined by your condition and
                        progress; our experts will guide you accordingly.
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
                        Q13: Can I consult a doctor for Physiotherapy Home
                        Service?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Physiotherapy is administered by trained
                        physiotherapists, not doctors.
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
                        Q14: Which type of Physiotherapy Home Service is
                        recommended?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Our experts will assess and recommend the most suitable
                        approach based on your specific needs.
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
                        Q15: Is Physiotherapy Home Service expensive?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Costs vary, but Senocare India offers competitive rates
                        for quality home-based care.
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
                        Q16: How long is the recovery period with Physiotherapy
                        Home Service?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Recovery duration varies based on your condition and
                        progress.
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
                        Q17: When should I discontinue Physiotherapy Home
                        Service?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Your physiotherapist will guide you on the appropriate
                        endpoint as per your goals.
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
                        Q18: Is Physiotherapy Home Service effective in the long
                        term?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Yes, it offers benefits for both short-term recovery and
                        long-term well-being.
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
                        Q19: Is Interferential Therapy (IFT) beneficial for
                        home-based back pain treatment?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        IFT can help manage back pain, considering the nature of
                        your pain and our physiotherapist's assessment.
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
                        Q20: How many home-based physiotherapy sessions are
                        typically needed for back pain?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        The number of sessions varies based on the severity and
                        cause of your back pain.
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
                        Q21: Can home-based physiotherapy effectively treat
                        lower back pain?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Yes, tailored home-based physiotherapy can help
                        alleviate and manage lower back pain.
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
                        Q22: How can I determine if home-based physiotherapy is
                        working for me?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Positive changes in pain, mobility, and daily activities
                        indicate the effectiveness of your home-based
                        physiotherapy.
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
                        Q23: Is home-based physiotherapy suitable for everyone?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Home-based physiotherapy offers benefits for various
                        conditions and ages, but individual suitability may
                        vary.
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
                        Q24: Do physiotherapists provide foot massages during
                        home-based sessions?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Yes, specialized foot massages can be incorporated into
                        home-based physiotherapy treatments.
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
                        Q25: What if I don't see desired results from home-based
                        physiotherapy?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Discuss any concerns with your physiotherapist;
                        alternative strategies or referrals may be explored.
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
                        Q26: Is experiencing back pain after home-based
                        physiotherapy normal?
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">
                        Mild discomfort might occur due to muscle activation;
                        consult your physiotherapist to address any concerns.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
            <Row className="services__content__senocare">
              <Col>
                <h2 className="senocare___heading__sencond">References</h2>
                <p className="services__para__senocare">
                  1.Chimenti RL, Frey-Law LA, Sluka KA. A Mechanism-Based
                  Approach to Physical Therapist Management of Pain. Phys Ther.
                  2018 May 1;98(5):302-314. doi: 10.1093/ptj/pzy030. PMID:
                  29669091; PMCID: PMC6256939.
                </p>
                <p className="services__para__senocare">
                  2. Sherrington C, Fairhall NJ, Wallbank GK, Tiedemann A,
                  Michaleff ZA, Howard K, Clemson L, Hopewell S, Lamb SE.
                  Exercise for preventing falls in older people living in the
                  community. Cochrane Database Syst Rev. 2019 Jan
                  31;1(1):CD012424. doi: 10.1002/14651858.CD012424.pub2. PMID:
                  30703272; PMCID: PMC6360922.
                  <p className="services__para__senocare">
                    3. Jaqueline da Cunha M, Rech KD, Salazar AP, Pagnussat AS.
                    Functional electrical stimulation of the peroneal nerve
                    improves post-stroke gait speed when combined with
                    physiotherapy. A systematic review and meta-analysis. Ann
                    Phys Rehabil Med. 2021 Jan;64(1):101388. doi:
                    10.1016/j.rehab.2020.03.012. Epub 2020 May 24. PMID:
                    32376404.
                  </p>
                  <p className="services__para__senocare">
                    4. Kanaley JA, Colberg SR, Corcoran MH, Malin SK, Rodriguez
                    NR, Crespo CJ, Kirwan JP, Zierath JR. Exercise/Physical
                    Activity in Individuals with Type 2 Diabetes: A Consensus
                    Statement from the American College of Sports Medicine. Med
                    Sci Sports Exerc. 2022 Feb 1;54(2):353-368. doi:
                    10.1249/MSS.0000000000002800. PMID: 35029593; PMCID:
                    PMC8802999.
                  </p>
                  <p className="services__para__senocare">
                    5. López-Torres Hidalgo J; DEP-EXERCISE Group. Effectiveness
                    of physical exercise in the treatment of depression in older
                    adults as an alternative to antidepressant drugs in primary
                    care. BMC Psychiatry. 2019 Jan 14;19(1):21. doi:
                    10.1186/s12888-018-1982-6. PMID: 30642326; PMCID:
                    PMC6332682.
                  </p>
                  <p className="services__para__senocare">
                    6. Ashburn A, Pickering R, McIntosh E, Hulbert S, Rochester
                    L, Roberts HC, Nieuwboer A, Kunkel D, Goodwin VA, Lamb SE,
                    Ballinger C, Seymour KC. Exercise- and strategy-based
                    physiotherapy-delivered intervention for preventing repeat
                    falls in people with Parkinson's: the PDSAFE RCT. Health
                    Technol Assess. 2019 Jul;23(36):1-150. doi:
                    10.3310/hta23360. PMID: 31339100; PMCID: PMC6680369.
                  </p>
                  <p className="services__para__senocare">
                    7. Mistry K, Yonezawa E, Milne N. Paediatric Physiotherapy
                    curriculum: an audit and survey of Australian entry-level
                    Physiotherapy programs. BMC Med Educ. 2019 Apr 16;19(1):109.
                    doi: 10.1186/s12909-019-1540-z. PMID: 30992074; PMCID:
                    PMC6469150.
                  </p>
                  <p className="services__para__senocare">
                    <a
                      href="https://en.wikipedia.org/wiki/Physical_therapy "
                      target="_blank"
                      className="hyper__link"
                      rel="noopener noreferrer">
                      https://en.wikipedia.org/wiki/Physical_therapy{" "}
                    </a>
                  </p>
                </p>
                <p className="services__para__senocare">
                  <a
                    href="https://simple.wikipedia.org/wiki/Physiotherapy"
                    target="_blank"
                    className="hyper__link"
                    rel="noopener noreferrer">
                    https://simple.wikipedia.org/wiki/Physiotherapy
                  </a>
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

export default Physiotherapy;
