import React, { useState } from "react";
import { Card, Form, Image } from "react-bootstrap";

const dataPencarianProduk = [
  {
    id: 1,
    nama: "Meja Eropa",
    bintang: 5,
    varian: "2 Varian",
    harga: "Rp 550,000",
    terjual: "3x terjual",
    gambar: "./gambar/product-3.jpg",
  },
  {
    id: 2,
    nama: "Kursi Arabic",
    harga: "Rp 2.550,000",
    gambar: "./gambar/product-1.jpg",
    badge: "Produk Terbaru",
  },
  {
    id: 3,
    nama: "Kabinet Dinding",
    bintang: 4.6,
    varian: "6 Varian",
    harga: "Rp 1.550,000",
    terjual: "50+ terjual",
    gambar: "./gambar/product-8.jpg",
    badge: "Produk Terlaris",
  },
  {
    id: 4,
    nama: "Lemari Klasik",
    bintang: 4.8,
    varian: "3 Varian",
    harga: "Rp 10.150,000",
    terjual: "1x terjual",
    gambar: "./gambar/product-2.jpg",
  },
];

function Contentisimodalbottomnavbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    // Lakukan pencarian berdasarkan nama produk
    const filteredResults = dataPencarianProduk.filter((produk) =>
      produk.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Cari yang terbaik untuk rumahmu..."
        style={{ width: "100%", padding: "10px" }}
        onChange={handleSearch}
        value={searchTerm}
      />

      <hr />
      {searchTerm !== "" && searchResults.length > 0 && (
        <div className="d-flex justify-content-between">
          <span>
            Hasil Pencarian <b>"{searchTerm}"</b>
          </span>
          <span className="text-muted">{searchResults.length} produk</span>
        </div>
      )}

{searchResults.length === 0 && searchTerm !== "" && (
  <div className="justify-content-center mt-5">
    <div xs={12} md={6} className="text-center">
      <Image src="../gambar/Produk-tidak-ditemukan.png" alt="Product Not Found" style={{ maxWidth: "59%" }}/>
      <p style={{ marginTop: '10px', fontSize: '1.2rem' }}><b>Oops, maaf produk yang Anda cari tidak ditemukan.</b></p>
      <p style={{ fontSize: '18px', marginTop: "-10px"}}>Coba gunakan kata kunci lain.</p>
    </div>
  </div>
)}

      {searchResults.length > 0 && searchTerm !== "" && (
        searchResults.map((produk) => (
          <Card key={produk.id} className="mt-3">
            {produk.badge === "Produk Terlaris" && (
              <span className="position-absolute top-0 end-0 badge rounded-pill bg-primary" style={{ marginTop: "-6px" }}>Produk Terlaris</span>
            )}
            {produk.badge === "Produk Terbaru" && (
              <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger" style={{ marginTop: "-6px" }}>Produk Terbaru</span>
            )}
            <Card.Body className="d-flex align-items-center">
              <div style={{ flex: 1 }}>
                <img
                  src={produk.gambar}
                  alt="Gambar Produk"
                  style={{
                    maxWidth: "100px",
                    maxHeight: "90px",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div style={{ flex: 2 }}>
                <div className="d-flex justify-content-between">
                  <Card.Title className="fw-bold">{produk.nama}</Card.Title>
                  {produk.bintang && (
                    <span className="text-muted">
                      <i className="bi bi-star-fill" style={{ color: "gold" }}></i> {produk.bintang}
                    </span>
                  )}
                </div>
                {produk.varian && <span className="text-muted">{produk.varian}</span>}
                <div className="d-flex justify-content-between">
                  {produk.harga && <span className="text-muted">{produk.harga}</span>}
                  {produk.terjual && <span className="text-muted">{produk.terjual}</span>}
                </div>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
}

export default Contentisimodalbottomnavbar;
