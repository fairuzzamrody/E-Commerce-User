import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Halaman Dashboard/dasboard";
import Category from "./components/Dashboard/Kategori";
import Login from "./pages/Halaman Login/login";
import Daftar from "./pages/Halaman Registrasi/daftar";
import Kategoridinding from "./pages/Halaman Kategori/Kategoridinding";
import Kategoriground from './pages/Halaman Kategori/Kategoriground';
import Detailproduk from "./pages/Halaman Detail Produk/Detailproduk";
import Keranjang from "./pages/Halaman Keranjang/Keranjang";
import Checkoutproduk from "./pages/Halaman Checkout Produk/Checkoutproduk";
import Akunpelanggan from "./pages/Halaman Profil Pelanggan/Akun Pelanggan/Akunpelanggan";
import Tentangkami from "./pages/Halaman Tentang Kami/Tentangkami";
import FAQ from "./pages/Halaman FAQ/FAQ";
import Hasilpencarian from "./pages/Halaman Hasil Pencarian/Hasilpencarian";
import KategoriSC from "./pages/Halaman Kategori/KategoriSC";
import DetailprodukDiskon from "./pages/Halaman Detail Produk Diskon/Detailprodukdiskon";

import DetailPesananUserLunas from "./pages/Halaman Profil Pelanggan/Detail Pesanan Pelanggan/DetailPesananUserLunas";
import Detailpesananuserbelumbayar from "./pages/Halaman Profil Pelanggan/Detail Pesanan Pelanggan/Detailpesananuserbelumbayar";
import Detailpesananuserdibatalkan from "./pages/Halaman Profil Pelanggan/Detail Pesanan Pelanggan/Detailpesananuserdibatalkan";
// import Detailpesananuserlunas from "./pages/Halaman Profil Pelanggan/Detailpesananuserlunas";
import Invoicepesanan from "./pages/Halaman Invoice Pesanan/Invoicepesanan";
import Produknotfound from "./pages/Halaman Not Found/Produknotfound";
import Listprodukkategori from "./pages/Listprodukkategori"
import Listseluruhproduk from "./pages/Halaman List Seluruh Produk/Listseluruhproduk";
import MidtransPage from "./pages/MidtransPage";
import Pembayaranberhasil from "./pages/Pembayaranberhasil";

import Pembayarangagal from "./pages/Pembayarangagal";
import Listseluruhproduklastseen from "./pages/Halaman List Seluruh Produk Lastseen/Listseluruhproduklastseen";

import NotifikasidiAkunPelanggan from "./pages/Halaman Notifikasi Pelanggan/NotifikasidiAkunPelanggan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Kategori" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/Kategoridinding" element={<Kategoridinding />} />
        <Route path="/Kategoriground" element={<Kategoriground />} />
        <Route path="/Detailproduk" element={<Detailproduk />} />
        <Route path="/Keranjang" element={<Keranjang />} />
        <Route path="/Checkoutproduk" element={<Checkoutproduk />} />
        <Route path="/Akunpelanggan" element={<Akunpelanggan />} />
        <Route path="/Tentangkami" element={<Tentangkami />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Hasilpencarian" element={<Hasilpencarian />} />
        <Route path="/KategoriSC" element={<KategoriSC />} />
        <Route path="/Detailprodukdiskon" element={<DetailprodukDiskon />} />
        <Route path="/Detailpesananuserbelumbayar" element={<Detailpesananuserbelumbayar />} />
        <Route path="/DetailPesananUserLunas" element={<DetailPesananUserLunas />} />

        {/* <Route path="/Detailpesananuserlunas" element={<Detailpesananuserlunas />} /> */}
        <Route path="/Detailpesananuserdibatalkan" element={<Detailpesananuserdibatalkan />} />

        <Route path="/Invoicepesanan" element={<Invoicepesanan />} />
        <Route path="/Produknotfound" element={<Produknotfound />} />
        <Route path="/Listprodukkategori" element={<Listprodukkategori />} />
        <Route path="/Listseluruhproduk" element={<Listseluruhproduk />} />
        <Route path="/Midtranspage" element={<MidtransPage/>} />
        <Route path="/Pembayaranberhasil" element={<Pembayaranberhasil />}/>
        <Route path="/Pembayarangagal" element={<Pembayarangagal/>}/>
        <Route path="/NotifikasidiAkunPelanggan" element={<NotifikasidiAkunPelanggan/>}/>


        
        <Route path="/Listseluruhproduklastseen" element={<Listseluruhproduklastseen />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
