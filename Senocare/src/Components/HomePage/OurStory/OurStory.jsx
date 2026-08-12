import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TeamImagae from "../../../assets/Image/SenocareTeam.png";

// src\assets\Image\SenocareTeam.png
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./OurStory.css";

const OurStory = () => {
  return (
    <div>
      <Container className="services__content__senocare">
        <Row>
          <Col>
            <h3 className="our__story text-center fs-2 text-md text-lg text-sm fw-bold mb-5">
              Our Story
            </h3>
          </Col>
        </Row>
        <Row className="pt-md-4 py-xs-3 senocare__family">
          <Col xs={12} md={6} lg={6}>
            <LazyLoadImage src={TeamImagae} className="img-fluid rounded" />
          </Col>
          <Col xs={12} md={6} lg={6} className="our__story__contents">
            <p>
              The senOcare story started as all good stories do… with simple
              beginnings and good intentions. As working adults with aging
              parents, we felt guilty about not being able to do as much as we’d
              like to, for our parents. Some of us had lived overseas for a
              considerable period of time, and were frustrated with the sadly
              inadequate infrastructure and support system for seniors in India.
              We looked around for someone whom we could rely upon to support
              our parents when we couldn’t be around, and were surprised and
              disappointed with the quality of what was available.
            </p>
            <p>
              The Covid-19 pandemic that raised its ugly head in March 2020, was
              a painful reminder that there’s only that much that children can
              do for their parents from far away. The Covid-19 crisis magnified
              our parents’ vulnerability and the healthcare system’s inadequacy
              to deal with their needs.
            </p>
            <p>
              Our friends and extended family from across the globe were
              constantly calling us, and reaching out to us for support for
              their parents living alone. Of course, we willingly bent backwards
              to help out anyone who needed us, arranging for appointments with
              doctors, helping with bill payments, arranging for groceries to be
              delivered home and sorting out home maintenance issues. As more
              and more friends and extended family living overseas shared with
              us their angst about their parents, we realized that this is a
              situation that resonates with many.
            </p>
            <i> And that is how the idea of senOcare was born.</i>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurStory;
