import { Container, Row, Col } from "react-bootstrap";
import "./ChooseSenocare.css";
import PersonalCare from "../../../assets/Image/personalCare.png";
import multipleCare from "../../../assets/Image/multipleCare.png";
import trustedPartner from "../../../assets/Image/trustedPartner.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SenocareServices from "./SenocareServices";

const ChooseSenocare = () => {
  return (
    <div className="">
      <div className="choose__senocare pb-5 pt-5">
        <Container>
          <Row className="pb-4">
            <Col>
              <h3 className="client__testimonial text-center fs-2 text-md text-lg text-sm fw-bold">
                Why Choose Senocare ?
              </h3>
              <p className="text-center p-2 inner__para text-md text-lg text-sm">
                Trusting others to take care of one’s loved ones is never easy.
                It’s hard to expect your parents to connect with strangers.
                That’s why at Senocare, we do things differently.
              </p>
            </Col>
          </Row>

          <Row className="d-flex justify-content-evenly">
            <Col xs={12} md={6} lg={4} className="services__card pt-4">
              <LazyLoadImage
                src={PersonalCare}
                className="img-fluid serices__icon"
              />
              <h4>Personal Care Manager</h4>
              <p>
                Experience your very own CareManager - a trusted friend and
                partner, a caring and competent manager, and a member of your
                extended family. Your CareManager will be your one point contact
                for all senocare services
              </p>
            </Col>

            <Col xs={12} md={6} lg={4} className="services__card">
              <LazyLoadImage
                src={trustedPartner}
                className="img-fluid serices__icon"
              />
              <h4>Multiple Care Services</h4>
              <p>
                Our services include much more than just healthcare. Whether
                it’s home repairs or travel assistance, technology
                troubleshooting or legal paperwork, we’ll make sure it gets done
                promptly and efficiently
              </p>
            </Col>
            <Col xs={12} md={6} lg={4} className="services__card pt-4">
              <LazyLoadImage
                src={multipleCare}
                className="img-fluid serices__icon"
              />
              <h4>Trusted Partnerships</h4>
              <p>
                We work only with trusted and reliable partners, each of whom
                must comply with our strict standards of service and hold an
                impeccable track record when it comes to service delivery and
                customer satisfaction
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <SenocareServices />
    </div>
  );
};

export default ChooseSenocare;
