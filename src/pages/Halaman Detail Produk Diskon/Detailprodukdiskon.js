import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar Components/navbar';
import Footer from '../../components/Footer Components/footer';
import Detailprodukkomponenfs from '../../components/Detail Produk Diskon Components/Detailprodukkomponenfs';
import BreadCrumb from "../../components/BreadCrumb Components/BreadCrumb";
import BottomNavBar from '../../components/Bottom Navbar/Bottomnavbar';
import Contentloading from '../../components/Loading Components/Contentloading';

function Detailprodukdiskon() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fungsi untuk menggulir ke atas halaman
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Panggil fungsi scrollToTop saat halaman dimuat
    scrollToTop();

    // Tampilkan loading selama 1.5 detik
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Contentloading />
      ) : (
        <>
          <BottomNavBar />
          <Navbar />
          <BreadCrumb />
          <Detailprodukkomponenfs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Detailprodukdiskon;
