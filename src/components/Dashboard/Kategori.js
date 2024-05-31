import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Kategori = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const imageOverlayStyle = {
    position: 'relative',
    overflow: 'hidden', // Tambahkan overflow: hidden agar border-radius berfungsi
    borderRadius: '12px', // Tambahkan border-radius ke gambar
  };

  const overlayBackgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '10px', // Tambahkan border-radius ke background overlay
  };

  const textOverlayContainerStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '15px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '3.4vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  };

  const arrowIconContainerStyle = {
    position: 'absolute',
    bottom: '10px',
    right: '15px', // Memindahkan ikon panah ke pojok kanan bawah
    color: 'white',
    fontSize: '5vw',
  };

  return (
    <Container style={{ marginBottom: '30px' }}>
      <Container>
      <Row>
        <Col  data-aos="fade-up-right">
          <Link to="/Kategoriground">
            <div style={imageOverlayStyle}>
              <img className="img-fluid" src="./gambar/testbg.png" alt="" />
              <div style={overlayBackgroundStyle}></div>
              <div style={textOverlayContainerStyle}>
                <span>
                  Place <br /> Furniture <br /> On The Ground
                </span>
              </div>
              <div style={arrowIconContainerStyle}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </Link>
        </Col>
        <Col data-aos="fade-up-left">
          <Link to="/Kategoridinding">
            <div style={imageOverlayStyle}>
              <img className="img-fluid" src="./gambar/testbg2.png" alt="" style={{ borderRadius : "20px" }}/>
              <div style={overlayBackgroundStyle}></div>
              <div style={textOverlayContainerStyle}>
                <span>
                  Place <br /> Furniture <br /> On The Wall
                </span>
              </div>
              <div style={arrowIconContainerStyle}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </Link>
        </Col>
      </Row>
      </Container>
    </Container>
  );
};

export default Kategori;
