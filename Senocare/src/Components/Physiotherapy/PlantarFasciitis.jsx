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

const PlantarFasciiitis = () => {
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
                  Plantar fasciitis
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
                  A frequent condition that causes heel discomfort, usually at
                  the bottom of the foot, is plantar fasciitis. It happens as a
                  result of irritation or inflammation of the plantar fascia, a
                  thick band of tissue that runs from the heel bone to the toes.
                  This tissue supports the arch of the foot and aids in
                  absorbing the strains and stresses that we put on our feet.
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Causes of Plantar Fasciitis:
                </h2>
                <ul>
                  {" "}
                  <li>
                    <b> Overuse or Strain: </b>The issue may be exacerbated by
                    repetitive foot-stressing activities including walking,
                    running, or prolonged standing.
                  </li>
                  <li>
                    <b> Foot Mechanics:</b> Poor walking habits or abnormal foot
                    structures, such as high arches or flat feet, can put too
                    much tension on the plantar fascia.
                  </li>
                  <li>
                    <b> Tight Muscles or Tendons:</b> By increasing the strain
                    on the foot’s fascia, tightness in the calf muscles or
                    Achilles tendon can aggravate plantar fasciitis.
                  </li>
                  <li>
                    <b> Obesity: </b>Carrying more weight can put more strain on
                    the feet, particularly the plantar fascia.
                  </li>
                  <li>
                    <b>Improper Footwear:</b> Plantar fasciitis is more likely
                    to occur in shoes that are worn out, lack adequate arch
                    support, or lack cushioning.
                  </li>
                  <li>
                    <b> Age:</b> The illness can strike at any age, but it is
                    more common in those between the ages of 40 and 60.
                  </li>
                </ul>{" "}
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Symptoms of Plantar Fasciitis
                </h2>
                <p className="services__para__senocare">
                  Heel discomfort is the primary sign of plantar fasciitis,
                  especially:
                </p>
                <p className="services__para__senocare">
                  <b> Morning discomfort:</b> When most people walk for the
                  first time after getting up, they usually feel a sharp,
                  stabbing pain. Moving around may help this pain, but standing
                  for extended periods of time or getting up from a seated
                  position usually makes it worse.
                </p>
                <p className="services__para__senocare">
                  discomfort from prolonged standing or walking, particularly on
                  hard surfaces.
                </p>
                <p className="services__para__senocare">
                  discomfort when standing on tiptoes or climbing stairs.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">Risk Factors</h2>
                <h3 className="senocare__heading__third">Age:</h3>
                <p className="services__para__senocare">
                  Middle-aged individuals (40 to 60 years old) are at higher
                  risk, as the plantar fascia becomes less flexible and
                  resilient with age.
                </p>
                <h3 className="senocare__heading__third">Activity Level:</h3>
                <p className="services__para__senocare">
                  Runners or individuals who engage in high-impact activities
                  are more likely to develop plantar fasciitis due to repetitive
                  stress and strain on the feet.
                </p>
                <p className="services__para__senocare">
                  Occupations that require prolonged standing or walking (e.g.,
                  teachers, factory workers, healthcare professionals) increase
                  the likelihood of strain on the feet.
                </p>
                <h3 className="senocare__heading__third">
                  Foot Structure and Mechanics:
                </h3>
                <p className="services__para__senocare">
                  Flat feet or fallen arches can put excess stress on the
                  plantar fascia.
                </p>
                <p className="services__para__senocare">
                  High arches can also be problematic, as they may not provide
                  sufficient shock absorption.
                </p>
                <p className="services__para__senocare">
                  Abnormal walking patterns (e.g., overpronation or supination)
                  can lead to improper distribution of weight and stress on the
                  foot.
                </p>
                <h3 className="senocare__heading__third">Obesity:</h3>
                <p className="services__para__senocare">
                  Excess weight places added stress on the feet, increasing the
                  risk of plantar fasciitis, especially during walking or
                  standing for long periods.
                </p>
                <h3 className="senocare__heading__third">
                  Tight Achilles Tendon or Calf Muscles:
                </h3>
                <p className="services__para__senocare">
                  A tight Achilles tendon or calf muscles (gastrocnemius and
                  soleus) can lead to increased tension on the plantar fascia,
                  raising the risk of inflammation.
                </p>
                <h3 className="senocare__heading__third">Improper Footwear:</h3>
                <p className="services__para__senocare">
                  Worn-out shoes, shoes with inadequate arch support, or high
                  heels can contribute to poor foot mechanics and increased
                  strain on the plantar fascia.
                </p>
                <h3 className="senocare__heading__third">
                  Increased Physical Activity or Sudden Changes in Routine:
                </h3>
                <p className="services__para__senocare">
                  A sudden increase in activity levels (e.g., starting a new
                  workout routine or walking long distances) can strain the
                  plantar fascia, especially if the body isn’t accustomed to the
                  activity.
                </p>
                <h3 className="senocare__heading__third">Gender:</h3>
                <p className="services__para__senocare">
                  Women are at a higher risk, particularly due to wearing
                  certain types of footwear, such as high heels, which can put
                  extra pressure on the feet. Hormonal factors may also play a
                  role.
                </p>
                <h3 className="senocare__heading__third">
                  Certain Health Conditions:
                </h3>
                <p className="services__para__senocare">
                  Diabetes, arthritis, and other conditions that affect joint
                  health or circulation can make the foot more susceptible to
                  injury and inflammation.
                </p>
                <h3 className="senocare__heading__third">
                  Previous Foot Injuries:
                </h3>
                <p className="services__para__senocare">
                  People who have experienced past foot or ankle injuries (such
                  as sprains, fractures, or strains) may have a higher risk of
                  developing plantar fasciitis due to altered gait patterns or
                  weakened structures in the foot.
                </p>
                <p className="services__para__senocare">
                  By being aware of these risk factors, individuals can take
                  steps to prevent plantar fasciitis, such as wearing proper
                  footwear, maintaining a healthy weight, and practicing
                  stretching and strengthening exercises.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">Complications</h2>
                <p className="services__para__senocare">
                  1. Chronic Pain<br></br>
                  2. Altered Walking Patterns (Gait Changes)<br></br>
                  3. Plantar Fascia Rupture<br></br>
                  4. Heel Spurs<br></br>
                  5. Tendonitis in Other Foot Areas<br></br>
                  6. Limited Foot Mobility<br></br>
                  7. Psychological Impact<br></br>
                  8. Post-Surgical Risks<br></br>
                  9. Recurrence of Pain<br></br>
                  10. Foot Deformities
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Preventions of Plantar Fasciitis
                </h2>
                <p className="services__para__senocare">
                  1. Wear Proper Footwear<br></br>
                  2.
                  <a
                    href="https://senocare.in/physiotherapy-home-service/ankle-sprain/"
                    className="hyper__link">
                    {" "}
                    Stretching and Strengthening Exercises
                  </a>
                  <br></br>
                  3. Maintain a Healthy Weight<br></br>
                  4. Gradual Increase in Activity<br></br>
                  5. Foot Rest and Avoid Overuse<br></br>
                  6. Use Orthotic Inserts<br></br>
                  7. Foot Care for Athletes<br></br>
                  8. Avoid Walking Barefoot on Hard Surfaces<br></br>
                  9. Massage and Foam Rolling<br></br>
                  10. Manage Medical Conditions<br></br>
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Physiotherapy Treatment of Plantar Fasciitis
                </h2>
                <h3 className="senocare__heading__third">
                  Stretching Exercises
                </h3>
                <ul>
                  {" "}
                  <li>
                    <b>Plantar fascia stretch: </b>Sit with one leg over the
                    other, grab your toes and pull them toward your shin to
                    stretch the bottom of your foot. Hold for 20-30 seconds and
                    repeat several times, especially in the morning.
                  </li>
                  <li>
                    <b>Calf stretch:</b> Place one foot behind the other and
                    press the back heel into the ground while keeping the knee
                    straight. This stretches the calf muscles and Achilles
                    tendon, reducing tension on the plantar fascia.
                  </li>
                  <li>
                    <b>Achilles tendon stretch:</b> Stand facing a wall, place
                    one foot in front of the other, and gently lean forward
                    while keeping your back heel on the ground. This stretches
                    the Achilles tendon, which, if tight, can contribute to
                    plantar fasciitis.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  Strengthening Exercises
                </h3>
                <p className="services__para__senocare">
                  Strengthening the muscles of the foot and lower leg can
                  provide better support for the plantar fascia and improve
                  overall foot mechanics. Common exercises include:
                </p>
                <ul>
                  {" "}
                  <li>
                    <b>Towel curls:</b> Place a towel on the floor and use your
                    toes to pull it toward you, which strengthens the intrinsic
                    muscles of the foot.
                  </li>
                  <li>
                    <b>Marble pick-ups: </b>Place marbles on the floor and use
                    your toes to pick them up, helping to improve foot strength
                    and coordination.
                  </li>
                  <li>
                    Toe raises: Stand with feet flat on the floor, then slowly
                    raise your heels, so you’re standing on your toes. This
                    helps to strengthen the calf muscles and the muscles that
                    support the foot arch.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">Manual Therapy</h3>
                <ul>
                  <li>
                    <b>Soft tissue mobilization:</b> The physiotherapist may use
                    massage techniques to reduce tension in the plantar fascia,
                    calves, and surrounding muscles. This can help relieve pain
                    and improve flexibility.
                  </li>{" "}
                  <li>
                    <b>Myofascial release: </b>A technique where pressure is
                    applied to specific points on the fascia or muscle tissue to
                    release tension and reduce pain.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">Taping Techniques</h3>
                <ul>
                  <li>
                    <b>Kinesiology taping:</b> The physiotherapist may apply
                    special tape (often called kinesiology tape) to the bottom
                    of the foot or around the arch to support the plantar
                    fascia, reduce strain, and relieve pain during movement.
                    This tape can also help correct abnormal foot mechanics.
                  </li>
                  <li>
                    <b>Rigid taping:</b> A more supportive taping technique
                    might be used to limit excessive foot movement and provide
                    extra support to the plantar fascia while it heals.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">Ice Therapy</h3>
                <ul>
                  <li>
                    Physiotherapists may recommend ice massage or cold packs
                    applied to the heel and arch of the foot to reduce
                    inflammation and swelling. Ice can be especially useful
                    after exercises or activities that provoke pain.
                  </li>{" "}
                  <li>
                    <b>Frozen water bottle roll:</b> Rolling the foot over a
                    frozen water bottle provides both a massage effect and ice
                    therapy to relieve tension in the plantar fascia.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  Orthotics and Footwear Advice
                </h3>
                <ul>
                  <li>
                    A physiotherapist may recommend custom or over-the-counter
                    orthotics (shoe inserts) to improve foot alignment and
                    provide better arch support. These can help redistribute
                    pressure away from the plantar fascia.
                  </li>{" "}
                  <li>
                    Physiotherapists will also advise on selecting appropriate
                    footwear, with a focus on shoes that provide proper arch
                    support, cushioning, and stability.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  Gait Analysis and Correction
                </h3>
                <ul>
                  <li>
                    A physiotherapist will assess how you walk (gait analysis)
                    to identify any abnormal movement patterns, such as
                    overpronation (excessive inward foot rolling) or supination
                    (outward rolling). These can contribute to plantar fasciitis
                    by placing extra strain on the foot.
                  </li>{" "}
                  <li>
                    Based on this assessment, the physiotherapist may suggest
                    exercises to correct these issues, such as foot positioning
                    or strengthening exercises to improve overall foot
                    mechanics.
                  </li>
                </ul>
                <ul>
                  <h3 className="senocare__heading__third">
                    Dry Needling or Acupuncture
                  </h3>
                  <li>
                    Dry needling is a technique in which a thin needle is
                    inserted into trigger points in the muscles or fascia. This
                    can help relieve muscle tightness, reduce pain, and improve
                    mobility.
                  </li>
                  <li>
                    Acupuncture may also be used in some cases, as it helps
                    promote healing and reduces inflammation in affected areas.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  Electrical Stimulation
                </h3>
                <ul>
                  <li>
                    In certain cases,{" "}
                    <a
                      href="https://my.clevelandclinic.org/health/treatments/15840-transcutaneous-electrical-nerve-stimulation-tens"
                      className="hyper__link">
                      transcutaneous electrical nerve stimulation (TENS){" "}
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://www.physio-pedia.com/Neuromuscular_and_Muscular_Electrical_Stimulation_(NMES)"
                      className="hyper__link">
                      {" "}
                      neuromuscular electrical stimulation (NMES)
                    </a>{" "}
                    may be used to reduce pain and promote muscle recovery.
                  </li>{" "}
                  <li>
                    These methods involve small electrical currents that
                    stimulate nerves or muscles.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  Education and Lifestyle Modifications
                </h3>
                <ul>
                  <li>
                    A physiotherapist will educate you on posture, foot
                    positioning, and strategies to reduce stress on the plantar
                    fascia. They may provide advice on weight management,
                    activity modification, and avoiding activities that
                    exacerbate pain (e.g., excessive walking or running on hard
                    surfaces).
                  </li>
                </ul>
                <h3 className="senocare__heading__third">Night Splints</h3>
                <ul>
                  <li>
                    Physiotherapists may recommend night splints to keep the
                    foot in a dorsiflexed position overnight. This helps to
                    maintain a stretch in the plantar fascia and Achilles tendon
                    while you sleep, promoting healing and reducing morning
                    pain.
                  </li>
                </ul>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  How can senOcare help?
                </h2>
                <p className="services__para__senocare">
                  SenOcare helps in providing best and well knowledgeable
                  <a
                    href="/physiotherapy-home-service/"
                    className="hyper__link">
                    {" "}
                    physiotherapist for the treatment{" "}
                  </a>
                  of Plantar Fasciitis.
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

export default PlantarFasciiitis;
