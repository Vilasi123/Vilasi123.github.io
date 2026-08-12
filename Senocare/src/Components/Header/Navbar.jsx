import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SenocareLogo from "../../assets/Image/logo (1).png";
import OurStoryPage from "../OurStoryPage/OurStoryPage";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import whatsApp from "../../assets/Image/whatsApp.png";

const NavbarComp = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar__main");
      if (navbar) {
        const offsetTop = navbar.offsetTop;
        if (window.pageYOffset > offsetTop) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showAboutUs, setShowAboutUs] = React.useState(false);
  const [showServices, setShowServices] = React.useState(false);
  const [showWorld, setShowWorld] = React.useState(false);
  const [showPackage, setPackage] = React.useState(false);
  const [showNursing, setNursing] = React.useState(false);
  const [showPhysio, setPhysio] = React.useState(false);
  const [showElderCare, setElderCare] = React.useState(false);

  const handleAboutUsEnter = () => {
    setShowAboutUs(true);
  };

  const handleElderCareEnter = () => {
    setElderCare(true);
  };
  const handleElderCareLeave = () => {
    setElderCare(false);
  };

  const handleAboutUsLeave = () => {
    setShowAboutUs(false);
  };
  const handlePhysioEnter = () => {
    setPhysio(true);
  };
  const handelPhysioLeave = () => {
    setPhysio(false);
  };

  const handleServicesEnter = () => {
    setShowServices(true);
  };

  const handleServicesLeave = () => {
    setShowServices(false);
  };

  const handleWorldEnter = () => {
    setShowWorld(true);
  };

  const handleWorldLeave = () => {
    setShowWorld(false);
  };

  const handlePackageEnter = () => {
    setPackage(true);
  };

  const handlePackageLeave = () => {
    setPackage(false);
  };

  const handleNursingEnter = () => {
    setNursing(true);
  };

  const handleNursingLeave = () => {
    setNursing(false);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* fixed="top" */}
      <Navbar fixed="top" className="navbar__main sticky-top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <LazyLoadImage src={SenocareLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#home" id="menu_text" className="nav__items">
                Home
              </Nav.Link>

              <NavDropdown
                className="nav__items"
                title="About Us"
                show={showAboutUs}
                onMouseEnter={handleAboutUsEnter}
                onMouseLeave={handleAboutUsLeave}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/our-story/" id="navbar__items__text">
                  Our Story
                </NavDropdown.Item>
                <NavDropdown.Item href="/our-vision" id="navbar__items__text">
                  Our Vision
                </NavDropdown.Item>
                <NavDropdown.Item href="/our-team" id="navbar__items__text">
                  Our Team
                </NavDropdown.Item>

                {/* <NavDropdown.Item href="/our-team/#advisory"> */}

                <NavDropdown.Item href="/our-team">
                  <HashLink
                    to="/our-team/#advisory"
                    style={{ color: "black" }}
                    id="navbar__items__text"
                  >
                    Advisory Board
                  </HashLink>
                </NavDropdown.Item>

                {/* </NavDropdown.Item> */}
              </NavDropdown>
              <NavDropdown
                className="nav__items"
                title="Services"
                show={showServices}
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/">
                  <HashLink
                    to="/#home"
                    style={{ color: "black" }}
                    id="navbar__items__text"
                  >
                    Care Service
                  </HashLink>
                </NavDropdown.Item>

                <NavDropdown
                  className="nav__items"
                  id="navbar__items__text"
                  // style={{ position: "relative", left: "4%", color: "black" }}
                  title="Care Package"
                  show={showPackage}
                  drop="end" // Key attribute for right-aligned dropdown
                  onMouseEnter={handlePackageEnter}
                  onMouseLeave={handlePackageLeave}
                >
                  <NavDropdown.Item href="/package">
                    <HashLink to="/package/#package" style={{ color: "black" }}>
                      Touch of Love
                    </HashLink>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className="nav__items"
                  id="navbar__items__text"
                  // style={{ position: "relative", left: "4%", color: "black" }}
                  title="Care Services"
                  show={showNursing}
                  onMouseEnter={handleNursingEnter}
                  drop="end" // Key attribute for right-aligned dropdown
                  onMouseLeave={handleNursingLeave}
                >
                  <NavDropdown.Item
                    href="/nursing-care"
                    id="navbar__items__text"
                  >
                    {/* <HashLink to="/#nusing" style={{ color: "black" }}> */}
                    Nursing Care
                    {/* </HashLink> */}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="nursing-care-delhi/"
                    id="navbar__items__text"
                  >
                    Nursing Care Delhi
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/nursing-care-gurgaon/"
                    id="navbar__items__text"
                  >
                    Nursing Care Gurgaon
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="nursing-care-noida/"
                    id="navbar__items__text"
                  >
                    Nursing Care Noida
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="/nursing-care/palliative-care-for-lymphoma"
                    id="navbar__items__text"
                  >
                    Pallative Care
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/nursing-care/palliative-care-at-home/"
                    id="navbar__items__text"
                  >
                    Pallative Care at Home
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href=" /home-attendant-services-for-elderly/"
                    id="navbar__items__text"
                  >
                    Home Attendant Service for Elderly
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className="nav__items"
                  id="navbar__items__text"
                  // style={{ position: "relative", left: "4%", color: "black" }}
                  title="Elder Care Services"
                  show={showElderCare}
                  onMouseEnter={handleElderCareEnter}
                  drop="end" // Key attribute for right-aligned dropdown
                  onMouseLeave={handleElderCareLeave}
                >
                  <NavDropdown.Item
                    href="/holistic-care-gurgaon/"
                    id="navbar__items__text"
                  >
                    {/* <HashLink to="/#nusing" style={{ color: "black" }}> */}
                    Holistic Care - Gurgaon
                    {/* </HashLink> */}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/holistic-care-delhi/"
                    id="navbar__items__text"
                  >
                    Holistic Care - Delhi
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/holistic-care-noida/"
                    id="navbar__items__text"
                  >
                    Holistic Care - Noida
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="/dementia" id="navbar__items__text">
                  Dementia
                </NavDropdown.Item>
                <NavDropdown
                  className="nav__items"
                  title="Physiotherapy"
                  id="navbar__items__text"
                  // style={{ position: "relative", left: "4%", color: "black" }}
                  show={showPhysio}
                  onMouseEnter={handlePhysioEnter}
                  onMouseLeave={handelPhysioLeave}
                  drop="end" // Key attribute for right-aligned dropdown
                  // style={{ position: "relative" }}
                >
                  <NavDropdown.Item
                    href="/physiotherapy-home-service/"
                    id="navbar__items__text"
                  >
                    Physiotherapy
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/physiotherapy-at-home-in-gurgaon/"
                    id="navbar__items__text"
                  >
                    Physiotherapy at home in Gurgaon
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/physiotherapy-at-home-in-delhi"
                    id="navbar__items__text"
                  >
                    Physiotherapy at home in Delhi
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/physiotherapy-at-home-in-noida/"
                    id="navbar__items__text"
                  >
                    Physiotherapy at home in Noida
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/physiotherapy-at-home-in-faridabad/"
                    id="navbar__items__text"
                  >
                    Physiotherapy at home in Faridabad
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item
                  href="/doctor-on-home-visit/"
                  id="navbar__items__text"
                >
                  Doctor on home visit
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/critical-care/"
                  id="navbar__items__text"
                >
                  Critical care
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/tele-consultation/"
                  id="navbar__items__text"
                >
                  Teleconsultation
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/vaccination-at-home/"
                  id="navbar__items__text"
                >
                  Vaccination
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/icu-at-home-service/"
                  id="navbar__items__text"
                >
                  Icu at home
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/nutrition-and-diet/"
                  id="navbar__items__text"
                >
                  Nutritent and Diet
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="nav__items"
                show={showWorld}
                onMouseEnter={handleWorldEnter}
                onMouseLeave={handleWorldLeave}
                id="basic-nav-dropdown"
                title="World of Senocare"
              >
                <NavDropdown.Item
                  href="/photo-gallery/"
                  id="navbar__items__text"
                >
                  Photo Gallery
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://blog.senocare.in/"
                  target="_blank"
                  id="navbar__items__text"
                >
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/latest-events/"
                  id="navbar__items__text"
                >
                  Events
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/featured-products/"
                  id="navbar__items__text"
                >
                  Feature Product
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/testimonials/"
                  id="navbar__items__text"
                >
                  Testimonials
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/video-reviews/"
                  id="navbar__items__text"
                >
                  Video Reviews
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/faq/" className="nav__items" id="menu_text">
                FAQ
              </Nav.Link>
              <Nav.Link href="/press/" className="nav__items" id="menu_text">
                Press
              </Nav.Link>

              <Nav.Link href="/" className="nav__items" id="menu_text">
                Contact
              </Nav.Link>
              <Nav.Link
                href="https://api.whatsapp.com/send/?phone=918800003046&text=%40senocare_W&type=phone_number&app_absent=0"
                target="_blank"
                className="nav__items"
                id="menu_text"
              >
                <img
                  style={{ height: "35px" }}
                  alt="Chat on WhatsApp"
                  src={whatsApp}
                />
              </Nav.Link>
              <Nav.Link
                href="/subscribe-form/"
                className="nav__items nav__subscribe"
                style={{ height: "35px", marginTop: "1%" }}
                id="menu_text"
              >
                <p style={{ marginBottom: "0rem" }}>Subscribe</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
