import React, { useState, useEffect } from 'react';
import Invoicekomponen from '../../components/Invoice Components/Invoicekomponen';
import Contentloading from '../../components/Loading Components/Contentloading';

function Invoicepesanan() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Setelah 1.5 detik, loading dihentikan
    }, 1500);

    return () => clearTimeout(timer); // Membersihkan timer jika komponen unmount
  }, []);

  return (
    <div>
      {isLoading ? (
        <Contentloading />
      ) : (
        <Invoicekomponen />
      )}
    </div>
  );
}

export default Invoicepesanan;
