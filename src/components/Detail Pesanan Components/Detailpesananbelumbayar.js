import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap"; // Impor komponen yang diperlukan dari React Bootstrap
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Detailpesananbelumbayar() {
	return (
		<div>
			<Container>
				<Container>
					{" "}
					<Row>
      <Col xs={12} md={4} className="col-6">
        <div className="mb-3">
          <p>
            <b>Informasi Pemesan</b>
          </p>
          <span>John Doe</span><br/>
          <span>john.doe@example.com</span><br/>
          <span>081-283-3293-392</span>
        </div>
        <div>
          <p>
            <b>Informasi Alamat Pelanggan</b>
          </p>
          <p>Jl. Mangga BesarSikep, Keboansikep, Kec. Gedangan, Kabupaten Sidoarjo, Jawa Timur 61254</p>
        </div>
      </Col>
      <Col xs={12} md={4} className="col-6">
        <div>
          <p>
            <b>No. Transaksi</b>
          </p>
          <p>AR-F/TRX-20230815-0003</p>
        </div>
        <div>
          <p>
            <b>No. Pesanan</b>
          </p>
          <p>AR-F/ORD-20230815-0003</p>
        </div>
      </Col>
      <Col xs={12} md={4} className="col-6">
        <div>
          <p>
            <b>Waktu Pemesanan</b>
          </p>
          <p>2023-01-19 03:12:06</p>
        </div>
        <div>
          <p>
            <b>Status Pembayaran</b>
          </p>
          <h4>
            <b>
              <span className="badge rounded-pill text-bg-primary">
                Menunggu Pembayaran
              </span>
            </b>
          </h4>
        </div>
      </Col>
    </Row>


					<br />
					<hr />
					<h4 style={{ paddingBottom: "15px" }}>
						<b>Produk Yang Anda Pesan.</b>
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
								<p className="text-muted" style={{ fontSize: "0.86rem" }}>AR-F/ORD-20230815-0003</p>
							</div>
							<hr />
							<Row>
								<Col className="d-flex flex-column">
									{" "}
									<img
										src="./gambar/product-2.jpg"
										alt="Produk"
										style={{ maxWidth: "150px", borderRadius: "10px" }}
									/>
								</Col>

								<Col className="d-flex flex-column">
									<div>
										<p className="fw-bold" style={{ fontSize: "1.2rem" }}>
											Kursi Klasik Eropa
										</p>
										<p className="text-muted">Biru</p>
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
    <p >Rp 500.000</p>
    </div>
	<div className="d-flex justify-content-between">
    <p>Sub Total Produk: </p>
    <p >Rp 500.000</p>
    </div>
	<div className="d-flex justify-content-between">
    <p>Ongkos Kirim: </p>
    <p>Rp 500.000</p>
    </div>
	<div className="d-flex justify-content-between">
    <p>Sub Total Ongkos Kirim: </p>
    <p >Rp 500.000</p>
    </div>
					</Card.Body>
					<Card.Footer>
					<div className="d-flex justify-content-between">
    <p className="fw-bold">Total Pesanan: </p>
    <p className='fw-bold '>Rp 500.000</p>
    </div>
					</Card.Footer>
					</Card>
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
								<p className="text-muted" style={{ fontSize: "0.86rem" }}>AR-F/ORD-20230815-0003</p>
							</div>
							<hr />
							<Row>
								<Col className="d-flex flex-column">
									{" "}
									<img
										src="./gambar/product-1.jpg"
										alt="Produk"
										style={{ maxWidth: "150px", borderRadius: "10px" }}
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
    <p >Rp 500.000 
	</p>
    </div>
	<div className="d-flex justify-content-between">
    <p>Harga Flash Sale:
 </p>
    <p>Rp 500.000  <span class="badge rounded-pill text-bg-warning">-25%</span>
	</p>
    </div>
	<div className="d-flex justify-content-between">
    <p>Sub Total Produk: </p>
    <p >Rp 500.000</p>
    </div>
	<div className="d-flex justify-content-between">
    <p>Ongkos Kirim: </p>
    <p >Rp 500.000</p>
    </div>
	<div className="d-flex justify-content-between">
    <p>Sub Total Ongkos Kirim: </p>
    <p >-Rp 500.000</p>
    </div>
	
					</Card.Body>
					<Card.Footer>
					<div className="d-flex justify-content-between">
    <p className="fw-bold">Total Pesanan: </p>
    <p className='fw-bold '>Rp 500.000</p>
    </div>
					</Card.Footer>
					</Card>
					<hr />
						<div className="d-flex justify-content-between">
					<p className="fw-bold">Total Keseluruhan: </p>
					<p className="fw-bold">2 Produk </p>
					<p >
						<b> Rp. 1.500.000</b>
					</p>
				</div>
					<hr />
					<div className="d-flex justify-content-end">
						<Button variant="dark" className="d-flex align-items-center">
							Bayar Pesanan Anda{" "}
							<FontAwesomeIcon
								icon={faArrowRight}
								className="ml-2"
								style={{ marginLeft: "20px" }}
							/>
						</Button>
					</div>
				</Container>
			</Container>
		</div>
	);
}

export default Detailpesananbelumbayar;
