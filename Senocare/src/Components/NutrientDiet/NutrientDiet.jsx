import { Container, Row, Col } from "react-bootstrap";
import NutrientDietImg from "../../assets/Image/ServiceImg/nutrient&Diet.jpg";
import NutrientDietImg2 from "../../assets/Image/ServiceImg/nutrient&Diet1.jpg";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const NutrientDiet = () => {
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
                  Empowering Health Through Nutrition and Diet
                </h1>
              </Col>
            </Row>

            <Row>
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={NutrientDietImg}
                  className="img-fluid senocare__service__img"
                />
              </Col>

              <Col xs={12} md={12} lg={6} className="senocare__text__content">
                <h2 className="senocare___heading__sencond">
                  Understanding Nutrition and Diet
                </h2>

                <p className="services__para__senocare">
                  Nutrition is the science of consuming food based on the body's
                  needs, while diet refers to habitual food intake. A well-balanced
                  diet is essential for physical and mental well-being, as well as
                  the prevention of lifestyle diseases.
                </p>

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
                        target="_blank"
                        rel="noreferrer"
                        className="drsk"
                      >
                        Dr. Shakti Singh
                      </a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Challenges in Achieving a Balanced Diet
                </h2>
                <p className="services__para__senocare">
                  Lack of awareness and preference for junk food hinder balanced
                  nutrition. Unhealthy diet contribute to hypertension, diabetes,
                  and obesity.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  The Role of Senocare India
                </h2>
                <p className="services__para__senocare">
                  Senocare offers a comprehensive health management plan, focused
                  on personalized nutrition coaching and health assessment.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  Key Elements of Nutritional Plans
                </h2>

                <h3 className="senocare__heading__third">
                  Personalized Health Assessment:
                </h3>
                <p className="services__para__senocare">
                  Tailored health evaluation to prevent issues.
                </p>

                <h3 className="senocare__heading__third">
                  Personalized Nutrition Coaching:
                </h3>
                <p className="services__para__senocare">
                  Customized diet plans, expert consultations, 24/7 support.
                </p>

                <h3 className="senocare__heading__third">
                  Constant Monitoring and Support:
                </h3>
                <p className="services__para__senocare">
                  Ongoing guidance for sustained results.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12}>
                <h2 className="senocare___heading__sencond">
                  The Benefits of Plan:
                </h2>
                <p className="services__para__senocare">
                  Simple, reliable approach to health management. Develop a
                  positive and healthy connection with food. Customized plans for
                  medical conditions such as obesity and diabetes.
                </p>
              </Col>

              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={NutrientDietImg2}
                  className="img-fluid senocare__service__img"
                />
              </Col>

              <Col md={12} lg={6}>
                <h3 className="senocare__heading__third">
                  Diverse Nutrition Programs:
                </h3>
                <p className="services__para__senocare">
                  Family, sports, women, weight, clinical, geriatric, paediatric,
                  and adolescent nutrition plans.
                </p>

                <h3 className="senocare__heading__third">
                  Importance of Good Nutrition:
                </h3>
                <p className="services__para__senocare">
                  Good nutrition is essential for a healthy life since it fights
                  diseases and fatigue while also promoting growth and development.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  The Need for Nutrition Consultation:
                </h2>
                <p className="services__para__senocare">
                  Online information is generalized; individual nutrition needs
                  vary. Seek expert guidance for tailored plans.
                </p>
              </Col>

              <Col xs={12}>
                <h3 className="senocare__heading__third">
                  Maximizing a Consultation:
                </h3>
                <p className="services__para__senocare">
                  Be honest about habits. Specify goals and health conditions.
                  Share allergies and dietary needs. Seek professional guidance
                  for changes.
                </p>

                <p className="services__para__senocare">
                  <b>Embrace Senocare's Active health programme:</b> Access
                  reliable online nutritionist services for personalized diet
                  plans and guidance towards a healthier lifestyle.
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

export default NutrientDiet;