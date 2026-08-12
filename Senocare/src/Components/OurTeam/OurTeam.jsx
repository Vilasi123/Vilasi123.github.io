import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import VisionImg from "../../assets/Image/OurVision.png";
import PunitaMam from "../../assets/Image/punitaMam.jpg";
import Sanjana from "../../assets/Image/Sanjana-Kohli.jpg";
import Sarthak from "../../assets/Image/Sarthak-Khanna.jpg";
import DrDey from "../../assets/Image/Dev.jpg";
import Suresh from "../../assets/Image/Suresh.jpg";
import Nafisa from "../../assets/Image/nafisa-ali.jpg";
import DrRajshree from "../../assets/Image/Rajshree.jpg";
import SEO from "../SEO";
import "./OurTeam.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const OurTeam = () => {
  return (
    <>
      <SEO />
      <div id="team">
        <Header />
        <LazyLoadImage src={VisionImg} className="img-fluid" />
        <Container className="team__section">
          <Row className="content__row">
            <Col xs={12} md={4} className="leader_content">
              <LazyLoadImage
                src={PunitaMam}
                className="img-fluid leader__img"
              />
            </Col>
            <Col xs={12} md={8}>
              <h4 className="leader">Punita Khatter</h4>
              <p className="designation">Co-founder & Managing Director</p>
              <p className="team__member__details">
                With over 30 years of hands-on experience in the travel trade,
                Punita is a veteran in the service industry. With an honors
                degree in Psychology, Punita understands the meaning and true
                implication of the term ‘service’. She strongly believes that
                exemplary service is not just something to aspire to, but
                something to live for…. an attitude and a commitment for life.
                Throughout her career spanning three decades, she has left an
                indelible mark on her clients with her energy, her
                resourcefulness, and her refusal to say “I can’t”. Punita leads
                the Senocare team with passion and commitment and inspires them
                every day to deliver beyond our clients’ highest expectations.
                Amongst the many quotes Punita has written, the one that comes
                closest to understanding her is “An idea can be copied, but not
                the passion to deliver it”
              </p>
            </Col>
          </Row>

          <Row className="content__row">
            <Col xs={12} md={4} className="leader_content">
              <LazyLoadImage src={Sanjana} className="img-fluid leader__img" />
            </Col>
            <Col xs={12} md={8}>
              <h4 className="leader">Sanjana Kohli</h4>
              <p className="designation">Co-founder & Executive Director</p>
              <p className="team__member__details">
                A management graduate from IIM, Bangalore, Sanjana started out
                her career in the banking industry with ANZ Grindlays Bank.
                After more than 15 years of experience in banking and financial
                services, including roles spanning India, London and Singapore,
                she moved over to the world of academics and joined the Centre
                for Management Practice at Singapore Management University
                (SMU), as a business case writer. An amateur artist and an avid
                writer, she has also co-authored a book on Risk Management.
              </p>
              <p className="team__member__details">
                Having lived overseas for more than 15 years, Sanjana feels
                strongly about elder care and the belief and vision of Senocare
                deeply resonates with her.
              </p>
            </Col>
          </Row>

          <Row className="content__row">
            <Col xs={12} md={4} className="leader_content">
              <LazyLoadImage src={Sarthak} className="img-fluid leader__img" />
            </Col>
            <Col xs={12} md={8}>
              <h4 className="leader">Sarthak Khanna</h4>
              <p className="designation">Co-founder & Director</p>
              <p className="team__member__details">
                Sarthak has more than 15 years of work experience spanning the
                travel and hospitality industry, and has worked with large
                brands including ITC, InterContinental, and Shangri-La.
                Sarthak’s greatest strength is his balanced and level headed
                approach which holds him (and us!) in good stead when the ride
                gets bumpy. With his clarity of thought and sense of purpose,
                Sarthak is the perfect choice for heading our Operations at
                Senocare, and his strong people development skills make him an
                invaluable asset to our leadership team.
              </p>
            </Col>
          </Row>
          <div>
            <h3 className="advisory__board" id="advisory">
              Advisory Board
            </h3>
          </div>

          <Row className="content__row">
            <Col xs={12} md={4} className="leader_content">
              <LazyLoadImage src={DrDey} className="img-fluid leader__img" />
            </Col>
            <Col xs={12} md={8}>
              <h4 className="leader">Dr A B Dey</h4>

              <p className="team__member__details">
                Professor AB Dey is Former Head of the Department of Geriatric
                Medicine in AIIMS, New Delhi, which he established in 2012. Dr
                Dey, trained as Commonwealth Medical Fellow in UK in Geriatrics,
                had worked for over 25 years to establish old age care as a
                distinct specialty of medicine in India. An avid clinical
                researcher Prof Dey has carried out several funded and non
                funded research projects and published extensively on various
                aspects of old age health and health care. He is currently
                carrying out a longitudinal cognitive ageing study involving
                respondents of Longitudinal Ageing Study of India, to establish
                the epidemiology of dementia in India. Dr Dey has been
                associated with DST’s mission to promote gero-technology as a
                distinct interest area in Science and Technology in the country.
                Dr AB Dey has been assisting the World Health Organization in
                developing training protocols and strategy for development of
                old age care in India and countries in South East Asia, Eastern
                Mediterranean and Western Pacific Region. He is involved in
                implementation of Integrated Care of Older People (ICOPE) of
                World Health Organization in Indian primary health care system.
              </p>
            </Col>
          </Row>

          <Row className="content__row">
            <Col xs={12} md={4} className="leader_content">
              <LazyLoadImage src={Suresh} className="img-fluid leader__img" />
            </Col>
            <Col xs={12} md={8}>
              <h4 className="leader">Mr. Suresh Lal Goklaney</h4>

              <p className="team__member__details">
                Mr. Suresh Lal Goklaney’s career spans five decades, starting in
                the late 60’s with brief stints at leading advertising agencies,
                before moving to P&G, Johnson & Johnson, followed by a 3-decades
                tenure with Eureka Forbes Limited (EFL).
              </p>
              <p className="team__member__details">
                From a single-product, single-channel, EFL, grew to be a
                multi-product, multi-channel, multi-national, with a customer
                base of 20 million, a reach of over 1,500 cities and towns in
                India and a global footprint across 53 countries. A Business
                Super brand, the company is a case study at the Harvard Business
                School.
              </p>
              <p className="team__member__details">
                Mr. Goklaney is the recipient of many prestigious awards, he is
                one amongst 6 in the world to receive the ‘Rotary Responsible
                Business Award 2016’ which was conferred at the International
                Rotary Day 2016 at the United Nations, New York. Recipient of
                the UNESCO-Water Digest ‘Water Icon 2007 Award’ Recipient of the
                Economic Times Inspiring Business Leaders of India Award 2016.
                The IIM, Bangalore, prepared a case study on Leadership,
                entitled ‘Suresh Goklaney – Eureka’s Champion’ which was
                introduced by Mr. Goklaney at IIM Bangalore, in March, 2018.
              </p>
              <p className="team__member__details">
                He has introduced several initiatives to generate public
                awareness on the importance of environmental conservation.
                Provide safe, affordable drinking water to the urban slums and
                rural India. ‘EuroAble’ – India’s first call centre totally
                staffed by differently-abled youth of India. Partnered with
                World Vision in disaster relief operations by providing safe
                drinking water during several natural calamities. Also
                contributed in setting up community water plants in rural India
                and urban slums to provide safe drinking water to the
                under-privileged.
              </p>
            </Col>
          </Row>

          <Row className="content__row">
            <Col xs={12} md={4} className="leader_content">
              <LazyLoadImage src={Nafisa} className="img-fluid leader__img" />
            </Col>
            <Col xs={12} md={8}>
              <h4 className="leader">Nafisa Ali</h4>

              <p className="team__member__details">
                A Bollywood veteran with equally enthralling performances as a
                humanitarian, Nafisa Ali is a force to be reckoned with. The
                sexagenarian won the Miss India pageant in 1976, wooed hearts
                through a cinematic career spanning more than forty years, and
                has been active in India’s political arena as well.
              </p>
              <p className="team__member__details">
                Nafisa tops this list of achievements with unparalleled
                contributions as a social activist. Besides lending invaluable
                support during the 2001 Gujarat earthquake tragedy and starting
                the “Orissa Cyclone Relief Fund”, she has done a lot to raise
                the awareness of HIV/AIDS among Indians.
              </p>
              <p className="team__member__details">
                The legend is also an embodiment of grit and hope for those
                fighting debilitating medical conditions; she battled stage 3
                peritoneal and ovarian cancer in 2019 and emerged victorious
              </p>
            </Col>
          </Row>

          <Row className="content__row">
            <Col xs={12} md={4} className="leader_content">
              <LazyLoadImage
                src={DrRajshree}
                className="img-fluid leader__img"
              />
            </Col>
            <Col xs={12} md={8}>
              <h4 className="leader">Dr Rajarshi Bhattacharjee</h4>

              <p className="team__member__details">
                Dr. Rajarshi Bhattacharjee, is an MD Physician from St.
                Petersburg State Medical Academy, with over 16+ years of
                experience as a General Practitioner, with special interests in
                areas of Cardiac Rehabilitation, Palliative Care, and Holistic
                Wellness. With a General Management for Healthcare Executives
                from IIM Bangalore, he has extensively worked in the areas of
                Healthcare Operations, Marketing and Branding. Presently working
                as a Consultant Physician for the Times of India Group, he also
                heads the Health & Wellness vertical for their Foundation.
                Additionally, he is a visiting consultant to Indraprastha Apollo
                Hospitals, New Delhi. He also is on the advisory board of
                several reputed business houses, advising them on CSR funding
                and is also an Advisory Board member in the healthcare division
                of ASSOCHAM.Having successfully ideated and run several
                nationwide healthcare campaigns, Dr. Rajarshi heads Senocare’s
                Clinical Services.
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default OurTeam;
