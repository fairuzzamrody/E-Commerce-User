import React, { useEffect } from 'react';
import { Row, Col, Button,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contenttentangkami() {
  useEffect(() => {
    initializePage();
  }, []);

  const initializePage = () => {
    AOS.init();
    window.scrollTo(0, 0);
  };

  const renderTitle = (text, style) => {
    return (
      <h1 data-aos="fade-up" style={style}>
        <b>{text}</b>
      </h1>
    );
  };

  const renderDescription = (text, style) => {
    return (
      <div data-aos="fade-up" data-aos-delay="300" style={style}>
        {text}
      </div>
    );
  };

  const renderImage = (src, style) => {
    return (
      <div className="text-center" data-aos="fade-up" data-aos-delay="200">
        <img src={src} className="img-fluid animated" alt="" style={style} />
      </div>
    );
  };

  const renderButton = () => {
    return (
      <Link to="/KategoriSC">
        <Button variant="dark" className="btn-lg">
          Belanja Sekarang
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2"
            style={{ marginLeft: '20px' }}
          />
        </Button>
      </Link>
    );
  };

  const styles = {
    h1: { fontSize: '1.9rem', marginTop: '20px' },
    h2: { fontSize: '1.9rem' },
    h3: { fontSize: '1.5rem' },
    description: {
      fontFamily: 'Arial',
      marginBottom: '20px',
      fontSize: '18px',
      marginTop: '15px',
    },
    image: { width: '100%' },
  };

  return (
    <div>
      <div className="text-center mt-5 mb-5">
        <h1 className='fw-bold'>
          #TheFutureisToday.
        </h1>
      </div>
      <br />
      <Row>
        <Col lg={6} className="order-2 order-lg-1">
          <div className="d-flex flex-column justify-content-center align-items-lg-start">
            {renderTitle('E-Commerce Dengan', styles.h1)}
            {renderTitle('Konsep Masa Depan.', styles.h2)}
            {renderDescription(
              `Sebagai toko online dengan konsep "The Future is Today" 
              yang menyediakan teknologi Augmented Reality berbasis web 
              dan visualisasi 3D yang bisa diakses secara langsung melalui ponsel Anda tanpa perlu 
              mengunduh aplikasi apapun. `,
              styles.description
            )}
          </div>
        </Col>
        <Col lg={6} className="order-1 order-lg-2">
          {renderImage('./gambar/tentangkami4.gif', styles.image)}
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg={6}>
          {renderImage('./gambar/tentangkami2.jpg', styles.image)}
        </Col>
        <Col lg={6}>
          <div className="d-flex flex-column justify-content-center align-items-lg-start">
            {renderTitle('Hanya Menjual', styles.h1)}
            {renderTitle('Yang Berkualitas.', styles.h2)}
            {renderDescription(
              `AR-FURNITURE menyediakan beragam gaya dan desain terbaru 
              untuk memenuhi kebutuhan Anda terhadap furnitur idaman. 
              Kami menyediakan berbagai koleksi furnitur berkualitas. Bagi kami, pemilihan bahan adalah keharusan.`,
              styles.description
            )}
          </div>
        </Col>
      </Row>
      <br />

      <Row>
        <Col lg={6} className="order-2 order-lg-1">
          <div className="d-flex flex-column justify-content-center align-items-lg-start">
            {renderTitle('Mengutamakan Kebutuhan', styles.h1)}
            {renderTitle('& Selera Anda.', styles.h2)}
            {renderDescription(
                
              `AR-Furniture merupakan tim ahli yang selalu mengutamakan kebutuhan klien. 
              Fokus utama kami adalah inovasi produk dan solusi digital terintegrasi,
               membantu Anda membuat furnitur di rumah anda lebih indah.`,
              styles.description
            )}
          </div>
        </Col>
        <Col lg={6} className="order-1 order-lg-2">
          {renderImage('./gambar/tentangkami1.jpg', styles.image)}
        </Col>
      </Row>
      <br />
      <br />

      <Row>
        <Col lg={6}>
          {renderImage('./gambar/tentangkami5.jpg', styles.image)}
        </Col>
        <Col lg={6}>
          <div className="d-flex flex-column justify-content-center align-items-lg-start mt-4">
            {renderTitle('#TheFutureisToday ', styles.h1)}
            {renderTitle('Bersama AR-FURNITURE.', styles.h2)}
            {renderDescription(
              `
              AR-FURNITURE memahami apa yang Anda butuhkan. 
              Perabotan yang bagus dapat merilekskan tubuh atau membangkitkan indera Anda. Lebih penting lagi, 
              perabot yang bagus bertahan lama serta dapat membuat ruangan Anda terlihat lebih indah.`,
              styles.description
            )}
            <br />
            {renderButton()}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Contenttentangkami;
