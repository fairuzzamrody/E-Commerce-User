import React, { useState, useEffect } from 'react';
import Contentloading from '../components/Loading Components/Contentloading';
import BottomNavBar from '../components/Bottom Navbar/Bottomnavbar';
import Contentpembayarangagal from '../components/Informasi Mengenai Pembayaran/Contentpembayarangagal';

function Pembayarangagal() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set isLoading to false after 1.5 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Clear the timeout when the component is unmounted
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <Contentloading />
      ) : (
        <PembayaranContent />
      )}
    </div>
  );
}

function PembayaranContent() {
  return (
    <div>
      <BottomNavBar />
      <Contentpembayarangagal />
    </div>
  );
}

export default Pembayarangagal;
