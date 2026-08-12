import { Container, Row, Col } from "react-bootstrap";
import "../PallitveCare/Services.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Shakti from "../../assets/Image/ServiceImg/Shakti.jpeg";
import PalliativeHome1 from "../../assets/Image/ServiceImg/PallitiveHome (1).jpg";
import PalliativeHome2 from "../../assets/Image/ServiceImg/PallitiveHome (2).jpg";
import PalliativeHome3 from "../../assets/Image/ServiceImg/PallitiveHome (3).jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const PallitiveCareHome = () => {
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
                  What Is Palliative Care At Home?
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={PalliativeHome1}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col xs={12} md={12} lg={6} className="senocare__text__content">
                <p className="services__para__senocare">
                  Palliative care is specialized medical care for people living
                  with a serious illness, such as cancer or heart related
                  issues. Patients in palliative care may receive medical care
                  for their symptoms, or palliative care at home through
                  professionals such as doctors and nurses, along with the
                  treatment intended to cure the serious illness.
                </p>
                <p className="services__para__senocare">
                  Palliative care is a resource for anyone living with a serious
                  illness, such as Heart Failure, Cancer, Dementia, Parkinson’s
                  disease and others. In addition to improving quality of life
                  and helping with symptoms, palliative care at home help
                  patients understand their choices for medical treatment. The
                  services available through palliative care at home are helpful
                  to older persons having discomfort and disability very late in
                  life.
                </p>
                {/* <div className="shakti__content">
              <div className="img__content__shakti">
                <LazyLoadImage src={Shakti} className="img-fluid shakti__img" />
              </div>
              <div className="medically__content">
                <h5 className="medically__reviewed">
                  Content is medically reviewed by:
                </h5>
                <p className="drsakti">Dr. Shakti Singh</p>
              </div>
            </div> */}
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  What Is Palliative Care At Home?
                </h2>
                <p className="services__para__senocare">
                  It is provided by a team of trained professionals which
                  includes doctors, nurses, social workers, volunteers,
                  physiotherapist etc. It improves the quality of life of
                  patient who is suffering from serious ailments. A patient gets
                  the best treatment when it’s given at home. When palliative
                  care is provided at home by team of experts it provides sense
                  of safety, privacy, confidentiality and peace of mind. It
                  provides psychological support to the patient [2]
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">
                  What Issues Are Taken Care With Palliative Care At Home
                </h2>
                <p className="services__para__senocare">
                  Patients suffering from chronic debilitating disease like
                  cancer, lung disease, renal issues, cardiac issues, dementia
                  and Alzheimer’s gets palliative care at home or in a homely
                  environment. Senocare had team of doctors, nurses, social
                  workers, volunteer’s, physiotherapist to provide support.
                  Given the rising expense of chronic disease care, it can be
                  difficult for families to maintain treatment in a hospital or
                  hospice. Family members are very important in home-based
                  palliative care. They receive training from the team to master
                  the fundamentals of palliation. Palliative care at home must
                  be integrated into normal home health care services.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col xs={12}>
                <h2 className="senocare___heading__sencond">
                  Importance Of Home Palliative Care
                </h2>
                <p className="services__para__senocare">
                  Home palliative care gives patients with serious diseases and
                  their families physical, emotional, and spiritual assistance,
                  allowing them to live as comfortably and completely as
                  possible in their own homes.
                </p>
              </Col>
              <Col xs={12}>
                <h3 className="senocare__heading__third text-center">
                  Better quality of life
                </h3>
                <h4 className="senocare__heading__fourth">
                  Symptom management
                </h4>
                <p className="services__para__senocare">
                  Home palliative care teams can help patients control their
                  pain, nausea, exhaustion, and other symptoms, allowing them to
                  stay comfortable and engaged in activities they like. Home
                  palliative care provides emotional and spiritual support to
                  patients and their families, assisting them in coping with the
                  hardships of serious illness. Counselling, bereavement
                  support, and spiritual direction are examples of such
                  services.{" "}
                </p>
                <h4 className="senocare__heading__fourth">
                  Improved quality of life for family members
                </h4>
                <p className="services__para__senocare">
                  Home palliative care may benefit family members as well,
                  allowing them to spend more time with their loved ones while
                  also lowering the stress and strain of caregiving.
                </p>
              </Col>

              <Col xs={12} className="mt-5">
                <h3 className="senocare__heading__third text-center">
                  Reduced cost
                </h3>
                <h4 className="senocare__heading__fourth">
                  Reduced hospital admissions
                </h4>
                <p className="services__para__senocare">
                  Home palliative care can help patients avoid costly and
                  painful hospital hospitalizations.
                </p>
                <h4 className="senocare__heading__fourth">
                  Reduced hospital stays
                </h4>
                <p className="services__para__senocare">
                  For patients who do require hospitalization, home palliative
                  care can help them heal quicker and return home sooner. Home
                  palliative care can help patients manage their symptoms more
                  effectively, minimizing their dependency on other healthcare
                  services such as emergency department visits and expert
                  appointments.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={PalliativeHome2}
                  className="img-fluid senocare__service__img"
                />
              </Col>
              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  Things to be done to set up home Palliative care
                </h2>
                <p className="services__para__senocare">
                  In countries with limited resources, emphasis on symptom
                  control, especially pain, should be of highest priority, and
                  home-based PC should be integrated into the health-care system
                  [3,4]. Consider the following measures to prepare the home for
                  palliative care
                </p>
              </Col>
              <Col xs={12} className="mt-5 ">
                <h3 className="senocare___heading__sencond">
                  Determining the patient's requirements
                </h3>
                <h4 className="senocare__heading__fourth">
                  Physical requirements{" "}
                </h4>
                <p className="services__para__senocare">
                  It’s important to know. the patient's capacity to move about,
                  do everyday tasks, and manage discomfort.
                </p>
                <h4 className="senocare__heading__fourth">Emotional needs</h4>
                <p className="services__para__senocare">
                  Pay attention to the patient's emotional condition and give
                  resources and assistance.
                </p>
                <h4 className="senocare__heading__fourth">
                  Spiritual requirements
                </h4>
                <p className="services__para__senocare">
                  Recognise and respect the patient's spiritual beliefs and
                  practises.
                </p>
              </Col>
              <Col xs={12} className="mt-5 ">
                <h3 className="senocare___heading__sencond">
                  Organise prescriptions and supplies
                </h3>
                <h4 className="senocare__heading__fourth">
                  Gather the following medical supplies
                </h4>
                <p className="services__para__senocare">
                  Stock up on wound care materials such as bandages, gloves,
                  wipes, and so on.
                </p>
                <h4 className="senocare__heading__fourth">
                  Safely store medications
                </h4>
                <p className="services__para__senocare">
                  Medication should be kept in a safe, organised area away from
                  children and pets. Set up a medicine schedule: Establish a
                  clear and regular drug routine.
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col md={12} lg={6}>
                <LazyLoadImage
                  src={PalliativeHome3}
                  className="img-fluid senocare__service__img"
                />
              </Col>

              <Col md={12} lg={6}>
                <h2 className="senocare___heading__sencond">
                  Is Palliative Care At Home Beneficial
                </h2>
                <p className="services__para__senocare">
                  Patients with serious diseases and their families benefit from
                  palliative care at home. It has the potential to improve
                  quality of life, lower expenses, and raise patient
                  satisfaction.
                </p>
              </Col>
              <Col xs={12} className="mt-5 ">
                <h3 className="senocare___heading__sencond">
                  Here are some of the advantages of receiving palliative
                  treatment at home
                </h3>
                <p className="services__para__senocare">
                  Palliative care teams can help patients manage pain, nausea,
                  exhaustion, and other symptoms, allowing them to be
                  comfortable and engaged in activities they like. Palliative
                  care provides emotional and spiritual support to patients and
                  their families, assisting them in coping with the hardships of
                  serious illness. Counselling, bereavement support, and
                  spiritual direction are examples of such services.
                </p>

                <h4 className="senocare__heading__fourth">
                  Comfort and familiarity
                </h4>
                <p className="services__para__senocare">
                  Patients are typically calmer and more comfortable in their
                  own homes, which might enhance their overall well-being.
                </p>
                <h4 className="senocare__heading__fourth">
                  Improved contact with healthcare professionals
                </h4>
                <p className="services__para__senocare">
                  Palliative care teams are accessible to answer questions and
                  give support 24 hours a day, seven days a week, which can help
                  enhance communication with healthcare providers.
                </p>
                <h4 className="senocare__heading__fourth">
                  Improved interaction with healthcare professionals
                </h4>
                <p className="services__para__senocare">
                  Palliative care teams are accessible to answer questions and
                  give support 24 hours a day, seven days a week, which can help
                  enhance communication with healthcare providers.
                </p>
              </Col>
            </Row>

            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond">Case Study</h2>
                <h4 className="senocare__heading__fourth">
                  A daughter's journey with her father's alzheimer's
                </h4>
                <p className="services__para__senocare">
                  Punita's personal experience of caring for her father with
                  dementia, she hope to encourage others to openly talk about
                  the challenges and the best ways to handle such health issues.
                  The stigma surrounding these conditions often leads to
                  families feeling unnecessarily embarrassed, hiding, and not
                  seeking help, which is much needed while caring for elders
                  suffering from such health issues. These conditions are not
                  personality or character flaws; they are diseases that affect
                  millions of people worldwide, and they are not something to be
                  ashamed of. "It's not always easy to walk the talk, but now
                  more than ever, she believe palliative care is the best
                  approach for treating those in terminal conditions. Her
                  first-hand experience has shown that palliative care surpasses
                  other treatment procedures. It prioritizes comfort, dignity,
                  and overall well-being, encompassing physical, emotional,
                  psychological, and spiritual aspects. Palliative care can be
                  provided at any stage of a serious illness, not just
                  end-of-life. It complements and enhances traditional
                  treatments, ensuring that patients receive the best possible
                  care.
                </p>
                <p className="services__para__senocare">
                  "To read more about the amazing journey where Palliative care
                  and Dolls brought Life back into my father's life,{" "}
                  <a
                    href="https://blog.senocare.in/how-palliative-care-and-dolls-helped-my-father-beat-the-odds-and-reclaim-his-spark-cloms7168593721voe88sitr33/"
                    target="blank"
                    className="hyper__link">
                    click Here
                  </a>{" "}
                  .
                </p>
              </Col>
            </Row>
            <Row className="senocare__row__content">
              <Col>
                <h2 className="senocare___heading__sencond"> References </h2>
                <p className="services__para__senocare">
                  1) What are palliative care and hospice care?{" "}
                </p>
                <p className="services__para__senocare">
                  2) Goswami, S. (2021, July 21). Home Based Palliative Care.
                  Intech Open eBooks. https://doi.org/10.5772/intechopen.98648I
                  In Text Citation: (Goswami, 2021)
                </p>
                <p className="services__para__senocare">
                  3) World Health Organization Programme on Cancer Control:
                  Developing a Global Strategy for Cancer WHO, Geneva (1998)
                </p>
                <p className="services__para__senocare">
                  4) Cancer Pain Relief with a Guide to Opioid Availability (2nd
                  edition), WHO, Geneva (1996)
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

export default PallitiveCareHome;
