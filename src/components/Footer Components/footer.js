import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-lg-5">
            <SocialIcons />
          </div>
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <Row>
              <Col md={4} lg={4} xl={3} className="mx-auto mb-4">
                <Logo />
                <p className="text-center">The Future is Today.</p>
              </Col>
              <Col md={4} lg={2} xl={2} className="mx-auto mb-4">
                <h6 className="text-sentencecase fw-bold mb-4">Tautan Yang Berguna</h6>
                <LinkList />
              </Col>
              <Col md={4} lg={2} xl={2} className="mx-auto mb-4">
                <h6 className="text-sentencecase fw-bold mb-4">Tautan Media Sosial</h6>
                <SocialMediaLinks />
              </Col>
            </Row>
          </div>
        </section>

        <FooterText currentYear={currentYear} />
      </footer>
    </Container>
  );
};

const SocialIcons = () => {
  return <div></div>;
};

const Logo = () => {
  return (
    <Link className="navbar-brand" to="/">
      <img src="./gambar/logo.png" width="auto" height="85" className="d-inline-block align-top" alt="" />
    </Link>
  );
};

const LinkList = () => {
  const links = [
    { text: "Beranda", to: "/" },
    { text: "Kategori", to: "/kategoriSC" },
    { text: "FAQ", to: "/FAQ" },
    { text: "Tentang Kami", to: "/Tentangkami" }
  ];

  return (
    <>
      {links.map((link, index) => (
        <p key={index}>
          <Link to={link.to} className="text-reset">
            {link.text}
          </Link>
        </p>
      ))}
    </>
  );
};

const SocialMediaLinks = () => {
  const socialMedia = [
    { icon: faInstagram, text: "Instagram" },
    { icon: faFacebookF, text: "Facebook" },
    { icon: faWhatsapp, text: "WhatsApp" }
  ];

  return (
    <div className="d-flex flex-column justify-content-center align-items-center"> {/* Add classes here */}
      {socialMedia.map((item, index) => (
        <div className="d-flex align-items-center mb-2" key={index}>
        <FontAwesomeIcon icon={item.icon} className="me-2" />
          <Link to="/" className="text-reset text-center text-sm-left">
            {item.text}
          </Link>
        </div>
      ))}
    </div>
  );
};

const FooterText = ({ currentYear }) => {
  return (
    <div className="text-center p-4">
      <hr/>
      &copy; {currentYear} • All Rights Reserved AR-FURNITURE by <Link to="/" className="text-reset fw-bold">Fairuz Zamrody</Link>
    </div>
  );
};

export default Footer;