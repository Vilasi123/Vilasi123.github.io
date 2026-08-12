import { Container, Row, Col } from "react-bootstrap";
import Physio1 from "../../assets/Image/PhysiotherapySection/Physio4.jpg";
import Physio2 from "../../assets/Image/PhysiotherapySection/Physio5.jpg";
import Physio3 from "../../assets/Image/PhysiotherapySection/Physio6.jpg";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import Accordion from "react-bootstrap/Accordion";
import PhysioGurugram from "../../assets/Image/PhysiotherapySection/Physiotherapy-at-Home-in-Gurgaon.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "../PallitveCare/Services.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const PhysiotherapyGurugram = () => {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <div className="services__content__senocare">
          <Container>
            <Row>
              <Col md={12} lg={12}>
                <LazyLoadImage
                  src={PhysioGurugram}
                  className="img-fluid senocare__service__img"
                />
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Why Choose Senocare Physiotherapy at Home in Gurgaon?
                </h2>
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
                  Senocare Physiotherapy at Home in Gurgaon provides a number of
                  strong arguments for people looking for individualised,
                  superior care in the convenience of their own homes. The
                  following are some of the main advantages of selecting
                  Senocare Physiotherapy.
                </p>
                <h3 className="senocare__heading__third">
                  1. Comfort & Convenience
                </h3>
                <p className="services__para__senocare">
                  For patients with mobility impairments or those recuperating
                  from injuries, in-home physiotherapy treatments save time and
                  alleviate the burden of commuting.
                </p>
                <p className="services__para__senocare">
                  Patients can receive treatment in a setting that is
                  comfortable and known to them, which helps promote rest and
                  healing.
                </p>
                <h3 className="senocare__heading__third">
                  2. Personalized Care{" "}
                </h3>
                <p className="services__para__senocare">
                  Senocare offers physiotherapy treatment plans that are
                  specifically designed to meet the needs of each patient,
                  guaranteeing that the therapy is appropriate for their
                  condition and advancement.
                </p>
                <p className="services__para__senocare">
                  With one-on-one sessions, the physiotherapists can closely
                  assess patients’ progress and make necessary adjustments.
                </p>
                <h3 className="senocare__heading__third">
                  3. Professional and Skilled Physiotherapists
                </h3>
                <p className="services__para__senocare">
                  The Senocare team is made up of highly skilled and
                  knowledgeable physiotherapists who specialise in treating a
                  variety of ailments, from neurological illnesses to
                  musculoskeletal problems.
                </p>
                <p className="services__para__senocare">
                  To guarantee that patients receive the finest care possible,
                  they provide their professional skills.
                </p>
                <h3 className="senocare__heading__third">
                  4. Flexibility in Time
                </h3>
                <p className="services__para__senocare">
                  It is simpler to integrate therapy into everyday routines when
                  patients receive physiotherapy at home since they can select
                  the times that are most convenient for them.
                </p>
                <p className="services__para__senocare">
                  Those with hectic schedules or those who require treatment at
                  particular times may particularly benefit from this
                  flexibility.
                </p>
                <h3 className="senocare__heading__third">
                  5. Better Results and Compliance
                </h3>
                <p className="services__para__senocare">
                  Because they feel more at ease and can avoid the inconvenience
                  of clinic appointments, patients who receive treatment at home
                  are more likely to continue with their rehabilitation
                  programs, according to studies.
                </p>
                <h3 className="senocare__heading__third">6. Economical</h3>
                <p className="services__para__senocare">
                  When you include in extra clinic fees and travel expenses,
                  home-based physiotherapy is frequently more cost-effective
                  than clinic-based treatments. Packages are frequently offered,
                  giving patients an affordable option for continuing care.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Benefits of home physiotherapist
                </h2>
                <ul>
                  <li>Convenience and Comfortable</li>
                  <li>Personalized and Focused Care</li>
                  <li>Greater Flexibility</li>
                  <li>Improved Compliance and Motivation</li>
                  <li>Faster Recovery</li>
                  <li>Cost-Effective</li>
                  <li>Safe and Relaxing Environment</li>
                  <li>Holistic Approach to Recovery</li>
                </ul>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Gurgaon Home Physiotherapists’ Treatment includes
                </h2>
                <h3 className="senocare__heading__third">
                  Orthopedic Physiotherapy
                </h3>
                <p className="services__para__senocare">
                  <b> Post-Surgical Rehabilitation:</b> Rehabilitation following
                  orthopedic surgeries like joint replacement, fractures,
                  ligament repairs, etc.
                </p>
                <p className="services__para__senocare">
                  <b> Sports Injury Rehabilitation:</b> Recovery from sprains,
                  strains, tendonitis, fractures, and other sports-related
                  injuries.
                </p>
                <p className="services__para__senocare">
                  <b> Joint Pain & Arthritis Management: </b> Pain relief and
                  strengthening exercises for conditions like osteoarthritis and
                  rheumatoid arthritis.
                </p>
                <p className="services__para__senocare">
                  <b> Back and Neck Pain Treatment:</b> Management of chronic
                  pain, herniated discs, sciatica, and postural issues.
                </p>
                <h3 className="senocare__heading__third">
                  2. Neurological Physiotherapy
                </h3>
                <p className="services__para__senocare">
                  <b> Stroke Rehabilitation:</b> Motor recovery, strength
                  training, and balance exercises for stroke survivors.
                </p>
                <p className="services__para__senocare">
                  <b> Parkinson’s Disease Management:</b> Exercises to improve
                  movement, flexibility, and balance.
                </p>
                <p className="services__para__senocare">
                  <b> Multiple Sclerosis (MS) Therapy: </b> assisting patients
                  in managing their weariness, balance problems, and mobility
                  obstacles.
                </p>
                <p className="services__para__senocare">
                  <b> Spinal Cord Injury Rehabilitation:</b> programs designed
                  to help people recover from spinal cord injuries by increasing
                  their strength, movement, and independence.
                </p>
                <p className="services__para__senocare">
                  <b> Traumatic Brain Injury (TBI) Rehabilitation: </b>{" "}
                  Cognitive and physical therapy to aid in recovery from brain
                  injuries.
                </p>
                <h3 className="senocare__heading__third">
                  3. Geriatric Physiotherapy
                </h3>
                <p className="services__para__senocare">
                  <b> Fall Prevention and Balance Training:</b> Exercises to
                  reduce the risk of falls and improve overall balance and
                  mobility.
                </p>
                <p className="services__para__senocare">
                  <b> Post-Fracture Rehabilitation: </b> Restoring movement and
                  strength after bone fractures, often in the elderly.
                </p>
                <p className="services__para__senocare">
                  <b> Age-Related Conditions:</b> osteoporosis, arthritis, and
                  general musculoskeletal pain, among other age-related
                  ailments.
                </p>
                <p className="services__para__senocare">
                  <b> Mobility and Functional Training:</b> Helping elderly
                  individuals maintain or regain independence in daily
                  activities
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  We offer homecare physiotherapy services in conditions such
                  as:
                </h2>
                <ul>
                  <li>
                    <a
                      href="/physiotherapy-home-service/ankle-sprain/"
                      className="hyper__link">
                      Ankle sprain
                    </a>
                  </li>
                  <li>
                    <a
                      href="/physiotherapy-home-service/back-pain-treatment-at-home/"
                      className="hyper__link">
                      Back pain
                    </a>
                  </li>
                  <li>
                    <a
                      href="/physiotherapy-home-service/adhesive-capsulitis-treatment/"
                      className="hyper__link">
                      Adhesive capsulitis
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="/physiotherapy-home-service/plantar-fasciitis/"
                      className="hyper__link">
                      {" "}
                      Plantar fasciitis{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/physiotherapy-home-service/ankylosing-spondylitis/"
                      className="hyper__link">
                      Ankylosing spondylitis
                    </a>{" "}
                  </li>
                  <li>
                    <a
                      href="/physiotherapy-home-service/rheumatoid-arthritis/"
                      className="hyper__link">
                      Rheumatoid arthritis
                    </a>
                  </li>
                  <li>Cerebellar ataxia</li>
                  <li>Chondromalacia patella</li>

                  <li>
                    <a
                      href="/physiotherapy-home-service/fibromyalgia/"
                      className="hyper__link">
                      Fibromyalgia{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/physiotherapy-home-service/footdrop/"
                      className="hyper__link">
                      Foot drop
                    </a>
                  </li>
                  <li>Hemiplegia</li>
                  <li>Post fracture rehabilitation</li>
                  <li>Scoliosis</li>
                  <li>
                    <a
                      href="/physiotherapy-home-service/parkinsons-disease-treatment/"
                      className="hyper__link">
                      Parkinson’s disease
                    </a>
                  </li>
                  <li>Vertigo</li>
                  <li>Sciatica</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
  // return (
  //   <div>
  //     <Header />
  //     <div className="services__content__senocare">
  //       <Container>
  //         <Row>
  //           <Col>
  //             <h1 className="service__heading__senocare">
  //               Physiotherapy at Home in Gurgaon: Elevating Your Well-being at
  //               Your Doorstep
  //             </h1>
  //           </Col>
  //         </Row>
  //         <Row>
  //           <Col md={12} lg={6}>
  //             <LazyLoadImage
  //               src={Physio1}
  //               className="img-fluid senocare__service__img"
  //             />
  //           </Col>
  //           <Col xs={12} md={12} lg={6}>
  //             <p className="services__para__senocare">
  //               In the hustle and bustle of daily life, health often takes a
  //               backseat. Recognizing the need for accessible healthcare
  //               solutions, Senocare introduces Physiotherapy at Home in Gurgaon.
  //               This innovative service is designed to bring the benefits of
  //               physiotherapy directly to your doorstep, ensuring that you
  //               receive personalized care in the comfort of your own home.
  //             </p>
  //             <div className="shakti__content">
  //               <div className="img__content__shakti">
  //                 <LazyLoadImage
  //                   src={Shakti}
  //                   className="img-fluid shakti__img"
  //                 />
  //               </div>
  //               <div className="medically__content">
  //                 <h5 className="medically__reviewed">
  //                   Content is medically reviewed by:
  //                 </h5>
  //                 <p className="drsakti">
  //                   <a
  //                     href="https://www.linkedin.com/in/dr-shakti-singh-6ba74819a/"
  //                     target="blank"
  //                     className="hyper__link">
  //                     Dr. Shakti Singh
  //                   </a>
  //                 </p>
  //               </div>
  //             </div>
  //           </Col>
  //         </Row>
  //         <Row className="senocare__row__content">
  //           <Col>
  //             <h2 className="senocare___heading__sencond">
  //               Why Choose Senocare Physiotherapy at Home in Gurgaon?
  //             </h2>
  //             <p className="services__para__senocare">
  //               Senocare stands out as a beacon of healthcare excellence,
  //               committed to providing top-notch physiotherapy services in the
  //               heart of Gurgaon. Our team of skilled and experienced
  //               physiotherapists is dedicated to enhancing your well-being by
  //               tailoring treatment plans to your specific needs. Not only this
  //               we cater to all your health needs including regular vital
  //               checkups, dietary concerns and emergency help. With Senocare,
  //               you can trust that your journey to recovery is in capable hands.
  //             </p>{" "}
  //           </Col>
  //         </Row>
  //         <Row className="senocare__row__content">
  //           <Col>
  //             <h2 className="senocare___heading__sencond">
  //               What is a Home Physiotherapist?
  //             </h2>
  //             <p className="services__para__senocare">
  //               A home physiotherapist is a qualified professional who brings
  //               the expertise of physiotherapy directly to your residence. These
  //               healthcare professionals specialize in assessing, diagnosing,
  //               and treating a range of musculoskeletal conditions, aiming to
  //               improve mobility, reduce pain, and enhance overall functionality
  //               of an individual. By opting for a home physiotherapist, you
  //               eliminate the need to travel to a clinic, making the healing
  //               process more convenient and accessible.
  //             </p>{" "}
  //           </Col>
  //         </Row>
  //         <Row className="senocare__row__content">
  //           <Col>
  //             <h2 className="senocare___heading__sencond">
  //               Types of Physiotherapy Treatment at Home in Gurgaon
  //             </h2>
  //             <h3 className="senocare__heading__third">
  //               Orthopedic Physiotherapy
  //             </h3>
  //             <p className="services__para__senocare">
  //               Tailored for musculoskeletal issues, addressing conditions like
  //               arthritis, fractures, and joint pain.
  //             </p>
  //             <h3 className="senocare__heading__third">
  //               Neurological Physiotherapy
  //             </h3>
  //             <p className="services__para__senocare">
  //               Focused on enhancing motor skills and mobility for individuals
  //               with neurological disorders such as stroke, Parkinson’s , or
  //               multiple sclerosis.
  //             </p>
  //             <h3 className="senocare__heading__third">
  //               Cardiopulmonary Physiotherapy
  //             </h3>
  //             <p className="services__para__senocare">
  //               Targeting heart and lung conditions, including post-surgery
  //               rehabilitation and respiratory issues, lung congestion.
  //             </p>
  //             <h3 className="senocare__heading__third">
  //               Geriatric Physiotherapy
  //             </h3>
  //             <p className="services__para__senocare">
  //               Catering to the unique needs of older adults, promoting
  //               mobility, balance, coordination and overall well-being.
  //             </p>
  //             <h3 className="senocare__heading__third">
  //               Pediatric Physiotherapy
  //             </h3>
  //             <p className="services__para__senocare">
  //               Specialized care for children, addressing developmental delays,
  //               injuries, and congenital conditions.
  //             </p>
  //           </Col>
  //         </Row>
  //         <Row className="senocare__row__content">
  //           <Col md={12} lg={6}>
  //             <LazyLoadImage
  //               src={Physio2}
  //               className="img-fluid senocare__service__img"
  //             />
  //           </Col>
  //           <Col md={12} lg={6}>
  //             <h2 className="senocare___heading__sencond">
  //               How Long Does Each Home Physiotherapy Session Last?
  //             </h2>
  //             <p className="services__para__senocare">
  //               The duration of a home physiotherapy session varies depending on
  //               the individual’s condition and the treatment plan outlined by
  //               the physiotherapist. On average, a thorough assessment followed
  //               by a treatment session typically lasts between 45 minutes to an
  //               hour. This allows ample time for a thorough assessment, targeted
  //               exercises, and any necessary adjustments to the treatment plan.
  //               The focus is always on quality care and achieving optimal
  //               results within each session.
  //             </p>{" "}
  //           </Col>
  //         </Row>
  //         <Row className="senocare__row__content">
  //           <Col>
  //             <h2 className="senocare___heading__sencond">
  //               Is it Safe to Conduct a Home Physiotherapy Session in Gurgaon?
  //             </h2>
  //             <p className="services__para__senocare">
  //               Senocare prioritizes your safety above all else. Our home
  //               physiotherapy sessions adhere to strict hygiene protocols and
  //               safety measures. Our physiotherapists are equipped with
  //               necessary protective gear, and thorough sanitization practices
  //               are followed. With your health being our outmost concern we take
  //               every precaution to create a safe and comfortable environment
  //               for the sessions
  //             </p>
  //           </Col>
  //         </Row>
  //         <Row className="senocare__row__content">
  //           <Col>
  //             <h2 className="senocare___heading__sencond">
  //               What to Expect in Physiotherapy at Home in Gurgaon
  //             </h2>
  //             <p className="services__para__senocare">
  //               When you choose Senocare for{" "}
  //               <a href="/physiotherapy-home-service" className="hyper__link">
  //                 {" "}
  //                 physiotherapy at home
  //               </a>{" "}
  //               , expect a personalized and comprehensive approach to your
  //               well-being. We begin with an detailed medical history and proper
  //               examination of your current concerns. Following the assessment,
  //               a customized treatment plan is crafted to address your specific
  //               needs and goals. Each session may consist of manual therapy,{" "}
  //               <a
  //                 href="/physiotherapy-home-service/dry-needling/"
  //                 className="hyper__link">
  //                 dry needling
  //               </a>{" "}
  //               ,{" "}
  //               <a
  //                 href="/physiotherapy-home-service/cupping-therapy-for-neck-pain/"
  //                 className="hyper__link">
  //                 {" "}
  //                 cupping{" "}
  //               </a>
  //               for your targeted concern along with electro therapeutic
  //               modalities followed by stretching and strength training of the
  //               targeted muscle groups. We not only try to improve your current
  //               issues but help with making your life more active and
  //               independent.
  //             </p>{" "}
  //           </Col>
  //         </Row>
  //         <Row className="services__content__senocare">
  //           <Col>
  //             <h2 className="senocare___heading__sencond">
  //               Frequently Asked Questions (FAQs):
  //             </h2>
  //           </Col>
  //           <Col xs={12}>
  //             <Accordion
  //               defaultActiveKey="0 "
  //               className="accordian__service__section">
  //               <Accordion.Item eventKey="0">
  //                 <Accordion.Header>
  //                   <h5 className="accordian__header  ">
  //                     How much do Physiotherapy sessions cost in Gurgaon?
  //                   </h5>
  //                 </Accordion.Header>
  //                 <Accordion.Body>
  //                   <p className="accordian__para  ">
  //                     On average,{" "}
  //                     <a
  //                       className="hyper__link"
  //                       href="https://blog.senocare.in/difference-between-physiotherapy-and-neurotherapy-clf0xr4bm44921kp7gh9lh1wy/">
  //                       physiotherapy
  //                     </a>{" "}
  //                     sessions in Gurgaon may cost approximately INR 800 to INR
  //                     1500 per session. The actual cost can vary based on the
  //                     physiotherapist’s experience, the complexity of the
  //                     condition, and the duration of each session.
  //                   </p>
  //                 </Accordion.Body>
  //               </Accordion.Item>
  //             </Accordion>
  //           </Col>
  //           <Col xs={12}>
  //             <Accordion
  //               defaultActiveKey="0 "
  //               className="accordian__service__section">
  //               <Accordion.Item eventKey="0">
  //                 <Accordion.Header>
  //                   <h5 className="accordian__header  ">
  //                     How many days of Physiotherapy sessions will i need?
  //                   </h5>
  //                 </Accordion.Header>
  //                 <Accordion.Body>
  //                   <p className="accordian__para  ">
  //                     The number of physiotherapy sessions needed varies
  //                     depending on the individual’s condition. The time depends
  //                     on age, type of disorder you have and how your body
  //                     responds to treatment. The physiotherapist will assess
  //                     your progress regularly, and adjustments to the treatment
  //                     plan will be made as necessary. In conclusion, Senocare’s
  //                     Physiotherapy at Home in Gurgaon is a groundbreaking
  //                     solution for those seeking convenient and effective
  //                     healthcare. Trust Senocare to be your partner in
  //                     well-being, committed to enhancing the quality of your
  //                     life through accessible and personalized physiotherapy at
  //                     home in Gurgaon.
  //                   </p>
  //                 </Accordion.Body>
  //               </Accordion.Item>
  //             </Accordion>
  //           </Col>
  //         </Row>
  //       </Container>
  //     </div>
  //     <Footer />
  //   </div>
  // );
};

export default PhysiotherapyGurugram;
