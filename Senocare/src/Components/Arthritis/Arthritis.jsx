import Header from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import arthritis from "../../assets/Image/PhysiotherapySection/arthritis.jpg";
import Footer from "../Footer/Footer";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SEO from "../SEO";

const Arthritis = () => {
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
                  Understanding Arthritis: Causes, Symptoms, Home Physiotherapy,
                  and Beyon
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12}>
                <LazyLoadImage
                  src={arthritis}
                  className="img-fluid senocare__service__img"
                />
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <p className="services__para__senocare">
                  Arthritis affects millions of people throughout the world. It
                  is characterized by joint inflammation, which causes pain,
                  stiffness, and swelling. There are other forms of arthritis,
                  but the most common are osteoarthritis and rheumatoid
                  arthritis.
                </p>
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

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Causes of Arthritis
                </h2>
                <p className="services__para__senocare">
                  The causes of arthritis can vary depending on the type. Here’s
                  a breakdown of the two most common types:
                </p>
                <h3 className="senocare__heading__third">Osteoarthritis:</h3>
                <p className="services__para__senocare">
                  This is the most common form of arthritis, caused by wear and
                  tear on the joints over time. The cartilage, which cushions
                  the bones at the joint, breaks down, causing the bones to rub
                  together. This can be caused by overuse, obesity, or injury.
                </p>
                <h3 className="senocare__heading__third">
                  Rheumatoid Arthritis:
                </h3>
                <p className="services__para__senocare">
                  This is an autoimmune disease, which means the body’s immune
                  system attacks healthy tissues. In rheumatoid arthritis, the
                  immune system attacks the lining of the joints, causing
                  inflammation and pain.
                </p>{" "}
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Symptoms of Arthritis
                </h2>
                <p className="services__para__senocare">
                  The symptoms of arthritis can also vary depending on the type
                  and severity of the condition. However, some common symptoms
                  include:(1)
                </p>
                <ul>
                  <li>Joint pain</li>
                  <li>Stiffness, especially in the morning</li>
                  <li>Swelling</li>
                  <li>Redness</li>
                  <li>Decreased range of motion</li>
                  <li>Weakness</li>
                </ul>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Home Physiotherapy for Arthritis
                </h2>
                <p className="services__para__senocare">
                  Physiotherapy can be a very effective way to manage arthritis
                  pain and improve joint function. There are a number of
                  exercises that can be done at home to help relieve symptoms.
                  Here are a few examples:
                </p>
                <h3 className="senocare__heading__third">
                  Range-of-motion exercises:
                </h3>
                <p className="services__para__senocare">
                  These exercises help to keep the joints moving and flexible.
                </p>
                <h3 className="senocare__heading__third">
                  Strengthening exercises:
                </h3>
                <p className="services__para__senocare">
                  These exercises help to build muscle strength around the
                  joints, which can help to support and protect them.
                </p>
                <h3 className="senocare__heading__third">Aerobic exercise:</h3>
                <p className="services__para__senocare">
                  Low impact aerobic exercise, such as walking or swimming, can
                  help to improve overall fitness and reduce pain.
                </p>
                <h3 className="senocare__heading__third">
                  Improved balance and coordination:
                </h3>
                <p className="services__para__senocare">
                  These exercises can help to strengthen the muscles around
                  joints, improve range of motion, and increase proprioception(
                  body’s awareness of its position in space). This can all lead
                  to better balance and a reduced risk of falls.
                </p>
                <h3 className="senocare__heading__third">
                  Heat and Ice Therapy:
                </h3>
                <p className="services__para__senocare">
                  It can help to relieve pain and inflammation.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Arthritis Treatment
                </h2>
                <h3 className="senocare__heading__third">
                  Medication For Arthritis
                </h3>{" "}
                <p className="services__para__senocare">
                  Osteoarthritis can’t be reversed, but treatments can reduce
                  pain and help you move better.
                </p>
                <h3 className="senocare__heading__third">Medications</h3>
                <p className="services__para__senocare">
                  Medications that can help relieve osteoarthritis symptoms,
                  primarily pain, include:
                </p>{" "}
                <h3 className="senocare__heading__third">Acetaminophen</h3>
                <p className="services__para__senocare">
                  Acetaminophen (Tylenol, others) has been shown to help some
                  people with osteoarthritis who have mild to moderate pain.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  Nonsteroidal anti-inflammatory drugs (NSAIDs)
                </h3>
                <p className="services__para__senocare">
                  Over-the-counter nonsteroidal anti-inflammatory drugs
                  (NSAIDs), such as ibuprofen (Advil, Motrin IB, others) and
                  naproxen sodium (Aleve), taken at the recommended doses,
                  typically relieve osteoarthritis pain.(2)
                </p>
                <h3 className="senocare__heading__third">
                  Surgery For arthritis
                </h3>
                <p className="services__para__senocare">
                  There are several different types of surgeries you could have
                  depending on where your injury is and how much pain you are
                  experiencing.(3)
                </p>{" "}
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">Arthroscopy</h2>
                <h3 className="senocare__heading__third">
                  Total joint replacement (arthroplasty)
                </h3>
                <p className="services__para__senocare">
                  Complications of arthritis can vary depending on the type of
                  arthritis you have and the severity of your condition.
                  However, some of the most common complications of arthritis
                  include:
                </p>
                <h3 className="senocare__heading__third">
                  Joint pain and stiffness
                </h3>
                <p className="services__para__senocare">
                  This is the most common symptom of arthritis and can make it
                  difficult to move around and perform daily activities.
                </p>
                <h3 className="senocare__heading__third">Loss of mobility</h3>
                <p className="services__para__senocare">
                  As arthritis progresses, you may find it increasingly
                  difficult to move your joints. This can make it difficult to
                  get around, dress yourself, and bathe.
                </p>
                <h3 className="senocare__heading__third">Muscle weakness</h3>
                <p className="services__para__senocare">
                  Arthritis can cause weakness in the muscles around the
                  affected joints. This can make it difficult to perform
                  activities that require strength, such as lifting objects or
                  climbing stairs.
                </p>
                <h3 className="senocare__heading__third">Fractures</h3>
                <p className="services__para__senocare">
                  People with arthritis are more likely to fracture bones near
                  the affected joints. This is because the bones are weakened by
                  the inflammation and degeneration of the cartilage.
                </p>{" "}
                <h3 className="senocare__heading__third">Fatigue</h3>
                <p className="services__para__senocare">
                  Arthritis can cause fatigue, which can make it difficult to do
                  your daily activities.
                </p>
                <h3 className="senocare__heading__third">
                  Depression and anxiety
                </h3>
                <p className="services__para__senocare">
                  The chronic pain and disability caused by arthritis can lead
                  to depression and anxiety.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Prevention from Knee Pain(4)
                </h2>
                <ul>
                  <li> Stretching is good for knees</li>
                  <li>Loosing weight improves knee pain</li>
                  <li>Wearing Proper shoes is important for healthy knees.</li>
                  <li>Posture correction</li>
                </ul>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Senocare Can Help With Arthritis?
                </h2>
                <p className="services__para__senocare">
                  <b> Daily Tasks and Maintaining Independence:</b>{" "}
                  <a href="https://senocare.in/" className="hyper__link">
                    {" "}
                    Senocare{" "}
                  </a>
                  attendants can assist with everyday activities that may be
                  difficult due to arthritis, like dressing, bathing. This helps
                  elders maintain their independence and stay in their own homes
                  for longer.
                </p>
                <h3 className="senocare__heading__third">
                  Medication Management:
                </h3>
                <p className="services__para__senocare">
                  Caregivers can remind seniors to take their medications on
                  time, which is crucial for managing arthritis symptoms.
                </p>
                <h3 className="senocare__heading__third">
                  Exercise and Physical Therapy:
                </h3>
                <p className="services__para__senocare">
                  Physiotherapist can help design safe and effective exercise
                  programs suitable for elders with arthritis. This can improve
                  mobility, flexibility, and reduce pain.
                </p>
                <h3 className="senocare__heading__third">
                  Socialization and Mental Well-being:
                </h3>
                <p className="services__para__senocare">
                  Arthritis can sometimes lead to isolation. We can provide
                  social interaction and emotional support, reducing feelings of
                  loneliness and depression.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h3 className="senocare__heading__third">References:</h3>
                <p className="services__para__senocare">
                  1){" "}
                  <a
                    href="https://www.mayoclinic.org/diseases-conditions/arthritis/symptoms-causes/syc-20350772"
                    className="hyper__link">
                    https://www.mayoclinic.org/diseases-conditions/arthritis/symptoms-causes/syc-20350772
                  </a>
                </p>
                <p className="services__para__senocare">
                  2){" "}
                  <a
                    href="https://www.mayoclinic.org/diseases-conditions/osteoarthritis/diagnosis-treatment/drc-20351930"
                    className="hyper__link">
                    https://www.mayoclinic.org/diseases-conditions/osteoarthritis/diagnosis-treatment/drc-20351930
                  </a>
                </p>{" "}
                <p className="services__para__senocare">
                  3){" "}
                  <a
                    href="https://www.webmd.com/osteoarthritis/osteoarthritis-surgery-for-joint-pain-relief"
                    className="hyper__link">
                    https://www.webmd.com/osteoarthritis/osteoarthritis-surgery-for-joint-pain-relief
                  </a>
                </p>{" "}
                <p className="services__para__senocare">
                  4)
                  <a
                    href="https://www.rush.edu/news/preventing-knee-pain"
                    className="hyper__link">
                    {" "}
                    https://www.rush.edu/news/preventing-knee-pain
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

export default Arthritis;
