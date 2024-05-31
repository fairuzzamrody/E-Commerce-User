import React, { useState, useEffect, useRef } from "react";
import { Navbar, Container, Nav, Form, Button, InputGroup, Card } from "react-bootstrap";
import { BiSearch, BiUser, BiCart } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import ContentpencariandiNavbar from "./ContentpencariandiNavbar";

function ContentAkundanKeranjangdiNavbar() {
    const [searchText, setSearchText] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showContentdatalist, setShowContentdatalist] = useState(false);
    const cartItemCount = 3;
    const navigate = useNavigate();
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
  
    const handleSearch = (e) => {
      e.preventDefault();
      
      if (!searchText) {
        return;
      }
      
      setSearchText("");
      navigate("/produknotfound");
    };
  
    const handleChange = (e) => {
      setSearchText(e.target.value);
    };
  
    const handleInputClick = () => {
      setShowContentdatalist(true);
    };
  
    const handleDocumentClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowContentdatalist(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleDocumentClick);
      return () => {
        document.removeEventListener("click", handleDocumentClick);
      };
    }, []);
  
  return (
    <div>
        {!isMobile && (
            <Nav>
              <Nav.Link href="/login">
                <BiUser size={28} style={{ marginLeft: '26.5px' }} />
               
              </Nav.Link>
              <Nav.Link href="/Keranjang">
                <div className="position-relative">
                  <BiCart size={28} style={{ marginLeft: '25px' }} />
                 
                </div>
              </Nav.Link>
            </Nav>
          )}
    </div>
  )
}

export default ContentAkundanKeranjangdiNavbar