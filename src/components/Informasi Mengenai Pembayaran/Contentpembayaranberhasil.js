import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // Impor stylesheet AOS

function ContentPembayaranBerhasil() {
	useEffect(() => {
		AOS.init({
			duration: 2000, // Durasi animasi (milidetik)
			offset: 100, // Offset dari bagian atas halaman saat animasi dimulai (dalam pixel)
			once: true, // Hanya jalankan animasi sekali
		});

		// Menonaktifkan tombol "back" pada browser
		window.history.pushState(null, null, window.location.pathname);
		window.addEventListener("popstate", function (event) {
			window.history.pushState(null, null, window.location.pathname);
		});

		return () => {
			window.removeEventListener("popstate", function (event) {
				window.history.pushState(null, null, window.location.pathname);
			});
		};
	}, []);

	const handleBerandaClick = () => {
		window.location.href = "/"; // Mengarahkan ke halaman beranda ("/")
	};

	const handlePesanansayaClick = () => {
		window.location.href = "/Akunpelanggan"; // Mengarahkan ke halaman beranda ("/")
	};

	return (
		<div
			className="d-flex justify-content-center align-items-center mt-4"
			style={{ minHeight: "70vh" }}
		>
			<Card style={{ maxWidth: "400px" }} data-aos="fade-up">
				<Card.Body>
					<Card.Title
						className="mt-3 mb-2 text-center"
						style={{ fontSize: "1.6rem" }}
					>
						Pembayaran Telah Berhasil.
					</Card.Title>
					<div className="text-center">
						<Card.Img
							src="../gambar/Pembayaranberhasil2.png"
							alt="Payment Successful"
							className="img-fluid"
							style={{ width: "350px" }}
						/>
					</div>
					<Card.Text className="text-center">
						Terima kasih sudah berbelanja di AR-Furniture.
						<br />
						Struk pembayaran otomatis akan dikirimkan ke email Anda yang
						terdaftar.
					</Card.Text>
				</Card.Body>
				<Card.Footer className="bg-white">
					<div className="d-flex justify-content-between mt-2">
						<Button onClick={handleBerandaClick} variant="outline-dark">
							Beranda
						</Button>
						<Button onClick={handlePesanansayaClick} variant="dark">
							Lihat Pesanan Saya{" "}
							<i class="bi bi-arrow-right" style={{ marginLeft: "8px" }}></i>
						</Button>
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
}

export default ContentPembayaranBerhasil;
