import React, { useState, useEffect } from 'react';
import { Image, Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar Components/navbar';
import Footer from '../../components/Footer Components/footer';
import BottomNavBar from '../../components/Bottom Navbar/Bottomnavbar';
import Contentloading from '../../components/Loading Components/Contentloading';

const centerContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100px',
};

function ProdukNotFound() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Loading selama 1.5 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1900);

    // Membersihkan timer saat komponen unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Contentloading />
      ) : (
        <>
          <BottomNavBar />
          {/* Komponen Navbar */}
          <Navbar />

          {/* Komponen BreadCrumb */}

          {/* Bagian gambar not found */}
          <Container style={centerContentStyle}>
            <div className="justify-content-center mt-5">
              <div xs={12} md={6} className="text-center">
                <Image src="../gambar/Produk-tidak-ditemukan.png" alt="Product Not Found" style={{ maxWidth: "59%" }} />
                <p style={{ marginTop: '10px', fontSize: '1.2rem' }}><b>Oops, maaf produk anda cari tidak ditemukan.</b></p>
                <p style={{ fontSize: '18px', marginTop: "-10px" }}>Coba gunakan kata kunci lain.</p>
              </div>
            </div>
          </Container>

          <Footer />
        </>
      )}
    </>
  );
}

export default ProdukNotFound;
