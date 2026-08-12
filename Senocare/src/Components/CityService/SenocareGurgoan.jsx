import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BannerImg from "../../assets/Image/CityServices/gurgaon-map.png";
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

const SenocareGurgoan = () => {
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
                    <a href="/holistic-care-noida/" rel="noopener noreferrer">
                      Holistic Care Noida
                    </a>
                  </li>
                  <li>
                    <a href="/holistic-care-delhi/" rel="noopener noreferrer">
                      Holistic Care Delhi{" "}
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
                Elder care services in Gurgaon{" "}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={6}>
              <LazyLoadImage src={ContentImg1} className="img-fluid  " />
            </Col>
            <Col md={12} lg={6}>
              <p className="services__para__senocare">
                As our society and lifestyle continuously evolve, our healthcare
                requirements are undergoing an evolution. From patient care to
                support and everything in between, the at-home elderly care in
                Gurgaon is constantly evolving and has come a long way.
                Urbanization, aging population, workforce demography,
                technological advancements, and proliferation of nuclear
                families have all made affordable elderly care in Gurgaon a
                reality for many.
              </p>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col md={12} lg={6}>
              <p className="services__para__senocare">
                In the last few years, elder care services in Gurgaon have
                changed the healthcare delivery ecosystem by bringing a wide
                gamut of services to the elderly at their doorstep. Trained and
                professional caregivers come to your home to provide medical or
                non-medical services or even a combination of both. Such elder
                care services in Gurgaon have brought peace of mind to many
                families staying miles apart because of professional
                commitments.{" "}
              </p>
            </Col>

            <Col md={12} lg={6}>
              <LazyLoadImage src={ContentImg2} className="img-fluid  " />
            </Col>
            <Col xs={12} className="mt-5">
              <p className="services__para__senocare  ">
                At-home elderly care in Gurgaon brings home constant care and
                monitoring while respecting an elderly’s independence and
                dignity. It not only leads to improved health and wellness but
                also decreased hospitalisation. In addition, it is the safest
                form of care in a Covid-19-stricken world. And most importantly,
                receiving care in a familiar environment is most preferred by
                the elderly.
              </p>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <h2 className="senocare___heading__sencond">
              ELDER CARE SERVICES IN GURGAON<br></br>
              OFFERED BY SENOCARE
            </h2>
            <Col md={12} lg={6}>
              <LazyLoadImage src={ContentImg} className="img-fluid  " />
            </Col>
            <Col md={12} lg={6}>
              <p className="services__para__senocare">
                Keeping with the fast-paced life of the ‘Millennium city of
                India,’ senOcare brings you the best-in-class personalized
                services for elder care in Gurgaon for your elderly loved one.
                Personalized care provides a higher quality of care and improved
                quality of life. Our professional Care Managers get to know
                their patients on a relational level to learn how to serve them
                best.
              </p>
              <p className="services__para__senocare">
                While several elder care services in Gurgaon provide excellent
                health-related services, senOcare addresses every need of the
                elderly, over and above health. For us, it is more about
                providing a holistic solution—by combining compassion and care
                with accountability. Our comprehensive services for elderly care
                in Gurgaon address the key areas that concern many Indians
                living abroad whose elderly parents live back home in India. It
                broadly includes:
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
                  home doctor visits{" "}
                </a>{" "}
                , and 24×7 emergency support
              </p>
            </Col>
            <Col xs={12} md={6} className="city__service__icon">
              <LazyLoadImage src={NurseIcon} className="img-fluid" width="90" />
              <p className="services__para__senocare  mt-3">
                <a href="/physiotherapy-home-service/" className="hyper__link">
                  {" "}
                  Physiotherapy at home and rehabilitative services{" "}
                </a>
                <a className="hyper__link" href="/dementia/">
                  for dementia care, depression, and other psychological
                  disorders
                </a>
              </p>
            </Col>
            <Col xs={12} md={6} className="city__service__icon">
              <LazyLoadImage
                src={fallInLove}
                className="img-fluid"
                width="90"
              />
              <p className="services__para__senocare  mt-3">
                <a href="/nursing-care/" className="hyper__link">
                  Home attendant for elderly in Gurgaon
                </a>{" "}
                for personal care such as dressing, bathing, grooming, and
                toilet functions
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
                Whether elder care services in Gurgaon are required
                round-the-clock or for limited hours, senOcare is there to help
                you when you need us the most. To do this effectively and
                efficiently, we have partnered with the best in the industry, be
                it hospitals, pharmacies, pat-labs, and security. Not only is
                senOcare dedicated to providing the golden standard of care to
                your loved ones during their golden years, but we are also
                committed to providing exceptional training and mentoring to our
                caregivers who eventually become your extended family.
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
                      Q1. Can we trust in leaving aging parents with these
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
                      Q2. How do you ensure security of the senior citizen
                      during the time of visit?
                    </h5>{" "}
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
                      Q3. How much does a senOcare care package cost?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Different companies have different approaches to helping
                      elders and price their services differently.
                    </p>
                    <p className="accordian__para  ">
                      Senocare aims to address an elderly’s pain areas and not
                      sell commodities or services. So, while we have popular
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
                      Q4. What are the benefits of senOcare elder care services
                      in Gurgaon?
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
                      Q5. Does senOcare have caregivers who can speak other
                      regional languages?
                    </h5>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Yes, we try to ensure that, keeping in mind the
                      diversified Indian family backgrounds. Speaking a common
                      language helps build trust and bonding, both are important
                      in a caregiving journey.
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
                      Q6. Is there a live person available to speak to at any
                      time of the day?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Yes. The Care Manger assigned to you is available for you
                      24×7.
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

export default SenocareGurgoan;
