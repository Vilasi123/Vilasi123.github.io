import { Container, Row, Col } from "react-bootstrap";
import oneMg from "../../../assets/Image/Media/1mgseno.jpg";
import yourChemist from "../../../assets/Image/Media/98-logo.jpg";
import ani from "../../../assets/Image/Media/ani.jpg";
import businessStandardS from "../../../assets/Image/Media/business-standards.jpg";
import hindustan from "../../../assets/Image/Media/hindustan.jpg";
import labsAdvisor from "../../../assets/Image/Media/logo.jpg";
import medanta from "../../../assets/Image/Media/medanta-1.png";
import mice from "../../../assets/Image/Media/miceandmoreseno.jpg";
import outlook from "../../../assets/Image/Media/outlook.jpg";
import theWeek from "../../../assets/Image/Media/theweek.jpg";
import zee from "../../../assets/Image/Media/zee5.jpg";
import urbanCompany from "../../../assets/Image/Media/urban-company.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Media.css";
import { Carousel } from "react-bootstrap";

const Media = () => {
  return (
    <Container>
      <div className="media__section">
        <Row className="media__heading">
          <Col>
            <h3 className="client__testimonial text-center fs-2 text-md text-lg text-sm fw-bold">
              Feature in Media
            </h3>
          </Col>
        </Row>
        <center>
          <Carousel
            indicators={true}
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
                  <Col xs={3} lg={3}>
                    <LazyLoadImage
                      src={hindustan}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                  <Col xs={3} lg={3}>
                    <LazyLoadImage
                      src={theWeek}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                  <Col xs={3} lg={3}>
                    <LazyLoadImage
                      src={businessStandardS}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                  <Col xs={3} lg={3}>
                    <LazyLoadImage
                      src={outlook}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            {/* Level 2 */}
            <Carousel.Item>
              <div>
                <Row>
                  <Col xs={3} lg={3}>
                    <LazyLoadImage
                      src={ani}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                  <Col xs={3} lg={3}>
                    <LazyLoadImage
                      src={zee}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                  <Col xs={3} lg={3}>
                    <LazyLoadImage
                      src={hindustan}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                  <Col xs={3} lg={3}>
                    <LazyLoadImage
                      src={theWeek}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
          </Carousel>
        </center>
      </div>
      <div className="media__section">
        <Row className="media__heading">
          <Col>
            <h3 className="client__testimonial text-center fs-2 text-md text-lg text-sm fw-bold">
              Our partners
            </h3>
          </Col>
        </Row>
        <center>
          <Carousel
            indicators={true}
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
                  <Col xs={3} lg={3} className="media__col">
                    <LazyLoadImage
                      src={oneMg}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                  <Col xs={3} lg={3} className="media__col">
                    <LazyLoadImage
                      src={urbanCompany}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                  <Col xs={3} lg={3} className="media__col">
                    <LazyLoadImage
                      src={yourChemist}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                  <Col xs={3} lg={3} className="media__col">
                    <LazyLoadImage
                      src={labsAdvisor}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            {/* Level 2 */}
            <Carousel.Item>
              <div>
                <Row>
                  <Col xs={3} lg={3} className="media__col">
                    <LazyLoadImage
                      src={medanta}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                  <Col xs={3} lg={3} className="media__col">
                    <LazyLoadImage src={mice} className="rounded media__img" />
                  </Col>
                  <Col xs={3} lg={3} className="media__col">
                    <LazyLoadImage
                      src={urbanCompany}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                  <Col xs={3} lg={3} className="media__col">
                    <LazyLoadImage
                      src={yourChemist}
                      className="rounded media__img img-fluid"
                    />
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
          </Carousel>
        </center>
      </div>
    </Container>
  );
};

export default Media;
