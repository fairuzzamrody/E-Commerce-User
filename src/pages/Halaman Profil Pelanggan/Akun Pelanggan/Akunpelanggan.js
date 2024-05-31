import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

import Navbar from "../../../components/Navbar Components/navbar";
import Footer from "../../../components/Footer Components/footer";
import BreadCrumb from "../../../components/BreadCrumb Components/BreadCrumb";
import Pesanansaya from "../../../components/Pesanan Pelanggan Components/Pesanansaya";
import Profilsaya from "../../../components/Profil Pelanggan Components/Profilsaya";
import BottomNavBar from "../../../components/Bottom Navbar/Bottomnavbar";
import Contentloading from "../../../components/Loading Components/Contentloading";

const ProfilPelanggan = () => {
  // Menginisialisasi activeTab dengan nilai yang ada di local storage atau "profile" jika tidak ada.
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "profile"
  );

  // State untuk mengendalikan tampilan loading.
  const [isLoading, setIsLoading] = useState(true);

  // Fungsi untuk menampilkan konten setelah loading.
  const showContent = () => {
    setIsLoading(false);
  };

  // Efek ini akan terpanggil ketika komponen ProfilPelanggan dimuat.
  // Ini digunakan untuk mengambil nilai dari local storage dan menginisialisasi activeTab.
  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(storedTab);
    }
    // Simulasi loading selama 1.5 detik sebelum menampilkan konten.
    setTimeout(showContent, 1500);
  }, []);

  // Fungsi untuk mengubah tab aktif dan menyimpannya di local storage.
  const handleTabChange = (tab) => {
    setIsLoading(true); // Menampilkan loading saat mengubah tab.
    setTimeout(() => {
      setActiveTab(tab);
      localStorage.setItem("activeTab", tab); // Menyimpan tab aktif ke dalam local storage
      setIsLoading(false); // Menyembunyikan loading setelah tab diubah.
    }, 1500); // Simulasi loading selama 1.5 detik sebelum mengubah tab.
  };

  return (
    <div>

      {isLoading && <Contentloading />} {/* Menampilkan loading jika isLoading true */}
      <BottomNavBar />
      <Navbar />
      <BreadCrumb />
      
      <div className='text-center mt-5 mb-5'>
        <h1>
          <b>Akun Saya.</b>
        </h1>
      </div>
      <Container>

        <Row>
          <Col md={6}>
            <Tab.Container activeKey={activeTab}>
              <Nav variant='pills' className='flex-column'>
                <Nav.Item>
                  <Nav.Link
                    eventKey='profile'
                    onClick={() => handleTabChange("profile")}
                    className={
                      activeTab === "profile"
                        ? "nav-link active bg-dark"
                        : "nav-link text-dark"
                    }
                  >
                    Profil Saya
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Tab.Container>
            <hr />
          </Col>
          <Col md={6}>
            <Tab.Container activeKey={activeTab}>
              <div className='d-flex justify-content-end position-relative'>
                <span
                  className='position-absolute translate-middle badge rounded-pill bg-primary'
                  style={{ right: "-20px" }}
                >
                  1
                </span>
              </div>
              <Nav variant='pills' className='flex-column'>
                <Nav.Item>
                  <Nav.Link
                    eventKey='orders'
                    onClick={() => handleTabChange("orders")}
                    className={
                      activeTab === "orders"
                        ? "nav-link active bg-dark"
                        : "nav-link text-dark"
                    }
                  >
                    Pesanan Saya
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Tab.Container>
            <hr />
          </Col>
        </Row>

        <div className='mt-4'>
          {activeTab === "profile" && (
            <Tab.Container activeKey={activeTab}>
              <Tab.Content>
                <Tab.Pane eventKey='profile'>
                  <Row>
                    <Col>
                      <Container>
                        {!isLoading && <Profilsaya />} {/* Menampilkan Profilsaya setelah loading */}
                      </Container>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          )}

          {activeTab === "orders" && (
            <Tab.Container activeKey={activeTab}>
              <Tab.Content>
                <Tab.Pane eventKey='orders'>
                  <Row>
                    <Col>
               
{!isLoading && <Pesanansaya />}
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          )}
          <br />
        </div>
      </Container>
      
      <Footer />
    </div>
  );
};

export default ProfilPelanggan;
