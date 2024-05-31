import React, { useState } from "react";
import { Button, Collapse, Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import Contentbatalkanpesanan from "./Contentbatalkanpesanan";

import { Link } from "react-router-dom";

const Pesananbelumbayar = () => {
  const [openCollapse, setOpenCollapse] = useState("");
  const [showContentBatalkanPesanan, setShowContentBatalkanPesanan] =
    useState(false);

  const toggleCollapse = (collapseId) => {
    setOpenCollapse(openCollapse === collapseId ? "" : collapseId);
  };

  const toggleContentBatalkanPesanan = () => {
    // Toggle the state value to show/hide Contentbatalkanpesanan
    setShowContentBatalkanPesanan(!showContentBatalkanPesanan);
  };

  return (
    <div>
      <Card className="mt-3">
        <Card.Header className="bg-dark text-white">
          <Row>
            <Col>
              <span style={{ fontSize: "0.85rem" }}>
                AR-F/ORD-20230815-0003
              </span>{" "}
            </Col>
            <Col xs="auto">
              {" "}
              <span style={{ fontSize: "0.85rem" }}>
                16-02-2023 12:30:34
              </span>{" "}
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title style={{ marginBottom: "-10px" }}>
                <p className="fs-3 fs-md-5">Rp 1.500.000</p>
              </Card.Title>
            </Col>
            <Col xs="auto">
              <Button
                onClick={() => toggleCollapse("collapse1")}
                variant="light"
                className={`collapse-button ${
                  openCollapse === "collapse1" ? "open" : ""
                }`}
                style={{ borderRadius: "15px" }}
              >
                {openCollapse === "collapse1" ? (
                  <BiChevronUp size={30} />
                ) : (
                  <BiChevronDown size={30} />
                )}
              </Button>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-muted bg-white">
          <Container>
            <Row>
              <Col className="text-right">2 Produk</Col>
              <Col xs="auto" className="text-right">
                Menunggu Pembayaran
              </Col>
            </Row>
          </Container>
        </Card.Footer>
      </Card>

      <Collapse in={openCollapse === "collapse1"}>
        <div>
          <br />
          <p
            className="p-3 bg-primary text-white text-center"
            style={{ borderRadius: "3px" }}
          >
            Belum Dibayar
          </p>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="fw-bold">No. Pesanan</Card.Title>
                <Card.Title
                  className="text-muted d-flex align-items-center"
                  style={{ fontSize: "1rem" }}
                >
                  AR-F/ORD-20230815-0003
                </Card.Title>
              </div>
            </Card.Body>
          </Card>
          <div className="mb-4">
            <Card className="mb-4">
              <Card.Body>
                <p className="fw-bold" style={{ fontSize: "20px" }}>
                  Rician Pesanan
                </p>

                <hr />
                <Row>
                  <Col className="d-flex flex-column">
                    {" "}
                    {/* Menggunakan class "d-flex flex-column" untuk mengatur elemen dalam kolom */}
                    <img
                      src="./gambar/produkFS.png"
                      alt="Produk"
                      style={{ maxWidth: "150px", borderRadius: "10px" }}
                    />
                  </Col>

                  <Col className="d-flex flex-column">
                    <div>
                      <p className="fw-bold" style={{ fontSize: "1.2rem" }}>
                        Kursi Klasik Eropa
                      </p>
                      <p className="text-muted">Varian : Biru</p>
                      <span>Kuantitas : 1x</span>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <p style={{ fontSize: "20px" }}>
                  <b>Rincian Harga</b>
                </p>
                <hr />
                <div className="d-flex justify-content-between">
                  <p>Harga Satuan: </p>
                  <p>Rp 500.000</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Sub Total Produk: </p>
                  <p>Rp 500.000</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Ongkos Kirim: </p>
                  <p>Rp 500.000</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Sub Total Ongkos Kirim: </p>
                  <p>Rp 500.000</p>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold">Total Pesanan: </p>
                  <p className="fw-bold ">Rp 500.000</p>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <hr />
          <Card className="mb-4">
            <Card.Body>
              <div
                className="d-flex justify-content-between"
                style={{ marginBottom: "-20px" }}
              >
                <p className="fw-bold" style={{ fontSize: "20px" }}>
                  Rician Pesanan
                </p>
              </div>
              <hr />
              <Row>
                <Col className="d-flex flex-column">
                  {" "}
                  {/* Menggunakan class "d-flex flex-column" untuk mengatur elemen dalam kolom */}
                  <img
                    src="./gambar/produkFS.png"
                    alt="Produk"
                    style={{ maxWidth: "150px", borderRadius: "10px" }}
                  />
                </Col>

                <Col className="d-flex flex-column">
                  <div>
                    <p className="fw-bold" style={{ fontSize: "1.2rem" }}>
                      Sofa Ruang Tamu
                    </p>
                    <p className="text-muted">Varian : -</p>
                    <span>Kuantitas : 1x</span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <p style={{ fontSize: "20px" }}>
                <b>Rincian Harga</b>
              </p>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Harga Satuan: </p>
                <p>Rp 500.000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Harga Flash Sale:</p>
                <p>
                  Rp 500.000{" "}
                  <span class="badge rounded-pill text-bg-warning">-25%</span>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Sub Total Produk: </p>
                <p>Rp 500.000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Ongkos Kirim: </p>
                <p>Rp 500.000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Sub Total Ongkos Kirim: </p>
                <p>-Rp 500.000</p>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-between">
                <p className="fw-bold">Total Pesanan: </p>
                <p className="fw-bold ">Rp 500.000</p>
              </div>
            </Card.Footer>
          </Card>

          <hr />
          <div className="d-flex justify-content-between">
            <p className="fw-bold">Total Keseluruhan: </p>
            <p className="fw-bold">2 Produk </p>
            <p>
              <b> Rp. 1.500.000</b>
            </p>
          </div>

          <hr />

          <div className="d-flex justify-content-between">
            <Link to="/Detailpesananuserbelumbayar" relative="path">
              <Button variant="outline-dark">Detail Pesanan</Button>
            </Link>

            {/* Tombol batalkan pesanan untuk user PC atau laptop */}
            <Button
              variant="danger"
              className="d-none d-md-block"
              onClick={toggleContentBatalkanPesanan}
            >
              Batalkan Pesanan
            </Button>
            <Button variant="dark">
              Bayar Pesanan Anda{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2"
                style={{ marginLeft: "10px" }}
              />
            </Button>
          </div>
          <hr className="d-block d-md-none" />
          {/* Tombol batal untuk user ponsel */}
          <Button
            variant="danger"
            className="mt-3 d-block d-md-none"
            onClick={toggleContentBatalkanPesanan}
          >
            Batalkan Pesanan
          </Button>
          {showContentBatalkanPesanan && <Contentbatalkanpesanan />}
        </div>
      </Collapse>
    </div>
  );
};

export default Pesananbelumbayar;
