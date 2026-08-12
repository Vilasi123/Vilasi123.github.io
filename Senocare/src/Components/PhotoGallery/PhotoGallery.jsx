import { LazyLoadImage } from "react-lazy-load-image-component";
import "../FeatureProducts/FeatureProducts.css";
import ProductsBanner from "../../assets/Image/FeatureProducts/banner.png";
import { Container, Row, Col } from "react-bootstrap";
import product1 from "../../assets/Image/PhotoGalleryImg/1-471x470.png";
import product2 from "../../assets/Image/PhotoGalleryImg/20201223_153103-300x300.jpg";
import product3 from "../../assets/Image/PhotoGalleryImg/20201223_154553-300x300.jpg";

import product4 from "../../assets/Image/PhotoGalleryImg/20201223_155122-471x470.jpg";
import product5 from "../../assets/Image/PhotoGalleryImg/20201223_161051-471x470.jpg";
import product6 from "../../assets/Image/PhotoGalleryImg/20201223_161217-471x470.jpg";

import product7 from "../../assets/Image/PhotoGalleryImg/20201223_162540-471x470.jpg";
import product8 from "../../assets/Image/PhotoGalleryImg/20201223_173153-471x470.jpg";
import product9 from "../../assets/Image/PhotoGalleryImg/20201223_174302-471x470.jpg";

import product10 from "../../assets/Image/PhotoGalleryImg/IMG_2537-300x300.jpg";
import product11 from "../../assets/Image/PhotoGalleryImg/IMG_8871-300x300.jpg";
import product12 from "../../assets/Image/PhotoGalleryImg/IMG_9070-300x300.jpg";
import product13 from "../../assets/Image/PhotoGalleryImg/IMG_9124-471x470.jpg";
import product14 from "../../assets/Image/PhotoGalleryImg/IMG_9136-300x300.jpg";
import product15 from "../../assets/Image/PhotoGalleryImg/IMG_9158-471x470.jpg";

import product16 from "../../assets/Image/PhotoGalleryImg/IMG_20201223_153904-1-471x470 (1).jpg";
import product17 from "../../assets/Image/PhotoGalleryImg/IMG_20201223_153904-1-471x470.jpg";
import product18 from "../../assets/Image/PhotoGalleryImg/IMG_20210122_150508-471x470.jpg";
import product19 from "../../assets/Image/PhotoGalleryImg/IMG_20210122_152058-300x300.jpg";
import product20 from "../../assets/Image/PhotoGalleryImg/IMG_20210122_162817-471x470.jpg";
import product21 from "../../assets/Image/PhotoGalleryImg/PXL_20201223_105133661.PORTRAIT-471x470.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const PhotoGallery = () => {
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
          <h2 className="img_heading">Photo Gallery</h2>
        </div>
        <div className="feature__products__content">
          <Container>
            <Row>
              <Col>
                <p className="feature__para">
                  senOcare’s approach to elder care management services is
                  different from that of others. We address not just healthcare
                  needs, but also all the day to day problems that cause stress
                  and anxiety to seniors. We have a wide portfolio of services
                  including Health & Fitness, Home Security & Maintenance,
                  Travel & Tours, Forms & Filing, Technology & Troubleshooting
                  and Memories & Milestones. You can ensure that your loved ones
                  are in good hands by availing of our in-home care help for
                  seniors. We offer 24-hour in-home care support for seniors
                  that includes nursing and doctor consultation services.
                </p>
                <p className="feature__para">
                  We provide trusted reliable services that you can count on,
                  and our highly trained and experienced attendants for the
                  elderly work with dedication and compassion. We’re currently
                  offering our entire spectrum of services in Delhi, Gurgaon,
                  and Noida, and limited services in other cities like Mumbai,
                  Pune, and Bengaluru.
                </p>
              </Col>
            </Row>
          </Container>
          <Container className="feature__products__img">
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
              <Col xs={6} md={3} className="product__image">
                <LazyLoadImage
                  className="img-fluid products__img"
                  src={product14}
                />
              </Col>
              <Col xs={6} md={3} className="product__image">
                <LazyLoadImage
                  className="img-fluid products__img"
                  src={product15}
                />
              </Col>
              <Col xs={6} md={3} className="product__image">
                <LazyLoadImage
                  className="img-fluid products__img"
                  src={product16}
                />
              </Col>
              <Col xs={6} md={3} className="product__image">
                <LazyLoadImage
                  className="img-fluid products__img"
                  src={product17}
                />
              </Col>
              <Col xs={6} md={3} className="product__image">
                <LazyLoadImage
                  className="img-fluid products__img"
                  src={product18}
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
                  src={product20}
                />
              </Col>
              <Col xs={6} md={3} className="product__image">
                <LazyLoadImage
                  className="img-fluid products__img"
                  src={product21}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PhotoGallery;
