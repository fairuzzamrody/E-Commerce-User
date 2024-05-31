import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar Components/navbar';
import Footer from '../../components/Footer Components/footer';
import BreadCrumb from '../../components/BreadCrumb Components/BreadCrumb';
import Kategori from '../../components/Dashboard/Kategori';
import BottomNavBar from '../../components/Bottom Navbar/Bottomnavbar';
import Contentloading from '../../components/Loading Components/Contentloading';

function KategoriSC() {
  const kategoriRef = useRef(null);
  const [showLoader, setShowLoader] = useState(true); // State untuk mengontrol visibilitas loader

  useEffect(() => {
    // Menggeser ke atas halaman saat komponen telah dimuat
    window.scrollTo(0, 0);

    // Fokus ke elemen "Temukan Kategori Pilihan Anda" setelah halaman dimuat
    if (kategoriRef.current) {
      kategoriRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Menghilangkan loader setelah 1.5 detik
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    // Membersihkan timer saat komponen dibongkar
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <BottomNavBar />
      <Navbar />
      <BreadCrumb />
      {showLoader && <Contentloading />} {/* Menampilkan loader jika showLoader true */}
      <div className="text-center mt-5 mb-5" ref={kategoriRef}>
        <h1 style={{ fontSize: "1.6rem" }}><b>Tentukan Kategori Pilihan Anda.</b></h1>
      </div>
      <div>
        <Kategori />
      </div>
      <Footer />
    </div>
  );
}

export default KategoriSC;
