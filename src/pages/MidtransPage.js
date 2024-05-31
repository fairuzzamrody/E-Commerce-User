import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CLIENT_KEY = 'SB-Mid-client-weDpxZPXU9PvxvZQ';
const SNAP_TOKEN = 'SB-Mid-server-Kh6yqDJmzgain8WGQVFjNbQ-';

 // CLIENT KEY : SB-Mid-client-weDpxZPXU9PvxvZQ
    // SERVER KEY : SB-Mid-server-Kh6yqDJmzgain8WGQVFjNbQ-
    // MERCHANT ID : G398501050

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Menengahkan secara horizontal
  justifyContent: 'center', // Menengahkan secara vertikal
  height: '100vh', // Mengisi tinggi layar penuh
};

function App() {
  useEffect(() => {
    const payButton = document.getElementById('pay-button');

    payButton.addEventListener('click', () => {
      loadSnapScript();
    });
  }, []);

  const loadSnapScript = () => {
    const script = document.createElement('script');
    script.src = 'https://app.stg.midtrans.com/snap/snap.js';
    script.async = true;
    script.dataset.clientKey = CLIENT_KEY;

    script.onload = () => {
      window.snap.embed(SNAP_TOKEN, {
        embedId: 'snap-container',
      });
    };

    document.body.appendChild(script);
  };

  return (
    <div style={containerStyle}>
      <Button id="pay-button">Pay!</Button>
      <div id="snap-container"></div>
      {/* Hapus teks dan tombol di bawah jika terkoneksi ke Midtrans */}
      
      <p>Tahap Selanjutnya jika sudah selesai membayar</p>
      <Link to="/Pembayaranberhasil">
        <Button>Tahapan Selanjutnya</Button>
      </Link>
    </div>
  );
}

export default App;
