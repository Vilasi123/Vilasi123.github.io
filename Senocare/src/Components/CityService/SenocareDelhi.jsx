import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BannerImg from "../../assets/Image/CityServices/delhi-map.png";
import ContentImg from "../../assets/Image/CityServices/ImageOne.png";
import ContentImg1 from "../../assets/Image/CityServices/Image2.png";
import ContentImg2 from "../../assets/Image/CityServices/Image3.png";
import ContentImg3 from "../../assets/Image/CityServices/Image4.png";
import CallIcon from "../../assets/Image/CityServices/call-center.png";
import NurseIcon from "../../assets/Image/CityServices/nurse.png";
import Calender from "../../assets/Image/CityServices/calendar.png";
import fallInLove from "../../assets/Image/CityServices/fall-in-love.png";
import house from "../../assets/Image/CityServices/house.png";
import troubleshooting from "../../assets/Image/CityServices/troubleshooting.png";
import truck from "../../assets/Image/CityServices/truck.png";
import Accordion from "react-bootstrap/Accordion";
import "../PallitveCare/Services.css";
import Media from "../HomePage/Media/Media";
import Contact from "../HomePage/LoveToHear/Contact";
import ReachOutUs from "../FormReactOut/ReachOutUS";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const SenocareDelhi = () => {
  return (
    <>
      <SEO />

      <div>
        <Header />
        <Container className="services__content__senocare">
          <Row>
            <Col md={12} lg={6}>
              <LazyLoadImage
                src={BannerImg}
                className="img-fluid senocare__service__img"
              />
            </Col>

            <Col md={12} lg={6} className="service__link__city ">
              <div>
                <h2 className="senocare___heading__sencond "> Our Services</h2>
                <ul>
                  <li>
                    <a href="/holistic-care-gurgaon/" rel="noopener noreferrer">
                      Holistic Care Gurgaon
                    </a>
                  </li>
                  <li>
                    <a href="/holistic-care-noida/" rel="noopener noreferrer">
                      Holistic Care Noida{" "}
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="/holistic-care-hyderabad/"
                      rel="noopener noreferrer">
                      Holistic Care Hyderabad{" "}
                    </a>
                  </li> */}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <div className="banner__content">
        <LazyLoadImage src={BannerImg} className="img-fluid banner__img" />
      </div> */}
        <Container className="services__content__senocare">
          <Row>
            <Col>
              <h1 className="service__heading__senocare">
                Elder care services in Delhi
              </h1>
              <p className="services__para__senocare">
                Most adult children do what they can while caring for their
                aging parents. But professional commitments and caregiving
                responsibilities often don’t converge. This is why elder care
                services in Delhi have gained traction for their demonstrated
                potential to improve quality of life.
              </p>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col md={12} lg={6}>
              <LazyLoadImage src={ContentImg1} className="img-fluid  " />
            </Col>
            <Col md={12} lg={6}>
              <p className="services__para__senocare">
                Demographic, social, and technology trends in India have driven
                the changes in the traditional patterns of care for the elderly.
                Likewise, rapid urbanization and nuclearization of families have
                led to the evolution of elder care services in Delhi. It has
                proven to be a sustainable care solution, satisfying the
                elderly’s health and social needs at home, more valued than a
                disease-oriented care approach under{" "}
                <a href="/nursing-care-delhi/" className="hyper__link">
                  home health care services{" "}
                </a>{" "}
                .
              </p>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col md={12} lg={6}>
              <p className="services__para__senocare">
                Elder care at home in Delhi, in recent times, has received much
                attention due to its wide-ranging benefits.{" "}
                <a href="/holistic-care-gurgaon/" className="hyper__link">
                  Elderly care service{" "}
                </a>{" "}
                at home solutions has proven to be advanced not only for health,
                social and emotional benefits but also because of their
                potential to reduce the risk of hospitalizations. It has further
                allowed the elderly to be shielded from the risk of Covid-19
                infection, and avail themselves of timely medical services
                without any hassles.{" "}
              </p>
            </Col>
            <Col md={12} lg={6}>
              <LazyLoadImage src={ContentImg2} className="img-fluid  " />
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <h2 className="senocare___heading__sencond">
              ELDER CARE SERVICES IN DELHI<br></br>
              OFFERED BY SENOCARE
            </h2>
            <Col md={12} lg={6}>
              <LazyLoadImage src={ContentImg} className="img-fluid  " />
            </Col>
            <Col md={12} lg={6}>
              <p className="services__para__senocare">
                While many elder care services in Delhi provide excellent
                medical support and few other needs, senOcare goes the extra
                mile in taking care of their physical, emotional, social, and
                day-to-day needs. Our personalized and comprehensive solutions
                for elder care at home in Delhi have instilled a sense of
                safety, security, and increased independence among the elderly
                while providing peace of mind to families living abroad. It
                broadly includes the following:
              </p>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col xs={12} md={6} className="city__service__icon">
              <LazyLoadImage src={CallIcon} className="img-fluid" width="80" />
              <p className="services__para__senocare mt-3">
                Short-term or long-term home health care services for an
                illness, chronic disease, or disability—including{" "}
                <a href="/nursing-care/" className="hyper__link">
                  {" "}
                  nursing care
                </a>
                , ICU care, at{" "}
                <a href="/doctor-on-home-visit/" className="hyper__link">
                  {" "}
                  home doctor visits{" "}
                </a>
                , and 24×7 emergency support
              </p>
            </Col>
            <Col xs={12} md={6} className="city__service__icon">
              <LazyLoadImage src={NurseIcon} className="img-fluid" width="90" />
              <p className="services__para__senocare  mt-3">
                <a href="/physiotherapy-home-service/" className="hyper__link">
                  {" "}
                  Physiotherapy at home{" "}
                </a>
                and rehabilitative services for{" "}
                <a href="/dementia/" className="hyper__link">
                  {" "}
                  dementia care{" "}
                </a>
                , depression, and other psychological disorders
              </p>
            </Col>
            <Col xs={12} md={6} className="city__service__icon">
              <LazyLoadImage
                src={fallInLove}
                className="img-fluid"
                width="90"
              />
              <p className="services__para__senocare  mt-3">
                Home attendant for elderly in Delhi for personal care such as
                dressing, bathing, grooming, and toilet functions
              </p>
            </Col>
            <Col xs={12} md={6} className="city__service__icon">
              <LazyLoadImage src={house} className="img-fluid" width="90" />
              <p className="services__para__senocare  mt-3">
                Household chores, home maintenance, groceries, and shopping
              </p>
            </Col>
            <Col xs={12} md={6} className="city__service__icon">
              <LazyLoadImage
                src={troubleshooting}
                className="img-fluid"
                width="90"
              />
              <p className="services__para__senocare  mt-3">
                Technology troubleshooting and paperwork assistance{" "}
              </p>
            </Col>
            <Col xs={12} md={6} className="city__service__icon">
              <LazyLoadImage src={truck} className="img-fluid" width="90" />
              <p className="services__para__senocare  mt-3">
                Transportation, logistics and escorted travel{" "}
              </p>
            </Col>

            <Col xs={12} md={6} className="city__service__icon">
              <LazyLoadImage src={Calender} className="img-fluid" width="90" />
              <p className="services__para__senocare  mt-3">
                Companionship and celebration of milestone events{" "}
              </p>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col md={12} lg={6}>
              <LazyLoadImage src={ContentImg3} className="img-fluid  " />
            </Col>
            <Col md={12} lg={6}>
              <p className="services__para__senocare">
                senOcare’s personalized elder care services in Delhi can be
                availed round-the-clock or for limited hours a day, and at a
                time most convenient to your loved one. This is the foundation
                of our holistic services for elder care at home in Delhi ‒ to
                help them not just lead their lives with less stress but rather
                help them thrive and live their lives. To do this effectively
                and efficiently, we have partnered with the best in the
                industry, be it hospitals, pharmacies, path-labs, and security.
              </p>
            </Col>
            <Col xs={12}>
              <p className="services__para__senocare">
                It’s just not the disease that affects old age. Our research
                says that various other issues govern an elderly’s health and
                wellness, often unnoticed. Our compassionate and professional
                Care Managers understand this and are well-trained to assess any
                situation. Most importantly, receiving elderly care service at
                home means that they are surrounded by a familiar environment,
                which helps to create a sense of comfort and independence…most
                valued by the elderly.
              </p>
            </Col>
          </Row>
          <Media />
          <Row className="services__content__senocare">
            <Col>
              <h2 className="senocare___heading__sencond">
                Frequently Asked Questions (FAQs):
              </h2>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q1. What kind of elderly care services at home are
                      available in Delhi?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Our wide portfolio of personalized elder care services in
                      Delhi include health & fitness, security & home
                      maintenance, escorted travels, forms & filing, technology
                      assistance, and memories & milestones. In short, it’s a
                      holistic solution for elder care.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q2. How much does a senOcare care package cost?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Different companies have different approaches to helping
                      elders and price their services differently. Senocare aims
                      to address an elderly’s pain areas and not sell
                      commodities or services. So, while we have popular
                      packages like “Touch of Love”, “Comfort” & “Indulge”, we
                      encourage families to list out the areas where they need
                      our support and we customize care plans accordingly. A
                      not-so-old couple might need services barely costing 2 to
                      3* thousand Indian rupees a month, another elderly couple
                      with multiple health complications might engage us for
                      more extensive support thus costing to the tune of 40 to
                      50 thousand Indian rupees a month. Elders can choose to
                      pay quarterly, six-monthly, or yearly based on their
                      utmost convenience.”
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q3. What kind of home care staff does senOcare provide for
                      aging parents?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      senOcare provides compassionate medical and non-medical
                      attendants to address every needs of the elderly and help
                      them live a secured and independent life in their homes.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q4. Is there a processes of selecting these support staff?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Yes, there is a proper screening process, to asses their
                    </p>
                    <ul>
                      <li>Background check</li>
                      <li>Capability</li>
                      <li>Experience</li>
                      <li>Compassion & Care Quotient</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q5. Can we trust in leaving aging parents with these
                      support staff?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      We are fully aware of the responsibility we are taking
                      upon us. Thus we ensure in the screening processes that
                      the candidate meets our parameters for you to trust them
                      as an extended family, and leave your aging parents with
                      them.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q6. How do you ensure security of the senior citizen
                      during the time of visit?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      We are fully aware of the responsibility we are taking
                      upon us and adhere to a strict security protocol. All our
                      care managers are issued photo identification (ID) cards
                      with a number, senOcare badges, and uniforms giving them a
                      distinct identity. The name, number, and other details are
                      conveyed to the elderly before the visit.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q7. Q. Is domestic work part of elderly care services in
                      Delhi?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Yes. Household chores, home maintenance, groceries et al
                      are part of elder care services in Delhi.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col xs={12}>
              <Accordion
                defaultActiveKey="0 "
                className="accordian__service__section"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q8. What are the benefits of senOcare elder care services
                      in Delhi?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      We offer a holistic solution in elder care services in
                      Delhi which is more than just healthcare, offering peace
                      of mind. Besides, services can be availed 24×7 or for
                      limited hours basis one’s needs making it more affordable.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          {/* <Contact /> */}
          <ReachOutUs />
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default SenocareDelhi;
