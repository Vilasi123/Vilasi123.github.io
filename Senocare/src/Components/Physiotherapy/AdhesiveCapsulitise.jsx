import { Container, Row, Col } from "react-bootstrap";
import Physio1 from "../../assets/Image/PhysiotherapySection/Physio4.jpg";
import Physio2 from "../../assets/Image/PhysiotherapySection/Physio5.jpg";
import Physio3 from "../../assets/Image/PhysiotherapySection/Physio6.jpg";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import Accordion from "react-bootstrap/Accordion";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "../PallitveCare/Services.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const AdheshiveCapsulitis = () => {
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
                  Adhesive Capsulitis Treatment
                </h1>
              </Col>
              <Col xs={12} className="senocare__text__content">
                <Col xs={12} lg={6}>
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
              </Col>
            </Row>

            <Row className="pt-4">
              <Col xs={12} className="senocare__text__content">
                <p className="services__para__senocare">
                  Shoulder joint stiffness, discomfort, and restricted range of
                  motion are the hallmarks of adhesive capsulitis, sometimes
                  referred to as frozen shoulder. Freezing, freezing, and
                  thawing are the three stages into which the state is usually
                  separated.
                </p>{" "}
                <p className="services__para__senocare">
                  The stages of adhesive capsulitis and important information
                  are broken down as follows:
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Stages of Adhesive Capsulitis
                </h2>
                <h3 className="senocare__heading__third">
                  Freezing (Inflammatory) Stage:
                </h3>

                <ul>
                  <li>
                    {" "}
                    <b>Duration: </b>Typically lasts 6 weeks to 9 months.
                  </li>
                  <li>
                    <b> Symptoms:</b> Pain in the shoulder, particularly at
                    night, and progressive stiffness. The range of motion begins
                    to decrease.
                  </li>
                  <li>
                    <b> Cause:</b> Inflammation of the shoulder capsule (the
                    connective tissue surrounding the shoulder joint).
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  Frozen (Adhesion) Stage:
                </h3>
                <ul>
                  <li>
                    <b>Duration:</b> Lasts 4 to 6 months.
                  </li>
                  <li>
                    <b>Symptoms:</b> Stiffness becomes more pronounced, and
                    there is severe limitation in movement. Pain might decrease
                    but is replaced by significant immobility.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  Thawing (Recovery) Stage:
                </h3>
                <ul>
                  <li>
                    <b>Duration:</b> Typically lasts 6 months to 2 years.
                  </li>
                  <li>
                    <b>Symptoms: </b>Gradual improvement in the shoulder’s range
                    of motion and reduction in pain.
                  </li>
                  <li>
                    The capsule of the shoulder begins to loosen and heal.
                  </li>{" "}
                </ul>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Causes of frozen shoulder
                </h2>
                <ul>
                  <li>Unknown (Idiopathic) Causes</li>{" "}
                  <li>Diabetes Mellitus</li> <li>Thyroid Disorders</li>{" "}
                  <li>Shoulder Injury or Surgery</li>{" "}
                  <li>Prolonged Immobilization</li>{" "}
                  <li>Inflammatory Conditions</li> <li>Genetic Factors</li>
                </ul>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Symptoms of frozen shoulder
                </h2>
                <p className="services__para__senocare">
                  Common Symptoms Across Stages:
                </p>
                <ul>
                  <li>
                    <b> Pain:</b> Often felt in the outer shoulder and upper
                    arm, particularly when moving the shoulder.
                  </li>{" "}
                  <li>
                    <b> Limited Range of Motion:</b> A marked reduction in the
                    ability to move the shoulder, especially when lifting,
                    reaching, or rotating the arm.
                  </li>{" "}
                  <li>
                    <b> Difficulty with Daily Activities: </b> Common tasks like
                    dressing, reaching for items on high shelves, or driving may
                    become challenging due to restricted shoulder movement.
                  </li>
                  <li>
                    <b>Night Pain: </b> Pain that disrupts sleep, especially
                    when lying on the affected shoulder.
                  </li>
                </ul>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">Risk Factors</h2>
                <ul>
                  <li>
                    <b> Age:</b> Adults between the ages of 40 and 60 are most
                    likely to get frozen shoulder.
                  </li>{" "}
                  <li>
                    <b>Sex:</b> Compared to men, women are more likely to have
                    frozen shoulder.
                  </li>{" "}
                  <li>
                    <b> Shoulder injury:</b> You are more likely to get frozen
                    shoulder if you have recently had shoulder surgery, a
                    rotator cuff tear, or a broken arm.
                  </li>{" "}
                  <li>
                    <b> Conditions and diseases:</b> Individuals who have
                    diabetes, certain thyroid disorders, heart illness,
                    Parkinson’s disease, or have experienced a stroke may be at
                    a higher risk of developing frozen shoulder.
                  </li>{" "}
                  <li>
                    <b> Immobility:</b> The risk of having frozen shoulder
                    increases if you are unable to move your shoulder while
                    healing from an injury or surgery.
                  </li>{" "}
                  <li>
                    <b> Hormonal changes:</b> Your chance of experiencing frozen
                    shoulder may rise if your hormones alter, as they may after
                    menopause
                  </li>
                </ul>{" "}
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">Remedy</h2>
                <h3 className="senocare__heading__third">PHYSICAL THERAPY</h3>
                <p className="services__para__senocare">
                  The main treatment for frozen shoulder is physical therapy,
                  which includes stretching and strengthening exercises. To
                  increase the shoulder joint’s range of motion, a physical
                  therapist can lead you through some easy stretching exercises.
                  In addition to supporting the joint and preventing more
                  stiffness, strengthening the shoulder muscles can aid.
                </p>
                <p className="services__para__senocare">
                  In more severe situations, a physical therapist may employ
                  joint mobilisation treatments, which entail manipulating the
                  shoulder joint gently in order to increase mobility and lessen
                  stiffness.
                </p>
                <h3 className="senocare__heading__third">MEDICATIONS</h3>
                <p className="services__para__senocare">
                  <b> Non-Steroidal Anti-Inflammatory Drugs (NSAIDs): </b>
                  Ibuprofen and naproxen are examples of over-the-counter drugs
                  that can help reduce pain and inflammation.
                </p>{" "}
                <p className="services__para__senocare">
                  <b> Corticosteroid Injections:</b> In certain situations,
                  particularly in the early stages when inflammation is more
                  noticeable, a corticosteroid injection into the shoulder joint
                  might lessen discomfort and inflammation. This may offer
                  short-term respite and enhance physical therapy’s efficacy.
                </p>{" "}
                <p className="services__para__senocare">
                  <b>Topical Pain Relievers:</b> To ease shoulder pain and
                  discomfort, apply creams or patches that contain menthol or
                  capsaicin.
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  How Senocare can help in frozen shoulder
                </h2>
                <p className="services__para__senocare">
                  SenOcare helps in providing best and well knowledgeable
                  <a
                    href="/physiotherapy-home-service/"
                    className="hyper__link">
                    {" "}
                    physiotherapist for the treatment of frozen shoulder
                  </a>
                </p>{" "}
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Best physiotherapy exercises for frozen shoulder you can do at
                  home
                </h2>
                <p className="services__para__senocare">
                  Exercises used in physical therapy are crucial to the healing
                  process for adhesive capsulitis, or frozen shoulder. They aid
                  in strengthening the muscles that surround the joint, reducing
                  stiffness, and increasing shoulder mobility. Exercises
                  performed at home can be highly beneficial, particularly if
                  done gradually and consistently. The top at-home physiotherapy
                  exercises for frozen shoulder are listed below.
                </p>
                <h3 className="senocare__heading__third">Pendulum Swing</h3>
                <p className="services__para__senocare">
                  <b>Goal: </b>To gently loosen up the shoulder and reduce
                  stiffness.
                </p>
                <p className="services__para__senocare">
                  <b>How to do it:</b>
                </p>
                <ul>
                  <li>
                    Stand and lean forward slightly, supporting your unaffected
                    arm on a sturdy surface like a table or chair.
                  </li>{" "}
                  <li>Let your affected arm dangle freely.</li>{" "}
                  <li>
                    Gently swing your arm in small circles (clockwise and
                    counterclockwise) for about 30 seconds in each direction.
                  </li>{" "}
                  <li>
                    Gradually increase the size of the circles as you feel more
                    comfortable.
                  </li>
                </ul>
                <p className="services__para__senocare">
                  <b>Frequency: </b>2-3 sets of 30 seconds per direction.
                </p>
                <h3 className="senocare__heading__third">Towel Stretch</h3>
                <p className="services__para__senocare">
                  <b>Goal:</b> To improve shoulder range of motion, particularly
                  external rotation.
                </p>
                <p className="services__para__senocare">
                  <b>How to do it:</b>
                </p>
                <ul>
                  <li>
                    Take a towel and hold it behind your back with both
                    hands—one hand reaching over your shoulder and the other
                    reaching behind your back.
                  </li>
                  <li>
                    Gently pull the towel upward with the unaffected hand,
                    stretching the affected shoulder.
                  </li>
                  <li>
                    Hold the stretch for 20-30 seconds, feeling a mild stretch
                    but no pain.
                  </li>
                  <li>
                    Repeat 2-3 times, gradually increasing the stretch as
                    tolerated.
                  </li>
                </ul>
                <p className="services__para__senocare">
                  <b>Frequency:</b> 2-3 times a day.
                </p>
                <h3 className="senocare__heading__third">Finger Walk</h3>
                <p className="services__para__senocare">
                  <b>Goal:</b> To improve shoulder flexion and abduction
                  (lifting the arm forward and to the side).
                </p>
                <p className="services__para__senocare">
                  <b>How to do it:</b>
                </p>
                <ul>
                  <li>Stand facing a wall, about an arm’s length away.</li>{" "}
                  <li>
                    Place the fingers of your affected hand on the wall at waist
                    level.
                  </li>{" "}
                  <li>
                    Slowly “walk” your fingers up the wall by raising your arm
                    as high as you can (without pain).
                  </li>{" "}
                  <li>
                    Hold the position at the highest point for 5-10 seconds,
                    then walk your fingers back down.
                  </li>{" "}
                  <li>
                    Repeat 10-15 times, gradually increasing the height as
                    mobility improves.
                  </li>
                </ul>
                <p className="services__para__senocare">
                  <b>Frequency:</b> 2-3 sets per day.
                </p>
                <h3 className="senocare__heading__third">Cross-Body Stretch</h3>
                <p className="services__para__senocare">
                  <b>Goal: </b>To improve shoulder flexibility and stretch the
                  posterior (back) of the shoulder.
                </p>
                <p className="services__para__senocare">
                  <b>How to do it:</b>
                </p>
                <ul>
                  <li>Sit or stand up straight.</li>{" "}
                  <li>
                    Use your unaffected hand to pull the affected arm across
                    your chest toward the opposite shoulder.
                  </li>{" "}
                  <li>
                    Hold the stretch for 20-30 seconds, feeling a gentle pull in
                    the back of the shoulder.
                  </li>{" "}
                  <li>Repeat 2-3 times.</li>
                </ul>
                <p className="services__para__senocare">
                  <b>Frequency: </b>2-3 sets per day.
                </p>
                <h3 className="senocare__heading__third">Wall Climb</h3>
                <p className="services__para__senocare">
                  <b>Goal:</b> To gradually improve the range of motion and
                  mobility of the shoulder joint.
                </p>
                <p className="services__para__senocare">
                  <b>How to do it:</b>
                </p>
                <ul>
                  <li>Stand facing a wall, about an arm’s length away.</li>
                  <li>
                    Place your fingertips of the affected hand on the wall at
                    waist height.
                  </li>
                  <li>
                    Slowly “climb” the wall by walking your fingers up as high
                    as you can without pain.
                  </li>
                  <li>
                    Hold at the highest point for 5-10 seconds, then walk the
                    fingers back down.
                  </li>
                  <li>
                    Repeat the movement 10-15 times, gradually increasing your
                    range as you improve.
                  </li>
                </ul>
                Frequency: 2-3 sets per day.
                <h3 className="senocare__heading__third">
                  External Rotation with a Resistance Band
                </h3>
                <p className="services__para__senocare">
                  <b>Goal: </b>To strengthen the rotator cuff muscles and
                  improve shoulder stability.{" "}
                </p>
                <p className="services__para__senocare">
                  <b>How to do it:</b>
                </p>
                <ul>
                  <li>
                    Secure a resistance band to a door handle or other stable
                    surface.
                  </li>{" "}
                  <li>
                    Hold the band with your affected arm and bend your elbow to
                    90 degrees, keeping your elbow close to your body.
                  </li>{" "}
                  <li>
                    Slowly rotate your forearm outward away from your body,
                    keeping the elbow fixed at your side.
                  </li>{" "}
                  <li>
                    Hold for 3-5 seconds at the end of the movement, then slowly
                    return to the starting position.
                  </li>
                  Repeat 10-15 times.
                </ul>
                <p className="services__para__senocare">
                  <b>Frequency:</b> 2-3 sets per day.
                </p>
                <h3 className="senocare__heading__third">
                  Internal Rotation with a Resistance Band
                </h3>
                <p className="services__para__senocare">
                  <b>Goal: </b>To strengthen the rotator cuff muscles, focusing
                  on internal rotation.
                </p>
                <p className="services__para__senocare">
                  <b>How to do it:</b>
                </p>
                <ul>
                  <li>
                    Secure a resistance band to a door handle or stable surface.
                  </li>
                  <li>
                    Hold the band with your affected hand and bend your elbow to
                    90 degrees, keeping the elbow close to your body.
                  </li>
                  <li>
                    Slowly pull the band across your body, rotating your arm
                    inward.
                  </li>
                  <li>
                    Hold for 3-5 seconds at the end of the movement, then slowly
                    return to the starting position.
                  </li>
                  <li>Repeat 10-15 times.</li>
                </ul>
                <p className="services__para__senocare">
                  <b>Frequency:</b> 2-3 sets per day.{" "}
                </p>
                <h3 className="senocare__heading__third">Doorway Stretch</h3>
                <p className="services__para__senocare">
                  <b>Goal:</b> To stretch the front of the shoulder and improve
                  internal rotation.{" "}
                </p>
                <p className="services__para__senocare">
                  <b>How to do it:</b>
                </p>
                <ul>
                  <li>
                    Stand in a doorway and place your arms on the doorframe at
                    shoulder height, elbows bent at 90 degrees.
                  </li>
                  <li>
                    Step forward with one foot, gently stretching the chest and
                    shoulders.
                  </li>
                  <li>
                    Hold for 20-30 seconds, feeling a stretch in the front of
                    the shoulder.
                  </li>
                  <li>Repeat 2-3 times.</li>
                </ul>
                <p className="services__para__senocare">
                  <b>Frequency:</b> 2-3 sets per day.{" "}
                </p>
                <h3 className="senocare__heading__third">
                  Arm Elevation (Supine or Lying Down)
                </h3>
                <p className="services__para__senocare">
                  <b>Goal: </b>To gently stretch the shoulder and improve range
                  of motion.
                </p>
                <p className="services__para__senocare">
                  <b>How to do it:</b>
                </p>
                <ul>
                  <li>Lie on your back on a flat surface.</li>{" "}
                  <li>
                    Use a stick, broomstick, or a similar object to assist in
                    gently lifting your affected arm above your head.
                  </li>{" "}
                  <li>
                    Slowly raise your arm as high as you can tolerate, keeping
                    the elbow straight, and hold for 5-10 seconds.
                  </li>{" "}
                  <li>
                    Lower the arm slowly and repeat the exercise 10-15 times.
                  </li>
                </ul>
                <p className="services__para__senocare">
                  <b>Frequency:</b> 2-3 sets per day.
                </p>
                <h3 className="senocare__heading__third">
                  Scapular Stabilization Exercises
                </h3>
                <p className="services__para__senocare">
                  <b>Goal: </b>To strengthen the muscles around the shoulder
                  blade (scapula), which can help improve shoulder mechanics and
                  reduce pain.
                </p>
                <p className="services__para__senocare">
                  <b>How to do it:</b>{" "}
                </p>
                <ul>
                  <li>Sit or stand with good posture.</li>{" "}
                  <li>
                    Squeeze your shoulder blades together as if trying to hold a
                    pencil between them.
                  </li>{" "}
                  <li>Hold for 5 seconds, then relax.</li>{" "}
                  <li>Repeat 10-15 times.</li>
                </ul>
                <p className="services__para__senocare">
                  <b>Frequency: </b>2-3 sets per day.
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

export default AdheshiveCapsulitis;
