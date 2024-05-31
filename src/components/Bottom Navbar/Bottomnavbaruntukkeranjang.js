import React, { useState, useEffect } from "react";
import { Navbar, Nav,  Button, Container} from "react-bootstrap";

function Bottomnavbaruntukkeranjang() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  return (
    <div>
      <Navbar
        fixed="bottom"
        bg="white"
        style={{
          borderStyle: "solid",
          borderColor: "rgba(245, 245, 220)",
          justifyContent: "center", // Pusatkan horizontal
          alignItems: "center", // Pusatkan vertikal
          height: "70px", // Atur tinggi navbar sesuai kebutuhan Anda
        }}
      >
        <Container>
          <Nav className="justify-content-between" style={{ width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div class="form-check" style={{ textAlign: "center", marginRight: "10px" }}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label"
                  for="flexCheckDefault"
                  style={{ display: "block" }} // Atur display ke "block" agar label berada di tengah
                >
                  Semua
                </label>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
              <p style={{ marginRight: "9px", fontSize: "0.86rem", marginTop:"20px" }}>Total : <b>Rp 1.000.000</b>
              <br/>
              Ongkir : <b>Rp 5.000</b></p>
              <Button className="btn-md btn-dark" href="/Checkoutproduk">Checkout(0)</Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Bottomnavbaruntukkeranjang;
