import React, { useState, useEffect } from 'react';
import { Button, Collapse, Row, Col, Container, Card } from 'react-bootstrap';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import Navbar from '../Navbar Components/navbar';
import Footer from '../Footer Components/footer';
import BreadCrumb from "../BreadCrumb Components/BreadCrumb";
import BottomNavBar from '../Bottom Navbar/Bottomnavbar';
import Contentloading from '../Loading Components/Contentloading';

function ContentFAQ() {
    const [openCollapse, setOpenCollapse] = useState(null);
    const [loading, setLoading] = useState(true); // State untuk loading
  
    const toggleCollapse = (collapseId) => {
      setOpenCollapse(prevCollapse => (prevCollapse === collapseId ? null : collapseId));
    };
  return (
    <div>
         <Container>
        <div className="text-center mt-5 mb-4">
          <h1><b>Frequently Asked Questions (FAQ).</b></h1>
        </div>
        <br />
        <FAQQuestionCard
          title="1. Pemesanan"
          collapseId="collapse1"
          isOpen={openCollapse === 'collapse1'}
          toggleCollapse={toggleCollapse}
        >
          <p><b>A. Bagaimana cara melakukan pemesanan produk di AR-Furniture?</b></p>
          <ul>
            <li>Pilih produk yang Anda inginkan lalu klik "Tambah ke keranjang"</li>
            <li>Produk tersebut akan masuk secara otomatis ke keranjang belanja Anda,
              kemudian Anda bisa memilih untuk melanjutkan belanja atau ke proses selanjutnya
              yaitu checkout. Jika Anda ingin melihat detail dan menyelesaikan pesanan Anda,
              klik tombol "CART" pada pop up atau "KERANJANG BELANJA" yang berada di posisi kanan atas layar.</li>
            <li>Pada halaman detail pesanan, pastikan pesanan sudah sesuai dengan yang Anda pesan, klik "CHECKOUT" untuk memproses ke langkah selanjutnya.</li>
          </ul>

          <p><b>B. Untuk Pelanggan Baru Yang Belum Memiliki Akun</b></p>
          <ul>
            <li>Untuk pelanggan baru akan diminta untuk memasukkan nama, email, telepon, alamat, dan password. Setelah itu, klik tombol "Daftar".</li>
          </ul>

          <p><b>C. Untuk Pelanggan Yang Sudah Memiliki Akun</b></p>
          <ul>
            <li>Untuk pelanggan yang sudah terdaftar, Anda bisa membeli produk.</li>
            <li>Pilih metode pembayaran, lalu klik “CONTINUE” untuk menyelesaikan pesanan.</li>
            <li>Periksa pesanan Anda dengan teliti apabila sudah sesuai klik “CONFIRM ORDER”.</li>
            <li>Setelah proses pesanan selesai, Anda akan mendapatkan “ORDER SUMMARY” silakan klik “CONTINUE”.</li>
            <li>Mohon memasukkan detail pembayaran dan klik “CONFIRM PAYMENT”.</li>
          </ul>
          </FAQQuestionCard>

          <FAQQuestionCard
          title="2. Pembayaran"
          collapseId="collapse2"
          isOpen={openCollapse === 'collapse2'}
          toggleCollapse={toggleCollapse}
        >
          <p><b>A. Metode pembayaran apa saja yang tersedia?</b></p>
          <ul>
            <li>Metode pembayaran yang kami gunakan adalah Midtrans.
              Midtrans adalah partner pembayaran AR-Furniture. Untuk metode pembayaran yang kami terima adalah sebagai berikut:</li>
            <ul>
              <li>Kartu Kredit (Credit Card)</li>
              <li>Transfer Bank Virtual Account</li>
              <li>E-Wallet</li>
            </ul>
          </ul>

          <p><b> Catatan Penting</b></p>
          <ul>
            <p>Harap melakukan transfer maksimal 48 jam setelah Anda melakukan pesanan,
              jika tidak transfer dalam kurun waktu 48 jam, maka transaksi akan dibatalkan secara otomatis oleh kami.</p>
          </ul>

          <p><b>B. Apakah aman jika melakukan transaksi di AR-Furniture?</b></p>
          <ul>
            <p>Sangat aman. Kami bekerja sama dengan Midtrans yang dapat menjamin keamanan transaksi Anda di AR-Furniture.
              Demi keamanan, kami tidak mengumpulkan informasi kartu kredit Anda.
              Setelah Anda melakukan pemesanan, Anda akan diarahkan ke situs aman dan diminta untuk memasukkan nomor PIN telepon sekali pakai untuk menjaga keamanan akun Anda.</p>
          </ul>
          </FAQQuestionCard>

          <FAQQuestionCard
          title="3. Augmented Reality (WebAR)"
          collapseId="collapse3"
          isOpen={openCollapse === 'collapse3'}
          toggleCollapse={toggleCollapse}
        >
          <p><b>A. Apakah Augmented Reality pada AR-Furniture bisa diakses di Android dan iOS?</b></p>
          <ul>
            <li>Tentu saja, Augmented Reality pada AR-Furniture bisa digunakan pada Android dan iOS</li>
          </ul>

          <ul>
          <p><b> Catatan Penting :</b></p>

            <p>Augmented Reality hanya bisa digunakan pada Ponsel atau Tablet Android dan iOS yang kompatibel atau mendukung Augmented Reality.</p>
          </ul>

          <p><b>B. Apakah Augmented Reality pada AR-Furniture bisa diakses di Laptop atau Komputer?</b></p>
          <ul>
            <li>Mohon maaf <b>TIDAK BISA!!</b> Augmented Reality pada AR-Furniture hanya bisa diakses pada Android dan iOS yang kompatibel atau mendukung Augmented Reality</li>
          </ul>

          <p><b>C. Bagaimana cara mengetahui apakah ponsel / tablet saya mendukung Augmented Reality?</b></p>
          <ul>
            <li>
              Untuk mengetahui apakah posel / tablet Anda bisa menjalankan Augmented Reality,
              silakan klik <b><a href="https://developers.google.com/ar/devices#:~:text=device%20list.-,Device%20list%20(table),-The%20following%20table" target="_blank" rel="noreferrer">Android</a></b> ||
              <b><a href="https://www.apple.com/augmented-reality/#footnote-2:~:text=Find%20out%20if%20your%20iOS%20or%C2%A0iPadOS" target="_blank" rel="noreferrer"> iOS</a></b>
            </li>
          </ul>

          <p><b>D. Bagaimana agar saya tetap bisa melihat produk furnitur 3D meskipun tidak bisa menggunakan Augmented Reality?</b></p>
          <ul>
            <li>AR-Furniture menyediakan alternatif visualisasi 3D pada setiap produk.
              Jadi, meskipun Anda tidak bisa menggunakan Augmented Reality, Anda tetap bisa memvisualisasikan produk 3D dan berinteraksi dengan model 3D.</li>
          </ul>

          <p><b>E. Bagaimana cara menggunakan Augmented Reality?</b></p>
          <ul>
            <p>Augmented reality pada produk AR-Furniture bisa ditemukan pada setiap produk furnitur.
              Untuk menggunakannya, Anda bisa klik tombol “Hey, Gunakan AR” untuk mulai menggunakan Augmented Reality.
              Tombol akan tersedia apabila perangkat sudah mendukung augmented reality.</p>
          </ul>

          <ul>
            <p><b>Catatan Penting :</b></p>
            <p>AR-Furniture menyediakan 2 Opsi untuk menampilkan objek 3D pada Augmented Reality, yaitu:</p>
            <ul>
              <li>Arahkan Ponsel Anda pada lantai</li>
              <li>Arahkan Ponsel Anda pada dinding</li>
            </ul>
          </ul>
          </FAQQuestionCard>
      </Container>
    </div>
  )
}
function FAQQuestionCard({ title, collapseId, isOpen, toggleCollapse, children }) {
    return (
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col>
              <Card.Title className="fs-4 fs-md-5">{title}</Card.Title>
            </Col>
            <Col xs="auto">
              <Button
                onClick={() => toggleCollapse(collapseId)}
                variant="light"
                className={`collapse-button ${isOpen ? 'open' : ''}`}
                style={{ borderRadius: '15px' }}
              >
                {isOpen ? <BiChevronUp size={30} /> : <BiChevronDown size={30} />}
              </Button>
            </Col>
          </Row>
        </Card.Body>
        <Collapse in={isOpen}>
          <div>
            <br />
            <Card.Body>
              {children}
            </Card.Body>
          </div>
        </Collapse>
      </Card>
    );
  }

export default ContentFAQ