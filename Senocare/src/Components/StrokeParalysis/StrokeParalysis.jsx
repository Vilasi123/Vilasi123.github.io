import Header from "../Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import Stroke from "../../assets/Image/PhysiotherapySection/STROKE-PARALYSIS.jpg";
import Footer from "../Footer/Footer";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SEO from "../SEO";

const StrokeParalysis = () => {
  return (
    <>
      <SEO />

      <div>
        <Header />
        <div className="services__content__senocare">
          <Container>
            <Row>
              <Col>
                <h1 className="service__heading__senocare">STROKE PARALYSIS</h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12}>
                <LazyLoadImage
                  src={Stroke}
                  className="img-fluid senocare__service__img"
                />
              </Col>
            </Row>

            <Row className="senocare__row__content">
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

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  WHAT IS STROKE PARALYSIS?
                </h2>
                <p className="services__para__senocare">
                  Stroke paralysis refers to the loss of muscle function in part
                  of the body following a stroke. A stroke occurs when the blood
                  supply to a part of the brain is interrupted or reduced,
                  depriving brain tissue of oxygen and nutrients. When brain
                  cells die due to a stroke, the parts of the body controlled by
                  those brain cells can become paralyzed.
                </p>
                <h3 className="senocare__heading__third">
                  There are different{" "}
                  <a
                    href="/physiotherapy-home-service/paralysis-treatment-at-home/"
                    className="hyper__link">
                    {" "}
                    types of paralysis
                  </a>{" "}
                  that can result from a stroke:
                </h3>
                <p className="services__para__senocare">
                  <b>Hemiplegia:</b> This is the most common form of
                  stroke-related paralysis, affecting one side of the body. For
                  example, if the stroke affects the right side of the brain,
                  the left side of the body may become paralyzed, and vice
                  versa.
                </p>
                <p className="services__para__senocare">
                  <b> Hemiparesis:</b> This is partial paralysis, where one side
                  of the body has weakness or reduced movement rather than full
                  paralysis.
                </p>{" "}
                <p className="services__para__senocare">
                  The severity and location of the paralysis depend on the
                  extent and area of the brain that is damaged. Stroke paralysis
                  can affect various parts of the body, including the face,
                  arms, legs, and trunk, and can lead to difficulties in
                  speaking, swallowing, and other essential functions.
                  Rehabilitation therapies, including physical therapy,
                  occupational therapy, and speech therapy, are crucial in
                  helping individuals recover and regain as much function as
                  possible after a stroke.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  CAUSES OF STROKE PARALYSIS
                </h2>
                <h3 className="senocare__heading__third">Ischemic Stroke</h3>
                <p className="services__para__senocare">
                  <b>Blocked Blood Vessel:</b> The most common cause of stroke
                  paralysis is an ischemic stroke, which occurs when a blood
                  clot or other debris blocks a blood vessel in the brain. This
                  blockage prevents blood from reaching certain areas of the
                  brain, leading to brain cell death in the affected region.
                </p>
                <p className="services__para__senocare">
                  <b>Atherosclerosis:</b> A build-up of fatty deposits (plaque)
                  in the arteries can lead to the formation of blood clots,
                  further increasing the risk of an ischemic stroke.
                </p>
                <h3 className="senocare__heading__third">Stroke</h3>
                <p className="services__para__senocare">
                  <b>Ruptured Blood Vessel:</b> Hemorrhagic stroke occurs when a
                  blood vessel in the brain bursts, causing bleeding into or
                  around the brain. The pressure from the bleeding can damage
                  brain cells and cause paralysis.
                </p>
                <p className="services__para__senocare">
                  {" "}
                  <b>Aneurysm:</b> A weak spot in a blood vessel that balloons
                  out and bursts can lead to a hemorrhagic stroke.
                </p>
                <p className="services__para__senocare">
                  <b>Arteriovenous Malformation (AVM):</b> This is a tangle of
                  abnormal blood vessels connecting arteries and veins in the
                  brain. If it ruptures, it can cause a hemorrhagic stroke.
                </p>
                <h3 className="senocare__heading__third">
                  Transient Ischemic Attack (TIA)
                </h3>
                <p className="services__para__senocare">
                  <b>Temporary Blockage: </b>Often called a “mini-stroke,” a TIA
                  occurs when blood flow to a part of the brain is temporarily
                  blocked. While TIAs don’t usually cause permanent damage, they
                  are a warning sign of a potential future stroke.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  Risk Factors Contributing to Stroke
                </h3>
                <p className="services__para__senocare">
                  <b>High Blood Pressure:</b> The leading risk factor for
                  stroke, high blood pressure can damage blood vessels and lead
                  to both ischemic and hemorrhagic strokes.
                </p>{" "}
                <p className="services__para__senocare">
                  <b>Heart Disease:</b> Conditions like atrial fibrillation can
                  cause blood clots that travel to the brain, leading to a
                  stroke.
                </p>
                <p className="services__para__senocare">
                  <b>Diabetes: </b>High blood sugar levels can damage blood
                  vessels and increase the risk of stroke.
                </p>{" "}
                <p className="services__para__senocare">
                  <b>Smoking: </b>Smoking accelerates the development of
                  atherosclerosis and increases blood clot formation.
                </p>
                <p className="services__para__senocare">
                  <b>High Cholesterol:</b> Elevated cholesterol levels can lead
                  to plaque build-up in arteries, increasing the risk of an
                  ischemic stroke.
                </p>
                <p className="services__para__senocare">
                  <b>Obesity:</b> Excess weight contributes to other risk
                  factors like high blood pressure, diabetes, and high
                  cholesterol.
                </p>{" "}
                <p className="services__para__senocare">
                  When these risk factors lead to a stroke, the part of the
                  brain that controls movement can be damaged, resulting in
                  paralysis in the areas of the body that the affected brain
                  region controls.
                </p>{" "}
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  SYMPTOMS OF STROKE PARALYSIS
                </h2>
                <p className="services__para__senocare">
                  Stroke paralysis manifests with various symptoms, depending on
                  the area of the brain affected and the severity of the stroke.
                  The primary symptom is the sudden loss of muscle function or
                  weakness, typically on one side of the body, but other
                  symptoms can accompany or precede paralysis. Here are the key
                  symptoms:
                </p>
                <h3 className="senocare__heading__third">
                  Sudden Weakness or Numbness
                </h3>
                <p className="services__para__senocare">
                  <b>Hemiplegia:</b> Complete paralysis on one side of the body
                  (left or right).
                </p>
                <p className="services__para__senocare">
                  <b>Hemiparesis:</b> Weakness on one side of the body, which
                  may include the face, arm, and leg.
                </p>
                <p className="services__para__senocare">
                  <b>Numbness or Tingling:</b> Affected areas may feel numb or
                  have a tingling sensation.
                </p>
                <p className="services__para__senocare">
                  <b>Facial Droop: </b>One side of the face may droop or feel
                  numb, making it difficult to smile or close the eye on that
                  side.
                </p>
                <h3 className="senocare__heading__third">
                  Difficulty Speaking or Understanding Speech
                </h3>
                <p className="services__para__senocare">
                  <b>Aphasia:</b> Difficulty speaking, slurred speech, or
                  trouble understanding what others are saying.
                </p>
                <p className="services__para__senocare">
                  <b>Dysarthria: </b>Difficulty articulating words due to
                  weakness in the muscles used for speaking.
                </p>
                <h3 className="senocare__heading__third">
                  Loss of Coordination or Balance
                </h3>
                <p className="services__para__senocare">
                  – Difficulty walking, dizziness, or a loss of balance and
                  coordination may occur.
                </p>
                <p className="services__para__senocare">
                  – Inability to control movements, leading to clumsiness or
                  falls.
                </p>
                <h3 className="senocare__heading__third">Vision Problems</h3>
                <p className="services__para__senocare">
                  – Sudden blurred or double vision.
                </p>
                <p className="services__para__senocare">
                  – Loss of vision in one eye or visual field deficits (e.g.,
                  losing vision on one side).
                </p>
                <h3 className="senocare__heading__third">
                  Cognitive and Behavioral Changes
                </h3>
                <p className="services__para__senocare">
                  – Confusion or memory problems.
                </p>
                <p className="services__para__senocare">
                  – Difficulty concentrating or making decisions.
                </p>
                <p className="services__para__senocare">
                  – Sudden changes in behavior or personality.
                </p>
                <h3 className="senocare__heading__third">Severe Headache</h3>
                <p className="services__para__senocare">
                  – Sudden, severe headache, which is more common in hemorrhagic
                  strokes.
                </p>
                <p className="services__para__senocare">
                  – May be accompanied by vomiting or altered consciousness.
                </p>
                <h3 className="senocare__heading__third">
                  Swallowing (Dysphagia)
                </h3>
                <p className="services__para__senocare">
                  – Trouble swallowing, which can increase the risk of choking
                  or aspiration pneumonia.
                </p>
                <h3 className="senocare__heading__third">Incontinence</h3>
                <p className="services__para__senocare">
                  – Loss of bladder or bowel control may occur in some cases.
                </p>
                <h3 className="senocare__heading__third">
                  Emotional and Psychological Effects
                </h3>
                <p className="services__para__senocare">
                  – Depression, anxiety, or emotional instability can arise
                  following stroke paralysis.
                </p>
                <h3 className="senocare__heading__third">
                  Recognizing Stroke Symptoms (FAST)
                </h3>
                <p className="services__para__senocare">
                  A simple way to remember the signs of stroke, including
                  paralysis, is the FAST acronym:
                </p>
                <p className="services__para__senocare">
                  <b>Face:</b> Does one side of the face droop?
                </p>
                <p className="services__para__senocare">
                  <b>Arms: </b>Is one arm weak or numb? Ask the person to raise
                  both arms. Does one drift downward?
                </p>
                <p className="services__para__senocare">
                  <b>Speech: </b>Is speech slurred or strange?
                </p>
                <p className="services__para__senocare">
                  <b>Time:</b> If you observe any of these signs, call emergency
                  services immediately.
                </p>
                <p className="services__para__senocare">
                  Early recognition and treatment are crucial in minimizing the
                  damage caused by a stroke and improving the chances of
                  recovery.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  PREVENTION OF STROKE PARALYSIS
                </h2>
                <p className="services__para__senocare">
                  Preventing stroke paralysis primarily involves reducing the
                  risk of having a stroke in the first place. While not all
                  strokes can be prevented, many risk factors are manageable
                  through lifestyle changes and medical interventions. Here are
                  key strategies for stroke prevention:
                </p>
                <h3 className="senocare__heading__third">
                  Control High Blood Pressure (Hypertension)
                </h3>
                <p className="services__para__senocare">
                  <b>Monitor Blood Pressure:</b> Regularly check your blood
                  pressure and maintain it within a healthy range.
                </p>
                <p className="services__para__senocare">
                  <b> Medications: </b> If prescribed, take antihypertensive
                  medications as directed by your doctor.
                </p>
                <p className="services__para__senocare">
                  <b>
                    {" "}
                    <a href="/nutrition-and-diet/" className="hyper__link">
                      {" "}
                      Diet and Exercise:{" "}
                    </a>
                  </b>
                  Adopt a heart-healthy diet low in sodium, rich in fruits,
                  vegetables, and whole grains, and engage in regular physical
                  activity to help lower blood pressure.
                </p>
                <h3 className="senocare__heading__third">Manage Diabetes</h3>
                <p className="services__para__senocare">
                  <b> Blood Sugar Control: </b>Keep blood sugar levels within
                  target ranges through diet, exercise, and medication if
                  needed.
                </p>
                <p className="services__para__senocare">
                  <b> Regular Monitoring: </b>Regularly check blood sugar levels
                  as advised by your healthcare provider.
                </p>
                <h3 className="senocare__heading__third">
                  Lower Cholesterol Levels
                </h3>
                <p className="services__para__senocare">
                  <b> Healthy Diet: </b>Eat a diet low in saturated and trans
                  fats to help reduce cholesterol levels.
                </p>
                <p className="services__para__senocare">
                  <b> Medications: </b>Take statins or other
                  cholesterol-lowering medications if prescribed by your doctor.
                </p>
                <h3 className="senocare__heading__third">Quit Smoking</h3>
                <p className="services__para__senocare">
                  <b> Smoking Cessation Programs:</b> Enroll in programs or use
                  aids like nicotine replacement therapy to quit smoking .
                </p>
                <p className="services__para__senocare">
                  <b> Avoid Secondhand Smoke: </b>Reduce exposure to secondhand
                  smoke as much as possible.
                </p>
                <h3 className="senocare__heading__third">
                  Limit Alcohol Consumption
                </h3>
                <p className="services__para__senocare">
                  <b> Moderation: </b>Limit alcohol intake to no more than one
                  drink per day for women and two drinks per day for men.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  Maintain a Healthy Weight
                </h3>
                <p className="services__para__enocare">
                  <b>
                    <a
                      href="https://blog.senocare.in/eldercare-tips-on-diet-for-a-healthy-life-cl3t9aynh852721kpb24t2m3wa/"
                      className="hyper__link">
                      Balanced Diet:
                    </a>
                  </b>{" "}
                  Focus on a diet that is low in calories, fat, and sugar but
                  high in nutrients.
                </p>
                <p className="services__para__senocare">
                  <b>
                    {" "}
                    <a
                      href="https://blog.senocare.in/eldercare-tips-on-exercise-and-self-care/"
                      className="hyper__link">
                      {" "}
                      Regular Exercise:
                    </a>
                  </b>{" "}
                  Aim for at least 150 minutes of moderate aerobic activity or
                  75 minutes of vigorous activity per week.
                </p>
                <h3 className="senocare__heading__third">Exercise Regularly</h3>
                <p className="services__para__senocare">
                  <b> Physical Activity: </b>Engage in regular physical
                  activity, such as walking, swimming, or cycling, to improve
                  cardiovascular health and reduce stroke risk.
                </p>
                <h3 className="senocare__heading__third">
                  Manage Atrial Fibrillation (AFib)
                </h3>
                <p className="services__para__senocare">
                  <b> Regular Check-Ups: </b>If you have AFib, a type of
                  irregular heartbeat, work with your doctor to manage it
                  effectively.
                </p>{" "}
                <p className="services__para__senocare">
                  <b> Medications: </b>Take anticoagulant or antiplatelet
                  medications as prescribed to reduce the risk of blood clots
                  that can lead to a stroke.
                </p>
                <h3 className="senocare__heading__third">Healthy Diet</h3>
                <p className="services__para__senocare">
                  <b> DASH Diet: </b>Consider adopting the Dietary Approaches to
                  Stop Hypertension (DASH) diet, which is rich in fruits,
                  vegetables, whole grains, and low-fat dairy.
                </p>{" "}
                <p className="services__para__senocare">
                  <b> Reduce Salt:</b> Limit salt intake to help manage blood
                  pressure.
                </p>{" "}
                <p className="services__para__senocare">
                  <b> Increase Fiber:</b> Consume more fiber-rich foods, such as
                  fruits, vegetables, and whole grains.
                </p>
                <h3 className="senocare__heading__third">Avoid Drug Use</h3>
                <p className="services__para__senocare">
                  <b> Illegal Drugs:</b> Avoid the use of recreational drugs,
                  particularly those like cocaine and methamphetamine, which can
                  increase the risk of stroke.
                </p>
                <h3 className="senocare__heading__third">Manage Stress</h3>
                <p className="services__para__senocare">
                  <b> Stress Reduction Techniques: </b>Practice stress-reducing
                  activities like yoga, meditation, or deep breathing exercises.
                </p>{" "}
                <p className="services__para__senocare">
                  <b> Adequate Sleep:</b> Ensure you get sufficient sleep, as
                  poor sleep quality can contribute to stroke risk.
                </p>
                <h3 className="senocare__heading__third">
                  Regular Medical Check-Ups
                </h3>
                <p className="services__para__senocare">
                  <b> Routine Screenings: </b>Regular health check-ups can help
                  detect and manage risk factors for stroke early.
                </p>
                <p className="services__para__senocare">
                  <b> Medication Adherence:</b> Take prescribed medications
                  consistently and follow your doctor’s advice on managing
                  conditions like hypertension, diabetes, or high cholesterol.
                </p>
                <h3 className="senocare__heading__third">
                  Know the Signs of a Stroke
                </h3>
                <p className="services__para__senocare">
                  <b> Early Intervention:</b> Familiarize yourself with the
                  signs of a stroke (using the FAST acronym) and seek immediate
                  medical help if symptoms appear. Quick treatment can minimize
                  brain damage and the risk of paralysis.
                </p>{" "}
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  HOW LONG DOES STROKE PARALYSIS LAST?
                </h2>
                <p className="services__para__senocare">
                  The duration of stroke paralysis varies widely depending on
                  several factors, including the severity of the stroke, the
                  specific area of the brain affected, the extent of brain
                  damage, and the promptness and effectiveness of treatment and
                  rehabilitation. Here are some key points about the duration
                  and recovery from stroke paralysis:
                </p>
                <h3 className="senocare__heading__third">
                  1. Immediate and Short-Term Paralysis
                </h3>
                <p className="services__para__senocare">
                  <b> Acute Phase:</b> Paralysis often occurs immediately after
                  the stroke, and its severity can range from mild weakness
                  (hemiparesis) to complete paralysis (hemiplegia) on one side
                  of the body.
                </p>
                <p className="services__para__senocare">
                  <b> First Few Days to Weeks:</b> The first days and weeks
                  after a stroke are critical. Some patients may experience
                  rapid improvement, particularly if they receive timely
                  treatment, such as clot-busting drugs or surgery.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  2. Rehabilitation Phase
                </h3>
                <p className="services__para__senocare">
                  <b> First 3 to 6 Months:</b> Most significant recovery
                  typically occurs within the first three to six months after a
                  stroke. During this period, the brain is most adaptable, and
                  rehabilitation therapies are most effective.
                </p>
                <p className="services__para__senocare">
                  <b> Rehabilitation:</b> Physical therapy, occupational
                  therapy, and speech therapy play crucial roles in regaining
                  function and mobility. The intensity and duration of
                  rehabilitation can influence how much and how quickly recovery
                  happens.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  3. Long-Term Paralysis
                </h3>
                <p className="services__para__senocare">
                  <b> Residual Paralysis: </b> For some individuals, paralysis
                  may persist for months or even years. While some patients make
                  a full recovery, others may experience long-term or permanent
                  disability, especially if the stroke was severe or affected
                  critical areas of the brain.
                </p>
                <p className="services__para__senocare">
                  <b> Ongoing Improvement: </b> Recovery can continue beyond six
                  months, but the pace of improvement usually slows down. Some
                  patients continue to regain strength and function for years,
                  though often at a slower rate.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  4. Permanent Paralysis
                </h3>
                <p className="services__para__senocare">
                  <b> Irreversible Damage:</b> In cases where the brain damage
                  is extensive, paralysis may be permanent. Patients may need to
                  adapt to long-term disability with the help of assistive
                  devices and continued therapy.
                </p>
                <p className="services__para__senocare">
                  <b> Quality of Life:</b> Even with permanent paralysis, many
                  individuals can improve their quality of life through adaptive
                  strategies, supportive care, and modifications to their living
                  environment.
                </p>
                <h3 className="senocare__heading__third">
                  5. Factors Influencing Recovery
                </h3>
                <p className="services__para__senocare">
                  <b> Severity of Stroke: </b> Mild strokes may result in
                  temporary paralysis that resolves quickly, while severe
                  strokes can lead to lasting or permanent paralysis.
                </p>
                <p className="services__para__senocare">
                  <b> Location of Stroke: </b> Strokes affecting large or
                  critical areas of the brain, such as the motor cortex or
                  brainstem, are more likely to cause prolonged or permanent
                  paralysis.
                </p>
                <p className="services__para__senocare">
                  <b> Age and General Health:</b> Younger individuals and those
                  in good health generally have a better prognosis for recovery.
                </p>
                <p className="services__para__senocare">
                  <b> Rehabilitation Effort:</b> Early and intensive
                  rehabilitation can significantly improve outcomes and reduce
                  the duration of paralysis.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  6. Emotional and Psychological Factors
                </h3>
                <p className="services__para__senocare">
                  <b> Mental Health:</b> Depression, anxiety, and other
                  psychological factors can influence recovery. Supportive
                  mental health care can play an essential role in the
                  rehabilitation process.
                </p>
                <h3 className="senocare__heading__third">Conclusion</h3>
                <p className="services__para__senocare">
                  The duration of stroke paralysis is highly individual and
                  depends on a combination of factors. While some patients may
                  recover quickly, others may experience lasting effects that
                  require long-term care and rehabilitation. Early intervention,
                  consistent therapy, and a strong support system are crucial in
                  maximizing recovery.
                </p>{" "}
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  WHEN DO YOU NEED US?
                </h2>
                <p className="services__para__senocare">
                  <a href="/expert-post-stroke-care/" className="hyper__link">
                    {" "}
                    Home-based treatment for stroke paralysis
                  </a>{" "}
                  is often recommended when a patient is stable enough to leave
                  the hospital but still requires ongoing care and
                  rehabilitation. The decision to receive treatment at home
                  depends on several factors:
                </p>
                <h3 className="senocare__heading__third">
                  1. Stability of the Patient
                </h3>
                <p className="services__para__senocare">
                  <b> Medically Stable: </b>The patient should be medically
                  stable, meaning there are no immediate life-threatening
                  conditions that require intensive hospital care.
                </p>
                <p className="services__para__senocare">
                  <b> Stable Vital Signs:</b> Blood pressure, heart rate, and
                  other vital signs should be consistently within safe ranges.
                </p>
                <h3 className="senocare__heading__third">
                  2. Ongoing Rehabilitation Needs
                </h3>
                <p className="services__para__senocare">
                  <b>
                    {" "}
                    <a
                      href="/physiotherapy-home-service/"
                      className="hyper__link">
                      {" "}
                      Physical Therapy:
                    </a>{" "}
                  </b>
                  The patient may need ongoing physical therapy to regain
                  strength, improve mobility, and prevent muscle atrophy. A
                  physical therapist can visit the home regularly to guide
                  exercises.
                </p>
                <p className="services__para__senocare">
                  <b> Occupational Therapy: </b>This helps the patient relearn
                  daily activities like dressing, bathing, cooking, and using
                  adaptive tools. Occupational therapists can work with the
                  patient in their home environment to make it more accessible
                  and safe.{" "}
                </p>
                <p className="services__para__senocare">
                  <b> Speech Therapy:</b> If the stroke affected the patient’s
                  ability to speak or swallow, a speech therapist can provide
                  therapy sessions at home to improve these functions.
                </p>
                <h3 className="senocare__heading__third">
                  3. Personal Care Needs
                </h3>
                <p className="services__para__senocare">
                  <b> Assistance with Activities of Daily Living (ADLs): </b>If
                  the patient has difficulty with basic activities like bathing,
                  dressing, toileting, and eating, they may need a caregiver or
                  home health aide to assist them.
                </p>
                <p className="services__para__senocare">
                  <b> Medication Management:</b> Patients who need help managing
                  medications, including taking the correct doses at the right
                  times, may benefit from having a healthcare professional visit
                  their home.
                </p>
                <h3 className="senocare__heading__third">
                  4. Mobility and Safety Concerns
                </h3>
                <p className="services__para__senocare">
                  <b> Fall Prevention: </b>If the patient is at risk of falling
                  due to weakness or balance issues, home treatment allows for
                  modifications to the living space (e.g., installing grab bars
                  , removing tripping hazards) and supervised mobility
                  exercises.
                </p>
                <p className="services__para__senocare">
                  <b> Use of Assistive Devices: </b>Patients who require
                  assistive devices like{" "}
                  <a
                    href="/featured-products/automated-wheelchairs/"
                    className="hyper__link">
                    {" "}
                    wheelchairs{" "}
                  </a>
                  ,
                  <a
                    href="/featured-products/walkers-for-elderly/"
                    className="hyper__link">
                    {" "}
                    walkers{" "}
                  </a>{" "}
                  , or{" "}
                  <a
                    href="/featured-products/3-function-hospital-beds/"
                    className="hyper__link">
                    {" "}
                    special beds{" "}
                  </a>{" "}
                  may need help using these devices safely at home.
                </p>
                <h3 className="senocare__heading__third">
                  5. Emotional and Psychological Support
                </h3>
                <p className="services__para__senocare">
                  <b> Mental Health Care:</b> Stroke survivors often face
                  emotional challenges like depression, anxiety, or frustration.
                  Regular visits from a psychologist, counselor, or social
                  worker can provide the necessary support.
                </p>
                <p className="services__para__senocare">
                  <b> Family Education and Support:</b> Educating family members
                  or caregivers on how to care for the patient and manage
                  stroke-related challenges is crucial for the patient’s
                  recovery and well-being.
                </p>
                <h3 className="senocare__heading__third">
                  6. Preference for Familiar Environment
                </h3>
                <p className="services__para__senocare">
                  <b> Comfort and Familiarity:</b> Many patients recover better
                  in the comfort of their own homes, surrounded by familiar
                  environments and loved ones. Home care allows for
                  personalized, patient-centered care that can be more conducive
                  to recovery.
                </p>
                <h3 className="senocare__heading__third">
                  7. Cost and Resource Considerations
                </h3>
                <p className="services__para__senocare">
                  <b> Cost-Effectiveness: </b>Home care can be more
                  cost-effective than prolonged hospital stays, especially when
                  ongoing care is needed.
                </p>
                <p className="services__para__senocare">
                  <b> Access to Resources: </b>Home treatment may be necessary
                  if the patient lives far from a hospital or rehabilitation
                  center, making frequent trips impractical.
                </p>
                <h3 className="senocare__heading__third">
                  8. End-of-Life Care
                </h3>
                <p className="services__para__senocare">
                  <b>
                    <a
                      href="/nursing-care/palliative-care-at-home/"
                      className="hyper__link">
                      Palliative Care:
                    </a>{" "}
                  </b>{" "}
                  In some cases, if the stroke has caused severe, irreversible
                  damage and the focus shifts to comfort rather than recovery,
                  palliative care can be provided at home to manage symptoms and
                  improve the quality of life.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  When Home Treatment Is Not Suitable
                </h2>
                <p className="services__para__senocare">
                  <b> Complex Medical Needs:</b> If the patient requires
                  advanced medical care that cannot be provided at home (e.g.,
                  ventilator support, frequent monitoring), they may need to
                  stay in a specialized care facility.
                </p>
                <p className="services__para__senocare">
                  <b> Lack of Adequate Support: </b> If there are no capable
                  caregivers or the home environment cannot be made safe,
                  continuing care in a hospital or rehabilitation center may be
                  necessary.
                </p>
                <h3 className="senocare__heading__third">Conclusion</h3>
                <p className="services__para__senocare">
                  Our treatment for stroke paralysis is appropriate when the
                  patient is stable but still requires ongoing rehabilitation,
                  personal care, and support. A well-structured home care plan,
                  involving healthcare professionals and family members, can
                  significantly aid in recovery and improve the patient’s
                  quality of life.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  HOW SENOCARE CAN HELP?
                </h2>
                <p className="services__para__senocare">
                  <b>Brain Training:</b> Prevent Cognitive decline
                </p>
                <h3 className="senocare__heading__third">Introduction.</h3>
                <p className="services__para__senocare">
                  This outlines a brain training program designed to address
                  cognitive decline and potentially delay the onset or
                  progression of dementia . The program will be offered through
                  Senocare, leveraging its expertise in elder care and the
                  growing interest in proactive brain health strategies.
                </p>
                <h3 className="senocare__heading__third">Program Objectives</h3>
                <p className="services__para__senocare">
                  Enhance cognitive skills in areas like memory, attention,
                  processing speed, and executive function.
                </p>
                <p className="services__para__senocare">
                  Promote neuroplasticity, the brain’s ability to adapt and form
                  new connections.
                </p>
                <p className="services__para__senocare">
                  Improve problem-solving and decision-making abilities.
                </p>
                <p className="services__para__senocare">
                  Increase confidence and self-efficacy in everyday tasks.
                </p>
                <p className="services__para__senocare">
                  Potentially delay the onset or progression of dementia.
                </p>
                <p className="services__para__senocare">
                  Improving Orientation, recall names, remembering daily
                  activities
                </p>
                <h3 className="senocare__heading__third">Program Components</h3>
                <p className="services__para__senocare">
                  The program will incorporate a multi-faceted approach to brain
                  training:
                </p>
                <p className="services__para__senocare">
                  <b> Cognitive Training Activities:</b> Interactive
                  mobile/computer-based exercises or games designed to target
                  specific cognitive domains.
                </p>
                <p className="services__para__senocare">
                  Post stroke cognitive therapy which includes:
                </p>
                <p className="services__para__senocare">1) Lumosity</p>
                <p className="services__para__senocare">2) Tactus Therapy</p>
                <p className="services__para__senocare">3) Constant Therapy</p>
                <p className="services__para__senocare">4) Thinking Time Pro</p>
                <p className="services__para__senocare">
                  <b> Improving Orientation: </b> Various activities to improve
                  orientation of elder. Brain Buzzing with word puzzles, Logic
                  puzzles, Jigsaw puzzles etc.
                </p>
                <p className="services__para__senocare">
                  <b> Physical Activity:</b> Supervised exercise sessions that
                  emphasize the mind-body connection and promote overall brain
                  health.
                </p>
                <p className="services__para__senocare">
                  For this our physio will visit twice a month.
                </p>
                <p className="services__para__senocare">
                  Also adding activities like recalling relatives names,
                  remembering regular medications.
                </p>
                <p className="services__para__senocare">
                  <b>Trivia Topics:</b> Engage in exciting topics as per elder;s
                  interest includes musical, current affairs and history. This
                  will increase their thinking skills.
                </p>
                <p className="services__para__senocare">
                  Will also include chess-to boost planning skill
                </p>
                <p className="services__para__senocare">
                  Once a month group activity can be done ( card matching game
                  or group activity can be planned
                </p>
                <p className="services__para__senocare">
                  Maintaining Diary/Journal/To Do List of Daily Task
                </p>
                <h3 className="senocare__heading__third">
                  Evaluation and Monitoring
                </h3>
                <p className="services__para__senocare">
                  Elder will undergo baseline cognitive assessments to track
                  progress.
                </p>
                <p className="services__para__senocare">
                  Regular surveys will measure satisfaction and engagement with
                  the program.
                </p>
                <p className="services__para__senocare">
                  Long-term follow-up may be implemented to assess the impact on
                  cognitive decline and dementia risk.
                </p>
                <h3 className="senocare__heading__third">
                  Benefits for Senocare Program
                </h3>
                <p className="services__para__senocare">
                  <b> Expands Service Offerings: </b>The program fills a growing
                  need for proactive brain health services.
                </p>
                <p className="services__para__senocare">
                  <b> Improves Elder’s Outcomes:</b> Empowers elders to take
                  control of their brain health.
                </p>
                <h3 className="senocare__heading__third">Conclusion</h3>
                <p className="services__para__senocare">
                  This brain training program offers a promising strategy for
                  promoting cognitive well-being and potentially delaying
                  dementia.
                </p>{" "}
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">FAQs:</h2>
                <h3 className="senocare__heading__third">
                  IS STROKE PARALYSIS PERMANENT?
                </h3>
                <p className="services__para__senocare">
                  Stroke-induced paralysis can be permanent, but it’s not always
                  the case. The outcome largely depends on several factors,
                  including the severity of the stroke, the area of the brain
                  affected, how quickly treatment was administered, and the
                  individual’s overall health.
                </p>
                <h3 className="senocare__heading__third">Key Points:</h3>
                <p className="services__para__senocare">
                  <b>1. Severity and Location:</b> If the stroke causes
                  extensive damage to parts of the brain that control movement,
                  the paralysis is more likely to be permanent. Conversely, if
                  the damage is less severe or affects areas with the potential
                  for neuroplasticity (the brain’s ability to reorganize
                  itself), there may be a better chance of recovery.
                </p>
                <p className="services__para__senocare">
                  <b> 2. Time to Treatment: </b>Prompt treatment is crucial. The
                  sooner a person receives treatment to restore blood flow to
                  the brain, the better the chances of minimizing long-term
                  damage.
                </p>
                <p className="services__para__senocare">
                  <b> 3. Rehabilitation: </b>Intensive rehabilitation, including
                  physical therapy, occupational therapy, and speech therapy,
                  can significantly improve outcomes. Some people regain partial
                  or full function over time, though it often requires sustained
                  effort.
                </p>
                <p className="services__para__senocare">
                  <b> 4. Age and Overall Health:</b> Younger individuals and
                  those in better health generally have a better prognosis for
                  recovery.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  CAN A PERSON RECOVER FROM STROKE PARALYSIS?
                </h2>
                <p className="services__para__senocare">
                  Recovery from stroke paralysis is possible, but it varies
                  widely depending on factors such as the severity of the
                  stroke, the location of the brain affected, the individual’s
                  overall health, and how quickly treatment was received.
                </p>
                <h3 className="senocare__heading__third">
                  Here are some key points about stroke recovery:
                </h3>
                <p className="services__para__senocare">
                  <b> 1. Time Frame: </b>The first few months after a stroke are
                  critical for recovery. During this time, the brain is often
                  most responsive to rehabilitation efforts. However,
                  improvements can continue for years with ongoing therapy.
                </p>
                <p className="services__para__senocare">
                  <b>2. Rehabilitation:</b> Physical therapy, occupational
                  therapy, and speech therapy are crucial. These therapies help
                  retrain the brain and muscles, improving strength,
                  coordination, and speech.
                </p>
                <p className="services__para__senocare">
                  <b> 3. Neuroplasticity:</b> The brain can sometimes
                  “reorganize” itself after a stroke, allowing healthy parts of
                  the brain to take over functions that were lost. This ability,
                  known as neuroplasticity, is key to recovery.
                </p>
                <p className="services__para__senocare">
                  <b> 4. Assistive Devices:</b> Devices such as braces, canes,
                  or walkers may help with mobility. Electrical stimulation
                  devices can also help stimulate paralyzed muscles.
                </p>
                <p className="services__para__senocare">
                  <b> 5. Medication:</b> Certain medications can help manage
                  symptoms, reduce the risk of further strokes, and sometimes
                  enhance recovery.
                </p>
                <p className="services__para__senocare">
                  <b> 6. Emotional and Psychological Support: </b>Recovering
                  from a stroke can be emotionally challenging. Support from
                  mental health professionals, family, and friends is essential.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  WHAT KIND OF STROKE CAUSES PARALYSIS?
                </h2>
                <p className="services__para__senocare">
                  Paralysis after a stroke typically occurs when the stroke
                  affects areas of the brain responsible for motor control, such
                  as the motor cortex. There are two main types of strokes that
                  can cause paralysis:
                </p>
                <h3 className="senocare__heading__third">
                  1. Ischemic Stroke:
                </h3>
                <p className="services__para__senocare">
                  <b>Cause: </b>This type of stroke occurs when a blood clot
                  blocks or narrows an artery leading to the brain, reducing
                  blood flow and oxygen to brain tissue.
                </p>
                <p className="services__para__senocare">
                  <b> Effect on Paralysis: </b>Ischemic strokes are the most
                  common and can cause paralysis if they affect areas of the
                  brain responsible for movement. The severity and location of
                  the blockage influence the extent of paralysis.
                </p>
                <h3 className="senocare__heading__third">
                  2. Hemorrhagic Stroke:
                </h3>
                <p className="services__para__senocare">
                  <b> Cause:</b> This occurs when a blood vessel in the brain
                  bursts, causing bleeding into or around the brain. The
                  pressure from the bleeding can damage brain cells.
                </p>
                <p className="services__para__senocare">
                  <b> Effect on Paralysis: </b>Hemorrhagic strokes are less
                  common but often more severe. They can cause paralysis by
                  damaging motor areas of the brain or by causing increased
                  pressure that affects brain function
                </p>
                <h3 className="senocare__heading__third">
                  Paralysis and the Side of the Brain Affected:
                </h3>
                <p className="services__para__senocare">
                  <b> Right Hemisphere Stroke: </b>A stroke in the right
                  hemisphere of the brain can cause paralysis on the left side
                  of the body (left-sided hemiplegia).
                </p>
                <p className="services__para__senocare">
                  <b> Left Hemisphere Stroke:</b> A stroke in the left
                  hemisphere can cause paralysis on the right side of the body
                  (right-sided hemiplegia).
                </p>
                <p className="services__para__senocare">
                  <b> Brainstem Stroke:</b> Strokes in the brainstem can be
                  particularly dangerous because the brainstem controls basic
                  life functions and motor control. Paralysis from a brainstem
                  stroke can affect both sides of the body and may lead to more
                  severe disabilities.
                </p>
                <p className="services__para__senocare">
                  The extent of paralysis depends on the location and size of
                  the stroke, as well as how quickly treatment is received.
                  Early intervention is critical in minimizing damage and
                  improving the chances of recovery.
                </p>{" "}
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  CAN YOU WALK AGAIN AFTER A STROKE?
                </h2>
                Yes, many people can walk again after a stroke, but the extent
                of recovery varies depending on several factors. Here are some
                important considerations:
                <h3 className="senocare__heading__third">
                  1. Severity and Location of the Stroke
                </h3>
                <p className="services__para__senocare">
                  The degree to which a person can regain their ability to walk
                  depends on how much of the brain was affected by the stroke
                  and the specific areas involved. Strokes that damage the
                  brain’s motor control areas may result in more severe mobility
                  issues.
                </p>
                <h3 className="senocare__heading__third">
                  2. Timing of Rehabilitation
                </h3>
                <p className="services__para__senocare">
                  Early rehabilitation is critical. Starting physical therapy as
                  soon as possible after the stroke increases the likelihood of
                  regaining mobility, including the ability to walk.
                </p>
                <h3 className="senocare__heading__third">
                  3. Type of Therapy:
                </h3>
                <p className="services__para__senocare">
                  <b>Physical Therapy: </b>Focuses on strengthening muscles,
                  improving balance, and relearning motor skills. Therapists use
                  exercises, gait training, and assistive devices to help
                  patients recover walking abilities.
                </p>
                <p className="services__para__senocare">
                  <b> Occupational Therapy:</b> Helps patients regain the
                  ability to perform daily tasks, which can include walking and
                  moving safely in various environments.
                </p>
                <p className="services__para__senocare">
                  <b> Robotic-Assisted Therapy:</b> Some stroke patients benefit
                  from robotic devices that assist in walking, helping them
                  regain strength and coordination.
                </p>
                <h3 className="senocare__heading__third">
                  4. Neuroplasticity:
                </h3>
                <p className="services__para__senocare">
                  The brain’s ability to reorganize and form new connections
                  (neuroplasticity) plays a significant role in recovery. With
                  consistent therapy, healthy parts of the brain can sometimes
                  take over the functions lost due to the stroke.
                </p>
                <h3 className="senocare__heading__third">
                  5. Assistive Devices:
                </h3>
                <p className="services__para__senocare">
                  Many stroke survivors initially require assistive devices like
                  walkers, canes, or braces to support their mobility. Over
                  time, some people may reduce their reliance on these devices
                  as they regain strength and balance.
                </p>
                <h3 className="senocare__heading__third">
                  6. Ongoing Recovery:
                </h3>
                <p className="services__para__senocare">
                  Recovery from a stroke is often a long-term process. While
                  significant progress is often made in the first few months,
                  many people continue to improve their walking ability for
                  years with ongoing therapy and exercise.
                </p>
                <h3 className="senocare__heading__third">
                  7. Emotional and Mental Support:
                </h3>
                <p className="services__para__senocare">
                  Motivation, emotional support, and a positive mindset can also
                  influence recovery. Stroke recovery is challenging, and having
                  a supportive environment can make a significant difference.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  ARE THERE WARNING SIGNS DAYS BEFORE A STROKE?
                </h2>
                <p className="services__para__senocare">
                  There can be warning signs that appear days, or even weeks,
                  before a stroke. These signs are often related to a transient
                  ischemic attack (TIA), also known as a “mini-stroke.” A TIA
                  occurs when blood flow to a part of the brain is temporarily
                  blocked. TIAs are serious warning signs of a potential
                  full-blown stroke.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Common Warning Signs Days Before a Stroke:
                </h2>
                <h3 className="senocare__heading__third">
                  1. Transient Ischemic Attack (TIA):
                </h3>
                <p className="services__para__senocare">
                  <b>Symptoms:</b> TIAs often cause stroke-like symptoms that
                  last for a few minutes to a few hours and then resolve
                  completely. Common symptoms include:
                </p>
                <p className="services__para__senocare">
                  - Sudden weakness or numbness in the face, arm, or leg,
                  especially on one side of the body.
                </p>
                <p className="services__para__senocare">
                  - Sudden confusion, trouble speaking, or difficulty
                  understanding speech.
                </p>
                <p className="services__para__senocare">
                  - Sudden trouble seeing in one or both eyes.
                </p>
                <p className="services__para__senocare">
                  - Sudden trouble walking, dizziness, loss of balance, or lack
                  of coordination.
                </p>
                <p className="services__para__senocare">
                  - Sudden severe headache with no known cause.
                </p>
                <p className="services__para__senocare">
                  <b> Importance:</b> TIAs are major warning signs that a larger
                  stroke could occur soon. Seeking immediate medical attention
                  is crucial.
                </p>
                <h3 className="senocare__heading__third">2. Headaches:</h3>
                <p className="services__para__senocare">
                  Some people experience unusual or severe headaches days before
                  a stroke, particularly if they are not prone to headaches
                  normally.
                </p>
                <h3 className="senocare__heading__third">
                  3. Fatigue or Dizziness:
                </h3>
                <p className="services__para__senocare">
                  Unexplained fatigue or sudden dizziness can be early
                  indicators, especially if they are out of character for the
                  person.
                </p>
                <h3 className="senocare__heading__third">
                  4. Blurred Vision or Visual Disturbances:
                </h3>
                <p className="services__para__senocare">
                  Sudden vision problems, such as blurred vision, double vision,
                  or even temporary loss of vision, can be a precursor to a
                  stroke.
                </p>
                <h3 className="senocare__heading__third">
                  5. Difficulty Speaking or Understanding:
                </h3>
                <p className="services__para__senocare">
                  Some people may experience brief episodes of confusion,
                  difficulty speaking, or trouble understanding others in the
                  days leading up to a stroke.
                </p>
                <h3 className="senocare__heading__third">
                  6. Weakness or Numbness:
                </h3>
                <p className="services__para__senocare">
                  Brief periods of weakness or numbness, particularly on one
                  side of the body, could be a warning sign.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  What to Do if You Notice Warning Signs:
                </h2>
                <p className="services__para__senocare">
                  If you or someone else experiences any of these symptoms, even
                  if they go away quickly, it’s important to seek medical
                  attention immediately. TIAs, in particular, are strong
                  indicators of an impending stroke, and prompt medical
                  intervention can reduce the risk of a more severe stroke.
                </p>
                <p className="services__para__senocare">
                  Remember the acronym FAST to recognize and respond to stroke
                  symptoms quickly:
                </p>{" "}
                <p className="services__para__senocare">– Face drooping</p>{" "}
                <p className="services__para__senocare">– Arm weakness</p>{" "}
                <p className="services__para__senocare">– Speech difficulty</p>{" "}
                <p className="services__para__senocare">
                  – Time to call emergency services
                </p>{" "}
                <p className="services__para__senocare">
                  Even if symptoms are temporary, they should never be ignored.
                  Early intervention can save lives and reduce the severity of a
                  stroke.
                </p>
                <h3 className="senocare__heading__third">REFERENCES:</h3>
                <p className="services__para__senocare">
                  When discussing stroke paralysis and recovery, key references
                  include reputable sources like medical textbooks,
                  peer-reviewed journals, and health organization guidelines.
                  Here are some authoritative references that can be useful:
                </p>
                <h3 className="senocare__heading__third">
                  1. American Stroke Association:
                </h3>
                <p className="services__para__senocare">
                  – The American Stroke Association provides comprehensive
                  information on stroke causes, symptoms, treatment, and
                  recovery. Their guidelines are widely used by healthcare
                  professionals.
                </p>{" "}
                <p className="services__para__senocare">
                  – [American Stroke
                  Association](https://www.stroke.org/en/about-stroke/stroke-symptoms)
                </p>{" "}
                <h3 className="senocare__heading__third">
                  2. National Institute of Neurological Disorders and Stroke
                  (NINDS):
                </h3>
                <p className="services__para__senocare">
                  – NINDS offers detailed resources on stroke, including the
                  mechanisms behind stroke paralysis, recovery processes, and
                  current research.
                </p>{" "}
                <p className="services__para__senocare">
                  – [NINDS Stroke
                  Information](https://www.ninds.nih.gov/health-information/disorders/stroke)
                </p>{" "}
                <h3 className="senocare__heading__third">
                  3. Stroke Rehabilitation:
                </h3>
                <p className="services__para__senocare">
                  A Function-Based Approach (4th Edition) by Glen Gillen:
                </p>
                <p className="services__para__senocare">
                  – This textbook is a valuable resource for understanding the
                  principles of stroke rehabilitation, including techniques used
                  to help patients regain mobility and function after paralysis.
                </p>{" "}
                <p className="services__para__senocare">
                  – ISBN: 9780323310711
                </p>{" "}
                <h3 className="senocare__heading__third">
                  4. Journal of Stroke and Cerebrovascular Diseases:
                </h3>
                <p className="services__para__senocare">
                  – This peer-reviewed journal publishes research on all aspects
                  of stroke, including studies on recovery and rehabilitation
                  after stroke-induced paralysis.
                </p>{" "}
                <p className="services__para__senocare">
                  – [Journal of Stroke and Cerebrovascular
                  Diseases](https://www.jstrokecerebrovasdis.com/)
                </p>
                <h3 className="senocare__heading__third">
                  5. World Health Organization (WHO):
                </h3>
                <p className="services__para__senocare">
                  – WHO provides global insights on stroke prevalence, risk
                  factors, and guidelines for managing stroke recovery,
                  including paralysis.
                </p>
                <p className="services__para__senocare">
                  – [WHO Stroke Fact
                  Sheet](https://www.who.int/news-room/fact-sheets/detail/stroke)
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

export default StrokeParalysis;
