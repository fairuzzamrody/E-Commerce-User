import React, { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import Contentloading from '../Loading Components/Contentloading';

function ContentPengaturanNotifikasi() {
  const [statusPesananAplikasi, setStatusPesananAplikasi] = useState(true);
  const [flashSaleNotifikasiAplikasi, setFlashSaleNotifikasiAplikasi] = useState(true);
  const [statusPesananEmail, setStatusPesananEmail] = useState(true);
  const [flashSaleNotifikasiEmail, setFlashSaleNotifikasiEmail] = useState(true);
  const [isLoadingStatusPesananAplikasi, setIsLoadingStatusPesananAplikasi] = useState(false);
  const [isLoadingFlashSaleAplikasi, setIsLoadingFlashSaleAplikasi] = useState(false);
  const [isLoadingStatusPesananEmail, setIsLoadingStatusPesananEmail] = useState(false);
  const [isLoadingFlashSaleEmail, setIsLoadingFlashSaleEmail] = useState(false);

  const toggleStatusPesananAplikasi = () => {
    setIsLoadingStatusPesananAplikasi(true);
    setTimeout(() => {
      setStatusPesananAplikasi(!statusPesananAplikasi);
      setIsLoadingStatusPesananAplikasi(false);
    }, 1500);
  };

  const toggleFlashSaleNotifikasiAplikasi = () => {
    setIsLoadingFlashSaleAplikasi(true);
    setTimeout(() => {
      setFlashSaleNotifikasiAplikasi(!flashSaleNotifikasiAplikasi);
      setIsLoadingFlashSaleAplikasi(false);
    }, 1500);
  };

  const toggleStatusPesananEmail = () => {
    setIsLoadingStatusPesananEmail(true);
    setTimeout(() => {
      setStatusPesananEmail(!statusPesananEmail);
      setIsLoadingStatusPesananEmail(false);
    }, 1500);
  };

  const toggleFlashSaleNotifikasiEmail = () => {
    setIsLoadingFlashSaleEmail(true);
    setTimeout(() => {
      setFlashSaleNotifikasiEmail(!flashSaleNotifikasiEmail);
      setIsLoadingFlashSaleEmail(false);
    }, 1500);
  };

  const spanStyle = {
    display: 'flex',
    justifyContent: 'justify-content-value', // Gantilah 'justify-content-value' dengan nilai yang sesuai, misalnya 'center', 'flex-start', atau 'flex-end'
  };

  useEffect(() => {
    // Anda dapat menambahkan efek samping (side effect) di sini jika diperlukan ketika statusPesananAplikasi, flashSaleNotifikasiAplikasi, statusPesananEmail, atau flashSaleNotifikasiEmail berubah.
  }, [statusPesananAplikasi, flashSaleNotifikasiAplikasi, statusPesananEmail, flashSaleNotifikasiEmail]);

  return (
    <div>
      <p style={{ fontSize: "1.3rem" }}>
        <b>Pengaturan Notifikasi.</b>
      </p>
      {(isLoadingStatusPesananAplikasi || isLoadingFlashSaleAplikasi || isLoadingStatusPesananEmail || isLoadingFlashSaleEmail) ? <Contentloading /> : null}
      <Accordion className="mt-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Notifikasi Aplikasi</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex justify-content-between">
              <p>
                <b>Status Pesanan</b>
                <br />
                <span className="text-muted" style={spanStyle}>
                  Beritahu saya bila ada update mengenai pesanan saya, termasuk
                  semua informasi mengenai pembayarannya.
                </span>
              </p>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="statusPesananAplikasiSwitch"
                  checked={statusPesananAplikasi}
                  onChange={toggleStatusPesananAplikasi}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <p>
                <b>Notifikasi Flash Sale</b>
                <br />
                <span className="text-muted" style={spanStyle}>
                  Kirimkan ke saya notifikasi mengenai update Flash Sale dengan
                  tawaran terbaik.
                </span>
              </p>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flashSaleNotifikasiAplikasiSwitch"
                  checked={flashSaleNotifikasiAplikasi}
                  onChange={toggleFlashSaleNotifikasiAplikasi}
                />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Notifikasi Email</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex justify-content-between">
              <p>
                <b>Status Pesanan</b>
                <br />
                <span className="text-muted" style={spanStyle}>
                  Beritahu saya bila ada update mengenai pesanan saya, termasuk
                  semua informasi mengenai pembayarannya.
                </span>
              </p>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="statusPesananEmailSwitch"
                  checked={statusPesananEmail}
                  onChange={toggleStatusPesananEmail}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <p>
                <b>Notifikasi Flash Sale</b>
                <br />
                <span className="text-muted" style={spanStyle}>
                  Kirimkan ke saya notifikasi mengenai update Flash Sale dengan
                  tawaran terbaik.
                </span>
              </p>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flashSaleNotifikasiEmailSwitch"
                  checked={flashSaleNotifikasiEmail}
                  onChange={toggleFlashSaleNotifikasiEmail}
                />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ContentPengaturanNotifikasi;
