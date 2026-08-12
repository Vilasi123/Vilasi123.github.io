import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Nursing.css";
import "../PallitveCare/Services.css";
import { Container, Row, Col } from "react-bootstrap";
import NursingBanner from "../../assets/Image/Nursing/landing-banner-img.jpg";
import NursingImg2 from "../../assets/Image/Nursing/provide-service-img2.png";
import NursingImg3 from "../../assets/Image/Nursing/elder-services.png";
import { Carousel } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import ReachOutUs from "../FormReactOut/ReachOutUS";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";
import { Helmet } from "react-helmet-async";

// import CarePackage from "../HomePage/CarePackage/CarePackage";

const nursingFaqs = [
  {
    q: "What’s the difference between a nurse and an attendant?",
    a: "A nurse handles the clinical stuff — vitals, wound care, medicines, IV drugs. An attendant helps with daily living — bathing, moving around, company. A lot of families start with an attendant and add a nurse once the medical need shows up.",
  },
  {
    q: "What’s the shortest booking you’ll do?",
    a: "A few hours a day if that’s all that’s needed. We also do 12-hour and 24-hour shifts, short recovery stints, or ongoing long-term care.",
  },
  {
    q: "Are the nurses actually verified?",
    a: "Yes — background checks, valid credentials, and specific training in elder care before anyone’s assigned to a family.",
  },
  {
    q: "How fast can someone start?",
    a: "Usually 24 to 48 hours in Delhi NCR. Faster if it’s urgent — we prioritise those.",
  },
  {
    q: "What does it cost?",
    a: "Depends on shift length and how much clinical care is needed. Easier to give you a real number on a call than a generic range here — happy to talk it through.",
  },
  {
    q: "Can a nurse handle ICU-level or post-surgery care at home?",
    a: "Yes — post-op recovery, ICU-level monitoring, chemo after-care, stroke recovery, wound management, all of it, coordinated with your treating doctor.",
  },
  {
    q: "Do you cover my area?",
    a: "Delhi, Gurgaon, Noida, and Faridabad. Tell us your locality and we’ll confirm availability.",
  },
];

const nursingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: nursingFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const NursingCare = () => {
  return (
    <>
      <SEO />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(nursingFaqSchema)}
        </script>
      </Helmet>
      <div id="nursing">
        <Header />
        <div className="header__image">
          <LazyLoadImage
            src={NursingBanner}
            className="img-fluid background__img"
          />
          <h2 className="img_heading header__text">
            Nursing services offer Personalized attention Specialized care at
            home
          </h2>
        </div>

        <Container className="nursing__content">
          <Row>
            <h1 className="nursing__heading">Home Nursing Care Services</h1>

            <Col xs={12} md={6} className="nursing__text">
              <p className="nursing__para">
                Home nursing care services from senOcare bring a qualified,
                background-verified nurse to your loved one's bedside — in{" "}
                <a href="/nursing-care-delhi/" className="hyper__link">
                  Delhi
                </a>
                , &nbsp;
                <a href="/nursing-care-noida/" className="hyper__link">
                  Noida,
                </a>
                &nbsp;
                <a href="/nursing-care-gurgaon/" className="hyper__link">
                  Gurgaon
                </a>
                , and Faridabad. Nursing care at home promotes faster
                healing, lowers infection risk, and costs less than a
                hospital stay, while your loved one recovers surrounded by
                family and a dedicated senOcare CareManager oversees every
                case.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <LazyLoadImage
                src={NursingImg3}
                className="img-fluid nursing__care__img"
              />
            </Col>
          </Row>

          <Row className="senocare__row__content">
            <Col xs={12}>
              <h2 className="nursing__heading">
                When You Need Home Nursing Care
              </h2>
              <p className="nursing__para">
                A few situations come up again and again:
              </p>
              <ul className="nursing__ul">
                <li>
                  Someone just had surgery and needs wound care plus help
                  getting around for a few weeks
                </li>
                <li>
                  A parent has diabetes or a heart condition and living
                  alone has started to feel risky
                </li>
                <li>
                  Recovery after a stroke — physio follow-through, safety at
                  home, the slow stuff nobody warns you about
                </li>
                <li>
                  Chemo cycles, where the days after treatment are worse
                  than the treatment itself
                </li>
                <li>
                  Dementia that's progressed to the point where someone
                  needs to be around, not just checking in
                </li>
                <li>
                  A hospital discharge with ICU-style monitoring
                  instructions and no idea how to execute them at home
                </li>
                <li>
                  You're not in the same city — or country — as your
                  parents, and you need someone reliable in the house when
                  you can't be
                </li>
              </ul>
              <p className="nursing__para">
                If any of this sounds familiar, that's usually where
                nursing care starts.
              </p>
            </Col>
          </Row>

          <Row className="senocare__row__content">
            <Col xs={12}>
              <h2 className="nursing__heading">What's Included</h2>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="senocare__heading__third">
                Day-to-day nursing support
              </h3>
              <div className="nursing__ul">
                <ul>
                  <li>
                    Checking and recording vitals — BP, pulse, oxygen,
                    temperature — on a schedule you agree on
                  </li>
                  <li>Giving medicines on time, exactly as prescribed</li>
                  <li>Help with bathing, changing, and general hygiene</li>
                  <li>Assistance with bowel and bladder care</li>
                  <li>
                    Helping your loved one move around safely — bed to
                    chair, chair to bathroom
                  </li>
                  <li>Light exercise and massage</li>
                  <li>Keeping them company, not just keeping them alive</li>
                  <li>
                    Recognising when something's wrong and calling family
                    and the doctor immediately
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="senocare__heading__third">
                Clinical / higher-need care
              </h3>
              <div className="nursing__ul">
                <ul>
                  <li>Setting up hospital beds and equipment at home</li>
                  <li>
                    <a href="/critical-care/" className="hyper__link">
                      ICU-level critical care
                    </a>
                  </li>
                  <li>
                    <a
                      href="/nursing-care/post-operative-care-at-home/"
                      className="hyper__link">
                      Post-operative recovery care
                    </a>
                  </li>
                  <li>Chemotherapy after-care</li>
                  <li>
                    <a href="/dementia" className="hyper__link">
                      Dementia care
                    </a>
                  </li>
                  <li>
                    <a
                      href="/nursing-care/expert-post-stroke-care/"
                      className="hyper__link">
                      Post-stroke care
                    </a>
                  </li>
                  <li>
                    <a
                      href="/expert-wound-care-management-for-seniors/"
                      className="hyper__link">
                      Wound management and dressing
                    </a>
                  </li>
                  <li>IV drug administration</li>
                  <li>
                    <a href="/holistic-care-gurgaon/" className="hyper__link">
                      General elderly care
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} className="text-center mt-4">
              <LazyLoadImage
                src={NursingImg2}
                className="img-fluid nursing__care__img"
                style={{ maxWidth: "400px" }}
              />
            </Col>
          </Row>

          <Row className="senocare__row__content">
            <Col xs={12}>
              <h2 className="nursing__heading">
                How Booking Actually Works
              </h2>
            </Col>
            <Col xs={12} md={6}>
              <h4 className="senocare__heading__fourth">
                1. Call us or fill the quote form
              </h4>
              <p className="nursing__para">
                Tell us what's going on — the condition, the city (Delhi,
                Gurgaon, Noida, Faridabad), and roughly how many hours a day
                you need someone.
              </p>
              <h4 className="senocare__heading__fourth">
                2. You get a CareManager, not a call centre
              </h4>
              <p className="nursing__para">
                One person looks at the case and figures out which nurse
                actually fits — not whoever's free next.
              </p>
              <h4 className="senocare__heading__fourth">
                3. We show you who's coming before they arrive
              </h4>
              <p className="nursing__para">
                Credentials, verification, background — you see it before
                the first visit, not after.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <h4 className="senocare__heading__fourth">4. Care starts</h4>
              <p className="nursing__para">
                On the schedule you agreed to. Your CareManager stays the
                one number to call if anything needs to change.
              </p>
              <h4 className="senocare__heading__fourth">
                5. Nothing is locked in
              </h4>
              <p className="nursing__para">
                Shift length, the nurse, the scope of care — all of it can
                be adjusted as things change.
              </p>
            </Col>
          </Row>
          <Row>
            <h3 className="nursing__heading testimonial__setion">
              Testimonial
            </h3>
            <Col>
              <Carousel
                indicators={false}
                controls={false}
                interval={3000} // Disable automatic sliding
                nextLabel={"Next"}
                prevLabel={"Previous"}
                visible={1} // Set the number of visible items to 1
              >
                {/* Level 1 */}
                <Carousel.Item>
                  <div>
                    <Row>
                      <Col xs={12} md={6} lg={4}>
                        <iframe
                          src="https://www.youtube.com/embed/5P-XhhAGeAE?si=FxF1bse3sA1eJXnb"
                          title="YouTube video player"
                          className="rounded"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>
                      </Col>
                      <Col xs={12} md={6} lg={4}>
                        <iframe
                          src="https://www.youtube.com/embed/0rUGmPmF3XU?si=qq7Ujj_LWJPlGUJ1"
                          title="YouTube video player"
                          className="rounded"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>
                      </Col>
                      <Col xs={12} md={6} lg={4}>
                        <iframe
                          src="https://www.youtube.com/embed/pR2KQL_OHAQ?si=h8yGPAoNIVB55DnZ"
                          title="YouTube video player"
                          className="rounded"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>
                      </Col>
                    </Row>
                  </div>
                </Carousel.Item>
                {/* Level 2 */}/
                <Carousel.Item>
                  <div>
                    <Row>
                      <Col xs={12} md={6} lg={4}>
                        <iframe
                          src="https://www.youtube.com/embed/pWtChcQ6sdE?si=gaTGWKp3QCKydZhg"
                          title="YouTube video player"
                          className="rounded"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>
                      </Col>
                      <Col xs={12} md={6} lg={4}>
                        <iframe
                          src="https://www.youtube.com/embed/u_qoBa5x5kQ?si=sLlLUxL_oSSVLbCn"
                          title="YouTube video player"
                          className="rounded"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>
                      </Col>
                      <Col xs={12} md={6} lg={4}>
                        <iframe
                          src="https://www.youtube.com/embed/9dPhpkqqxH8?si=YZQlVdaf2mzbNqPJ"
                          title="YouTube video player"
                          className="rounded"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>
                      </Col>
                    </Row>

                    {/* Add content for level 2 */}
                  </div>
                </Carousel.Item>
                {/* <Carousel.Item>
        <div className="d-flex justify-content-around">
          <iframe
            src="https://www.youtube.com/embed/9dPhpkqqxH8?si=YZQlVdaf2mzbNqPJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          <iframe
            src="https://www.youtube.com/embed/pR2KQL_OHAQ?si=h8yGPAoNIVB55DnZ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </Carousel.Item> */}
                {/* Add more levels as needed */}
              </Carousel>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col xs={12}>
              <h2 className="nursing__heading">Where We Cover</h2>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="senocare__heading__third">Delhi</h3>
              <p className="nursing__para">
                Covers GK, Rohini, South Extension, Malviya Nagar, Saket
                and more. One-off visits or ongoing subscriptions, whichever
                fits.
              </p>
              <h3 className="senocare__heading__third">Gurgaon</h3>
              <p className="nursing__para">
                Round-the-clock vitals and medication support, working
                alongside whichever doctor is already treating your parent.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <h3 className="senocare__heading__third">Noida</h3>
              <p className="nursing__para">
                Covers most sectors. Daily hygiene and vitals through to
                full-time post-surgery or chronic care.
              </p>
              <h3 className="senocare__heading__third">Faridabad</h3>
              <p className="nursing__para">
                Same nurses, same verification process, same standard as
                Delhi, Gurgaon and Noida.
              </p>
            </Col>
          </Row>

          <Row className="senocare__row__content">
            <Col xs={12}>
              <h2 className="nursing__heading">
                FAQ's - Home Nursing Care Services
              </h2>
            </Col>
            <Col xs={12}>
              {nursingFaqs.map((item) => (
                <Accordion
                  key={item.q}
                  defaultActiveKey="0 "
                  className="accordian__service__section">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h5 className="accordian__header  ">{item.q}</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="accordian__para  ">{item.a}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}
            </Col>
          </Row>

          <Row>
            <ReachOutUs />
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default NursingCare;
