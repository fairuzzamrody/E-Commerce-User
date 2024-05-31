import React, { useEffect, useState } from "react";
import { Container, Card, Button, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import Navbar from "../Navbar Components/navbar";
import Footer from "../Footer Components/footer";
import ContentinvoiceMobile from "./ContentinvoiceMobile";
import ContentinvoicePC from "./ContentinvoicePC";

const InvoiceComponent = () => {
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

	const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);

	// Gunakan useEffect untuk memantau perubahan lebar layar
	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth <= 767);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div>
			{isNavbarVisible && <Navbar />}
			<div className="text-center mt-5 mb-4">
				<h1>
					<b>Invoice Pesanan Anda.</b>  
				</h1>
				<span>Terima Kasih Sudah Berbelanja Di AR-Furniture</span>
			</div>
			<br />

			<style>
        {`
          @media print {
            .navbar,
            .footer,
            .button,
            .print-hidden {
              display: none !important;
            }
          }
        `}
      </style>
			<Container>
				
					{/* Tambahkan badge ribbon bertuliskan paid disini*/}
					
						{/* Start Bagian Di sembunyikan saat mengakses melalui ponsel */}
						{!isMobileView && (
										<ContentinvoicePC />

						)}
						{/* End Bagian Di sembunyikan saat mengakses melalui ponsel */}

						{/* Komponen ContentinvoiceMobile hanya akan ditampilkan di ponsel */}
						{isMobileView && <ContentinvoiceMobile />}
				

		
				
				<Card className="mt-3 print-hidden">
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
										<Dropdown.Item >
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
				</Card>
			</Container>
			{isFooterVisible && (
				<div className="footer">
					<Footer />
				</div>
			)}
		</div>
	);
};

export default InvoiceComponent;
