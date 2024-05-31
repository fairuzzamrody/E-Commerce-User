import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar Components/navbar';
import Footer from '../../../components/Footer Components/footer';
import BreadCrumb from "../../../components/BreadCrumb Components/BreadCrumb";
import Detailpesananbelumbayar from '../../../components/Detail Pesanan Components/Detailpesananbelumbayar';
import BottomNavBar from '../../../components/Bottom Navbar/Bottomnavbar';
import Contentloading from '../../../components/Loading Components/Contentloading';

function Detailpesananuserbelumbayar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Menunggu selama 1.5 detik sebelum menghilangkan efek loading
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Membersihkan timeout saat komponen tidak lagi terlihat
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        // Tampilkan efek loading selama isLoading adalah true
        <Contentloading />
      ) : (
        // Setelah loading selesai, tampilkan konten aktual
        <>
          <BottomNavBar />
          <Navbar />
          <BreadCrumb />
          <div className="text-center mt-5 mb-5">
            <h1><b>Detail Pesanan Saya.</b></h1>
          </div>
          
          <Detailpesananbelumbayar />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Detailpesananuserbelumbayar;
