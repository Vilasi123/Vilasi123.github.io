import { Container, Row, Col } from "react-bootstrap";
import Physio1 from "../../assets/Image/PhysiotherapySection/Physio4.jpg";
import Physio2 from "../../assets/Image/PhysiotherapySection/Physio5.jpg";
import Physio3 from "../../assets/Image/PhysiotherapySection/Physio6.jpg";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import Accordion from "react-bootstrap/Accordion";
import BackP from "../../assets/Image/PhysiotherapySection/Back-Pain.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "../PallitveCare/Services.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const BackPain = () => {
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
                  Back Pain Treatment at Home
                </h1>
              </Col>

              <Col md={12} lg={12}>
                <LazyLoadImage
                  src={BackP}
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

            <Row className="pt-4">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  What Is Back Pain?
                </h2>
                <p className="services__para__senocare">
                  It is the pain in back. Back pain is one of the most common
                  reasons people seek medical help or miss work. Back pain is a
                  leading cause of disability worldwide. Back pain can range
                  from a muscle aching to a shooting, burning or stabbing
                  sensation. Also, the pain can radiate down a leg. Bending,
                  twisting, lifting, standing or walking can make it worse.
                </p>
              </Col>
            </Row>

            <Row className="pt-4">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Types of back pain are given below
                </h2>
                <h3 className="senocare__heading__third">
                  Neck back Pain (Cervical)
                </h3>
                <p className="services__para__senocare">
                  Neck pain, or cervicalgia, can last from days to years,
                  depending on the cause. Common causes include physical strain,
                  poor posture, mental stress, osteoarthritis, spinal stenosis,
                  herniated disk, pinched nerve, tumours and other health
                  condition
                </p>
                <h3 className="senocare__heading__third">
                  Middle Back Pain (Thoracic)
                </h3>
                <p className="services__para__senocare">
                  Middle back pain occurs below the neck and above the bottom of
                  the rib cage in an area called the thoracic spine. There are
                  12 back bones — the T1 to T12 vertebrae — located in this
                  area. Disks reside between them.
                </p>
                <p className="services__para__senocare">
                  The spinal column protects the spinal cord. The spinal cord is
                  a long bundle of nerves that allows the brain to communicate
                  with the rest of the body.
                </p>
                <p className="services__para__senocare">
                  There are a number of ways the bones, muscles, ligaments, and
                  disks in the spine can irritate or injure the nerves, causing
                  back pain.
                </p>
                <h3 className="senocare__heading__third">
                  Lower Back pain (Lumber)
                </h3>
                <p className="services__para__senocare">
                  The low back, also called the lumbar region, is the area of
                  the back that starts below the ribcage. Almost everyone has
                  low back pain at some point in life.
                </p>
                <p className="services__para__senocare">
                  These might range from a dull ache to a stabbing or shooting
                  sensation. The pain may make it hard to move or stand up
                  straight. Pain that comes on suddenly is “acute.” It might
                  happen during sports or heavy lifting. Pain that lasts more
                  than 3 months is considered “chronic.
                </p>
              </Col>
            </Row>

            <Row className="pt-4">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Why Is Back Pain A Common Problem?
                </h2>
                <p className="services__para__senocare">
                  It has to do with the shape of the spine, specifically the
                  part of the spine in the lower back called the lumbar spine.
                  The spine is made of vertebrae bones stacked on top of each
                  other separated by spongy cartilage-like discs acting like
                  shock absorbers. The spine supports all the upper body weight
                  which puts a lot of load on the lumbar spine and results in
                  mechanical stress and strain. The lumbar spine is curved at
                  the bottom. This is normal anatomy; however, it predisposes
                  the lowest segments of the lumbar spine to extra wear and
                  tear. The cumulative wear and tear can cause longer lasting
                  and constant low back pain that may become chronic (lasting at
                  least 3 months). The most common reasons for low back pain
                  include:
                </p>
                <ul>
                  <li>
                    Degenerative disc disease is when the lumbar discs wear down
                    over time from cumulative wear and tear and no longer do
                    their job of providing a cushion between the vertebra bone.
                  </li>
                  <li>
                    Herniated disc is sometimes called a “slipped disc”. In this
                    case part of the disc bulges out from its normal location.
                    This may result in not only back pain but also pain that
                    radiates down the leg if the bulge pushes on a nearby nerve,
                    commonly referred to as “sciatica.”
                  </li>{" "}
                  <li>
                    Spinal stenosis is when the spinal canal has become narrowed
                    over time resulting in less room for the nerves. Often this
                    is due to a combination of arthritis of the spine as well
                    bulging discs. Over time it leads to pain in the lower back
                    as well as in the legs, especially with walking and standing
                    for long periods of time.
                  </li>
                  <li>
                    Vertebral compression fracture – In this case the cause is
                    fractured vertebrae bone due to osteoporosis (brittle bones
                    due to low bone density).
                  </li>
                  <li>
                    Facet joint pain – Here the pain is due to arthritic pain
                    stemming from the spinal joints called facet joints. These
                    attach vertebra bones to one another. The pain here is
                    typically in the lower back and mostly with prolonged
                    standing and walking.
                  </li>
                </ul>{" "}
              </Col>
            </Row>

            <Row className="pt-4">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Common Causes Of Back Pain
                </h2>
                <h3 className="senocare__heading__third">
                  BACK STRUCTURAL PROBLEMS
                </h3>
                <p className="services__para__senocare">
                  Back pain can happen when mechanical or structural problems
                  develop in the spine, discs, muscles, ligaments, or tendons in
                  the back, or compress a nerve.
                </p>
                <p className="services__para__senocare">
                  <b> Sprain: </b>an injury to the ligaments that support the
                  spine (which connect the different bones together), often
                  occurring from twisting or lifting improperly.
                </p>
                <p className="services__para__senocare">
                  <b> Strain: </b>an injury to a muscle or tendon.
                </p>
                <p className="services__para__senocare">
                  <b> Degenerative disc disease:</b> aging causes the discs
                  between the vertebrae of the spine to break down. It is
                  associated with other degenerative changes in the spine, such
                  as arthritis or spinal stenosis.
                </p>
                <p className="services__para__senocare">
                  <b> Herniated or ruptured discs:</b> an event causing a disc
                  to compress and irritate nearby nerves. This often occurs at
                  the lumbar level but can be present in the cervical spine as
                  well.
                </p>
                <p className="services__para__senocare">
                  <b> Spondylolisthesis: </b>a vertebra in the spine slips out
                  of place or gradually moves out of alignment.
                </p>
                <p className="services__para__senocare">
                  <b> Spinal stenosis: </b>a narrowing of the spinal canal that
                  puts pressure on the spinal cord and nerves.
                </p>
                <p className="services__para__senocare">
                  <b> Fractured vertebrae:</b> scoliosis or other congenital
                  changes to the spine.
                </p>
                <p className="services__para__senocare">
                  <b>Myofascial pain:</b> tightness and pain of the muscles
                  supporting the spine due to damage to the muscles or a result
                  of the nerve input to the muscles coming from the spine.
                </p>
                <h3 className="senocare__heading__third">
                  MOVEMENT AND POSTURE
                </h3>
                <p className="services__para__senocare">
                  Most of us get back pain at some point in our lives. It may be
                  due to a sports-related injury, an accident, or a congenital
                  condition such as scoliosis. But most of the time, upper or
                  lower back pain develops during the course of day-to-day life.
                  Repetitive activities at work or home, such as sitting at a
                  computer or lifting and carrying, may produce tension and
                  muscle tightness that result in a backache. Fortunately,
                  there’s a lot we can do to prevent this sort of problem.
                  General physical fitness and a healthy weight are important.
                  But one surprisingly simple strategy can go a long way: Paying
                  attention to your posture. Good posture not only protects you
                  against back pain, it also improves your overall health and
                  appearance. Poor posture, on the other hand, promotes back
                  pain and can affect the position and function of your
                  abdominal organs, inhibit breathing and oxygen intake, and
                  cause headaches. It may also affect mood
                </p>
                <h3 className="senocare__heading__third">
                  PREGNANCY BACK PAIN
                </h3>
                <p className="services__para__senocare">
                  Back pain is a common part of pregnancy. Several factors can
                  cause back pain during pregnancy, including:
                </p>
                <p className="services__para__senocare">
                  increase in hormone levels
                </p>
                <p className="services__para__senocare">postural changes</p>
                <p className="services__para__senocare">weight gain</p>
                <p className="services__para__senocare">muscle separation</p>
                <p className="services__para__senocare">stress on the body</p>
                <p className="services__para__senocare">
                  Pregnancy-related back pain usually resolves on its own after
                  giving birth. Severe back pain that lasts longer than 2 weeks
                  may require medical treatment or physical therapy.
                </p>
                <p className="services__para__senocare">
                  Women should speak with their healthcare provider before
                  starting any new medications or treatments while they are
                  pregnant.
                </p>
                <h3 className="senocare__heading__third">MEDICAL CONDITION</h3>
                <p className="services__para__senocare">
                  Different medical condition involves back pain
                </p>
                <p className="services__para__senocare">
                  <b> Arthritis:</b> This is a joint disease that causes
                  stiffness, swelling, and inflammation.
                </p>
                <p className="services__para__senocare">
                  <b> Osteoarthritis:</b> This type of arthritis happens when
                  your cartilage and bones break down. This most often affects
                  people from middle age onward.
                </p>
                <p className="services__para__senocare">
                  <b> Ankylosing spondylitis:</b> This is a type of arthritis
                  that affects your joints and ligaments along the spine.
                </p>
                <p className="services__para__senocare">
                  <b> Scoliosis, or curvature of the spine:</b> This is usually
                  something you have from birth. If there’s pain, it typically
                  starts in mid-life.
                </p>
                <p className="services__para__senocare">
                  <b> Tumours: </b> In rare cases you can get them in your back.
                  They’re usually spread by a cancer that started somewhere else
                  in your body.
                </p>
                <h3 className="senocare__heading__third">
                  OBESITY OR OVERWEIGHT
                </h3>
                <p className="services__para__senocare">
                  Not every person with obesity will experience back pain, but
                  these conditions often coincide. Obesity can be a primary
                  cause of back pain, but it can also make an existing condition
                  worse.
                </p>
                <p className="services__para__senocare">
                  A large study published in 2017 found that obesity and excess
                  weight are linked to lower back pain and degenerative disk
                  conditions. The researchers found that obesity can be used as
                  a predictor of future problems in the lower back, but the
                  researchers weren’t able to prove that obesity directly causes
                  back pain.
                </p>
                <p className="services__para__senocare">
                  There are a number of theories about why people who have
                  obesity are more likely to experience back pain. These
                  theories include:
                </p>
                <p className="services__para__senocare">
                  <b> Altered posture:</b> If you have too much weight around
                  your middle, your posture may become altered. Your pelvis and
                  lower back may tilt forward, changing the natural curve of
                  your spine. This change may place excess pressure on the
                  spinal disks and nerves of the back, causing conditions such
                  as:
                </p>
                <ul>
                  <li>spinal compression</li>
                  <li>disk degeneration</li>
                  <li>pinched nerves</li>
                </ul>
                <p className="services__para__senocare">
                  <b> Disk compression:</b> Excess weight may increase the
                  pressure on the joints in your spine (vertebra). Over time,
                  pressure on these joints may cause the cushiony disks between
                  your spinal bones to thin or bulge, leading to chronic pain
                  and pinched nerves.
                </p>
                <p className="services__para__senocare">
                  <b> Inflammation: </b>Obesity is linked to chronic, low-grade
                  inflammation. Whole-body inflammation may increase your risk
                  of chronic pain disorders.
                </p>

                <p className="services__para__senocare">
                  <b>Inflammation: </b>Obesity is linked to chronic, low-grade
                  inflammation. Whole-body inflammation may increase your risk
                  of chronic pain disorders.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Ways to Relieve Back Pain Naturally
                </h2>
                <h3 className="senocare__heading__third">
                  1. Enjoy an anti-inflammatory drink every day
                </h3>
                <p className="services__para__senocare">
                  When you consume anti-inflammatory foods regularly, several
                  antioxidant, anti-inflammatory, and even anti-cancer agents
                  can build up in your blood. Over a period of time, these play
                  a significant role in reducing and/or eliminating inflammatory
                  reactions in the body.
                </p>{" "}
                <p className="services__para__senocare">
                  Consuming these healthy drinks on a regular basis may help
                  reduce your back pain.
                </p>{" "}
                <p className="services__para__senocare">
                  Turmeric, an Asian spice, contains antioxidant,
                  anti-arthritic, and anti-inflammatory properties.
                </p>
                <p className="services__para__senocare">
                  An easy method to consume turmeric is to mix a small quantity
                  (1/2 teaspoon) of turmeric powder in a glass of warm milk. You
                  can add honey or stevia to the milk if you prefer a sweet
                  taste. Consume this drink, preferably just before bedtime to
                  allow the anti-inflammatory process to work while you sleep.
                </p>{" "}
                <p className="services__para__senocare">
                  Consuming dairy products may increase inflammation in some
                  people. In such cases, trying plant-based milk, such as almond
                  milk can be helpful.
                </p>
                <h4 className="senocare__heading__fourth">Tart cherry juice</h4>
                <p className="services__para__senocare">
                  Cherries are rich in antioxidants and anti-inflammatory
                  agents. Cherry juice can help relieve muscle pain, which may
                  be chronic or exercise-induced. Cherry juice is easily
                  available to buy at grocery stores and commonly contains the
                  tart cherry extract. Try drinking a glass of cherry juice on a
                  daily basis and see if it has positive effects in relieving
                  your back pain.
                </p>
                <h4 className="senocare__heading__fourth ">Ginger-green tea</h4>
                <p className="services__para__senocare">
                  You can also try infused-herbal drinks, such as ginger-green
                  tea, which contains the pain-relieving benefits of both green
                  tea and ginger.
                </p>
                <p className="services__para__senocare">
                  Ginger-green tea bags can be purchased from grocery stores and
                  you can easily enjoy a cup either at work or at home.
                </p>
                <p className="services__para__senocare">
                  Over a period of time, these anti-inflammatory agents can
                  build up in your bloodstream, so including these drinks in
                  your daily diet will help reduce overall inflammation and
                  prevent new inflammatory pain.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  2. Fall asleep faster and sleep longer
                </h3>
                <p className="services__para__senocare">
                  When you have a restful night’s sleep, your back will feel
                  less sore during the day. A night of restorative sleep can
                  have healing benefits and make you feel refreshed,
                  rejuvenated, and less stressed.
                </p>{" "}
                <p className="services__para__senocare">
                  Try these natural sleep aids, one at a time, to see which one
                  works best for you:
                </p>
                <p className="services__para__senocare">
                  Vitamins C and B6. The natural steroids in your body control
                  your metabolism and promote good sleep. Supplements of
                  vitamins C and B6 are known to help the body produce and
                  regulate natural steroid hormones.
                </p>
                <p className="services__para__senocare">
                  Melatonin. Your natural sleep hormone, melatonin can be taken
                  as a supplement to improve your sleep cycle.
                </p>
                <p className="services__para__senocare">
                  L-theanine. An amino acid found in tea leaves, L-theanine may
                  help some people feel relaxed and get better sleep.
                </p>
                <p className="services__para__senocare">
                  Valerian. Supplements made from the root of the valerian plant
                  may help you sleep faster and stay asleep longer.
                </p>
                <p className="services__para__senocare">
                  Another option is cherry juice or cherry extracts—cherries
                  contain certain enzymes that help promote better sleep.
                </p>
                <h3 className="senocare__heading__third">
                  3. Avoid prolonged static posture
                </h3>
                <p className="services__para__senocare"></p>{" "}
                <p className="services__para__senocare">
                  It is important to pay attention to the joints and muscles of
                  your spine and hip. Prevent fatigue and stresses on these
                  joints by following simple tips, such as:
                </p>
                <p className="services__para__senocare">
                  Avoid excessive sitting or consider using a standing desk
                  while you work. When you sit for a long duration, the pressure
                  on your spinal discs increases. Aim to get up every hour and
                  walk a short distance to take the load off your discs.
                </p>
                <p className="services__para__senocare">
                  Check your posture and adjust your neck, shoulder, and back
                  alignment to prevent stresses on your spine. Poor, unsupported
                  posture can lead to several problems in your back, causing or
                  increasing the pain.
                </p>
                <p className="services__para__senocare">
                  Rotate activities in order to avoid the same set of muscles
                  and joints from getting over-fatigued. For example, if you
                  have been standing and working for some time, consider
                  changing to a different activity where you can sit down. You
                  can go back to standing once the muscles and joints have had a
                  chance to relax
                </p>
                <p className="services__para__senocare">
                  When you have a flare-up of symptoms, consider less exertive
                  activities, such as reading a book, listening to music, or
                  crafting. These activities can help divert your mind from the
                  pain and let your back rest at the same time.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  4. Gently stretch your joints and soft tissues through yoga
                </h3>
                <p className="services__para__senocare">
                  Yoga is an effective way to stretch your back, improve the
                  health of muscles and joints, enhance distribution of healing
                  nutrients through blood circulation, and increase the
                  flexibility of the spine.
                </p>
                <p className="services__para__senocare">
                  When you start, perform the stretches slowly and advance only
                  if you feel comfortable without pain. Gradually, you will be
                  able to add more stretches to your routine. An ideal time for
                  yoga is early morning—to help loosen your spine and also
                  reduce stiffness and aches in your back.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  5. Try mindful meditation
                </h3>
                <p className="services__para__senocare">
                  Meditation is a great way to improve concentration, release
                  feel-good hormones (endorphins), and decrease anxiety and
                  stress. Through mindful meditation, you can control the way
                  your body perceives pain.
                </p>{" "}
                <p className="services__para__senocare">
                  Find a quiet, dark room and meditate for 5 to 10 minutes in
                  the morning. You can also try meditating before bedtime or
                  while you take a break at work. If you don’t like to meditate,
                  try simple breathing exercises—take 10 deep, slow breaths in a
                  row.
                </p>
                <h3 className="senocare__heading__third">
                  6. Support your body in a warm pool
                </h3>
                <p className="services__para__senocare">
                  The buoyancy of the water lets you enjoy the benefits of
                  exercise with less pain. Exercising in water also helps
                  regulate the functioning of nerves and muscles, relieving
                  pain.
                </p>
                <p className="services__para__senocare">
                  If you prefer warmer pools, look into water exercise classes
                  and hydrotherapy pools. Water therapy exercises are often done
                  in water that is about 83 degrees to 88 degrees. Hydrotherapy
                  pool temperatures are often more than 90 degrees.
                </p>{" "}
                <h3 className="senocare__heading__third">
                  7. Keep a self-activating heat patch handy
                </h3>
                <p className="services__para__senocare">
                  Heat patches that activate when in contact with the body are a
                  great tool to carry during long drives or keep in your office
                  desk/bedside table drawer. These heat patches activate
                  quickly, can be worn inside your clothing, and provide a
                  continuous supply of heat to relieve your back pain. Follow
                  the package instructions and avoid wearing the patch for long
                  durations to prevent skin damage. Some heat patches are also
                  infused with medications for more effective pain relief.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  How To Prevent Back Pain
                </h2>
                <h3 className="senocare__heading__third">
                  Some methods of prevention are given below:
                </h3>

                <p className="services__para__senocare">
                  Prevention is probably the most important type of treatment
                  for low back pain and is not emphasized nearly enough in our
                  society.
                </p>
                <p className="services__para__senocare">
                  Good posture, proper ergonomics and biomechanics, and daily
                  exercise, especially core strengthening, is crucial in the
                  prevention of back injury and unnecessary extra wear and tear.
                </p>
                <p className="services__para__senocare">
                  Once a back problem develops the treatments can vary, are
                  usually diagnosis specific, and can be very effective.
                </p>
                <p className="services__para__senocare">
                  If you are suffering from back pain, it is important to see a
                  skilled physician who offers you conservative treatment
                  options
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  Treatment For Back Pain
                </h2>
                <p className="services__para__senocare">
                  The cause of your back pain determines the treatment. For your
                  back pain you may feel better with:
                </p>
                <ul>
                  <li>Cold packs and/or heating pads.</li>
                  <li>Stretching exercises.</li>
                  <li>Massages.</li>
                  <li>Surgery.</li>
                  <li>Antibiotics.</li>
                  <li>Cortisone.</li>
                  <li>Traction.</li>
                  <li>Physical therapy.</li>
                  <li>
                    Other over-the-counter and prescribed muscle relaxants,
                    steroids and pain medications.
                  </li>
                  <li>Exercise — specifically strengthening exercises.</li>
                  <li>Chiropractic care.</li>
                  <li>Acupuncture.</li>
                </ul>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12} className="senocare__text__content">
                <h2 className="service__heading__senocare">
                  How Can Senocare Help You?
                </h2>
                <p className="services__para__senocare">
                  We provide different types of physiotherapy which are given
                  below:
                </p>
                <h3 className="senocare__heading__third">
                  Types of Physiotherapy Treatment
                </h3>
                <h4 className="senocare__heading__fourth">
                  Orthopaedic Physiotherapy
                </h4>
                <p className="services__para__senocare">
                  Tailored for musculoskeletal issues, addressing conditions
                  like arthritis, fractures, and joint pain.
                </p>
                <h4 className="senocare__heading__fourth">
                  Neurological Physiotherapy
                </h4>
                <p className="services__para__senocare">
                  Focused on enhancing motor skills and mobility for individuals
                  with neurological disorders such as stroke, Parkinson’s , or
                  multiple sclerosis.
                </p>
                <h4 className="senocare__heading__fourth">
                  Cardiopulmonary Physiotherapy
                </h4>
                <p className="services__para__senocare">
                  Targeting heart and lung conditions, including post-surgery
                  rehabilitation and respiratory issues, lung congestion.
                </p>
                <h4 className="senocare__heading__fourth">
                  Geriatric Physiotherapy
                </h4>
                <p className="services__para__senocare">
                  Catering to the unique needs of older adults, promoting
                  mobility, balance, coordination and overall well-being.
                </p>
                <h4 className="senocare__heading__fourth">
                  Paediatric Physiotherapy
                </h4>
                <p className="services__para__senocare">
                  Specialized care for children, addressing developmental
                  delays, injuries, and congenital condition
                </p>
                <p className="services__para__senocare">
                  The duration of a home physiotherapy session varies depending
                  on the individual’s condition and the treatment plan outlined
                  by the physiotherapist. On average, a thorough assessment
                  followed by a treatment session typically lasts between 45
                  minutes to an hour. This allows ample time for a thorough
                  assessment, targeted exercises, and any necessary adjustments
                  to the treatment plan. The focus is always on quality care and
                  achieving optimal results within each session.
                </p>
              </Col>
            </Row>

            <Row>
              <Col xs={12} className="senocare__text__content">
                <h3 className="senocare__heading__third">References:</h3>
                <p className="services__para__senocare">
                  1)
                  https://www.360-orthopedics.com/blog/why-is-back-pain-so-common
                </p>
                <p className="services__para__senocare">
                  2)
                  https://my.clevelandclinic.org/health/diseases/22325-back-pain
                </p>
                <p className="services__para__senocare">
                  3)
                  https://www.mayoclinic.org/diseases-conditions/back-pain/symptoms-causes/syc-20369906
                </p>{" "}
                <p className="services__para__senocare">
                  4) https://www.health.harvard.edu/pain/posture-and-back-health
                </p>
                <p className="services__para__senocare">
                  5) https://www.medicalnewstoday.com/articles/326921
                </p>
                <p className="services__para__senocare">
                  6) https://www.webmd.com/back-pain/causes-back-pain
                </p>
                <p className="services__para__senocare">
                  7) https://senocare.in
                </p>
                <p className="services__para__senocare">
                  8)
                  https://my.clevelandclinic.org/health/symptoms/21179-neck-pain
                </p>
                <p className="services__para__senocare">
                  9) https://www.healthline.com/health/middle-back-pain
                </p>
                <p className="services__para__senocare">
                  10)
                  https://www.webmd.com/back-pain/ss/slideshow-low-back-pain-overview
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

export default BackPain;
