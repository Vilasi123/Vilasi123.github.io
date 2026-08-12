import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Img1 from "../../assets/Image/TouchOfLove/home-screen-img.jpg";
import Img2 from "../../assets/Image/TouchOfLove/senocare-package-bg.jpg";
import EmailIcon from "../../assets/Image/TouchOfLove/icon-email.png";
import WhatsAppIcon from "../../assets/Image/TouchOfLove/icon-whatsapp.png";
import PhoneIcon from "../../assets/Image/TouchOfLove/icon-phone.png";
import Button from "react-bootstrap/Button";
import "./TouchOfLove.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import TeamImagae from "../../assets/Image/SenocareTeam.png";
import ReactTesti from "../HomePage/ClientTestimonial/ReactTesti";

function MyVerticallyCenteredModal(props) {
  const saveLocalStorage = (e) => {
    if (e.target.id === "three") {
      localStorage.setItem("Subscription", "3 Months Subscription");
    }
    if (e.target.id === "sixth") {
      localStorage.setItem("Subscription", "6 Months Subscription");
    }
    if (e.target.id === "yearly") {
      localStorage.setItem("Subscription", "Yearly Subscription");
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="subs__heading"> Subscribe-Form</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center">Yes, I would like to opt for:</p>
        <div className="d-flex flex-direction-row justify-content-center gap-5 ">
          <Button
            className="rounded-5 subs__button"
            id="three"
            href="/package/subscription/"
            onClick={() => saveLocalStorage(event)}>
            3 Months
          </Button>
          <Button
            className="rounded-5 subs__button"
            id="sixth"
            href="/package/subscription/"
            onClick={() => saveLocalStorage(event)}>
            6 Months
          </Button>
          <Button
            className="rounded-5 subs__button"
            href="/package/subscription/"
            id="yearly"
            onClick={() => saveLocalStorage(event)}>
            Yearly
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="subs__button" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const TouchOfLove = () => {
  const [modalShow, setModalShow] = useState(false);

  const saveLocalStorage = (e) => {
    if (e.target.id === "three") {
      localStorage.setItem("Subscription", "3 Months Subscription");
    }
    if (e.target.id === "sixth") {
      localStorage.setItem("Subscription", "6 Months Subscription");
    }
    if (e.target.id === "yearly") {
      localStorage.setItem("Subscription", "Yearly Subscription");
    }
  };
  return (
    <div className="touch__of__love__content">
      <Container>
        <Row>
          <Col xs={12} md={6} className="img__touch">
            <LazyLoadImage src={Img1} className="img-fluid rounded " />
          </Col>
          <Col xs={12} md={6} className="text__content">
            <h3 className="heading__touch">
              Introducing Senocare. Elder Care Package With A<br></br>
              #TouchOfLove.
            </h3>
            <div className="border"></div>
            <p className="touch__para mt-4">
              Personalized care for your mum and dad now available in Delhi NCR.
            </p>
            <p className="price "> US$72 per month (Rs.5999/-)</p>
            <Button
              variant="outline-primary mt-2 sub__button"
              size="md"
              onClick={() => setModalShow(true)}
              onHide={() => setModalShow(false)}>
              Subscribe
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <div className="d-flex gap-3 mt-4">
              <LazyLoadImage
                className="img-fluid"
                width="35"
                src={WhatsAppIcon}
              />
              <LazyLoadImage className="img-fluid" width="35" src={PhoneIcon} />
              <LazyLoadImage className="img-fluid" width="35" src={EmailIcon} />
            </div>
          </Col>
        </Row>
        <Row className="mt-5 pt-3">
          <Col>
            <h3 className="heading__touch">Senocare #TouchOfLove</h3>
            <p className="touch__para">
              Changing times have made one and all deeply concerned about the
              wellbeing of ageing parents.
            </p>
            <p className="touch__para">
              <b>
                Subscribe for our #TouchOfLove service for just US$72 per month
                (Rs.5999/- applicable taxes extra) Spouse extra at US$20 per
                month (Rs.1500/-)
              </b>
              You can choose for 3 months, 6 months or an annual subscription.
            </p>
          </Col>
        </Row>
        <Row>
          <p className="service__top__content">Services Included</p>
          <Col xs={12} md={6} lg={3}>
            <div className="service__included">
              <p>24/7 Emergency Assistance</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="service__included">
              <p>Monthly Care Manager Visit </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="service__included">
              <p>Fortnightly Vitals Check-Up</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="service__included">
              <p>Monthly Doctor Consultation</p>
            </div>
          </Col>
        </Row>
        <Row className="senocare__row__content">
          <Col>
            <p className="text-center">Yes, I would like to opt for:</p>
            <div className="d-flex flex-direction-row justify-content-center gap-5 flex-wrap">
              <Button
                className="rounded-5 subs__button"
                id="three"
                href="/package/subscription/"
                onClick={() => saveLocalStorage(event)}>
                3 Months Subscriptions
              </Button>
              <Button
                className="rounded-5 subs__button"
                id="sixth"
                href="/package/subscription/"
                onClick={() => saveLocalStorage(event)}>
                6 Months Subscriptions
              </Button>
              <Button
                className="rounded-5 subs__button"
                href="/package/subscription/"
                id="yearly"
                onClick={() => saveLocalStorage(event)}>
                Yearly Subscriptions
              </Button>
              <Button width="200px" className="rounded-5 subs__button">
                Call Now
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="senocare__row__content senocare__custome">
          <Col xs={12} md={6} className="inner__content">
            <h3 className="heading__touch">
              Senocare’s Customized Care Package:
            </h3>
            <div className="customize__section">
              <p className="touch__para">
                We realize no two elders have the same pain areas and we would
                love to help you address your elder’s day to day challenges that
                go beyond our subscription service. Senocare offers more than 65
                services that you can choose from.
              </p>
              <p className="touch__para">
                What’s more if there is a unique requirement for your parents
                that needs to be taken care of, we will try our best to align to
                your requirements.
              </p>
              <p className="touch__para">
                Please fill out the form and click the services required under
                our 6 verticals (below) or add any unique requirements in the
                ‘Other Support’ column.
              </p>
              <ul className="touch__para">
                <li>Health & Fitness</li>
                <li>Home Security & Maintenance</li>
                <li>Travel & Tours</li>
                <li>Forms & Filing</li>
                <li>Technology & Troubleshooting</li>
                <li>Memories & Milestone</li>
              </ul>
              <p className="touch__para">
                <b>Stop fearing, start caring for your loved ones.</b>
              </p>
              <Button
                variant="outline-primary mt-2 sub__button"
                size="md"
                href="/package/customize-plan">
                Subscribe
              </Button>
            </div>
          </Col>
          <Col xs={12} md={6} className="inner__content">
            <LazyLoadImage className="img-fluid rounded" src={Img2} />
          </Col>
        </Row>
        <Row className="senocare__row__content ">
          <h3 className="heading__touch">
            Some of the popular inclusions in a customized package are:
          </h3>
          <div className="table__section">
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Services</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dedicated Personal Care Manager (CM) On Call</td>
                  <td>
                    Based on elder needs and temperaments an efficient and
                    compassionate CM is assigned who meets the elder at the time
                    of on-boarding. Barring any unforeseen situation, the same
                    CM keeps in touch with the elder and aligns any and every
                    service needed by them through a dedicated Assistant Care
                    Manager (ACM).
                  </td>
                </tr>
                <tr>
                  <td>Birthday / Anniversary / Festival made special</td>
                  <td>
                    Birthdays and Diwali are often days of loneliness. Our CM’s
                    go that extra mile to make them feel happy and special, by
                    visiting and creating fun filled moments with balloons and
                    cake.
                  </td>
                </tr>
                <tr>
                  <td>Monthly Check-Ups Of Vitals</td>
                  <td>
                    Our trained staff does periodic check-ups of vitals and
                    maintain medical records online.
                  </td>
                </tr>
                <tr>
                  <td>Doctor Consultation</td>
                  <td>
                    Monthly online consultation with a good GP on our panel to
                    review and advice.
                  </td>
                </tr>
                <tr>
                  <td>Assisted Visit To Hospital/Bank</td>
                  <td>
                    Visiting hospitals and banks, waiting in queues, filling
                    forms can be very stressful, Senocare ACM ensures your loved
                    ones are spared of these hassles by accompanying them on
                    their visits and taking care of their smallest need.
                  </td>
                </tr>
                <tr>
                  <td>Lab Test Assistance</td>
                  <td>
                    From sample collection to timely collection of reports and
                    sharing the same with the concerned doctor and family, CM’s
                    make it a seamless task for elders. They make it a point to
                    upload the reports on the system, accessible 24x7.
                  </td>
                </tr>
                <tr>
                  <td>Medicine Management</td>
                  <td>
                    CM’s take care of periodic top ups of medicines (as per
                    prescription) and manages the pillbox making it convenient
                    for elders to take their medicines.
                  </td>
                </tr>
                <tr>
                  <td>
                    Fortnightly Updates Sent To Next Of Kin/Guardian (NOK)
                  </td>
                  <td>
                    We send periodic updates about health, mood and other
                    highlights.
                  </td>
                </tr>
                <tr>
                  <td>Emergency Support</td>
                  <td>
                    In case of an emergency a 24x7 accessible number is provided
                    that will connect the caller to their CM who will take the
                    responsibility to rush support as the situation demands.
                    This includes booking the nearest ambulance, rushing the
                    field manager to the location, informing NOK, making medical
                    files available to doctors without delays the agreed
                    protocol is set in motion.
                  </td>
                </tr>
                <tr>
                  <td>Technology Support</td>
                  <td>
                    Technology can be daunting. Senocare CM’s handhold elders
                    and teach them to use common apps like Zoom or Facebook. We
                    also provide troubleshooting services on the phone or in
                    person. By assisting elders with virtual calls, social media
                    and common apps, Our CM’s help bridge the digital divide
                    between the elders and their family.
                  </td>
                </tr>
                <tr>
                  <td>Medical Passport</td>
                  <td>
                    We help elders in tracking and accessing health records
                    without having to maintain and carry several files and
                    documents. Through a simple QR code we give access to
                    medical and test history, such as on-going medication (salt
                    info), vaccination certificates, blood group, allergy,
                    contact details of NOK/doctor/CM, insurance copies and a lot
                    more.
                  </td>
                </tr>
                <tr>
                  <td> Wallet Service</td>
                  <td>
                    For the convenience of our elders and their family, we have
                    a wallet service for any financial transactions that maybe
                    required for the services opted in by the family for their
                    elders.
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Row>
        <Row className="senocare__row__content">
          <Col>
            <h3 className="heading__touch text-center">About Senocare</h3>
            <p className="touch__para text-center">
              <b>Personalised Elder Care Services For Seniors In India</b>
            </p>
            <p className="touch__para">
              As parents get older, it becomes harder for them to get around
              independently. Even the simplest of tasks – giving a blood sample
              for a lab test, getting a leaking pipe fixed, putting up a
              painting, getting a passport renewed, replacing a lost Aadhar
              card, visiting friends and family – all of it turns into a
              complex, challenging chore which takes up time and energy of both
              parents and children as they try to figure out how to get things
              done with minimal trouble. This problem gets further exacerbated
              when children live abroad! In India, old age homes are not well
              received. Elders have emotional connect to their homes and don’t
              want to be taken away.
            </p>
            <p className="touch__para">
              Senocare makes an earnest effort to help elders feel empowered and
              secure even when their kids are miles away. It’s our endeavour not
              only to bring comfort to the lives of ageing parents but also
              their loved ones who have sleepless nights not being able to be
              with them at all times.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="heading__touch text-center py-3">
              Senocare Services
            </h3>
            <p className="touch__para">
              Senocare endeavors to help every elder with their varied problems,
              we provide 65 Plus services. These include Health & Fitness, Home
              Security & Maintenance, Travel & Tours, Forms & Filing, Technology
              & Troubleshooting, Memories & Milestones. It’s not just a wide
              spectrum of services we offer but the accountability and
              compassion with which we serve that is most appreciated by the
              elders.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <LazyLoadImage
              className="img-fluid our_story__image mt-3 rounded"
              src={TeamImagae}
            />
          </Col>
        </Row>
        <Row className="testimonial__section">
          <h3 className="heading__touch text-center testimonial__header">
            Here’s what people are saying about Senocare
          </h3>
          <center>
            <ReactTesti />
          </center>
        </Row>
      </Container>
    </div>
  );
};

export default TouchOfLove;
