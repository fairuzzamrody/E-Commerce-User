import React, { useEffect, useState } from "react";
import { Card, Dropdown, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

function ContentinvoiceMobile() {
	// Disable right-click on the page
	useEffect(() => {
		const handleContextMenu = (event) => {
			event.preventDefault();
		};
		window.addEventListener("contextmenu", handleContextMenu);
		return () => {
			window.removeEventListener("contextmenu", handleContextMenu);
		};
	}, []);

	// Disable F12 key to open developer tools
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "F12") {
				event.preventDefault();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	const [isNavbarVisible, setIsNavbarVisible] = useState(true);
	const [isFooterVisible, setIsFooterVisible] = useState(true);

	const handlePrint = () => {
		setIsNavbarVisible(false);
		setIsFooterVisible(false);
		window.print();
		setIsNavbarVisible(true);
		setIsFooterVisible(true);
	};
	const [emailStatus, setEmailStatus] = useState(""); // Tambahkan state untuk menyimpan pesan status pengiriman email

	const handleEmailSend = () => {
		// pengiriman email
		Swal.fire({
			icon: "info",
			title: "Mohon Tunggu...",
			text: "Invoice pesanan anda sedang proses pengiriman ke email anda",
			showConfirmButton: false,
			timer: 8000,
			timerProgressBar: true,
			allowOutsideClick: false, // Mencegah klik di luar SweetAlert2
			allowEscapeKey: false, // Mencegah menutup SweetAlert2 dengan tombol escape
			didOpen: () => {
				Swal.showLoading();
			},
			willClose: () => {
				Swal.fire({
					icon: "success",
					title: "Invoice telah dikirim di email anda!",
					timer: 2000,
					showConfirmButton: false,
				});
			},
		});
	};

	const downloadInvoice = () => {
		// Generate the invoice content
		const invoiceContent = `
      Invoice Pesanan Anda
  
      No. Invoice: ARF-INV 1001001001
      No. Transaksi: ARF-21212121212
      Informasi Pemesan:
      Nama: John Doe
      Email: john.doe@example.com
      Telepon: 123-456-7890
      ...
      // Include the rest of the invoice details
  
      Total Keseluruhan: Rp. 1.500.000
    `;

		// Convert the invoice content to a Blob
		const blob = new Blob([invoiceContent], {
			type: "text/plain;charset=utf-8",
		});

		// Create a URL for the Blob
		const blobUrl = URL.createObjectURL(blob);

		// Create a temporary <a> element to trigger the download
		const a = document.createElement("a");
		a.href = blobUrl;
		a.download = "invoice.txt";
		a.click();

		// Release the allocated URL object
		URL.revokeObjectURL(blobUrl);
	};
	return (
		<div>
			<div className="d-flex justify-content-between">
				<p>
					<b>No. Pesanan</b>
				</p>
				<p>AR-F/ORD-20230815-0003</p>
			</div>
			<hr style={{ marginTop: "-5px" }}/>
			<div className="d-flex justify-content-between">
				<p>
					<b>No. Transaksi</b>
				</p>
				<p>AR-F/ORD-20230815-0003</p>
			</div>
			<hr style={{ marginTop: "-5px" }}/>
			<div className="d-flex justify-content-between">
				<p>
					<b>Informasi Pemesan</b>
				</p>
				<p className="text-end">
					John Doe 1 <br />
					john.doe@example.com
					<br />
					0813-2534-5828
				</p>
			</div>
			<hr style={{ marginTop: "-5px" }}/>
			<div className="d-flex justify-content-between">
				<p>
					<b>Alamat Pelanggan</b>
				</p>
				<p> Jalan Raya No. 123</p>
			</div>
			<hr style={{ marginTop: "-5px" }}/>
			<div className="d-flex justify-content-between">
				<p>
					<b>Waktu Pemesanan</b>
				</p>
				<p>2023-01-19 03:12:06</p>
			</div>
			<hr style={{ marginTop: "-5px" }}/>
			<div className="d-flex justify-content-between">
				<p>
					<b>Status Pembayaran</b>
				</p>
				<h4 style={{ fontSize: "1.3rem" }}>
					<b>
						<span className="badge rounded-pill text-bg-success">
							Sudah Dibayar
						</span>
					</b>
				</h4>
			</div>
			<hr style={{ marginTop: "-5px" }}/>
			<div className="d-flex justify-content-between">
				<p>
					<b>Waktu Pembayaran</b>
				</p>
				<p>2023-01-19 03:12:06</p>
			</div>
			<hr style={{ marginTop: "-5px" }}/>

			<div className="d-flex justify-content-between">
				<p>
					<b>Metode Pembayaran</b>
				</p>
				<p className="fw-bold">BCA</p>
			</div>
			<hr style={{ marginTop: "-5px" }}/>
	<Card.Title className="mt-5 mb-3 fw-bold">Produk yang anda pesan.</Card.Title>
			<Card >
					<Card.Body>						
						<div className="d-flex justify-content-between">
								<p className="fw-bold">Sofa Klasik Eropa</p>
								<p className="text-muted">x 1</p>
							</div>
							<div className="d-flex justify-content-between" style={{ marginTop: "-15px" }}>
								<p className="text-muted">varian : Biru</p>
								<p>Rp. 1.500.000</p>
							</div>
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
				{/* <Card className="mt-3 print-hidden">
					<Card.Body>
						<div className="d-flex justify-content-between">
								<Dropdown >
									<Dropdown.Toggle variant="primary" id="dropdown-basic">
										Opsi Lain Invoice
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item onClick={handleEmailSend}>
											Kirim Invoice via Email
										</Dropdown.Item>
										<Dropdown.Item onClick={downloadInvoice}>
											Unduh Via .pdf
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<Button
									variant="dark"
									className="d-flex align-items-center"
									onClick={handlePrint}
								>
									Cetak Invoice{" "}
									<FontAwesomeIcon
										icon={faPrint}
										className="ml-2"
										style={{ marginLeft: "10px" }}
									/>
								</Button>
							</div>
					</Card.Body>
				</Card> */}
		</div>
	);
}

export default ContentinvoiceMobile;
