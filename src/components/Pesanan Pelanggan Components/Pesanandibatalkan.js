import React, { useState } from "react";
import { Button, Collapse, Row, Col, Container, Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function Pesanandibatalkan() {
  const [openCollapse, setOpenCollapse] = useState("");

  const toggleCollapse = (collapseId) => {
    setOpenCollapse(openCollapse === collapseId ? "" : collapseId);
  };

  return (
    <div>
      <Card className="mt-3">
        <Card.Header className="bg-dark text-white">
          <Row>
            <Col>
              <span style={{ fontSize: "0.85rem" }}>
                AR-F/ORD-20230815-0004
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
                Dibatalkan
              </Col>
            </Row>
          </Container>
        </Card.Footer>
      </Card>

      <Collapse in={openCollapse === "collapse1"}>
        <div>
          <br />
          <p
            className="p-3 bg-secondary text-white text-center"
            style={{ borderRadius: "3px" }}
          >
            Pesanan Dibatalkan
          </p>
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="fw-bold">No. Pesanan</Card.Title>
                <Card.Title
                  className="text-muted d-flex align-items-center"
                  style={{ fontSize: "1rem" }}
                >
                  AR-F/ORD-20230815-0004
                </Card.Title>
              </div>
            </Card.Body>
          </Card>
          <div className="mb-4"></div>

          <div className="mb-4">
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
          <hr style={{ marginTop: "-5px" }} />
          <Row className="justify-content-end">
            <Col xs="auto">
              <a
                href="/Detailpesananuserdibatalkan"
                className="btn btn-outline-dark"
              >
                Detail Pesanan
              </a>
            </Col>
          </Row>
          <hr />
        </div>
      </Collapse>
    </div>
  );
}

export default Pesanandibatalkan;
