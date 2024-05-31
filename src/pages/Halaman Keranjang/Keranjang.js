import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../components/BreadCrumb Components/BreadCrumb';
import Navbar from '../../components/Navbar Components/navbar';
import Footer from '../../components/Footer Components/footer';
import { Container } from 'react-bootstrap';
import Itemprodukkeranjang from '../../components/Keranjang Components/Itemprodukkeranjang';
import Contentloading from '../../components/Loading Components/Contentloading';
import Bottomnavbaruntukkeranjang from '../../components/Bottom Navbar/Bottomnavbaruntukkeranjang';

function Keranjang() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Tampilkan loading selama 1.5 detik
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Membersihkan timer jika komponen dibongkar sebelum timeout berakhir
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Contentloading />
      ) : (
        <>
          <Bottomnavbaruntukkeranjang />
          <Navbar />
          <BreadCrumb />
          <Container>
            <div className="text-center mt-5 mb-5">
              <h1><b>Keranjang Belanja Anda.</b></h1>
            </div>
            <Itemprodukkeranjang />
          </Container>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Keranjang;
