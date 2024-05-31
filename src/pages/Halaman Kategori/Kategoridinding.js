import React, { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar Components/navbar";
import Footer from "../../components/Footer Components/footer";
import BottomNavBar from '../../components/Bottom Navbar/Bottomnavbar';
import Contentloading from '../../components/Loading Components/Contentloading';
import Contentkategoridinding from '../../components/Kategori Components/Contentkategoridinding';

const Kategoridinding = () => {
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
    <div>
      {isLoading ? (
        <Contentloading />
      ) : (
        <>
          <BottomNavBar />
      <Navbar />
     
<Contentkategoridinding />
      <Footer />
      </>
      )}
    </div>
  );
};

export default Kategoridinding;

