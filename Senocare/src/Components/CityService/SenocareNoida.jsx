import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BannerImg from "../../assets/Image/CityServices/noida-map.png";
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

const SenocareNoida = () => {
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
                Elder care services in Noida
              </h1>
              <p className="services__para__senocare">
                Lifestyle choices, illness trends, the aging population, and
                technological advancements all have a radical impact on where
                elderly care in Noida is headed. The emergence of at-home
                elderly care in Noida has proven to be a promising option to
                improve outcomes and the quality of life for the region’s most
                frail and vulnerable elderly.
              </p>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col md={12} lg={6}>
              <LazyLoadImage src={ContentImg1} className="img-fluid  " />
            </Col>
            <Col md={12} lg={6}>
              <p className="services__para__senocare">
                There was a time when the elderly relied on family or hospitals
                as the primary destination of care. Soon home{" "}
                <a href="/nursing-care-delhi/" className="hyper__link">
                  home health care services{" "}
                </a>
                brought medical services to the homes and changed the healthcare
                delivery ecosystem. The subsequent shift to nuclear families and
                corresponding changes in the social structure created the need
                for at-home elderly care in Noida, a sustainable solution to
                happy and healthy aging at home.
              </p>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col md={12} lg={6}>
              <p className="services__para__senocare">
                Many factors have driven the need for at-home elderly care in
                Noida. The number of retired people settled in Noida and Greater
                Noida is high, and most of them are staying alone and need
                constant monitoring and care. Home-based senior care in Noida
                reassures family members that there is a trained and qualified
                caregiver taking care of their diverse needs in the physical and
                psychological comfort of their beloved homes. And it continues
                to have the Covid-19 safeguards in place for the most
                vulnerable.{" "}
              </p>
            </Col>
            <Col md={12} lg={6}>
              <LazyLoadImage src={ContentImg2} className="img-fluid  " />
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <h2 className="senocare___heading__sencond">
              ELDER CARE SERVICES IN NOIDA<br></br>
              OFFERED BY SENOCARE
            </h2>
            <Col md={12} lg={6}>
              <LazyLoadImage src={ContentImg} className="img-fluid  " />
            </Col>
            <Col md={12} lg={6}>
              <p className="services__para__senocare">
                While there are various solutions for elders home nursing care
                in Noida that cater to the health needs of the elderly, senOcare
                holds the distinction of providing holistic care‒ comprehensive
                care based on every elderly’s unique needs to improve health and
                functional ability. The philosophy of care is based on
                satisfying the elderly’s health, social and day-to-day needs at
                home, and hence more valued than a health-centric care approach.
                For families staying miles apart, the holistic care model
                becomes reassuring as senOcare brings in a plethora of services,
                making it one of the most sought-after solution for elderly care
                in Noida. These include:
              </p>
            </Col>
          </Row>
          <Row className="senocare__row__content">
            <Col xs={12} md={6} className="city__service__icon">
              <LazyLoadImage src={CallIcon} className="img-fluid" width="80" />
              <p className="services__para__senocare mt-3">
                Short-term or long-term home health care services for an
                illness, chronic disease, or disability—including nursing care,
                ICU care, at home doctor visits, and 24×7 emergency support
              </p>
            </Col>
            <Col xs={12} md={6} className="city__service__icon">
              <LazyLoadImage src={NurseIcon} className="img-fluid" width="90" />
              <p className="services__para__senocare  mt-3">
                Physiotherapy at home and rehabilitative services for dementia
                care, depression, and other psychological disorders
              </p>
            </Col>
            <Col xs={12} md={6} className="city__service__icon">
              <LazyLoadImage
                src={fallInLove}
                className="img-fluid"
                width="90"
              />
              <p className="services__para__senocare  mt-3">
                Home attendant for elderly in Noida for personal care such as
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
                Whether services are required round-the-clock or for limited
                hours, senOcare is there to help you when you need us the most.
                A team of compassionate Care Managers are always available to
                address every needs of the elderly with complete accountability.
                For providing the best-in-class personalized elderly care in
                Noida, we have partnered who are the best in their space, be it
                hospitals, pharmacies, path-labs, and security.
              </p>
            </Col>
            <Col xs={12}>
              <p className="services__para__senocare">
                At senOcare, we understand that every elderly has a unique aging
                process. Some may have chronic conditions, other may need
                therapies or assistance or the companionship to deal with
                loneliness. A personalized solution for elderly care in Noida
                gives your loved one the undivided personal attention without
                compromising their independence and help them thrive.
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
                      available in Noida?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Our wide portfolio of personalized elderly care in Noida
                      include health & fitness, security & home maintenance,
                      escorted travels, forms & filing, technology assistance,
                      and memories & milestones. In short, it’s a holistic
                      solution for elder care.
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
                      Q3. What kind of home care staff does senOcare provide for
                      aging parents?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      senOcare provides compassionate medical and non-medical
                      attendants to address every need (excluding those of house
                      maids) of the elderly and help them live a secured and
                      independent life in their homes.
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
                      in Noida?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      We offer a holistic solution in elderly care in Noida
                      which is more than just healthcare with a great sense of
                      responsibility, offering peace of mind to the entire
                      family. Besides, services can be availed 24×7 or for
                      limited hours based on one’s needs making it more
                      affordable.
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
                      Q5. Is there a process for selecting these support staff?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Yes, there is a proper screening process, to assess their
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
                      Q6. Can we trust in leaving aging parents with these
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
                      Q7. How do you ensure security of the senior citizen
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
                      Q8. Does senOcare have caregivers who can speak other
                      regional languages?
                    </h5>
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
                      Q9. Is there a live person available to speak to at any
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

export default SenocareNoida;
