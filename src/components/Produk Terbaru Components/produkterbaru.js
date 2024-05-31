import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { faStar, faArrowRight, faTruckFast } from "@fortawesome/free-solid-svg-icons";

function ProdukTerbaru() {
  const produkData = [
    {
      id: 1,
      image: "./GambarProduk/Dataran/Kategori Meja/Produk 5/Produk5gambar1.jpg",
      title: "Meja Makan Skandinavia",
      description:
        "Meja Makan Skandinavia adalah meja makan yang kokoh, elegan, dan multifungsi. Meja makan ini cocok untuk digunakan di berbagai macam ruangan.",
      rating: 4,
      reviews: 10,
      price: 4000000,
      sold: 10,
    },
    {
      id: 2,
      image: "./GambarProduk/Dataran/Kategori Meja/Produk 6/Produk6gambar1.jpg",
      title: "Linate Extendable Dining Table",
      description:
        "Linate Extendable Dining Table is a versatile, sturdy, and elegant dining table that can be extended based on your needs. Perfect for any dining area.",
      rating: 3,
      reviews: 5,
      price: 12000000,
      sold: 1,
      ongkoskirim: "Gratis Ongkir",
    },
    {
      id: 3,
      image: "./GambarProduk/Dataran/Kategori SideBoard/Produk 7/Produk7gambar1.jpg",
      title: "Dual Tone Sideboard",
      description:
        "Dual Tone Sideboard is a functional and stylish piece of furniture suitable for various spaces. It provides ample storage and adds aesthetic value to your room.",
      rating: 2,
      reviews: 5,
      price: 17969000,
      sold: 5,
      ongkoskirim: "Gratis Ongkir",
    },
    // Tambahkan data produk terbaru lainnya di sini
  ];

  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const handleProductClick = (productId) => {
    // Fungsi untuk menangani klik produk
    // Anda dapat menambahkan logika navigasi atau tindakan lain di sini.
  };

  // Penting
  const shortenTitle = (title) => {
    const words = title.split(" ");
    if (words.length > 3) {
      return words.slice(0, 3).join(" ") + "...";
    }
    return title;
  };

  return (
    <Container>
      <p style={{ fontSize: "2rem" }}>
        <b>Hey, New Arrivals Are Here.</b>
      </p>
      <Row>
        {produkData.map((produk) => (
          <Col xs={6} sm={6} md={4} lg={3} key={produk.id}>
            <Link to={`/Detailproduk`} style={{ textDecoration: "none" }}>
              <Card
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  position: "relative",
                  transition: "box-shadow 0.3s",
                }}
                onClick={() => handleProductClick(produk.id)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0px 4px 8px rgba(0, 0, 0, 0.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "none")
                }
              >
                <Badge
                  pill
                  bg="danger"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    fontSize: "0.8rem",
                  }}
                >
                  Produk Terbaru !!
                </Badge>
                <Card.Img
                  variant="top"
                  src={produk.image}
                  alt="Product"
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <p className="fw-bold" style={{ fontSize: "1rem" }}>
                    {/* Penting */}
                  {shortenTitle(produk.title)}
                  {/* End Penting */}
                  </p>
                  <div
                    style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    <Card.Text style={{ textAlign: "justify", fontSize: "0.9rem" }}>
                      {produk.description}
                    </Card.Text>
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      marginBottom: "-12px",
                    }}
                  >
                    {Array.from(
                      { length: Math.min(produk.rating, 5) },
                      (_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          style={{ color: "gold", fontSize: "0.9rem" }}
                        />
                      )
                    )}
                    <span style={{ marginLeft: "5px", fontSize: "0.8rem" }}>
                      {produk.rating} ({produk.reviews})
                    </span>
                  </div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {formatRupiah(produk.price)}
                    </span>
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white">
                  <div className="d-flex justify-content-between">
                    {produk.ongkoskirim === "Gratis Ongkir" && (
                      <Badge
                        pill
                        bg="success"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {" "}
                        <FontAwesomeIcon
                          icon={faTruckFast}
                          className="me-2"
                        />
                        {produk.ongkoskirim}
                      </Badge>
                    )}
                    <Badge pill bg="dark" style={{ fontSize: "0.65rem" }}>
                      Terjual {produk.sold}
                    </Badge>
                  </div>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <div
        style={{
          textAlign: "right",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          fontSize: "1rem",
        }}
      >
        <span style={{ marginRight: "5px" }}>
          <Link
            to="/Listseluruhproduk"
            style={{ textDecoration: "none", color: "black" }}
          >
            <b> Lihat Selengkapnya</b>
          </Link>
        </span>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <hr style={{ clear: "both" }} />
    </Container>
  );
}

export default ProdukTerbaru;
