import React from 'react';
import { SuperBalls } from '@uiball/loaders'

function Contentloading() {
  const loadingContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  };

  return (
    <div style={loadingContainerStyle}>
        {/* // TAMPILKAN KODE INI DI SAAT MEMBUKA HALAMAN DAN SAAT MENYIMPAN DATA DAN APAPUN, 
        Jika ada sweet alert maka TAMPILKAN SWEET ALERT 2 TERLEBIH DAHULU, KEMUDIAN LOADING INI
        JANGAN SAMPAI KEBALIK */}

<SuperBalls 
 size={70}
 speed={1.4} 
 color="black" 
/>









    </div>    
  );
}

export default Contentloading;
