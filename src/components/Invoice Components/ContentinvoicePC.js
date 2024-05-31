import React from "react";
import { Card, Table, Row, Col } from "react-bootstrap";

function ContentinvoicePC() {
  // Data produk yang Anda pesan
  const products = [
    {
      no: 1,
      produk: "Produk 1",
      varian: "Varian 1",
      hargaProduk: "Rp. 100,000",
      kuantitas: 2,
    },
    {
      no: 2,
      produk: "Produk 2",
      varian: "Varian 2",
      hargaProduk: "Rp. 150,000",
      kuantitas: 3,
    },
    // Tambahkan produk lain sesuai kebutuhan
  ];

  // Menghitung subtotal dan total kuantitas
  const totalKuantitas = products.reduce((acc, product) => acc + product.kuantitas, 0);
  const totalSubtotal = products.reduce((acc, product) => {
    const harga = parseInt(product.hargaProduk.replace(/[^0-9]/g, ""), 10);
    return acc + harga * product.kuantitas;
  }, 0);

  return (
    <div>
 <Card>
					{/* Tambahkan badge ribbon bertuliskan paid disini*/}
					<Card.Header className="bg-white">
						<div className="d-flex align-items-center justify-content-between">
							<img
								src="../gambar/logo.png"
								style={{ marginRight: "10px", maxHeight: "40px" }}
								alt=""
							/>
							<span style={{ fontSize: "0.85rem" }}>
								AR-F/ORD-003/TRX-003/INV-001
							</span>
						</div>
					</Card.Header>
					<Card.Body>
					
							<Row>
								<Col xs={4}>
									<p>
										<b>No. Pesanan</b>
									</p>
									<p>AR-F/ORD-20230815-0003</p>
									<p>
										<b>No. Transaksi</b>
									</p>
									<p>AR-F/ORD-20230815-0003</p>
									<p>
										<b>Informasi Pemesan</b>
									</p>
									<span>John Doe</span><br/>
									<span>john.doe@example.com</span><br/>
									<span>081-02172-781</span>
								</Col>
								<Col xs={4}>
									<div>
										<p>
											<b>Informasi Alamat Pengiriman</b>
										</p>
										<p> Jalan Raya No. 123</p>
										<p>
											<b>Status Pembayaran</b>
										</p>
										<h4 style={{ fontSize: "1.2rem" }}>
											<b>
												<span className="badge rounded-pill text-bg-success">
													Sudah Dibayar
												</span>
											</b>
										</h4>
									</div>
								</Col>
								<Col xs={4}>
									<Row>
										<Col xs={12}>
											<p>
												<b>Waktu Pemesanan</b>
											</p>
											<p>2023-01-19 03:12:06</p>
											<p>
												<b>Waktu Pembayaran </b>
											</p>
											<p>2023-01-19 03:12:06</p>
											<p>
												<b>Metode Pembayaran</b>
											</p>
											<p>BCA</p>
										</Col>
										<Col></Col>
									</Row>
								</Col>
							</Row>
					</Card.Body>
				</Card>
                <Card.Title className="mt-3 fw-bold mb-3">Produk Yang Anda Pesan.</Card.Title>
          <Table striped bordered hover >
            <thead>
              <tr>
                <th className="text-center">No</th>
                <th className="text-center">Produk</th>
                <th className="text-center">Varian</th>
                <th className="text-center">Harga Produk</th>
                <th className="text-center">Kuantitas</th>
                <th className="text-center">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="text-center">{product.no}</td>
                  <td className="text-center">{product.produk}</td>
                  <td className="text-center">{product.varian}</td>
                  <td className="text-center">{product.hargaProduk}</td>
                  <td className="text-center">{product.kuantitas}x</td>
                  <td className="text-center">{`Rp. ${parseInt(
                    product.hargaProduk.replace(/[^0-9]/g, ""),
                    10
                  ) * product.kuantitas}`}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4"></td>
                <td className="text-center">
                  <b>Total Kuantitas</b>
                </td>
                <td className="text-center">
                  <b>{totalKuantitas} Produk</b>
                </td>
              </tr>
              <tr>
                <td colSpan="4"></td>
                <td className="text-center">
                  <b>Total Subtotal</b>
                </td>
                <td className="text-center">
                  <b>{`Rp. ${totalSubtotal.toLocaleString()}`}</b>
                </td>
              </tr>
            </tfoot>
          </Table>
 <Card>
    <Card.Body>
        <div className="d-flex justify-content-between">
        <p>Subtotal untuk Produk</p>
        <p> Rp24.000</p>
        </div>
        <div className="d-flex justify-content-between">
        <p>Total Diskon untuk Produk
 </p>
        <p> -</p>
        </div>
        <div className="d-flex justify-content-between">
        <p>Subtotal Pengiriman </p>
        <p> Rp8.000</p>
        </div>
        <div className="d-flex justify-content-between">
        <p>Total Diskon Pengiriman 
 </p>
        <p> -Rp8.000</p>
        </div>
    </Card.Body>
    <Card.Footer>
    <div className="d-flex justify-content-between">
        <h5>Total Pembayaran

 </h5>
        <h5>  Rp. 650,000
</h5>
        </div>
    </Card.Footer>
 </Card>
    </div>
  );
}

export default ContentinvoicePC;
