import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar Components/navbar';
import Footer from '../../components/Footer Components/footer';
import BottomNavBar from '../../components/Bottom Navbar/Bottomnavbar';
import Contentloading from '../../components/Loading Components/Contentloading';
import Contentkategoridataran from '../../components/Kategori Components/Contentkategoridataran';

function Kategoriground() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 1.5 detik
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      // Membersihkan timer jika komponen unmount sebelum loading selesai
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Contentloading />
      ) : (
        <>
          <BottomNavBar />
      <Navbar />
      
<Contentkategoridataran />
      <Footer />
      </>
      )}
    </>
  );
}

export default Kategoriground;