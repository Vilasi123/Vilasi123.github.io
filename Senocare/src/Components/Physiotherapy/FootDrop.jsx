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

const FootDrop = () => {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <div className="services__content__senocare">
          <Container>
            <Row>
              <Col>
                <h1 className="service__heading__senocare">Foot Drop</h1>
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
                <h2 className="service__heading__senocare">
                  What is foot drop?
                </h2>
                <p className="services__para__senocare">
                  Foot drop (or drop foot) is a condition in which you have
                  difficulty lifting the front part of your foot, which can
                  cause you to drag it while walking. It’s not a disease itself,
                  but rather a sign of an underlying problem with nerves,
                  muscles, or brain/spinal cord function.
                </p>
                <h3 className="senocare__heading__third">
                  Causes of foot drop:
                </h3>
                <p className="services__para__senocare">
                  {" "}
                  <b>Common Causes:</b>
                </p>
                <ul>
                  <li>
                    Nerve injury (especially the peroneal nerve, which controls
                    the lifting of the foot)
                  </li>
                  <li>Muscle disorders such as muscular dystrophy</li>
                  <li>
                    Neurological conditions such as stroke, multiple sclerosis
                    (MS), ALS, or cerebral Palsy
                  </li>
                  <li>
                    Spinal issues, such as a herniated disc or nerve root
                    compression
                  </li>
                </ul>
                <h3 className="senocare__heading__third">Primary Symptoms:</h3>
                <p className="services__para__senocare">
                  {" "}
                  <b>
                    1. Difficulty lifting the front of the foot (dorsiflexion):
                  </b>{" "}
                </p>
                <p className="services__para__senocare">
                  You may find it hard to raise your toes or the front part of
                  your foot.
                </p>
                <p className="services__para__senocare">
                  {" "}
                  <b>2. Toe dragging while walking:</b>{" "}
                </p>
                <p className="services__para__senocare">
                  The toes may scrape the ground, increasing the risk of
                  tripping or falling.
                </p>
                <p className="services__para__senocare">
                  {" "}
                  <b>3. High-stepping gait (steppage gait):</b>{" "}
                </p>
                <p className="services__para__senocare">
                  To compensate for toe dragging, people often lift their knee
                  higher than usual when walking.
                </p>
                <p className="services__para__senocare">
                  {" "}
                  <b>4. Foot slapping:</b>{" "}
                </p>
                <p className="services__para__senocare">
                  The foot may slap down onto the ground when walking due to a
                  lack of control.
                </p>
                <p className="services__para__senocare">
                  {" "}
                  <b>5. Numbness or tingling:</b>{" "}
                </p>
                <p className="services__para__senocare">
                  This often occurs on the top of the foot or toes if a nerve is
                  involved (especially the peroneal nerve).
                </p>
                <p className="services__para__senocare">
                  {" "}
                  <b>6. Muscle weakness in the foot or lower leg:</b>{" "}
                </p>
                <p className="services__para__senocare">
                  You might notice reduced strength, especially in the muscles
                  that lift the foot.
                </p>
                <p className="services__para__senocare">
                  {" "}
                  <b>7. Difficulty walking or running:</b>{" "}
                </p>
                <p className="services__para__senocare">
                  Walking on uneven surfaces or stairs may be particularly
                  challenging.
                </p>
                <h3 className="senocare__heading__third">
                  Additional Symptoms (depending on the underlying cause):
                </h3>{" "}
                <p className="services__para__senocare">
                  Pain in the lower back, leg, or foot Muscle atrophy (wasting)
                  in chronic cases Loss of balance or coordination{" "}
                </p>
                <h3 className="senocare__heading__third">Diagnosis:</h3>
                <ul>
                  <li>Physical exam</li>
                  <li>Nerve conduction studies and electromyography (EMG)</li>
                  <li>
                    Imaging (such as MRI) if a brain or spinal issue is
                    suspected
                  </li>
                </ul>
                <h3 className="senocare__heading__third">Risk Factors:</h3>
                <p className="services__para__senocare">
                  {" "}
                  <b>1. Injury or Compression of Nerves</b>{" "}
                </p>
                <p className="services__para__senocare">
                  The peroneal nerve at the knee may be compressed by repetitive
                  leg crossings.
                </p>
                <p className="services__para__senocare">
                  Long periods of kneeling or crouching are typical in several
                  professions (such as plumbers and electricians).
                </p>
                <p className="services__para__senocare">
                  Braces or leg casts: Tight casts near the knee may compress
                  the peroneal nerve.
                </p>
                <p className="services__para__senocare">
                  Spending long periods sitting with crossed legs may compress
                  the nerve.
                </p>
                <p className="services__para__senocare">
                  {" "}
                  <b>2. Stroke and Neurological Conditions</b>{" "}
                </p>
                <p className="services__para__senocare">
                  MS, or multiple sclerosis
                </p>
                <p className="services__para__senocare">
                  ALS, or amyotrophic lateral sclerosis
                </p>
                <p className="services__para__senocare">Palsy in the brain</p>
                <p className="services__para__senocare">
                  Peripheral neuropathy, frequently brought on by diabetes
                </p>
                <p className="services__para__senocare">
                  {" "}
                  <b>3. Musculoskeletal or Spinal Issues Herniated disc</b>{" "}
                </p>
                <p className="services__para__senocare">
                  Stenosis of the spine
                </p>
                <p className="services__para__senocare">
                  Trauma or back surgeries
                </p>
                <p className="services__para__senocare">
                  {" "}
                  <b>4. Genetic and Medical Conditions</b>
                </p>
                <p className="services__para__senocare">
                  One of the main causes of peripheral neuropathy is diabetes.
                </p>
                <p className="services__para__senocare">
                  Charcot-Marie-Tooth disease is an example of an inherited
                  muscle condition.
                </p>
                <p className="services__para__senocare">
                  Guillain-Barré syndrome is one example of an autoimmune
                  disease.
                </p>
                <p className="services__para__senocare">
                  Tumours: Pressing on the leg or spine’s nerves.
                </p>
                <p className="services__para__senocare">
                  {" "}
                  <b>5. Lifestyle or Workplace Hazards</b>{" "}
                </p>
                <p className="services__para__senocare">
                  Jobs or pursuits that entail:
                </p>
                <p className="services__para__senocare">Squatting repeatedly</p>
                <p className="services__para__senocare">
                  Extensive sitting or heavy lifting that puts strain on the
                  legs
                </p>
                <p className="services__para__senocare">
                  Donning braces or tight boots
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">Treatment:</h2>
                <h3 className="senocare__heading__third">
                  1. Braces and Splints
                </h3>
                <p className="services__para__senocare">
                  Ankle-Foot Orthosis (AFO):
                </p>
                <ul>
                  <li>
                    A lightweight brace that keeps the foot in a normal position
                    to prevent dragging.
                  </li>
                  <li>
                    Often used as the first line of management for mobility and
                    stability.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  2. Physical Therapy
                </h3>
                <ul>
                  <li>
                    Strengthening exercises: Focused on muscles of the foot,
                    ankle, and lower leg.
                  </li>
                  <li>
                    Stretching: Prevents contractures (permanent stiffness of
                    joints).
                  </li>
                  <li>Gait training: Improves walking pattern and balance.</li>
                </ul>
                <h3 className="senocare__heading__third">
                  3. Electrical Nerve Stimulation
                </h3>
                <p className="services__para__senocare">
                  Functional electrical stimulation (FES):
                </p>
                <ul>
                  <li>
                    Delivers small electrical impulses to stimulate nerves and
                    muscles.
                  </li>
                  <li>
                    Can improve walking in select patients, especially with
                    stroke-related foot drop.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  4. Treating the Underlying Cause
                </h3>

                <ul>
                  <li>
                    <b> Diabetes:</b> Blood sugar control to prevent further
                    nerve damage.
                  </li>
                  <li>
                    <b> Disc herniation: </b>May require spinal treatment or
                    surgery.
                  </li>
                  <li>
                    <b>Stroke or MS: </b>Neurological rehab and medications to
                    manage the condition.
                  </li>
                  <li>
                    <b>Infection or tumor: </b>May require medical or surgical
                    intervention.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  5. Surgery (in severe or long-term cases)
                </h3>
                <ul>
                  <li>
                    <b>Nerve decompression or grafting: </b>If a compressed
                    nerve is involved.
                  </li>
                  <li>
                    <b> Tendon transfer: </b>Moving a working tendon to restore
                    foot lifting function.
                  </li>
                  <li>
                    <b>Spinal surgery: </b>If a herniated disc or spinal
                    stenosis is the cause.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  6. Occupational Therapy
                </h3>
                <ul>
                  <li>
                    Helps adapt daily activities and recommends assistive
                    devices for home and work.
                  </li>
                </ul>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Role Of Physiotherapy
                </h2>
                <h3 className="senocare__heading__third">
                  1. Muscle Strengthening
                </h3>
                <ul>
                  <li>
                    Focuses on the anterior tibialis, toe extensors, and
                    peroneal muscles.<li></li>
                    Helps regain strength and control of foot dorsiflexion
                    (lifting the foot).
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  2. Stretching and Range of Motion
                </h3>
                <ul>
                  <li>
                    Prevents joint stiffness and muscle contractures, especially
                    in the ankle and toes.
                  </li>
                  <li>Maintains mobility in the ankle and knee joints.</li>
                </ul>
                <h3 className="senocare__heading__third">3. Gait Training</h3>
                <ul>
                  <li>
                    Re-teaches proper walking patterns to reduce the risk of
                    tripping or falling.
                  </li>
                  <li>
                    May involve treadmill training or overground walking with
                    cues.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  4. Balance and Coordination
                </h3>
                <ul>
                  <li>Improves stability during walking or standing.</li>
                  <li>
                    Important if foot drop is linked to a neurological condition
                    like stroke or MS.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  5. Functional Electrical Stimulation (FES)
                </h3>
                <ul>
                  <li>
                    Can be used during therapy to activate dorsiflexor muscles
                    during walking.
                  </li>
                  <li>Encourages natural movement and muscle re-education.</li>
                </ul>

                <h3 className="senocare__heading__third">
                  6. Education and{" "}
                  <a
                    href="https://senocare.in/physiotherapy-home-service/physiotherapy-exercises-for-paralysis/"
                    className="hyper__link">
                    Home Exercise Programs
                  </a>{" "}
                </h3>
                <ul>
                  <li>
                    Teaching safe techniques for stairs, uneven surfaces, and
                    daily activities.
                  </li>
                  <li>
                    Home exercises to continue progress and reduce dependence on
                    devices.
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Goals of Physiotherapy in Foot Drop:
                </h2>

                <ul>
                  <li>Improve foot clearance while walking</li>
                  <li>Reduce fall risk</li>
                  <li>Minimize dependence on braces</li>
                  <li>Enhance overall mobility and quality of life</li>
                </ul>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  When to see a doctor
                </h2>

                <h2 className="service__heading__senocare"></h2>
                <h3 className="senocare__heading__third">
                  1. Difficulty lifting the front of your foot or toes
                </h3>
                <ul>
                  <li>
                    If your foot drags while walking or you trip frequently.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  2. Sudden changes in walking pattern
                </h3>
                <ul>
                  <li>
                    Especially if you’re lifting your knee higher to avoid
                    dragging your foot.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  3. Muscle weakness in the leg or foot
                </h3>
                <ul>
                  <li>
                    New or worsening weakness should be evaluated quickly.
                  </li>{" "}
                </ul>
                <h3 className="senocare__heading__third">
                  4. Numbness or tingling
                </h3>
                <ul>
                  <li>
                    Particularly on the top of the foot, shin, or outer leg.
                  </li>{" "}
                </ul>
                <h3 className="senocare__heading__third">
                  5. Loss of balance or frequent falls
                </h3>
                <ul>
                  <li>May signal a more serious neurological cause.</li>{" "}
                </ul>
                <h3 className="senocare__heading__third">
                  6. Foot slapping the ground when walking
                </h3>
                <ul>
                  <li>This can indicate weakened dorsiflexor muscles.</li>{" "}
                </ul>
                <h3 className="senocare__heading__third">
                  7. Symptoms after trauma or surgery
                </h3>
                <ul>
                  <li>Especially after knee, hip, or spinal procedures.</li>{" "}
                </ul>
                <h3 className="senocare__heading__third">
                  8. Symptoms or involvement of both legs
                </h3>
                <ul>
                  <li>
                    Could suggest a systemic or central nervous system disorder.
                  </li>{" "}
                </ul>
                <h3 className="senocare__heading__third">
                  9. Progressive symptoms or involvement of both legs
                </h3>
                <ul>
                  <li>
                    Could suggest a systemic or central nervous system disorder.
                  </li>{" "}
                </ul>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Senocare at home physiotherapy services for foot drop
                </h2>
                <p className="services__para__senocare">
                  Senocare offers{" "}
                  <a
                    href="/physiotherapy-home-service/"
                    className="hyper__link">
                    home physiotherapy services in Delhi
                  </a>{" "}
                  ,{" "}
                  <a
                    href="/physiothreapy-at-home-in-gurgaon/"
                    className="hyper__link">
                    Gurugram{" "}
                  </a>{" "}
                  ,{" "}
                  <a
                    href="/physiothreapy-at-home-in-noida/"
                    className="hyper__link">
                    Noida
                  </a>{" "}
                  and{" "}
                  <a
                    href="/physiotherapy-at-home-in-faridabad/"
                    className="hyper__link">
                    Faridabad{" "}
                  </a>{" "}
                  designed to provide personalized care in the comfort of your
                  home. Their team of medically certified physiotherapists
                  specializes in treating a wide range of conditions, including
                  <a href="/arthritis/" className="hyper__link">
                    {" "}
                    arthritis
                  </a>{" "}
                  , osteoporosis,
                  <a
                    href="/nursing-care/post-operative-care-at-home/"
                    className="hyper__link">
                    {" "}
                    post-surgery recovery
                  </a>
                  , and neurological disorders such as{" "}
                  <a
                    href="/physiotherapy-home-service/stroke-paralysis/"
                    className="hyper__link">
                    stroke{" "}
                  </a>{" "}
                  and{" "}
                  <a
                    href="/physiotherapy-home-service/parkinsons-disease-treatment/"
                    className="hyper__link">
                    {" "}
                    Parkinson’s disease.
                  </a>
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Senocare Physiotherapy Services at Home
                </h2>
                <h3 className="senocare__heading__third">Key Offerings:</h3>
                <p className="services__para__senocare">
                  <b> Orthopedic Physiotherapy:</b> Addressing musculoskeletal
                  issues like arthritis, fractures, and joint pain.
                </p>

                <ul>
                  <li>
                    <b>Neurological Physiotherapy:</b> Focused on enhancing
                    motor skills and mobility for conditions such as stroke,
                    Parkinson’s, or multiple sclerosis.
                  </li>
                  <li>
                    <b>Geriatric Physiotherapy: </b>Tailored to the unique needs
                    of older adults, promoting mobility, balance, and overall
                    well-being.
                  </li>
                  <li>
                    <b>Post-Surgery Rehabilitation:</b> Assisting in recovery
                    after surgeries like hip replacement or ligament repairs.
                  </li>
                  <li>
                    <b>
                      {" "}
                      <a
                        href="/physiotherapy-home-service/electrotherapy-in-physiotherapy/"
                        className="hyper__link">
                        Electrotherapy{" "}
                      </a>
                      and{" "}
                      <a
                        href="/physiotherapy-home-service/ultrasound-therapy/"
                        className="hyper__link">
                        {" "}
                        Ultrasound Therapy
                      </a>
                      :{" "}
                    </b>
                    Utilizing advanced modalities to alleviate pain and promote
                    healing.
                  </li>
                </ul>
                <h3 className="senocare__heading__third">
                  Benefits of Home Physiotherapy:
                </h3>

                <ul>
                  <li>
                    <b>Convenience: </b>Eliminates the need to travel to a
                    clinic, saving time and effort.
                  </li>
                  <li>
                    <b>Personalized Care: </b>Treatment plans are tailored to
                    individual needs and conditions.
                  </li>
                  <li>
                    <b>Comfort: </b>Receiving therapy in a familiar environment
                    can enhance relaxation and recovery.
                  </li>
                  <li>
                    <b>Safety: </b>Particularly beneficial for elderly
                    individuals or those with mobility issues.
                  </li>
                </ul>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">FAQs</h2>
                <h3 className="senocare__heading__third">
                  A. What is the cause of foot drop?
                </h3>
                <p className="services__para__senocare">
                  The cause of foot drop is usually a problem affecting the
                  muscles, nerves, or brain/spinal cord that control the
                  movement of the foot and ankle. The most common cause is
                  damage or compression of the peroneal nerve.
                </p>
                <h3 className="senocare__heading__third">
                  B. Can foot drop be cured?
                </h3>
                <p className="services__para__senocare">
                  Yes, foot drop can sometimes be cured, but whether it is
                  curable or only manageable depends entirely on the underlying
                  cause and how early it is treated.
                </p>
                <h3 className="senocare__heading__third">
                  C. Is foot drop nerve L4 or L5?
                </h3>
                <p className="services__para__senocare">
                  L5 is the most common nerve root associated with foot drop
                  because it controls the muscles responsible for lifting the
                  foot.
                </p>
                <p className="services__para__senocare">
                  L4 can contribute but is less commonly the direct cause of
                  foot drop.
                </p>
                <h3 className="senocare__heading__third">
                  D. Is foot drop a red flag?
                </h3>
                <p className="services__para__senocare">
                  Yes, foot drop can be a red flag, as it often indicates an
                  underlying neurological, muscular, or structural problem that
                  requires medical attention. While it may sometimes be caused
                  by temporary factors, it can also signal more serious
                  conditions, especially when it appears suddenly or progresses
                  over time.
                </p>
                <h3 className="senocare__heading__third">
                  E. How can I fix my foot drop at home?
                </h3>
                <p className="services__para__senocare">
                  Fixing foot drop at home can be challenging, but there are
                  several conservative measures and home exercises that can help
                  improve mobility and manage symptoms.
                </p>
                <h3 className="senocare__heading__third">
                  F. Which muscles are affected in foot drop?
                </h3>
                <p className="services__para__senocare">1. Tibialis Anterior</p>
                <p className="services__para__senocare">
                  Primary muscle responsible for dorsiflexing the foot (lifting
                  the foot upwards) and inverting the foot (turning the sole
                  inward).
                </p>
                <p className="services__para__senocare">
                  Weakness in the tibialis anterior leads to difficulty lifting
                  the foot, resulting in the foot dragging during walking.
                </p>
                <p className="services__para__senocare">
                  <b> 2. Extensor Hallucis Longus (EHL)</b>
                </p>
                <p className="services__para__senocare">
                  This muscle lifts the big toe (extends the toe).
                </p>
                <p className="services__para__senocare">
                  Weakness in the EHL can cause difficulty lifting the big toe,
                  making it more prone to dragging along the ground.
                </p>
                <p className="services__para__senocare">
                  <b> 3. Extensor Digitorum Longus (EDL)</b>
                </p>
                <p className="services__para__senocare">
                  This muscle helps extend the toes (other than the big toe) and
                  assists with dorsiflexion.
                </p>
                <p className="services__para__senocare">
                  Weakness in the EDL affects the ability to lift the toes,
                  leading to foot drop or difficulty clearing the toes while
                  walking.
                </p>
                <p className="services__para__senocare">
                  <b> 4. Peroneus Tertius (or Fibularis Tertius)</b>
                </p>
                <p className="services__para__senocare">
                  This muscle assists in dorsiflexion and eversion (turning the
                  foot outward).
                </p>
                <p className="services__para__senocare">
                  Weakness in peroneus tertius can contribute to difficulty in
                  dorsiflexing the foot and causing the foot to drag.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  What is the best exercise for foot drop?
                </h2>
                <h3 className="senocare__heading__third">
                  1. Tibialis Anterior Strengthening (Dorsiflexion Exercise)
                </h3>
                <p className="services__para__senocare">
                  <b>How to do it:</b>
                </p>
                <ul>
                  <li>Sit with your leg straight out in front of you.</li>
                  <li>
                    Gently pull your toes and foot upward toward your shin, as
                    if trying to lift your foot off the ground.
                  </li>
                  <li>
                    Hold for 5-10 seconds, then slowly lower your foot back
                    down.
                  </li>
                  Repeat 10-15 times for each foot.
                </ul>
                <p className="services__para__senocare">
                  <b>Why it helps:</b> This exercise strengthens the tibialis
                  anterior, which is the main muscle responsible for lifting the
                  foot.
                </p>
                <h3 className="senocare__heading__third">2. Toe Taps</h3>
                <p className="services__para__senocare">
                  <b>How to do it:</b>{" "}
                </p>
                <p className="services__para__senocare">
                  Sit with your legs extended.
                </p>
                <ul>
                  <li>
                    Tap your toes on the ground in front of you, lifting them up
                    as high as you can.
                  </li>
                  <li>Repeat the tapping movement for 10-15 reps.</li>
                </ul>
                <p className="services__para__senocare">
                  <b>Why it helps: </b>This works the extensor muscles of the
                  foot and helps improve control of foot movement, which is
                  essential for walking without dragging your foot.
                </p>
                <h3 className="senocare__heading__third">3. Towel Scrunches</h3>
                <p className="services__para__senocare">
                  <b>How to do it:</b>{" "}
                </p>
                <ul>
                  {" "}
                  <li>
                    Sit on a chair and place a towel flat on the floor in front
                    of you.
                  </li>
                  <li>
                    Use your toes to scrunch the towel toward you, working the
                    muscles in your foot and toes.
                  </li>
                  <li>Repeat for 10-15 scrunches, then relax and rest.</li>
                </ul>
                <p className="services__para__senocare">
                  <b>Why it helps: </b>This strengthens the small muscles in the
                  foot and toe extensors, improving the overall function of the
                  foot.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  4. Ankle Dorsiflexion with Resistance Band
                </h3>
                <p className="services__para__senocare">
                  <b>How to do it:</b>{" "}
                </p>
                <ul>
                  <li>
                    Sit on the floor with your leg extended, loop a resistance
                    band around the top of your foot.
                  </li>
                  <li>
                    Hold the other end of the band and gently pull your toes and
                    foot upwards toward your shin (dorsiflexion).
                  </li>
                  <li>Hold for 5-10 seconds and release.</li>
                  <li>Perform 10-15 repetitions.</li>
                </ul>
                <p className="services__para__senocare">
                  <b>Why it helps: </b>Using a resistance band provides extra
                  resistance, which helps to strengthen the dorsiflexors and
                  improve foot lift strength.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  5. Heel and Toe Raises
                </h3>
                <p className="services__para__senocare">
                  <b>How to do it: </b>{" "}
                </p>
                <ul>
                  <li>Stand tall with your feet flat on the floor.</li>
                  <li>
                    Raise your heels off the floor, balancing on your toes, and
                    hold for 5 seconds.
                  </li>
                  <li>
                    Lower your heels and then raise your toes off the floor
                    while keeping your heels down (this is the reverse
                    movement).
                  </li>
                  <li>Repeat 10-15 reps for both movements.</li>
                </ul>
                <p className="services__para__senocare">
                  <b>Why it helps:</b> This strengthens the calf muscles and
                  helps improve the balance and stability required for walking
                  with foot drop.
                </p>{" "}
                <h3 className="senocare__heading__third">6. Standing March</h3>
                <p className="services__para__senocare">
                  <b>How to do it:</b>{" "}
                </p>
                <ul>
                  <li>
                    Stand upright, holding onto a stable surface for support if
                    necessary.
                  </li>
                  <li>
                    March in place, lifting each knee and foot as high as
                    possible, focusing on lifting your toes as you move.
                  </li>
                  <li>Perform for 2-3 minutes.</li>
                </ul>
                <p className="services__para__senocare">
                  <b>Why it helps:</b> This helps with gait training, improves
                  muscle coordination, and encourages dorsiflexion during
                  walking.
                </p>
                <h3 className="senocare__heading__third">
                  7. Seated Ankle Circles
                </h3>
                <p className="services__para__senocare">
                  <b>How to do it:</b>{" "}
                </p>
                <ul>
                  <li>Sit on a chair with your legs extended.</li>
                  <li>
                    Draw circles with your toes in one direction for 10
                    repetitions, then reverse and circle in the other direction.
                  </li>
                </ul>
                <p className="services__para__senocare">
                  <b>Why it helps: </b>This exercise works the ankle muscles,
                  improves range of motion, and can help stimulate circulation
                  in the foot and ankle.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Additional Tips for Managing Foot Drop:
                </h2>
                <ul>
                  <li>
                    <b> Consistency is key:</b> Perform these exercises daily or
                    as recommended by your healthcare provider or
                    physiotherapist.
                  </li>
                  <li>
                    <b> Wear a brace or AFO</b> if necessary, to support your
                    foot and reduce the risk of falling.
                  </li>
                  <li>
                    <b> Work on balance</b> and <b>gait training</b> to improve
                    your overall walking technique.
                  </li>
                </ul>{" "}
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FootDrop;
