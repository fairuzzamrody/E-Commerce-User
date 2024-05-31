import React, { useState, useEffect } from 'react';
import Contentpembayaranberhasil from '../components/Informasi Mengenai Pembayaran/Contentpembayaranberhasil';
import Contentloading from '../components/Loading Components/Contentloading';
import BottomNavBar from '../components/Bottom Navbar/Bottomnavbar';

function Pembayaranberhasil() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mengatur loading menjadi false setelah 1.5 detik
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Membersihkan timeout saat komponen tidak lagi digunakan
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <Contentloading />
      ) : (
        <div>
          <BottomNavBar />
          <Contentpembayaranberhasil />
        </div>
      )}
    </div>
  );
}

export default Pembayaranberhasil;
