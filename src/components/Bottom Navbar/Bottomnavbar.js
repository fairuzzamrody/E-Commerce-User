import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Modal, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FaHome } from "react-icons/fa";
import Contentisimodalbottomnavbar from "./Contentisimodalbottomnavbar";

function BottomNavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showSearchModal, setShowSearchModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) {
    return null;
  }

  const navLinkStyle = {
    textDecoration: "none",
  };

  return (
    <Navbar
      fixed="bottom"
      bg="white"
      style={{ borderStyle: "solid", borderColor: "rgba(245, 245, 220)" }}
    >
      <Container>
        <Nav className="justify-content-around" style={{ width: "100%" }}>
          <Nav.Link href="/">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FaHome />
              <div>Beranda</div>
            </div>
          </Nav.Link>

          <Nav.Link href="/Listseluruhproduk">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faTags} />
              <div>Produk</div>
            </div>
          </Nav.Link>
          <Link to="/pencarian" style={navLinkStyle}>
            <Nav.Link onClick={() => setShowSearchModal(true)}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
                <div>Pencarian</div>
              </div>
            </Nav.Link>
          </Link>

          <Nav.Link href="/Keranjang">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >

              <FontAwesomeIcon icon={faShoppingCart} />
              <div>Keranjang</div>
            </div>
          </Nav.Link>

          <Nav.Link href="/login">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
  

              <FontAwesomeIcon icon={faUser} />
              <div>Akun</div>
            </div>
          </Nav.Link>
        </Nav>
      </Container>
      {/* Modal Pencarian */}
      <Modal
        show={showSearchModal}
        onHide={() => setShowSearchModal(false)}
        centered
        backdrop="static" // Tambahkan prop backdrop="static" agar modal tidak dapat ditutup dengan mengklik di luar modal
      >
        <Modal.Header closeButton>
          <Modal.Title>Pencarian</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
          <Contentisimodalbottomnavbar />
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button variant="secondary" onClick={() => setShowSearchModal(false)}>
              Tutup
            </Button>
           
          </div>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default BottomNavBar;
