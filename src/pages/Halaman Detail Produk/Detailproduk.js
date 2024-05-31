import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar Components/navbar';
import Footer from '../../components/Footer Components/footer';
import Detailprodukkomponen from '../../components/Detail Produk Components/Detailprodukkomponen';
import BreadCrumb from "../../components/BreadCrumb Components/BreadCrumb";
import BottomNavBar from '../../components/Bottom Navbar/Bottomnavbar';
import Contentloading from '../../components/Loading Components/Contentloading';

const DetailProduk = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    scrollToTop();

    // Menampilkan loading selama 1.5 detik
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
          <Detailprodukkomponen />
          <Footer />
        </>
      )}
    </div>
  );
}

export default DetailProduk;
