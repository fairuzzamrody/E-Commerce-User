import React from 'react';
import { Col, ProgressBar, Dropdown } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

function Penilaianproduk() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <Col>
          <p style={{ fontSize: '3rem', textAlign: 'center' }}>4.2<span style={{ fontSize: "1.2rem" }}>/5</span>
          </p>
          <div className="d-flex justify-content-center">
            {[...Array(4)].map((_, index) => (
              <FaStar
                key={index}
                className="checked"
                style={{ fontSize: '1.5rem', color: 'gold', textAlign: 'center', marginTop: "-10px" }}
              />
            ))}
          </div>
          <div className='d-flex justify-content-center'>
          <span className="text-muted" style={{ fontSize : "0.9rem", marginTop : "10px" }}>62 Ulasan</span>

          </div>
        </Col>
        <Col>
          {[...Array(5)].map((_, index) => (
            <div className="d-flex align-items-center" key={index}>
              <span style={{ marginRight: '5px' }}>{5 - index}</span>
              <ProgressBar className="mb-2 flex-grow-1" now={index * 25} variant="dark" />
            </div>
          ))}
        </Col>
      </div>
      <div className="d-flex justify-content-between" style={{ marginTop: '30px' }}>
        <p className='fw-bold'>Filter Ulasan :
        </p>
          <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        Terbaru
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Terbaru</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Rating Tertinggi</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Rating Terendah</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        
      </div>
      <p className='mt-1 text-muted'><small>Menampilkan 10 dari 773 ulasan</small></p>

    </div>
  );
}

export default Penilaianproduk;
