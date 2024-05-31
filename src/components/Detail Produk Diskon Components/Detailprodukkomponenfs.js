import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Modal,
  Accordion,
} from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Penilaianproduk from "../Penilaian Produk Di Detail Produk/Penilaianproduk";
import Ulasanproduk from "../Ulasan Produk Dari Pelanggan/Ulasanprodukdihalamandetailproduk";
import Gambardetailprodukfs from "./Gambardetailprodukfs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import Swal from "sweetalert2";
import Contentlastseen from "../Last Seen Components/Contentlastseen";
import ARdindingTanpaVarian from "../Augmented Reality/AR Dinding/ARdindingTanpaVarian";

const Detailprodukkomponenfs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState({ quantity: 1 });

  const handleAddToCart = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCartInModal = () => {
    // Menampilkan SweetAlert 2 ketika tombol "Tambah Ke Keranjang" di dalam modal diklik
    Swal.fire({
      icon: "success",
      title: "Produk berhasil ditambahkan ke keranjang",
      showConfirmButton: false,
      timer: 1500,
    });
    // Menutup modal
    handleCloseModal();
  };

  const handleQuantityChange = (increment) => {
    const newQuantity = item.quantity + increment;
    if (newQuantity > 0) {
      setItem({ ...item, quantity: newQuantity });
    }
  };

  const rating = 4.5; // Contoh rating, bisa diganti dengan rating sesuai data

  // Mendapatkan bagian desimal dari rating (misal 4.5 menjadi 0.5)
  const decimalPart = rating % 1;
  // Mendapatkan jumlah bintang penuh
  const fullStars = Math.floor(rating);
  // Mendapatkan apakah akan menampilkan bintang setengah (jika desimalPart >= 0.5) atau bintang kosong (jika desimalPart < 0.5)
  const showHalfStar = decimalPart >= 0.5;
  // Variabel untuk varian warna 1 dan varian warna 2

  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={8}>
          {/* Gambar Produk */}
          <Gambardetailprodukfs />

          <Container className="mt-4">
            {/* Augmented Reality */}
            <ARdindingTanpaVarian />

            <hr />
            <div className="mt-4">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <b>Tentang Produk Ini</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    The Wall Mirror Eropa. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <hr />
            <div className="mt-4">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <b>Penilaian Produk Ini</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Penilaianproduk />
                    <hr />
                    <Ulasanproduk />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <hr />
          </Container>
        </Col>

        <Col xs={12} md={4} className="mb-5">
          <Card>
            <Card.Body>
              <Card.Title>Wall Mirror Eropa</Card.Title>
              <Row className="mt-3">
                <Col>
                  <p>
                    "Lorem ipsum 40x60cm dolor sit amet, consectetur adipiscing
                    elit."
                  </p>
                  <h4>
                    <b>
                      <del style={{ marginRight: "10px" }}>Rp 1.300.000</del>
                      <span class="badge rounded-pill text-bg-warning">
                        {" "}
                        Flash Sale 1.1 <i class="bi bi-lightning-fill"></i>
                      </span>
                    </b>
                  </h4>

                  <h1>
                    <b>Rp 1.000.000</b>
                  </h1>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <div className="d-flex align-items-center">
                    {[...Array(fullStars)].map((_, index) => (
                      <FaStar
                        key={index}
                        className="checked"
                        style={{ fontSize: "1.3rem" }}
                      />
                    ))}
                    {showHalfStar && (
                      <FaStarHalfAlt
                        className="checked"
                        style={{ fontSize: "1.3rem" }}
                      />
                    )}
                    {[...Array(5 - fullStars - (showHalfStar ? 1 : 0))].map(
                      (_, index) => (
                        <FaStar key={index} style={{ fontSize: "1.3rem" }} />
                      ),
                    )}
                    <span style={{ marginLeft: "8px", fontSize: "20px" }}>
                      4.5
                    </span>
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <hr />
                  <p>Total Stok untuk Flash Sale : 5</p>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Button
                    variant="outline-dark"
                    size="lg"
                    className="w-100"
                    style={{ borderRadius: "25px" }}
                    onClick={handleAddToCart}
                  >
                    Masukkan Keranjang
                  </Button>
                </Col>
              </Row>
              <hr />
              <p className="fw-bold">Ketentuan Flash Sale</p>
              <p>
                Batas Pembelian Produk Ini : <br />
                1x Per Akun
              </p>
              <p>
                Batas Kuantitas Pembelian Produk Ini : <br /> 2x Per Akun
              </p>

              <hr />
              <p>Biaya ongkos kirim produk ini adalah:</p>
              <h4>
                <b>Rp 0 / Free Ongkos Kirim</b>
              </h4>
              <span style={{ textAlign: "justify" }}>
                ("Harga ongkos kirim yang tertera berlaku untuk pembelian satu
                produk saja. Jika membeli lebih dari satu produk, maka akan
                dikenakan biaya kirim yang berkelipatan.")
              </span>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Ke Keranjang</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <div className="d-flex justify-content-between  align-items-center">
              <p className="fw-bold">Total Stok untuk Flash Sale :</p>
              <p> 10</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between  align-items-center">
              <span>
                <b>Jumlah :</b>
              </span>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  variant="light"
                  size="sm"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={item.quantity === 1}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </Button>
                <span className="mx-4">{item.quantity}</span>
                <Button
                  variant="light"
                  size="sm"
                  onClick={() => handleQuantityChange(1)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </div>
            </div>
            <hr />
            <Row>
              <Col xs={12}>
                <div className="d-flex justify-content-between">
                  <span>
                    <b>Total Harga :</b>
                  </span>
                  {/* Hitung total harga */}
                  <span>Rp. {item.quantity * 1300000}</span>
                </div>
              </Col>
            </Row>
            <hr />

            <div className="d-flex justify-content-between">
              <Button variant="outline-secondary" onClick={handleCloseModal}>
                Kembali
              </Button>
              <Button
                variant="dark"
                className="d-flex align-items-center"
                onClick={handleAddToCartInModal}
              >
                Tambah Ke Keranjang
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2"
                  style={{ marginLeft: "20px" }}
                />
              </Button>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
      <Contentlastseen />
    </Container>
  );
};

export default Detailprodukkomponenfs;
