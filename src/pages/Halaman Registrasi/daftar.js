import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import BreadCrumb from "../../components/BreadCrumb Components/BreadCrumb";
import Navbar from "../../components/Navbar Components/navbar";
import Footer from "../../components/Footer Components/footer";
import BottomNavBar from "../../components/Bottom Navbar/Bottomnavbar";
import Contentloading from "../../components/Loading Components/Contentloading";

const Daftar = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	const [formData, setFormData] = useState({
		namaPelanggan: "",
		email: "",
		nomorHandphone: "",
		alamatLengkap: "",
		password: "",
	});

	const { namaPelanggan, email, nomorHandphone, alamatLengkap, password } =
		formData;
	const [loading, setLoading] = useState(true); // State untuk indikator loading, awalnya true agar loader ditampilkan saat pertama kali halaman dimuat
	const [showPassword, setShowPassword] = useState(false); // State untuk mengontrol tampilan password

	useEffect(() => {
		// Mengatur loading menjadi false setelah 1.5 detik
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1500);

		// Membersihkan timer saat komponen dibongkar
		return () => clearTimeout(timer);
	}, []);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		if (name === "nomorHandphone" && value.length > 13) {
			setFormData((prevFormData) => ({
				...prevFormData,
				[name]: value.slice(0, 13),
			}));
		} else if (name === "nomorHandphone" && !value.match(/^[0-9]*$/)) {
			return;
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				[name]: value,
			}));
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (namaPelanggan && email && nomorHandphone && alamatLengkap && password) {
			if (password.length < 15) {
				Swal.fire({
					icon: "warning",
					title: "Password Terlalu Pendek!",
					text: "Password harus terdiri dari minimal 15 karakter.",
					confirmButtonColor: "#3085d6",
				});
				return;
			}

			try {
				setLoading(true); // Mengubah state loading menjadi true saat proses pendaftaran dimulai

				// Kirim data ke backend menggunakan metode POST
				const response = await fetch("https://example.com/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});

				if (response.ok) {
					// Berhasil mendaftar, tampilkan Sweet Alert success
					Swal.fire({
						icon: "success",
						title: "Pendaftaran berhasil!",
						showConfirmButton: false,
						timer: 3000, // Menunggu selama 3 detik sebelum otomatis menutup Sweet Alert
					});
					// Reset form setelah pendaftaran berhasil
					setFormData({
						namaPelanggan: "",
						email: "",
						nomorHandphone: "",
						alamatLengkap: "",
						password: "",
					});
				} else {
					// Gagal mendaftar, tampilkan pesan error yang sesuai
					const errorData = await response.json();
					Swal.fire({
						icon: "error",
						title: "Pendaftaran Gagal!",
						text:
							errorData.message ||
							"Terjadi kesalahan saat melakukan pendaftaran. Silakan coba lagi.",
						confirmButtonColor: "#d33",
					});
				}
			} catch (error) {
				console.error("Terjadi kesalahan:", error);
				Swal.fire({
					icon: "error",
					title: "Pendaftaran Gagal!",
					text: "Terjadi kesalahan saat melakukan pendaftaran. Silakan coba lagi.",
					confirmButtonColor: "#d33",
				});
			} finally {
				// Tunggu selama 3 detik sebelum mengubah state loading menjadi false
				setTimeout(() => {
					setLoading(false); // Mengubah state loading menjadi false setelah proses pendaftaran selesai (baik berhasil atau gagal)
				}, 3000);
			}
		} else {
			Swal.fire({
				icon: "warning",
				title: "Mohon Lengkapi Data!",
				text: "Mohon lengkapi semua field yang tersedia.",
				confirmButtonColor: "#3085d6",
			});
		}
	};

	return (
		<>
			<BottomNavBar />
			<Navbar />
			{loading && <Contentloading />}{" "}
			{/* Menampilkan loader selama 1.5 detik saat halaman pertama kali dimuat */}
			<BreadCrumb />
			<section
				id="hero"
				className="d-flex align-items-center"
				style={{ marginTop: "40px", marginBottom: "140px" }}
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="d-none d-md-block">
								<h1
									data-aos="fade-up"
									style={{
										fontSize: "3.9rem",
										maxWidth: "600px",
										marginBottom: "40px",
									}}
								>
									<b>Registrasi Untuk Menjadi Pelanggan.</b>
								</h1>
							</div>
							<div className="d-block d-lg-none">
								<h1
									data-aos="fade-up"
									style={{
										fontSize: "2.4rem",
										maxWidth: "600px",
										marginBottom: "40px",
									}}
								>
									<b>
										Registrasi Untuk <br />
										Menjadi Pelanggan.
									</b>
								</h1>
							</div>
							{/* Teks di bawah teks "Registrasi Untuk Menjadi Pelanggan." pada mode desktop */}
							<div
								className="d-none d-lg-block"
								data-aos="fade-up"
								style={{
									fontFamily: "Arial",
									marginBottom: "10px",
									marginTop: "10px",
									fontSize: "17px",
								}}
							>
								Jika Anda sudah memiliki akun <br />
								anda dapat{" "}
								<Link to="/login">
									<b>Masuk disini.</b>
								</Link>
							</div>
						</div>
						<div className="col-lg-6">
							<Form onSubmit={handleSubmit}>
								<Form.Group style={{ marginBottom: "22px" }}>
									<Form.Label>Nama Pelanggan</Form.Label>
									<Form.Control
										type="text"
										id="namaPelanggan"
										name="namaPelanggan"
										value={namaPelanggan}
										onChange={handleInputChange}
										placeholder="Masukkan nama Anda"
										required
									/>
								</Form.Group>
								<Form.Group style={{ marginBottom: "22px" }}>
									<Form.Label>Alamat Email</Form.Label>
									<Form.Control
										type="email"
										id="email"
										name="email"
										aria-describedby="emailHelp"
										value={email}
										onChange={handleInputChange}
										placeholder="Masukkan email"
										required
									/>
								</Form.Group>
								<Form.Group style={{ marginBottom: "22px" }}>
									<Form.Label>Nomor Handphone</Form.Label>
									<Form.Control
										type="text"
										id="nomorHandphone"
										name="nomorHandphone"
										value={nomorHandphone}
										onChange={handleInputChange}
										placeholder="Masukkan nomor handphone Anda (maks. 13 digit)"
										pattern="[0-9]{1,13}" // Hanya menerima angka dengan maksimal 13 digit
										title="Harus berupa angka dengan maksimal 13 digit"
										required
									/>
								</Form.Group>
								<Form.Group style={{ marginBottom: "22px" }}>
									<Form.Label>Alamat Lengkap</Form.Label>
									<Form.Control
										as="textarea"
										id="alamatLengkap"
										name="alamatLengkap"
										value={alamatLengkap}
										onChange={handleInputChange}
										placeholder="Masukkan alamat lengkap Anda"
										required
									/>
								</Form.Group>
								<Form.Group style={{ marginBottom: "22px" }}>
									<Form.Label>Password</Form.Label>
									<div className="input-group">
										<Form.Control
											type={showPassword ? "text" : "password"}
											id="password"
											name="password"
											value={password}
											onChange={handleInputChange}
											placeholder="Masukkan kata sandi Anda"
											required
										/>
										<div
											className="input-group-append"
											onClick={() => setShowPassword(!showPassword)}
											style={{
												cursor: "pointer",
												fontSize: "15px",
												borderRadius: "0px",
												position: "absolute",
												right: "10px",
												top: "50%",
												transform: "translateY(-50%)",
											}}
										>
											<FontAwesomeIcon
												icon={showPassword ? faEyeSlash : faEye}
											/>
										</div>
									</div>
									<small
										id="passwordHelpBlock"
										className="form-text text-muted"
									>
										Password harus memiliki minimal 15 karakter, mengandung
										huruf, angka dan karakter.
									</small>
									
								</Form.Group>
								<Button
									type="submit"
									className="btn btn-primary btn-lg w-100 btn-dark"
									style={{ borderRadius: "25px" }}
								>
									{loading ? "Loading..." : "Daftar"}
								</Button>
							</Form>
							{/* Teks di bawah tombol "Daftar" pada mode responsif */}
							<div
								className="d-block d-lg-none"
								style={{
									marginTop: "20px",
									fontSize: "17px",
									textAlign: "center",
								}}
							>
								Jika Anda sudah memiliki akun{" "}
								<Link to="/login">
									<b>Masuk disini.</b>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Daftar;
