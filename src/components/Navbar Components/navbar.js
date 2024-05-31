import React, { useState, useEffect, useRef } from "react";
import { Navbar, Container} from "react-bootstrap";
import ContentpencariandiNavbar from "./ContentpencariandiNavbar";
import ContentAkundanKeranjangdiNavbar from "./ContentAkundanKeranjangdiNavbar";

function CustomNavbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div>
      <Navbar bg="white">
        <Container>
          <Navbar.Brand href="/">
            <img src="./gambar/logo.png" width="auto" className="d-inline-block align-top img-fluid" alt="" style={{ maxHeight: '70px' }} />
          </Navbar.Brand>
          
         <ContentpencariandiNavbar />
        <ContentAkundanKeranjangdiNavbar />
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
