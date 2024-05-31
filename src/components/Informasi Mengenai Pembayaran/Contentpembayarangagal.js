import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // Impor stylesheet AOS

function Contentpembayarangagal() {
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
		window.location.href = "/Midtranspage"; // Mengarahkan ke halaman beranda ("/")
	};

	const handlePesanansayaClick = () => {
		window.location.href = "/"; // Mengarahkan ke halaman beranda ("/")
	};
	return (
		<div
			className="d-flex justify-content-center align-items-center mt-4"
			style={{ minHeight: "70vh" }}
		>
			<Card style={{ maxWidth: "405px" }} data-aos="fade-up">
				<Card.Body>
					<Card.Title
						className="mt-3 mb-2 text-center"
						style={{ fontSize: "1.6rem" }}
					>
						Pembayaran Gagal.
					</Card.Title>
					<div className="text-center">
						<Card.Img
							src="../gambar/Pembayarangagal2.png"
							alt="Payment Failed"
							className="img-fluid"
							style={{ width: "300px" }}
						/>
					</div>
					<Card.Text className="text-center">
						Pembayaran tidak berhasil karena terjadi kesalahan. <br />
						Mohon coba lagi nanti atau gunakan metode pembayaran lainnya.
					</Card.Text>
				</Card.Body>
				<Card.Footer className="bg-white">
					<div className="d-flex justify-content-between mt-2">
						<Button onClick={handlePesanansayaClick} variant="outline-dark">
							Kembali Ke Beranda{" "}
						</Button>
                        <Button onClick={handleBerandaClick} variant="dark">
							Coba Lagi
						</Button>
						
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
}

export default Contentpembayarangagal;
