import { Container, Row, Col } from "react-bootstrap";
import "./OurStoryPage.css";
import BannerImg from "../../assets/Image/OurVision.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
const OurStoryPage = () => {
  return (
    <div className="story__content">
      <div className="header__image">
        <LazyLoadImage src={BannerImg} className="img-fluid background__img" />
        <h2 className="img_heading">Our Vision</h2>
      </div>
      <Container>
        <Row>
          <Col className="story_para">
            <h3 className="our__story__content text-center fs-2 text-md text-lg text-sm fw-bold">
              OurStory
            </h3>
            <p>
              The senOcare story started as all good stories do… with simple
              beginnings and good intentions.
            </p>
            <p>
              As working adults with aging parents, we felt guilty about not
              being able to do as much as we’d like to, for our parents. Some of
              us had lived overseas for a considerable period of time, and were
              frustrated with the sadly inadequate infrastructure and support
              system for seniors in India. We looked around for someone whom we
              could rely upon to support our parents when we couldn’t be around,
              and were surprised and disappointed with the quality of what was
              available.
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
            <b>
              <i>And that is how the idea of senOcare was born.</i>
            </b>
          </Col>
        </Row>
        <Row>
          <Col className="story_para">
            <h3 className="our__story__content text-center fs-2 text-md text-lg text-sm fw-bold">
              What We Do
            </h3>

            <p>
              We know that seniors value their independence, and we are
              committed to helping them maintain it. By taking over the
              struggles and challenges of their daily life, we hope to help make
              their days smooth and hassle free.
            </p>

            <p>
              Most people assume that senior care is synonymous with healthcare.
              However, research has shown that 90% of the concerns of seniors
              are not about healthcare, but in fact about the routine challenges
              of everyday living. Daily mishaps at home…. leakages in the
              bathroom, air conditioners that stop working, drivers who quit
              without notice… all this causes as much stress to our seniors as
              healthcare does.
            </p>

            <p>
              As parents get older, it becomes difficult to get around
              independently. Even the simplest of tasks – arranging for a lab
              test, getting a leaking pipe fixed, putting up a painting, getting
              your passport renewed, replacing your lost Aadhar card, visiting
              friends and family – all of it turns into a complex, challenging
              chore which takes up time and energy of both parents and children
              as they try to figure out how to get things done with minimal
              trouble.
            </p>

            <p>
              That’s why our approach to senior care is different from that of
              others. senOcare addresses not just healthcare needs but also
              takes care of all the myriad day to day problems that cause
              unimaginable stress and anxiety to seniors.
            </p>

            <p>
              We have a wide portfolio of services including Health & Fitness,
              Safety & Homecare, Travel & Tours, Forms & Filing, Technology &
              Troubleshooting and Memories & Milestones.
            </p>

            <p>
              For more information, see
              <a href="/care-packages/" className="hyper__link">
                &nbsp; senOcare Services &nbsp;
              </a>
              portfolio
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="story_para">
            <h3 className="our__story__content text-center fs-2 text-md text-lg text-sm fw-bold">
              Why We Do What We Do
            </h3>

            <p>
              Watching parents grow old is something that every child dreads.
              You always thought that the staunch, strong parents who stood
              behind you for most of your life were invincible. You thought they
              could do anything. You thought they could solve any problem. Now
              suddenly, there’s a role reversal and they seem vulnerable, both
              physically and emotionally. They want to live independently but
              they struggle with multiple challenges in doing so, hesitatingly
              looking towards you for support. It’s a role reversal that you
              hadn’t anticipated and one that you hadn’t emotionally prepared
              yourself for. You love them unconditionally and you want to do
              everything possible for them but often, you just can’t.
            </p>

            <p>
              We understand that career choices and other circumstances often
              lead to physical distance between you and your parents, different
              cities and sometimes different countries. We understand you want
              to be there for them 24×7, we also understand that you can’t.
            </p>
            <p>We understand you. We get it. And we want to help.</p>

            <p>That’s what we’re here for. To help.</p>
          </Col>
        </Row>
        <Row>
          <Col className="story_para">
            <h3 className="our__story__content text-center fs-2 text-md text-lg text-sm fw-bold">
              {" "}
              Our Belief and Vision
            </h3>
            <p>
              We believe that getting older should not mean that our seniors
              need to sacrifice the control, choice and independence that they
              had when they were younger.
            </p>
            <p>
              We believe that with the right support and adequate empowerment,
              our seniors can live life on their own terms, without needing to
              overly depend upon anyone.
            </p>
            <p>We believe in caring for those who’ve always cared for us.</p>
            <p>
              Our vision is to create a safe, happy and healthy environment for
              seniors living independently, wherein they have easy access not
              just to professional healthcare but also to an entire gamut of
              services that solve their problems and make their day to day
              living smooth and hassle free.
            </p>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurStoryPage;
