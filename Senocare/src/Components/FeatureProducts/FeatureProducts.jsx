import { LazyLoadImage } from "react-lazy-load-image-component";
import "./FeatureProducts.css";
import ProductsBanner from "../../assets/Image/FeatureProducts/banner.png";
import { Container, Row, Col } from "react-bootstrap";
import product1 from "../../assets/Image/FeatureProducts/Glucometer.png";
import product2 from "../../assets/Image/FeatureProducts/Eot.png";
import product3 from "../../assets/Image/FeatureProducts/Equip.png";

import product4 from "../../assets/Image/FeatureProducts/2-471x470.png";
import product5 from "../../assets/Image/FeatureProducts/3-471x470.png";
import product6 from "../../assets/Image/FeatureProducts/3-600x600.png";

import product7 from "../../assets/Image/FeatureProducts/4-471x470.png";
import product8 from "../../assets/Image/FeatureProducts/4-600x600.png";
import product9 from "../../assets/Image/FeatureProducts/5-471x470.png";

import product10 from "../../assets/Image/FeatureProducts/5-600x600.png";
import product11 from "../../assets/Image/FeatureProducts/7-600x600.png";
import product12 from "../../assets/Image/FeatureProducts/8-471x470.png";
import product13 from "../../assets/Image/FeatureProducts/1-471x470.png";

import Bipac from "../../assets/Image/FeatureProducts/bipacMachine.jpg";
import Multipara from "../../assets/Image/FeatureProducts/Multipara-Monitor.jpg";
import TWheel from "../../assets/Image/FeatureProducts/Threefunctionalbeds.jpg";

import AutomatedChair from "../../assets/Image/FeatureProducts/automated_wheelChair.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const FeatureProducts = () => {
  return (
    <>
      <SEO />

      <div>
        <Header />
        <div className="header__image">
          <LazyLoadImage
            src={ProductsBanner}
            className="img-fluid background__img"
          />
          <h2 className="img_heading">Featured Products</h2>
        </div>
        <div className="feature__products__content">
          <Container>
            <Row>
              <Col>
                <h3 className="feature__heading text-center">
                  Rent Medical Equipment
                </h3>
                <p className="feature__para">
                  Senocare offers a range of medical equipment on rent. So, no
                  matter what you’re looking to rent, we most likely have them –
                  wheelchair, strollers, glucometer, hearing aid, and many more
                  medical equipments. Go ahead and choose them, we will deliver
                  them right at your doorstep. You can avail the service in
                  Delhi, Noida, Gurgaon.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="feature__heading innr__heading">
                  Why rent medical equipment?
                </h3>
                <p className="feature__para">
                  Buying a medical equipment can be expensive, especially when
                  we’re looking to use it for a short term. For example, if your
                  loved one has suffered a fracture and needs a wheelchair for
                  1-2 months until the fracture heals. Likewise, you can rent a
                  glucometer to regularly check sugar levels for a few months.
                  Renting medical equiments has other benefits too, including
                </p>
                <p className="feature__para__second">
                  –<b>– Space saving –</b> Once the need of the equipment is
                  over, it occupies unnecessary space. You can rent the
                  equipment again in case the need arises.
                </p>
                <p className="feature__para__second">
                  <b>– Delivery – </b>Senocare manages delivery and pickup of
                  the equipment. So, you don’t have to.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="feature__heading innr__heading">
                  What medical equipments can you rent?
                </h3>
                <p className="feature__para">
                  You can rent the following medical equipments from Senocare-
                </p>
                <ul className="equipment__lists">
                  {" "}
                  <a href="/automated-wheelchairs/">
                    <li className="hyper__link">Automated wheelchair</li>
                  </a>
                  <a href="/featured-products/3-function-hospital-beds/">
                    <li className="hyper__link"> 3 functional hospital bed</li>
                  </a>
                  <a href="/featured-products/5-functional-hospital-bed/">
                    <li className="hyper__link"> 5 functional hospital bed</li>{" "}
                  </a>
                  <a href="/featured-products/multipara-monitor">
                    <li className="hyper__link"> Multipara Monitor</li>
                  </a>
                  <li>Glucometer </li>
                  <li>Oximeter</li>
                  <li>Hearing aid</li>
                  <a href="/featured-products/stollers/">
                    <li className="hyper__link">Strollers</li>
                  </a>
                  <li>Toilet Seat Elevator/ Raiser</li>
                  <a href="/featured-products/grab-bars/">
                    <li className="hyper__link">Grab bars for elderly</li>
                  </a>
                  <a href="/featured-products/walkers-for-elderly/">
                    <li className="hyper__link">Walkers for elderly</li>
                  </a>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="feature__heading innr__heading">
                  Rent medical equipment in Gurgaon
                </h3>
                <p className="feature__para">
                  You can avail the above medical equipments on rent in Gurgaon
                  for use at home. What’s more, Senocare offers packaged home
                  nursing services for elderly and other patients who need
                  at-home care. So, you can combine medical equipments with care
                  packages and give your older adults a superior care.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="feature__heading innr__heading">
                  Rent medical equipment in Delhi
                </h3>
                <p className="feature__para">
                  Find medical equipment for rent in Delhi, including oxygen
                  concentrators, walking aid, oxygen cylinders, etc. for your
                  loved ones, at Senocare. Genuine, well-maintained, and robust
                  medical equipment are available to rent at affordable prices.
                  We deliver the equipment across Delhi, including Green Park,
                  Greater Kailash, Rohini, Connaught Place, etc. Furthermore,
                  coupled with eldercare services from Senocare, you can give
                  your older adults a superior care they’ve always deserved.
                </p>
                <p className="feature__para">
                  senOcare has partnered with reputed partners to bring you a
                  access to a wide range of high quality utilitarian items from
                  hearing aids to wheelchairs. For item specifications and
                  prices, please contact us on{" "}
                  <a
                    href="mailto: customersupport@senocare.in"
                    className="email__address">
                    customersupport@senocare.in
                  </a>
                </p>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="feature_row__content">
                  <div className="feature_column__content">
                    <div className="feature_card">
                      <img src={TWheel} alt="Image 1" />
                      <div className="feature_card_text">
                        <div>
                          <h2> Motarised 3 Functional bed</h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature_column__content">
                    <div className="feature_card">
                      <img src={Bipac} alt="Image 1" />
                      <div className="feature_card_text">
                        <div>
                          <h2> Bipap Machine: Resmed</h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature_column__content">
                    <div className="feature_card">
                      <img src={Multipara} alt="Image 2" />
                      <div className="feature_card_text">
                        <div>
                          <h2>
                            <a
                              href="https://senocare.in/multipara-monitor/"
                              className="hyper__link">
                              Multipara Monitor
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="feature_column__content">
                    <div className="feature_card">
                      <img src={AutomatedChair} alt="Image 1" />
                      <div className="feature_card_text">
                        <div>
                          <h2>
                            <a
                              href="https://senocare.in/automated-wheelchairs/"
                              className="hyper__link">
                              Wheel Chair
                            </a>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          {/* <Container className="feature__products__img">
          <Row>
            <Col xs={6} md={3} className="product__image">
              <LazyLoadImage
                className="img-fluid products__img"
                src={product1}
              />
            </Col>
            <Col xs={6} md={3} className="product__image">
              <LazyLoadImage
                className="img-fluid products__img"
                src={product2}
              />
            </Col>
            <Col xs={6} md={3} className="product__image">
              <LazyLoadImage
                className="img-fluid products__img"
                src={product3}
              />
            </Col>
            <Col xs={6} md={3} className="product__image">
              <LazyLoadImage
                className="img-fluid products__img"
                src={product4}
              />
            </Col>
            <Col xs={6} md={3} className="product__image">
              <LazyLoadImage
                className="img-fluid products__img"
                src={product5}
              />
            </Col>
            <Col xs={6} md={3} className="product__image">
              <LazyLoadImage
                className="img-fluid products__img"
                src={product6}
              />
            </Col>
            <Col xs={6} md={3} className="product__image">
              <LazyLoadImage
                className="img-fluid products__img"
                src={product7}
              />
            </Col>
            <Col xs={6} md={3} className="product__image">
              <LazyLoadImage
                className="img-fluid products__img"
                src={product8}
              />
            </Col>
            <Col xs={6} md={3} className="product__image">
              <LazyLoadImage
                className="img-fluid products__img"
                src={product9}
              />
            </Col>
            <Col xs={6} md={3} className="product__image">
              <LazyLoadImage
                className="img-fluid products__img"
                src={product10}
              />
            </Col>
            <Col xs={6} md={3} className="product__image">
              <LazyLoadImage
                className="img-fluid products__img"
                src={product11}
              />
            </Col>
            <Col xs={6} md={3} className="product__image">
              <LazyLoadImage
                className="img-fluid products__img"
                src={product12}
              />
            </Col>
            <Col xs={6} md={3} className="product__image">
              <LazyLoadImage
                className="img-fluid products__img"
                src={product13}
              />
            </Col>
          </Row>
        </Container> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FeatureProducts;
