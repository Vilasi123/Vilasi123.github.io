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

const AnkylosingSpondylitis = () => {
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
                  Ankylosing Spondylitis
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
                  The chronic inflammatory condition known as ankylosing
                  spondylitis (AS) mainly affects the sacroiliac joints, which
                  are where the spine and pelvis connect. Vertebral fusion
                  brought on by AS over time may cause decreased mobility and a
                  distinctive hunched posture. It belongs to a class of diseases
                  called spondyloarthritis, which also includes reactive
                  arthritis and psoriatic arthritis.
                </p>{" "}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Ankylosing spondylitis Symptoms
                </h2>
                <p className="services__para__senocare">
                  Ankylosing spondylitis symptoms might include the following
                  and usually appear gradually:
                </p>{" "}
                <p className="services__para__senocare">
                  <b> Chronic back pain: </b> Usually beginning in the buttocks
                  and lower back, the discomfort may get better with exercise
                  but go worse when you rest.
                </p>{" "}
                <p className="services__para__senocare">
                  <b> Stiffness:</b> Especially after periods of inactivity or
                  in the morning.
                </p>
                <p className="services__para__senocare">
                  <b> Fatigue:</b> It’s normal to feel worn out or lacking in
                  energy.
                </p>{" "}
                <p className="services__para__senocare">
                  <b> Inflammation: </b> May also impact other joints, including
                  the shoulders, knees, and hips.
                </p>{" "}
                <p className="services__para__senocare">
                  <b> Postural changes: </b> As the spine fuses, AS may
                  eventually cause a forward-stooped posture.
                </p>{" "}
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Ankylosing spondylitis Causes
                </h2>
                <p className="services__para__senocare">
                  The exact cause of AS is unknown, but it is believed to be a
                  combination of genetic and environmental factors. The gene
                  HLA-B27 is strongly associated with the condition, although
                  not everyone with this gene will develop AS.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Ankylosing spondylitis Diagnosis
                </h2>
                <p className="services__para__senocare">
                  <b> Physical examination:</b> A doctor may assess range of
                  motion, tenderness in the spine and joints, and signs of
                  inflammation.
                </p>{" "}
                <p className="services__para__senocare">
                  Imaging: X-rays, MRI, or CT scans can show changes in the
                  spine and joints.
                </p>{" "}
                <p className="services__para__senocare">
                  <b>Blood tests:</b> Testing for the HLA-B27 gene, as well as
                  markers of inflammation such as ESR (erythrocyte sedimentation
                  rate) and CRP (C-reactive protein), can aid in diagnosis.
                </p>{" "}
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">Treatment</h2>
                <p className="services__para__senocare">
                  Ankylosing spondylitis has no known cure, although treatment
                  aims to control symptoms, lower inflammation, and stop
                  long-term harm.
                </p>
                <h3 className="senocare__heading__third">Treatment include:</h3>
                <p className="services__para__senocare">
                  <b> NSAIDs (nonsteroidal anti-inflammatory drugs): </b> To
                  lessen inflammation and relieve pain.
                </p>{" "}
                <p className="services__para__senocare">
                  <b>
                    {" "}
                    DMARDs, or disease-modifying antirheumatic medications:{" "}
                  </b>{" "}
                  If NSAIDs are not enough, drugs like methotrexate or
                  sulfasalazine may be administered.
                </p>
                <p className="services__para__senocare">
                  <b> Biologic agents: </b> IL-17 inhibitors (e.g., secukinumab)
                  and TNF inhibitors (e.g., etanercept, infliximab) have
                  demonstrated efficacy in lowering inflammation and slowing the
                  course of disease.
                </p>{" "}
                <p className="services__para__senocare">
                  Physical therapy: Stretching and exercise are essential for
                  preserving range of motion and controlling pain.
                </p>{" "}
                <p className="services__para__senocare">
                  <b> Lifestyle modifications: </b> Since they can enhance
                  results, regular exercise, proper posture, and quitting
                  smoking are advised.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  When to see a doctor
                </h2>
                <p className="services__para__senocare">
                  1. Chronic or Persistent Back Pain
                </p>
                <p className="services__para__senocare">2. Morning Stiffness</p>
                <p className="services__para__senocare">
                  3. Pain and Inflammation in Other Joints
                </p>
                <p className="services__para__senocare">4. Postural Changes</p>
                <p className="services__para__senocare">
                  5. Fatigue or Unexplained Tiredness
                </p>
                <p className="services__para__senocare">
                  6. Difficulty with Daily Activities
                </p>
                <p className="services__para__senocare">7. Eye Problems</p>
                <p className="services__para__senocare">
                  8. Family History of AS or Related Conditions
                </p>
                <p className="services__para__senocare">
                  9. Unexplained Weight Loss or Fever
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">Complications</h2>
                <p className="services__para__senocare">
                  Serious side effects from ankylosing spondylitis include the
                  following if treatment is not received:
                </p>
                <p className="services__para__senocare">
                  <b>Spinal fusion:</b> As the illness worsens, the vertebrae
                  may unite, resulting in a permanent loss of spinal suppleness.
                </p>
                <p className="services__para__senocare">
                  The forward-bent posture linked to AS is one example of a
                  postural deformity.
                </p>
                <p className="services__para__senocare">
                  <b>Osteoporosis: </b>This condition can make bones weaker and
                  more brittle.
                </p>
                <p className="services__para__senocare">
                  <b>Lung and heart issues:</b> In rare cases, AS can impact the
                  lungs (resulting in restrictive lung disease) or the heart
                  (creating issues with the aortic valve).
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  How Senocare can help
                </h2>
                <p className="services__para__senocare">
                  1. Personalized Care and Assistance with Daily Activities
                </p>
                <p className="services__para__senocare">
                  2. Mobility Assistance and Safety Support
                </p>
                <p className="services__para__senocare">
                  3. Medication Management
                </p>
                <p className="services__para__senocare">
                  4. Pain Management and Comfort Care
                </p>
                <p className="services__para__senocare">
                  5. Assistance with Physical Therapy Exercises
                </p>
                <p className="services__para__senocare">
                  6. Coordination of Care with Medical Providers
                </p>
                <p className="services__para__senocare">
                  7. Emotional Support and Social Interaction
                </p>
                <p className="services__para__senocare">
                  8. Nutritional Support
                </p>
                <p className="services__para__senocare">
                  9. Transportation and Errands
                </p>
                <p className="services__para__senocare">
                  10. Preventive Care and Health Monitoring
                </p>
                <p className="services__para__senocare">
                  11. Creating a Comfortable and Accessible Home Environment
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">FAQ</h2>
                <h3 className="senocare__heading__third">
                  How serious is ankylosing spondylitis?
                </h3>
                <p className="services__para__senocare">
                  Ankylosing spondylitis (AS) can range from mild to severe, and
                  its seriousness depends on how far the disease progresses and
                  how well it is managed. While AS itself is not typically
                  life-threatening, it can lead to significant long-term health
                  issues if left untreated or poorly managed.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  What are the risk factors?
                </h2>
                <h3 className="senocare__heading__third">
                  Genetic Factors (HLA-B27 Gene)
                </h3>
                <p className="services__para__senocare">
                  <b>HLA-B27 gene:</b> The most significant risk factor for
                  developing ankylosing spondylitis is the presence of the
                  HLA-B27 gene. About 90% of people with AS carry this gene, and
                  it is strongly associated with the development of the disease.
                  However, not everyone with the HLA-B27 gene will develop AS,
                  suggesting that other factors also contribute to the
                  condition’s onset.
                </p>
                <p className="services__para__senocare">
                  <b>Family history: </b>A family history of ankylosing
                  spondylitis or other related spondyloarthropathies (such as
                  psoriatic arthritis or reactive arthritis) increases the risk
                  of developing AS. If a parent or sibling has AS, the risk of
                  developing the condition is higher.
                </p>
                <h3 className="senocare__heading__third">Age</h3>
                <p className="services__para__senocare">
                  <b>Young adulthood:</b> AS typically begins in late
                  adolescence or early adulthood (usually between 17 and 45
                  years old). The condition often starts between the ages of 20
                  to 30, though it can sometimes appear later.
                </p>{" "}
                <p className="services__para__senocare">
                  <b> Gender: </b>AS is more common in men than in women, with
                  men being diagnosed at an earlier age and typically
                  experiencing more severe symptoms. Women tend to have a more
                  gradual onset and may experience milder forms of the disease.
                </p>
                <h3 className="senocare__heading__third">Gender</h3>
                <p className="services__para__senocare">
                  <b> Male sex: </b>AS is more prevalent in men than in women,
                  with men being affected about three times more frequently. In
                  men, AS tends to present earlier in life and often with more
                  severe symptoms, including significant spinal involvement and
                  fusion.
                </p>
                <p className="services__para__senocare">
                  <b> Female sex:</b> While less common in women, AS can still
                  affect females, but they often have a milder form with less
                  spine involvement. Women may also be at a greater risk of
                  having peripheral joint involvement (such as the hips or
                  knees).
                </p>
                <h3 className="senocare__heading__third">
                  Environmental and Infectious Factors
                </h3>
                <p className="services__para__senocare">
                  <b> Infections: </b>Though no specific infection has been
                  definitively linked to AS, some researchers believe that
                  infections may trigger the disease in individuals who are
                  genetically predisposed. Conditions like gastrointestinal
                  infections (e.g., with Salmonella, Shigella, or Campylobacter)
                  or urinary tract infections have been suggested as potential
                  triggers for people with the HLA-B27 gene, leading to a
                  condition called reactive arthritis, which can eventually
                  develop into AS.
                </p>
                <p className="services__para__senocare">
                  <b>Gut health:</b> Some evidence suggests that abnormalities
                  in the gut microbiome (the collection of bacteria and other
                  microorganisms living in the digestive tract) could play a
                  role in the development of AS. Inflammation in the gut,
                  including conditions like inflammatory bowel disease (IBD),
                  might trigger or exacerbate AS in genetically susceptible
                  individuals.
                </p>
                <h3 className="senocare__heading__third">
                  Inflammatory Bowel Disease (IBD)
                </h3>
                <p className="services__para__senocare">
                  People with inflammatory bowel diseases such as Crohn’s
                  disease or ulcerative colitis are at a higher risk of
                  developing ankylosing spondylitis. These conditions involve
                  chronic inflammation in the digestive tract and may be
                  associated with increased inflammation in the joints,
                  particularly in the spine and sacroiliac joints, which are
                  commonly affected in AS.
                </p>
                <h3 className="senocare__heading__third">
                  Other Autoimmune Diseases
                </h3>
                <p className="services__para__senocare">
                  Individuals with other autoimmune diseases, such as psoriatic
                  arthritis, reactive arthritis, or rheumatoid arthritis, may
                  have a higher risk of developing AS. These conditions belong
                  to a broader group of diseases called spondyloarthropathies,
                  which share certain genetic and environmental risk factors,
                  including the HLA-B27 gene.
                </p>
                <h3 className="senocare__heading__third">Lifestyle Factors</h3>
                <p className="services__para__senocare">
                  <b>Smoking:</b> Smoking has been identified as a potential
                  risk factor for ankylosing spondylitis and can also worsen the
                  disease’s progression. Smokers with AS tend to experience more
                  severe symptoms and greater spinal involvement. Smoking may
                  contribute to inflammation and impair lung function, which is
                  important in people with AS since lung complications can occur
                  in severe cases.
                </p>
                <p className="services__para__senocare">
                  <b> Obesity:</b> Being overweight or obese can increase the
                  strain on joints and may exacerbate the pain and stiffness
                  associated with AS. Additionally, excess body weight can
                  contribute to inflammation in the body, potentially worsening
                  the disease’s effects.
                </p>
                <h3 className="senocare__heading__third">Ethnicity</h3>
                <p className="services__para__senocare">
                  AS is more common in Caucasians, particularly those of
                  Northern European descent. However, it can occur in any ethnic
                  group. The prevalence of AS is lower in certain populations,
                  such as East Asians, Native Americans, and Sub-Saharan
                  Africans.
                </p>
                <p className="services__para__senocare">
                  Certain populations, like the Yoruba people in West Africa,
                  have been shown to have lower frequencies of the HLA-B27 gene,
                  which explains the lower prevalence of AS in those regions.
                </p>
                <h3 className="senocare__heading__third">
                  Other Medical Conditions
                </h3>
                <p className="services__para__senocare">
                  Having acute anterior uveitis (eye inflammation) can increase
                  the likelihood of developing AS. This condition is common in
                  AS and often occurs in the earlier stages of the disease. It
                  involves inflammation of the middle layer of the eye and can
                  cause pain, redness, sensitivity to light, and vision
                  problems.
                </p>
                <p className="services__para__senocare">
                  <b>Other inflammatory conditions:</b> Conditions like
                  psoriasis, which causes skin lesions, can increase the risk of
                  AS, particularly in those who have the genetic predisposition
                  (HLA-B27).
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  How important is physical therapy in managing ankylosing
                  spondylitis?
                </h2>
                <p className="services__para__senocare">
                  Physical therapy is extremely important in managing ankylosing
                  spondylitis (AS), as it plays a central role in maintaining
                  mobility, reducing pain, and preventing long-term disability.
                </p>
                <p className="services__para__senocare">
                  1. Improves Flexibility and Range of Motion
                </p>
                <p className="services__para__senocare">
                  2. Reduces Pain and Inflammation
                </p>
                <p className="services__para__senocare">
                  3. Increases Physical Endurance and Function
                </p>
                <p className="services__para__senocare">
                  4. Prevents or Delays Disability
                </p>
                <p className="services__para__senocare">
                  5. Helps With Breathing and Respiratory Health
                </p>
                <p className="services__para__senocare">
                  6. Personalized Exercise Programs
                </p>
                <p className="services__para__senocare">
                  7. Educates on Self-Management
                </p>
                <p className="services__para__senocare">
                  8. Promotes Mental Well-being
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">REFERENCES:</h2>
                <h3 className="senocare__heading__third">
                  American College of Rheumatology (ACR):
                </h3>
                <p className="services__para__senocare">
                  The ACR provides extensive resources on ankylosing
                  spondylitis, including guidelines for its management and the
                  importance of physical therapy in managing the condition.
                </p>
                <p className="services__para__senocare">
                  <b> Link: </b>American College of Rheumatology – Ankylosing
                  Spondylitis
                </p>
                <h3 className="senocare__heading__third">
                  National Institute of Arthritis and Musculoskeletal and Skin
                  Diseases (NIAMS):
                </h3>
                <p className="services__para__senocare">
                  NIAMS offers comprehensive information on ankylosing
                  spondylitis, including its symptoms, causes, and treatment
                  options such as physical therapy.
                </p>
                <p className="services__para__senocare"></p>
                <b>Link: </b>{" "}
                <a
                  href="https://www.niams.nih.gov/health-topics/ankylosing-spondylitis"
                  className="hyper__link">
                  NIAMS – Ankylosing Spondylitis
                </a>{" "}
                <h3 className="senocare__heading__third">
                  National Health Service (NHS), UK:
                </h3>
                <p className="services__para__senocare">
                  NHS provides clear advice on ankylosing spondylitis
                  management, including physical therapy and exercise guidelines
                  to help individuals with AS manage their condition.
                </p>
                <p className="services__para__senocare">
                  <b>Link: </b>{" "}
                  <a
                    href="https://www.nhs.uk/conditions/ankylosing-spondylitis/"
                    className="hyper__link">
                    NHS – Ankylosing Spondylitis
                  </a>
                </p>
                <h3 className="senocare__heading__third">
                  Spondylitis Association of America:
                </h3>
                <p className="services__para__senocare">
                  The Spondylitis Association of America provides valuable
                  information on managing ankylosing spondylitis, including the
                  role of physical therapy in treatment.
                </p>
                <p className="services__para__senocare">
                  <b>Link: </b>{" "}
                  <a href="https://spondylitis.org/" className="hyper__link">
                    Spondylitis Association of America – Ankylosing Spondylitis
                  </a>
                </p>
                <h3 className="senocare__heading__third">
                  Arthritis Foundation:
                </h3>
                <p className="services__para__senocare">
                  The Arthritis Foundation offers resources and guidelines on
                  managing ankylosing spondylitis, with a focus on physical
                  therapy, exercise, and lifestyle management.
                </p>
                <p className="services__para__senocare">
                  <b>Link: </b>Arthritis Foundation – Ankylosing Spondylitis
                </p>
                <h3 className="senocare__heading__third">Mayo Clinic:</h3>
                <p className="services__para__senocare">
                  Mayo Clinic provides a thorough overview of ankylosing
                  spondylitis, including the role of physical therapy in
                  managing pain and improving mobility.
                </p>
                <p className="services__para__senocare">
                  <b> Link: </b>{" "}
                  <a
                    href=" https://www.mayoclinic.org/diseases-conditions/ankylosing-spondylitis/symptoms-causes/syc-20361938"
                    className="hyper__link">
                    Mayo Clinic – Ankylosing Spondylitis
                  </a>
                </p>
                <h3 className="senocare__heading__third">
                  British Journal of Pain:
                </h3>
                <p className="services__para__senocare">
                  This journal includes studies and articles on the
                  effectiveness of physical therapy in managing chronic
                  conditions like ankylosing spondylitis, focusing on pain
                  relief and improved function.
                </p>
                <p className="services__para__senocare">
                  <b>Link: </b>British Journal of Pain – Physical Therapy for AS
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

export default AnkylosingSpondylitis;
