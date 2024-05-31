import React from 'react'
import { Card, Row, Col, Badge } from 'react-bootstrap';

function ComponentRingkasanPesananCheckout() {
    function formatRupiah(number) {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	}
  return (
    <div>
        <div className="mb-4">
					<h4 style={{ marginBottom: "25px", marginTop: " 30px" }}>
						{" "}
						<b>Ringkasan Pesanan Anda.</b>
					</h4>

					<Card className="mb-4">
						<Card.Body>
							<div
								className="d-flex justify-content-between"
								style={{ marginBottom: "-20px" }}
							>
								<p className="fw-bold" style={{ fontSize: "20px" }}>
									Rician Pesanan
								</p>
							</div>
							<hr />
							<Row>
								<Col className="d-flex flex-column">
									{" "}
									{/* Menggunakan class "d-flex flex-column" untuk mengatur elemen dalam kolom */}
									<img
										src="./gambar/product-5.jpg"
										alt="Produk"
										style={{
											maxWidth: "130px",
											borderRadius: "10px",
											marginLeft: "17px",
										}}
									/>
								</Col>

								<Col className="d-flex flex-column">
									<div>
										<p className="fw-bold" style={{ fontSize: "1.2rem" }}>
											Kursi Klasik Eropa
										</p>
										<p className="text-muted">Varian : Biru</p>
										<span>Kuantitas : 1x</span>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
					<Card>
            <Card.Body>
              <p style={{ fontSize: "20px" }}>
                <b>Rincian Harga</b>
              </p>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Harga Satuan: </p>
                <p>Rp 500.000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Harga Flash Sale:</p>
                <p>
                  Rp 500.000{" "}
                  <span class="badge rounded-pill text-bg-warning">-25%</span>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Sub Total Produk: </p>
                <p>Rp 500.000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Ongkos Kirim: </p>
                <p>Rp 500.000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Sub Total Ongkos Kirim: </p>
                <p>-Rp 500.000</p>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-between">
                <p className="fw-bold">Total Pesanan: </p>
                <p className="fw-bold ">Rp 500.000</p>
              </div>
            </Card.Footer>
          </Card>
				</div>
				<hr />
				<Card className="mb-4 mt-2">
					<Card.Body>
						<div
							className="d-flex justify-content-between"
							style={{ marginBottom: "-20px" }}
						>
							<p className="fw-bold" style={{ fontSize: "20px" }}>
								Rician Pesanan
							</p>
						</div>
						<hr />
						<Row>
							<Col className="d-flex flex-column">
								{" "}
								{/* Menggunakan class "d-flex flex-column" untuk mengatur elemen dalam kolom */}
								<img
									src="./gambar/product-2.jpg"
									alt="Produk"
									style={{
										maxWidth: "130px",
										borderRadius: "10px",
										marginLeft: "17px",
									}}
								/>
							</Col>

							<Col className="d-flex flex-column">
								<div>
									<p className="fw-bold" style={{ fontSize: "1.2rem" }}>
										Sofa Ruang Tamu
									</p>
									<p className="text-muted">Varian : -</p>
									<span>Kuantitas : 1x</span>
								</div>
							</Col>
						</Row>
					</Card.Body>
				</Card>
				<Card>
            <Card.Body>
              <p style={{ fontSize: "20px" }}>
                <b>Rincian Harga</b>
              </p>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Harga Satuan: </p>
                <p>Rp 500.000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Harga Flash Sale:</p>
                <p>
                  Rp 500.000{" "}
                  <span class="badge rounded-pill text-bg-warning">-25%</span>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Sub Total Produk: </p>
                <p>Rp 500.000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Ongkos Kirim: </p>
                <p>Rp 500.000</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Sub Total Ongkos Kirim: </p>
                <p>-Rp 500.000</p>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-between">
                <p className="fw-bold">Total Pesanan: </p>
                <p className="fw-bold ">Rp 500.000</p>
              </div>
            </Card.Footer>
          </Card>

				<hr style={{ marginTop: "40px" }} />

				<div className="d-flex justify-content-between">
					<p className="fw-bold">Total Keseluruhan :</p>
					<p className="fw-bold">2 Produk,</p>
					<p className="fw-bold">Rp. 1.500.000</p>
				</div>
    </div>
  )
}

export default ComponentRingkasanPesananCheckout