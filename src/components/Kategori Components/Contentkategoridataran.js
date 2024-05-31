import React from 'react';
import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const dataKategoriDataran = [
  {
    imageSrc: '../gambar/product-9.jpg',
    title: 'Meja Klasik',
  },
  {
    imageSrc: '../gambar/product-3.jpg',
    title: 'Kursi Taman',
  },
  {
    imageSrc: '../gambar/product-2.jpg',
    title: 'Sofa Outdoor',
  },
  {
    imageSrc: '../gambar/product-1.jpg',
    title: 'Kasur',
  },
  {
    imageSrc: '../gambar/product-6.jpg',
    title: 'Kursi',
  },
  {
    imageSrc: '../gambar/product-5.jpg',
    title: 'Sofa',
  },
];

function Contentkategoridataran() {
  return (
    <div>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Beranda
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Pilihan Kategori Dinding</Breadcrumb.Item>
        </Breadcrumb>
        <div className="text-center mt-5 mb-5">
          <h1 className='fw-bold' style={{ fontSize: "1.6rem" }}>Kategori Terbaik Untuk Anda.</h1>
        </div>

        <Row>
          {dataKategoriDataran.map((item, index) => (
            <Col key={index} xs={12} md={4} style={{ flexBasis: '33.33%' }}>
              <Link to="/Listprodukkategori" style={{ textDecoration: 'none' }}>
                <div className="text-center">
                  <img
                    src={item.imageSrc}
                    alt={`Gambar ${index + 1}`}
                    style={{ borderRadius: "10px", maxWidth: "100%" }}
                    className="img-fluid"
                  />
                  <p className='fw-bold mt-3 text-black'>{item.title}</p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Contentkategoridataran;
