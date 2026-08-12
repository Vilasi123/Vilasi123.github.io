import { Carousel } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./ReactTesti.css";

const MultilevelCarousel = () => {
  return (
    <Carousel
      indicators={true}
      controls={true}
      interval={3000} // Disable automatic sliding
      nextLabel={"Next"}
      prevLabel={"Previous"}
      visible={1} // Set the number of visible items to 1
    >
      {/* Level 1 */}
      <Carousel.Item>
        <div>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <iframe
                src="https://www.youtube.com/embed/5P-XhhAGeAE?si=FxF1bse3sA1eJXnb"
                title="YouTube video player"
                className="rounded"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <iframe
                src="https://www.youtube.com/embed/0rUGmPmF3XU?si=qq7Ujj_LWJPlGUJ1"
                title="YouTube video player"
                className="rounded"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <iframe
                src="https://www.youtube.com/embed/pR2KQL_OHAQ?si=h8yGPAoNIVB55DnZ"
                title="YouTube video player"
                className="rounded"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
          </Row>
        </div>
      </Carousel.Item>
      {/* Level 2 */}
      <Carousel.Item>
        <div>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <iframe
                src="https://www.youtube.com/embed/pWtChcQ6sdE?si=gaTGWKp3QCKydZhg"
                title="YouTube video player"
                className="rounded"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <iframe
                src="https://www.youtube.com/embed/u_qoBa5x5kQ?si=sLlLUxL_oSSVLbCn"
                title="YouTube video player"
                className="rounded"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <iframe
                src="https://www.youtube.com/embed/9dPhpkqqxH8?si=YZQlVdaf2mzbNqPJ"
                title="YouTube video player"
                className="rounded"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
          </Row>

          {/* Add content for level 2 */}
        </div>
      </Carousel.Item>
      {/* <Carousel.Item>
        <div className="d-flex justify-content-around">
          <iframe
            src="https://www.youtube.com/embed/9dPhpkqqxH8?si=YZQlVdaf2mzbNqPJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          <iframe
            src="https://www.youtube.com/embed/pR2KQL_OHAQ?si=h8yGPAoNIVB55DnZ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </Carousel.Item> */}
      {/* Add more levels as needed */}
    </Carousel>
  );
};

export default MultilevelCarousel;
