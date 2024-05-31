import React from 'react';
import PesananLunas from './PesananLunas';
import Pesananbelumbayar from './Pesananbelumbayar';
import Pesanandibatalkan from './Pesanandibatalkan';

const Pesanansaya = () => {
  return (
    <div>
      <PembayaranBelumDibayar />
      <hr />
      <PembayaranLunas />
      <hr />
      <PembayaranKedaluwarsa />
    </div>
  );
};

const PembayaranBelumDibayar = () => {
  return (
    <div>
      <h3>Belum Dibayar.</h3>
      {/* Card Pesanan Belum Bayar */}
      <Pesananbelumbayar />
    </div>
  );
};

const PembayaranLunas = () => {
  return (
    <div>
      <br />
      <h3>Lunas.</h3>
      {/* Card Pesanan Lunas / Sudah Bayar */}
      <PesananLunas />
    </div>
  );
};

const PembayaranKedaluwarsa = () => {
  return (
    <div>
      <br />
      <h3>Dibatalkan.</h3>

      <Pesanandibatalkan />
    </div>
  );
};

export default Pesanansaya;
