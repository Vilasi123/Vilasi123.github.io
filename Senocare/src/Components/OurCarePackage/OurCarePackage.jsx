import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Img2 from "../../assets/Image/TouchOfLove/senocare-package-bg.jpg";
import BannerImage from "../../assets/Image/TouchOfLove/BannerImage.png";
import contentImg from "../../assets/Image/TouchOfLove/BannerImage.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SEO from "../SEO";

const OurCarePackages = () => {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <div className="header__image">
          <LazyLoadImage
            src={BannerImage}
            className="img-fluid background__img"
          />
          <h2 className="img_heading">Our Care Package</h2>
        </div>
        <Container className="touch__of__love__content">
          <Row className="mt-5 pt-3 senocare__custome">
            <Col xs={12} md={6} className="inner__content">
              <h3 className="heading__touch">
                Senocare’s Customized Care Package:
              </h3>
              <div className="customize__section">
                <p className="touch__para">
                  We realize no two elders have the same pain areas and we would
                  love to help you address your elder’s day to day challenges
                  that go beyond our subscription service. Senocare offers more
                  than 65 services that you can choose from.
                </p>
                <p className="touch__para">
                  What’s more if there is a unique requirement for your parents
                  that needs to be taken care of, we will try our best to align
                  to your requirements.
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
                  href="/package/customize-plan"
                  size="md">
                  Subscribe
                </Button>
              </div>
            </Col>
            <Col xs={12} md={6} className="inner__content">
              <LazyLoadImage className="img-fluid rounded" src={Img2} />
            </Col>
          </Row>

          <Row className="table__content">
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
                      compassionate CM is assigned who meets the elder at the
                      time of on-boarding. Barring any unforeseen situation, the
                      same CM keeps in touch with the elder and aligns any and
                      every service needed by them through a dedicated Assistant
                      Care Manager (ACM).
                    </td>
                  </tr>
                  <tr>
                    <td>Birthday / Anniversary / Festival made special</td>
                    <td>
                      Birthdays and Diwali are often days of loneliness. Our
                      CM’s go that extra mile to make them feel happy and
                      special, by visiting and creating fun filled moments with
                      balloons and cake.
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
                      forms can be very stressful, Senocare ACM ensures your
                      loved ones are spared of these hassles by accompanying
                      them on their visits and taking care of their smallest
                      need.
                    </td>
                  </tr>
                  <tr>
                    <td>Lab Test Assistance</td>
                    <td>
                      From sample collection to timely collection of reports and
                      sharing the same with the concerned doctor and family,
                      CM’s make it a seamless task for elders. They make it a
                      point to upload the reports on the system, accessible
                      24x7.
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
                      In case of an emergency a 24x7 accessible number is
                      provided that will connect the caller to their CM who will
                      take the responsibility to rush support as the situation
                      demands. This includes booking the nearest ambulance,
                      rushing the field manager to the location, informing NOK,
                      making medical files available to doctors without delays
                      the agreed protocol is set in motion.
                    </td>
                  </tr>
                  <tr>
                    <td>Technology Support</td>
                    <td>
                      Technology can be daunting. Senocare CM’s handhold elders
                      and teach them to use common apps like Zoom or Facebook.
                      We also provide troubleshooting services on the phone or
                      in person. By assisting elders with virtual calls, social
                      media and common apps, Our CM’s help bridge the digital
                      divide between the elders and their family.
                    </td>
                  </tr>
                  <tr>
                    <td>Medical Passport</td>
                    <td>
                      We help elders in tracking and accessing health records
                      without having to maintain and carry several files and
                      documents. Through a simple QR code we give access to
                      medical and test history, such as on-going medication
                      (salt info), vaccination certificates, blood group,
                      allergy, contact details of NOK/doctor/CM, insurance
                      copies and a lot more.
                    </td>
                  </tr>
                  <tr>
                    <td> Wallet Service</td>
                    <td>
                      For the convenience of our elders and their family, we
                      have a wallet service for any financial transactions that
                      maybe required for the services opted in by the family for
                      their elders.
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default OurCarePackages;
