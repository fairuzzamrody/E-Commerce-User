import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Badge,
  Modal,
  Button,
  Container,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faSearch,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FaHome } from "react-icons/fa";

function Bottomnavbaruntukdetailproduk() {
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

  const buttonStyle = {
    padding: "10px", // Atur padding tombol
    height: "100%", // Atur tinggi tombol
  };

  return (
    <Navbar
      fixed="bottom"
      bg="white"
      style={{ borderStyle: "solid", borderColor: "rgba(245, 245, 220)" }}
    >
      <Container>
        <Nav className="justify-content-between" style={{ width: "100%" }}>
          <Nav.Link href="/Keranjang">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button style={buttonStyle} variant="dark">Masukkan Keranjang</Button>
            </div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Bottomnavbaruntukdetailproduk;
