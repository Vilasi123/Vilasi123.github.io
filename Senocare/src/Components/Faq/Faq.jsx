import { LazyLoadImage } from "react-lazy-load-image-component";
import Faq from "../../assets/Image/Faq.png";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import SEO from "../SEO";
import "./Faq.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Faqs = () => {
  return (
    <>
      <SEO />
      <div id="faq">
        <Header />
        <LazyLoadImage src={Faq} className="img-fluid" />
        <Container className="faq__content">
          <Row>
            <Col>
              <p className="faq__para">
                Trusting others to take care of one’s loved ones is never easy.
                It’s hard to expect your parents to connect with strangers.
                That’s why at senOcare, we do things differently. Every single
                individual who works at senOcare feels strongly about our
                elderly clients – we bend backwards to take care of all their
                needs to the greatest extent possible. We truly believe that
                senOcare is not about winning numbers, but about winning hearts.
              </p>
              <p className="faq__para">
                Of course, you will have many questions, and we hope that these
                will answer anything you have on your mind. If not, then please
                go ahead and email us on{" "}
                <a href="mailto:info@senocare.in" className="hyper__link">
                  info@senocare.in{" "}
                </a>{" "}
                for any additional queries that you have. We’ll get back to you
                as quickly as we can.
              </p>
            </Col>
          </Row>
          <Row className="accordian__faq">
            <Col>
              <Accordion defaultActiveKey="0 " className="accordian">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5 className="accordian__header  ">
                      Q1. What services does Senocare provide?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Senocare provides personalized, high quality care to
                      seniors on the phone or at their doorstep. Senocare
                      services include
                      <a href="/health-fitness/" className="hyper__link">
                        {" "}
                        health & fitness
                      </a>
                      ,
                      <a href="/travel-tours/" className="hyper__link">
                        domestic & international travel
                      </a>{" "}
                      ,
                      <a href="/safety-homecare/" className="hyper__link">
                        {" "}
                        home maintenance and repair{" "}
                      </a>
                      ,{" "}
                      <a href="/safety-homecare/" className="hyper__link">
                        safety and security
                      </a>{" "}
                      ,{" "}
                      <a href="/form-filing/" className="hyper__link">
                        filling and submission of forms
                      </a>
                      , and organization of milestone celebrations at home or at
                      an external location. At Senocare, our objective is to
                      simplify the daily life of seniors, and make it smooth and
                      hassle-free.
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
                      Q2. Does every Senocare member have a dedicated
                      CareManager?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Yes, every Senocare member will have a dedicated
                      CareManager, a one stop point for accessing all the
                      services provided by Senocare. Our CareManagers are
                      carefully handpicked from a huge pool of qualified
                      caregivers. That’s because we strongly believe that
                      caregiving is not just about knowledge and skills, but
                      also about personality and attitude.
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
                      Q3. How can I contact my CareManager?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Our CareManagers can be contacted via phone, whatsapp, or
                      email. You can contact your CareManager as often as you
                      want, even multiple times a day. She’s always at your
                      service, and happy to help you solve anything that’s
                      troubling you.
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
                      Q4. Which cities/countries is Senocare operational in?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Currently, Senocare is operational in{" "}
                      <a href="/holistic-care-delhi/" className="hyper__link">
                        Delhi
                      </a>
                      ,{" "}
                      <a href="/holistic-care-noida/" className="hyper__link">
                        Noida
                      </a>{" "}
                      ,{" "}
                      <a href="/holistic-care-gurgaon/" className="hyper__link">
                        Gurgaon
                      </a>
                      , and{" "}
                      <a
                        href="/holistic-care-hyderabad/"
                        className="hyper__link">
                        {" "}
                        Hyderabad.
                      </a>
                    </p>
                    {/* <div class="whatsapp_chat">
<a class="whatsapp_link" href="http://izea.pl/ctb/SENOCARE_W" target="_blank" data-message="I have a few questions. Can you help?" data-number="+918800003046">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="15" width="15" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path style="fill:#fff;" d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0
			S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"></path><path style="fill:#55CD6C;" d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662
			c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234
			c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"></path><path style="fill:#FEFEFE;" d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297
			c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048
			c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359
			c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248
			c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062
			l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"></path></svg>
Talk to us
</a>
</div> */}
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
                      Q5. Can I get Senocare services at my home?{" "}
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Senocare services are all available at your doorstep.
                      However, given the current COVID-19 pandemic situation,
                      our clients have expressed a marked preference for video
                      /telephonic meetings, and remote servicing. Nevertheless,
                      you remain our priority and in case you would like a
                      personal visit, we will make sure it happens with all
                      necessary health precautions in place.
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
                      Q6. Do the Care Plans and pricing of services differ as
                      per age of the member?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Whilst Senocare Care Plans and services have been designed
                      keeping senior citizens in mind, they are available to
                      anyone who needs them, irrespective of age. If you would
                      like to avail of our services and you think you’ll benefit
                      from them, we’ll be very happy to serve you.
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
                      Q7. Is there a validity period for the plan?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      All Senocare packages are valid for either 3 months, 6
                      months or for 12 months.
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
                      Q8. Does the Senocare plan cover couples or a single
                      person?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Senocare packages can be availed of by a single senior or
                      by a senior couple living together. In the case of the
                      latter, both individuals will be included in one single
                      plan.
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
                      Q9. When I ask for a service from Senocare, can I track
                      the service delivery?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Yes, you can track service delivery for all our services.
                      Your CareManager will share the necessary tracking link
                      and will keep you informed via whatsapp of the service
                      progress right up to completion. For some services where
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
                      Q10. How do I subscribe to Senocare services?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      We have 3 packages available for you to choose from –
                      senOcare ASSIST, senOcare COMFORT and senOcare INDULGE.
                      Choose the one that is the most appropriate for your
                      requirements and then subscribe. If you have questions
                      about these packages, please write to us at
                      info@senocare.in and we’ll respond to you promptly.
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
                      Q11. Which currencies does Senocare accept?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Senocare Care Plans can be paid for in INR or in foreign
                      currency. Currently, we are accepting payment in USD, SGD,
                      GBP and AED.
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
                      Q12. What are the payment options available?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      We accept online payment through debit/credit cards, net
                      banking, or direct bank transfers.
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
                      Q13. Can Senocare make the payments to its service
                      providers on my behalf?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Yes, we can make payments to service providers on your
                      behalf, or you can pay directly, whatever you prefer.
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
                      Q14. Can the Senocare services be availed without
                      subscribing for the plans?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      No, Senocare services are available only to our members
                      and hence can be availed of only by subscribing to one of
                      our Care Plans.
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
                      Q15. Can I upgrade the subscription package at any time?
                      Or do I have to wait till the presently running package
                      duration is over and then upgrade?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Sure, you can upgrade your package at any time. All you
                      need to do is speak to your Care Manager and she’ll take
                      care of it for you.
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
                      Q16. In case of a health emergency does Senocare provide
                      for an ambulance and hospital admission?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Yes, Senocare can take care of all your emergency needs,
                      including ambulance, accompanying to hospital and assisted
                      admission to hospital.
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
                      Q17. Can Senocare help paying bills online?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Yes, Senocare can take care of all your bill payments
                      including electricity, water, cable tv, mobile phone and
                      landline. We can even help you with specific payments such
                      as monthly club membership.
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
                      Q18. Is it mandatory for Senocare members to use only
                      doctors on your panel?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Not at all. Senocare’s objective is to be there for our
                      members whenever they need us, in whatever form they need
                      us. We are not trying to disrupt whatever is already
                      working well for you. We’re happy for you to stick with
                      your current doctor or travel agent or any service
                      provider that you are happy with. If and when you are
                      stuck or need emergency assistance or late night medical
                      consultation (in case your regular doctor is unreachable),
                      we will be there to assist you.
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
                      Q19. How can we be sure of reliability of senOcare
                      services?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      We offer exemplary service through a highly competent and
                      experienced team of service provdiers but yes, we
                      understand your concern. Ultimately, service has to be
                      experienced to be trusted and valued. We urge you to not
                      belive us, instead try us out and see for yourself!
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
                      Q20. How is Senocare different from other companies that
                      offer elder-care services?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Most people assume that elder care is synonymous with
                      healthcare. However, research has shown that 90% of the
                      concerns of seniors are not about healthcare, but in fact
                      about the routine challenges of everyday living. Daily
                      mishaps at home…. air conditioners that stop working…
                      drivers who quit without notice… all this causes as much
                      stress to our seniors, if not more.
                    </p>
                    <p className="accordian__para">
                      Unlike most other elder care companies that focus only on
                      medical needs of elders, Senocare addresses not just
                      healthcare needs but also takes care of all the myriad day
                      to day problems that cause unimaginable stress and
                      anxiety.
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
                      Q21. What are the key differences between the three Care
                      Plans that Senocare offers?
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="accordian__para  ">
                      Our Care Plans have been carefully designed to cater to
                      the different needs of our member clientele. It takes
                      passion and dedicated commitment to serve elderly seniors,
                      and we are unwilling to compromise on the quality of the
                      time and effort that we invest in servicing our members.
                    </p>
                    <p className="accordian__para  ">
                      However, even elders vary in their requirement of
                      services. Some are at one end of the spectrum and merely
                      wish to have access to services and resources, without any
                      need for daily engagement or handholding. Some others
                      prefer a greater level of engagement and may even need a
                      bit of navigating through daily challenges. Yet others are
                      on the other end of the spectrum and enjoy a regular check
                      in and deeper social and other engagement from their
                      CareManager.
                    </p>
                    <p className="accordian__para  ">
                      No matter what the situation or specific requirements of
                      our members, we take it upon ourselves to ensure their
                      happiness and complete satisfaction. That’s because
                      ultimately, we believe that we are not in the business of
                      winning numbers, but in the business of winning hearts.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Faqs;
