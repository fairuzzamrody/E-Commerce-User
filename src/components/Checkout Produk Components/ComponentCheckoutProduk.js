import React, { useState} from "react";
import {
	Button,
	Container,
	Col,
	Row,
	Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faArrowRight,
	faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import ComponentRingkasanPesananCheckout from "./ComponentRingkasanPesananCheckout";

function ComponentCheckoutProduk() {
	const [alamat, setAlamat] = useState("Jl Jondoe rt 1 rw 3");
	const [editAlamat, setEditAlamat] = useState(false);
	const [newAlamat, setNewAlamat] = useState("");

	// Fungsi untuk mengubah alamat
	const handleUbahAlamat = () => {
		setEditAlamat(true);
	};

	const handleAlamatChange = (e) => {
		setNewAlamat(e.target.value);
	};

	const handleSimpanAlamat = async () => {
		if (newAlamat) {
			const confirmResult = await Swal.fire({
				title: "Simpan Alamat",
				text: "Apakah Anda yakin ingin menyimpan alamat baru?",
				icon: "question",
				showCancelButton: true,
				confirmButtonText: "Ya",
				cancelButtonText: "Batal",
			});

			if (confirmResult.isConfirmed) {
				try {
					// Kode untuk menyimpan alamat di sini (mengirim ke backend)
					await saveAddressToBackend();

					setAlamat(newAlamat);
					setEditAlamat(false);

					Swal.fire({
						title: "Simpan Alamat",
						text: "Alamat berhasil disimpan.",
						icon: "success",
					});
				} catch (error) {
					console.error("Error saving address:", error);
					Swal.fire({
						title: "Simpan Alamat",
						text: "Terjadi kesalahan saat menyimpan alamat.",
						icon: "error",
					});
				}
			}
		}
	};

	// Fungsi untuk melanjutkan proses checkout
	const handleContinueCheckout = async () => {
		const confirmResult = await Swal.fire({
			title: "Continue Checkout",
			text: "Apakah Anda yakin ingin melanjutkan proses checkout?",
			icon: "question",
			showCancelButton: true,
			confirmButtonText: "Ya",
			cancelButtonText: "Batal",
		});

		if (confirmResult.isConfirmed) {
			try {
				// Kode untuk melanjutkan proses checkout di sini
				// Panggil API backend untuk menangani proses checkout

				Swal.fire({
					title: "Proses Checkout",
					text: "Checkout berhasil! Silakan lanjut pilih metode pembayaran.",
					icon: "success",
				}).then((result) => {
					if (result.isConfirmed) {
						// Arahkan pengguna ke halaman /MidtransPage
						window.location.href = "/MidtransPage";
					}
				});
			} catch (error) {
				console.error("Error during checkout:", error);
				Swal.fire({
					title: "Proses Checkout",
					text: "Terjadi kesalahan saat melakukan checkout.",
					icon: "error",
				});
			}
		}
	};

	// Fungsi untuk menyimpan alamat ke backend (simulasi)
	const saveAddressToBackend = async () => {
		// Simulasikan panggilan asinkron ke backend
		return new Promise((resolve) => {
			setTimeout(resolve, 500); // Waktu simulasi 1 detik
		});
	};

	function formatRupiah(number) {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	}
	return (
		<div>
			<Container>
				<div className="text-center mt-5 mb-5">
					<h2>
						<b>Periksa Kembali Pesanan Anda.</b>
					</h2>
				</div>

				<div className="mb-4">
					<h5>
						<b>Informasi Pelanggan.</b>
					</h5>
					<p>Jhon Doe</p>
					<p>john.doe@example.com</p>
					<p>081391972873</p>
				</div>

				<hr className="my-4" />

				<Row>
					<Col md={6} className="mb-4">
						<h5 className="font-weight-bold">
							<b>Alamat Lengkap Anda.</b>
						</h5>
						{editAlamat ? (
							<Form.Control
								as="textarea"
								rows={3}
								value={newAlamat}
								onChange={handleAlamatChange}
							/>
						) : (
							<p>{alamat}</p>
						)}
					</Col>
					<Col md={6} className="d-flex align-items-center justify-content-end">
						{editAlamat ? (
							<>
								<Button
									variant="outline-dark"
									className="mr-2"
									onClick={() => setEditAlamat(false)}
									style={{ marginRight: "10px" }}
								>
									Batal
								</Button>
								<Button variant="dark" onClick={handleSimpanAlamat}>
									Simpan
								</Button>
							</>
						) : (
							<Button variant="outline-dark" onClick={handleUbahAlamat}>
								Ubah Alamat{" "}
								<FontAwesomeIcon
									icon={faEdit}
									className="ml-2"
									style={{ marginLeft: "10px" }}
								/>
							</Button>
						)}
					</Col>
				</Row>

				<hr style={{ marginTop: "-5px" }} />



				<ComponentRingkasanPesananCheckout />



				<hr style={{ marginTop: "-5px", marginBottom: "40px" }} />

				<Row className="align-items-center">
					<Col md={6}>
						<h3>
							<b>Metode Pembayaran Yang Tersedia.</b>
						</h3>
						<p style={{ textAlign: "justify" }}>
							Kami menyediakan berbagai opsi metode pembayaran yang dapat Anda
							pilih. Kami menerima metode pembayaran berikut ini. Silakan pilih
							metode pembayaran yang sesuai dengan preferensi Anda.
						</p>
					</Col>
					<Col md={6} className="text-center mt-3 mt-md-0">
						<img
							src="gambar/metode-pembayaran.png"
							alt="Metode Pembayaran"
							className="img-fluid"
						/>
					</Col>
				</Row>

				<hr />

				{/* Tombol navigasi */}
				<div className="d-flex justify-content-between">
					<Button variant="outline-dark">
						{" "}
						<FontAwesomeIcon
							icon={faArrowLeft}
							className="ml-2"
							style={{ marginRight: "10px" }}
						/>
						Kembali{" "}
					</Button>
					<Button
						variant="dark"
						className="d-flex align-items-center"
						onClick={handleContinueCheckout}
					>
						Tampilkan Snap Midtrans{" "}
						<FontAwesomeIcon
							icon={faArrowRight}
							className="ml-2"
							style={{ marginLeft: "10px" }}
						/>
					</Button>
				</div>
			</Container>
		</div>
	);
}

export default ComponentCheckoutProduk;
    