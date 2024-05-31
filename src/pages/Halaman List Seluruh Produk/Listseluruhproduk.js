import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar Components/navbar';
import Footer from '../../components/Footer Components/footer';
import BreadCrumb from "../../components/BreadCrumb Components/BreadCrumb";
import BottomNavBar from '../../components/Bottom Navbar/Bottomnavbar';
import Contentlistseluruhproduk from '../../components/List Seluruh Produk Components/Contentlistseluruhproduk';
import Contentloading from '../../components/Loading Components/Contentloading';

function Listseluruhproduk() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan loading selama 1.5 detik
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Membersihkan timeout saat komponen unmount
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        // Tampilkan komponen loading selama loading berlangsung
        <Contentloading />
      ) : (
        // Tampilkan konten setelah loading selesai
        <>
          <BottomNavBar />
          <Navbar />
          <BreadCrumb />
          <Contentlistseluruhproduk />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Listseluruhproduk;
