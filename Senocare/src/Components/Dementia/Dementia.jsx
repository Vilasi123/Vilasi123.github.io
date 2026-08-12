import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DementiaImg from "../../assets/Image/Dementia/dementia.png";
import Table from "react-bootstrap/Table";
import CareDementia from "../../assets/Image/Dementia/care-dementia.png";
import "./Dementia.css";
import heart from "../../assets/Image/Dementia/heart.png";
import SimpleWords from "../../assets/Image/Dementia/chat.png";
import { Carousel } from "react-bootstrap";
import peace from "../../assets/Image/Dementia/peace.png";
import risk from "../../assets/Image/Dementia/risk.png";
import profit from "../../assets/Image/Dementia/profit.png";
import safe from "../../assets/Image/Dementia/safe.png";
import simple from "../../assets/Image/Dementia/simple.png";
import chat from "../../assets/Image/Dementia/chat.png";
import squareFace from "../../assets/Image/Dementia/square.png";
import DementiaImg3 from "../../assets/Image/Dementia/Analyze-pana.png";
import sustainable from "../../assets/Image/Dementia/sustainability.png";
import DementiaImg2 from "../../assets/Image/Dementia/Dementia-care-tips.png";
import Case1 from "../../assets/Image/Dementia/case-study-01.png";
import Case2 from "../../assets/Image/Dementia/case-study-02.png";
import Case3 from "../../assets/Image/Dementia/case-study-03.png";
import Case4 from "../../assets/Image/Dementia/case-study-04.png";
import ani from "../../assets/Image/Media/ani.jpg";
import businessStandardS from "../../assets/Image/Media/business-standards.jpg";
import hindustan from "../../assets/Image/Media/hindustan.jpg";
import outlook from "../../assets/Image/Media/outlook.jpg";
import theWeek from "../../assets/Image/Media/theweek.jpg";
import zee from "../../assets/Image/Media/zee5.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const Dementia = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <SEO />
      <div>
        <Header />
        <Container className="dementia__content">
          <Row>
            <Col xs={12} md={6}>
              <LazyLoadImage
                src={DementiaImg}
                className="img-fluid img__touch"
              />
            </Col>
            <Col xs={12} md={6} className="dementia__text">
              <h3 className="dementia__heading">
                Care for Managing Dementia for Elders
              </h3>
              <h3 className="dementia__heading mt-3">What is dementia?</h3>
              <p className="dementia__para mt-4">
                Becoming somewhat forgetful is a part of the natural aging
                process. Subtle changes in memory or absent-mindedness due to
                aging are not the same things as dementia. Dementia impacts much
                more than memory, and managing dementia calls for a medical
                evaluation.
              </p>
            </Col>
            <Col>
              <p className="dementia__para mt-5">
                Memory losses and cognitive declines that are severe enough to
                interfere with daily life activities are called <b>dementia</b>.
                In other words, it is an umbrella term for a persistent and
                disabling decline in functional and intellectual abilities of
                memory, language, judgment, and thinking. Dementia becomes
                increasingly common as people age, and only worsens over time.
                Dementia care thus emphasizes the importance of holistic care
                for an elderly’s well-being‒social, mental, and emotional, in
                addition to physical and medical needs. There are different
                types of dementia, the most common of which is Alzheimer’s
                Disease (AD).
              </p>
            </Col>
          </Row>
          <Row className="dementia__content">
            <Col>
              <h3 className="dementia__heading mb-3 text-center">
                Difference Between Dementia and Alzheimer's Disease:
              </h3>
              <p className="dementia__para">
                While dementia is a broader term for cognitive health decline,
                Alzheimer’s is a specific disease and the most common form of
                dementia. The table below highlights the key differences between
                the two.
              </p>
            </Col>
            <div className="table__section">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Dementia</th>
                    <th>Description</th>
                    <th>Alzheimer’s Disease</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Definition</td>
                    <td>
                      A group of diseases and illnesses that affect thinking,
                      memory, reasoning, personality, mood and behavior
                    </td>
                    <td>
                      The most common type of dementia marked by continuous
                      decline in thinking, behavioral and social skills
                    </td>
                  </tr>
                  <tr>
                    <td>Cause</td>
                    <td>
                      Mainly Alzheimer’s Disease, stroke, vitamin deficiencies,
                      reaction to medicines, brain disease or injury{" "}
                    </td>
                    <td>
                      Age-related changes in the brain, along with genetic,
                      environmental, and lifestyle factors
                    </td>
                  </tr>
                  <tr>
                    <td>Onset</td>

                    <td>65 years and older</td>
                    <td>
                      Mostly elderly above 65 years, but it can also affect
                      people in their 30s or 40s
                    </td>
                  </tr>

                  <tr>
                    <td>Symptoms</td>

                    <td>
                      Memory loss, disorientation, inability to speak or
                      understand language, delusions, confusion
                    </td>
                    <td>
                      Short-term memory loss, confusion, personality and
                      behavior changes
                    </td>
                  </tr>
                  <tr>
                    <td>Life expectancy</td>
                    <td>
                      Depends on the stage and rate of progression. Average is
                      around ten years after diagnosis
                    </td>
                    <td>
                      Four to eight years after diagnosis, but can live as long
                      as 20 years depending on various factors
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LazyLoadImage
                src={CareDementia}
                className="img-fluid img__touch"
              />
            </Col>
            <Col xs={12} md={6} className="dementia__text">
              <p className="dementia__para">
                Dementia is a progressive disorder and brings diverse challenges
                for the patients‒from communication to behavioural and
                psychological. Care for dementia patients with comorbidities
                requires extra supportive and person-centred approach to respond
                effectively to their needs. In the absence of a cure, long-term
                dementia care is the only alternative to maintaining the quality
                of life. In addition, recent research also shows that dementia
                patients with high continuity of care have better health
                outcomes and lower rates of complications. Qualitative dementia
                care focuses on:
              </p>
            </Col>
          </Row>
          <Row className="icon__section d-flex gap-3">
            <Col lg={3} md={6} xs={12} className="icon_column">
              <div className="icon__content">
                <LazyLoadImage className="img-fluid " width="60" src={heart} />
              </div>
              <p className="icon__text">
                Improved health outcomes and quality of life
              </p>
            </Col>

            <Col lg={3} md={6} xs={12} className="icon_column">
              <div className="icon__content">
                <LazyLoadImage className="img-fluid " width="60" src={risk} />
              </div>
              <p className="icon__text">
                Lowering the risk of complications like delirium, drowsiness,
                and falls
              </p>
            </Col>
            <Col lg={3} md={6} xs={12} className="icon_column">
              <div className="icon__content">
                <LazyLoadImage className="img-fluid " width="60" src={profit} />
              </div>
              <p className="icon__text">
                Reduce hospitalization and treatment costs
              </p>
            </Col>
            <Col lg={3} md={6} xs={12} className="icon_column">
              <div className="icon__content">
                <LazyLoadImage className="img-fluid " width="60" src={peace} />
              </div>
              <p className="icon__text">
                Providing peace and stability to the patient and family members
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LazyLoadImage
                src={DementiaImg3}
                className="img-fluid img__touch"
              />
            </Col>
            <Col xs={12} md={6} className="dementia__text">
              <h3 className="dementia__heading">
                senOcare’s guide to managing dementia and cognitive health: Case
                studies and tips
              </h3>
              <p className="dementia__para mt-4">
                A loved one with dementia in the family can cause stress and
                uncertainty for everyone involved. Dementia care is complex, and
                caregivers must understand the different types of dementia, its
                stage, and the rate of progression. The following are some
                real-life cases that highlight the importance of person-centered
                care in the spectrum of dementia and other cognitive impairment
                across age-groups. It should be noted that all names of patients
                in the cases have been changed to protect the patients’
                confidentiality.
              </p>
            </Col>
          </Row>
          <Row className="dementia__case">
            <h3 className="dementia__heading mb-3">Case Study 01</h3>
            <Col xs={12} md={6}>
              <LazyLoadImage src={Case1} className="img-fluid" />
            </Col>
            <Col xs={12} md={6}>
              <p className="dementia__para">
                A loved one with dementia in the family can cause stress and
                uncertainty for everyone involved. Dementia care is complex, and
                caregivers must understand the different types of dementia, its
                stage, and the rate of progression. The following are some
                real-life cases that highlight the importance of person-centered
                care in the spectrum of dementia and other cognitive impairment
                across age-groups. It should be noted that all names of patients
                in the cases have been changed to protect the patients’
                confidentiality.
              </p>
            </Col>
            <Col className="mt-4">
              <p className="dementia__para">
                She suffered from delusions that would make her suspicious about
                house helps, especially about theft or being negligent of their
                duties. It makes her apprehensive about hiring any outside help.
                This delusion disorder would also make her get lost in her
                neighbourhood and hence cannot step outside alone.
              </p>
              <p className="dementia__para">
                After a holistic assessment of the situation, our assistance for
                the best dementia care for Ms. Devi included a host of measures:
              </p>
              <ul className="case__ul">
                <li>
                  Being compassionate and patient while taking care of her
                  day-to-day needs
                </li>
                <li>
                  Refrain from anger or agitation even if she asked repetitive
                  questions numerous times a day. Speaking slowly in a soft tone
                  and act as if it’s the first time
                </li>
                <li>
                  Educating other family members about her behaviour which is
                  not under the elder’s control, including examples of what to
                  say and what not to say in various situations
                </li>
                <li>
                  Started treating her with the same care and compassion as one
                  would treat a child
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="dementia__case">
            <h3 className="dementia__heading mb-3">Case Study 02</h3>
            <Col xs={12} md={6}>
              <LazyLoadImage src={Case2} className="img-fluid" />
            </Col>
            <Col xs={12} md={6}>
              <p className="dementia__para">
                Pawan Behl is a 66-year-old male patient with Alzheimer’s, being
                referred to our home care for Alzheimer’s patients. Mr. Behl has
                a medical history of increased memory loss, confusion, and
                hallucinations. He does not remember his daughter and even
                forgets to perform his daily hygiene activities of bathing and
                changing clothes. The extent of his hallucinations would take
                him back to his early twenties and make him constantly talk to
                his parents, who are not alive anymore.
              </p>
            </Col>
            <Col className="mt-4">
              <p className="dementia__para">
                He would also set up a dinner table every night for guests. The
                medical reports state that he has difficulty handling finances
                or paying bills. His confusion often leads to anger outbursts
                and aggressive impulses like scratching people around him.
              </p>
              <p className="dementia__para">
                While caring for Alzheimer’s patients, one will encounter
                feelings of anger, confusion, hallucinations, and even paranoia.
                These are common in the early stages of Alzheimer’s, and our
                assessment suggested the following in this case:
              </p>

              <ul className="case__ul">
                <li>
                  Do all the tasks in breaks so that the patient does not feel
                  exhausted and allow him to do a few things on his own
                </li>
                <li>
                  Engage and involve the patient in fun and simple activities
                  like choosing from two options.
                </li>
                <li>
                  Be clear in instructions so that it becomes easy for him to
                  understand
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="dementia__case">
            <h3 className="dementia__heading mb-3">Case Study 03</h3>
            <Col xs={12} md={6}>
              <LazyLoadImage src={Case3} className="img-fluid" />
            </Col>
            <Col xs={12} md={6}>
              <p className="dementia__para">
                Nidhi Massey is a 46-year-old female patient with{" "}
                <a
                  href="/physiotherapy-home-service/parkinsons-disease-treatment/"
                  className="hyper__link">
                  Parkinson’s disease{" "}
                </a>{" "}
                a progressive neurological disorder that causes movement
                disorder. Her hands often shake whether they are working or at
                rest. Due to this, her movement has become slow, and she takes
                small steps while walking. She also has pain in her muscles.
                Sometimes she speaks very softly and sometimes very fast.
              </p>
            </Col>
            <Col className="mt-4">
              <p className="dementia__para">
                Recent research has found that 70 percent of people with
                Parkinson’s will develop symptoms of dementia as a part of the
                disease progression. To manage symptom control, a caregiver must
                be vigilant in administering medications with reminders, charts,
                and organizers. As such, our suggestions were:
              </p>

              <ul className="case__ul">
                <li>Having conversations with her to understand her needs</li>
                <li>
                  Observing closely and notice changes in her, keeping a check
                  on whether she is taking medicines on time
                </li>
                <li>Being patient with her</li>
              </ul>
            </Col>
          </Row>
          <Row className="dementia__case">
            <h3 className="dementia__heading mb-3">Case Study 04</h3>
            <Col xs={12} md={6}>
              <LazyLoadImage src={Case4} className="img-fluid" />
            </Col>
            <Col xs={12} md={6}>
              <p className="dementia__para">
                Ambika Pal Singh, a 75-year-old female, is diagnosed with
                Post-Traumatic Stress Disorder (PTSD), a behavioural disorder
                triggered by traumatic events causing fear, helplessness, or
                horror. As a result, she gets scared of sleeping. Whenever she
                tries to sleep, nightmares of the past tragic events disturb her
                taking her back to those events. She always remains emotionally
                disturbed and leads a reclusive life.
              </p>
            </Col>
            <Col className="mt-4">
              <p className="dementia__para">
                Ambika Pal Singh, a 75-year-old female, is diagnosed with
                Post-Traumatic Stress Disorder (PTSD), a behavioural disorder
                triggered by traumatic events causing fear, helplessness, or
                horror. As a result, she gets scared of sleeping. Whenever she
                tries to sleep, nightmares of the past tragic events disturb her
                taking her back to those events. She always remains emotionally
                disturbed and leads a reclusive life.
              </p>

              <ul className="case__ul">
                <li>
                  Try to engage her in a conversation as much as possible and be
                  a good listener
                </li>
                <li>Supporting and encouraging her on every point</li>
                <li>Stay connected and be patient</li>
              </ul>
            </Col>
          </Row>
          <Row className="dimentia__care">
            <h3 className="dementia__heading text-center mb-4">
              Managing Dementia: General Care giver tips
            </h3>
            <Col xs={12} md={6}>
              <LazyLoadImage
                src={DementiaImg2}
                className="img-fluid img__touch"
              />
            </Col>
            <Col xs={12} md={6} className="dementia__text">
              <p className="dementia__para mt-4">
                We at senOcare understand that the process of aging is not
                unique, and no two elderly are the same. There is no silver
                bullet answer to managing dementia because any elderly at any
                given stage could be suffering from more than one health issue.
                Hence, each elderly with dementia or cognitive impairment
                represents a unique condition, and so is the situation in which
                they find themselves. It’s not something in their control, it’s
                the condition, and thus patience is the key. You must allow some
                time to let them have their way. Some general tips that can come
                in handy are:
              </p>
            </Col>
          </Row>
          <Row className="icon__section d-flex gap-3">
            <Col lg={3} md={6} xs={12} className="icon_column">
              <div className="icon__content">
                <LazyLoadImage className="img-fluid " width="60" src={safe} />
              </div>
              <p className="icon__text">
                Establishing a routine of hygiene activities
              </p>
            </Col>

            <Col lg={3} md={6} xs={12} className="icon_column">
              <div className="icon__content">
                <LazyLoadImage
                  className="img-fluid "
                  width="60"
                  src={sustainable}
                />
              </div>
              <p className="icon__text">
                Maintain a safe and uncluttered environment
              </p>
            </Col>
            <Col lg={3} md={6} xs={12} className="icon_column">
              <div className="icon__content">
                <LazyLoadImage className="img-fluid " width="60" src={chat} />
              </div>
              <p className="icon__text">Use simple words and sentences</p>
            </Col>
            <Col lg={3} md={6} xs={12} className="icon_column">
              <div className="icon__content">
                <LazyLoadImage className="img-fluid " width="60" src={simple} />
              </div>
              <p className="icon__text">
                Act with affection, reassurance, and patience
              </p>
            </Col>
            <Col lg={3} md={6} xs={12} className="icon_column">
              <div className="icon__content">
                <LazyLoadImage
                  className="img-fluid "
                  width="60"
                  src={squareFace}
                />
              </div>
              <p className="icon__text">
                Providing peace and stability to the patient and family members
              </p>
            </Col>
          </Row>
          <Row>
            <h3 className="dementia__heading text-center ">
              What our Happy Customers Say
            </h3>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/0rUGmPmF3XU?si=qq7Ujj_LWJPlGUJ1"
                title="YouTube video player"
                className="iframe__content_dementia"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <iframe
                src="https://www.youtube.com/embed/pR2KQL_OHAQ?si=h8yGPAoNIVB55DnZ"
                title="YouTube video player"
                className="iframe__content_dementia"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </Col>
          </Row>
          <div className="media__section">
            <Row className="media__heading">
              <Col>
                <h3 className="dementia__heading text-center">
                  Media Coverage
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
          -4
          <Row className="row__contacts">
            <Col xs={12} sm={12} lg={6} className="text-center">
              <h3 className="dementia__heading">
                Looking for a trusted team who can take care of your parents'
                day to day needs?
                <br></br>
                <br></br>
                Speak to our Care Manager now!
              </h3>
            </Col>
            <Col className="form__section" xs={12} sm={12} lg={6}>
              <div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label className="input__label">
                        First name
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label className="input__label">
                        Last name
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername">
                      <Form.Label className="input__label">Email</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          @
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Email"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide email.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                      <Form.Label className="input__label">City</Form.Label>
                      <Form.Control type="text" placeholder="City" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom04">
                      <Form.Label className="input__label">State</Form.Label>
                      <Form.Control type="text" placeholder="State" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                      <Form.Label className="input__label">Zip</Form.Label>
                      <Form.Control type="text" placeholder="Zip" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <Button type="submit">Contact Us</Button>
                </Form>
              </div>
            </Col>
          </Row>
          {/* Accordion */}
          <Row className="accordian__faq">
            <Col>
              <Accordion defaultActiveKey="0 " className="accordian">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q1. Can a Dementia Person be cared for at home?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      YES. In-home care for dementia patients provides
                      one-on-one routine care and supervision. Familiar
                      surroundings also offer greater security and peace of mind
                      to people with memory and cognitive issues. Research also
                      shows that in-home care is worth considering in the early
                      stages of Alzheimer’s disease (AD) or other forms of
                      dementia to help the patients stay healthier and happier.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="accordian__faq">
            <Col>
              <Accordion defaultActiveKey="0 " className="accordian">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q2. When should dementia patients go into care?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Dementia is a progressive disease, meaning that it would
                      only worsen over time. When a patient becomes aggressive,
                      or the condition deteriorates to the point where they need
                      a high level of medical care, it could be time to consider
                      nursing home dementia care.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="accordian__faq">
            <Col>
              <Accordion defaultActiveKey="0 " className="accordian">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q3. Do dementia patients do better at home?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      YES. If care is provided at an early stage, dementia care
                      at home helps the patient live longer and happier. Home
                      care is considered ideal because of:
                    </p>

                    <ul className=".case__ul">
                      <li>
                        {" "}
                        Familiarity with and comfort in their surroundings
                      </li>
                      <li>
                        One-on-one care and attention leading to better outcomes
                      </li>

                      <li>
                        Security and peace of mind to patients and their
                        families
                      </li>
                      <li>Safe environment in the wake of Covid-19</li>
                      <li>
                        Cost-saving when compared with assisted living or
                        nursing home facilities
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="accordian__faq">
            <Col>
              <Accordion defaultActiveKey="0 " className="accordian">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q4. What is the range of Senocare’s Dementia care service?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Our compassionate Care Managers are trained to deal with
                      any circumstances, however unpleasant it may be. The range
                      of dementia care includes medical and non-medical care
                      like:
                    </p>

                    <ul className=".case__ul">
                      <li>Medication management</li>
                      <li>Safety concerns and counselling</li>

                      <li>
                        Nursing care for dementia patients with comorbidities
                      </li>
                      <li>Nutrition and physiotherapy support</li>
                      <li>Helping with daily hygiene activities</li>
                      <li>Companionship</li>
                      <li>Monitoring for depression, anxiety, or stress</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="accordian__faq">
            <Col>
              <Accordion defaultActiveKey="0 " className="accordian">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q5. How long can a Dementia person live at home?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Experts recommend that dementia care at home can continue
                      through to the end of life. However, the situation varies,
                      and disease progression is unique in each case. Hence,
                      home care may not always be possible for patients who need
                      full-time medical support or constantly putting their
                      physical safety at risk.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="accordian__faq">
            <Col>
              <Accordion defaultActiveKey="0 " className="accordian">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q6. What is the best care for dementia patients?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Dementia care is complex, and the best care depends on the
                      stage and progression of the disease. What may work today
                      may not work tomorrow. In addition, an elder at any stage
                      could be suffering from more than one health issue, making
                      it more challenging. Some general tips that can come in
                      handy are:
                    </p>

                    <ul className=".case__ul">
                      <li>Establishing a routine of hygiene activities</li>
                      <li>Use simple words and sentences</li>
                      <li>Maintain a safe and uncluttered environment</li>
                      <li>Respond with affection, reassurance, and patience</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="accordian__faq">
            <Col>
              <Accordion defaultActiveKey="0 " className="accordian">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q7. When do dementia persons need assisted care?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Dementia care is a full-time responsibility, and a
                      caregiver needs to be mindful of various factors like
                      personal care, safety concerns, mood swings, etc. over and
                      above medication management. All these can be stressful to
                      manage on your own. Since it is a progressive disease,
                      care requirements can become more intensive and complex in
                      the advanced stages. While it may never feel like the
                      “right time” for assisted care, if introduced earlier,
                      dementia care at home can help the patient to live longer
                      and happier.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="accordian__faq">
            <Col>
              <Accordion defaultActiveKey="0 " className="accordian">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q8. What is the procedure to request for Dementia care?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Our elder care home services plans‒Senocare Touch Of Love,
                      Senocare COMFORT, and Senocare INDULGE have been designed
                      to meet the wide spectrum of elderly care. From dementia
                      care to Parkinson’s, or care for any other psychological
                      ailment, you can choose the one that fits your
                      requirements. For further information on our customized
                      packages, please reach out to us at{" "}
                      <a href="mailto:info@senocare.in" className="hyper__link">
                        info@senocare.in
                      </a>
                      .
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="reference">
            <Col>
              <h3 className="dementia__heading">References</h3>
              <p className="dementia__para">
                <a
                  href="https://en.wikipedia.org/wiki/Dementia"
                  className="hyper__link">
                  https://en.wikipedia.org/wiki/Dementia
                </a>
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Dementia;
