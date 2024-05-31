import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";

function ContentFlashSaleDashboard() {
	const [countdownData, setCountdownData] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
        // Set waktu timer
		const flashSaleDate = new Date("2024-12-05T10:00:00Z");

		const calculateCountdown = () => {
			const now = new Date().getTime();
			const distance = flashSaleDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setCountdownData({ days, hours, minutes, seconds });

			if (distance < 0) {
				setCountdownData({ days: 0, hours: 0, minutes: 0, seconds: 0 });
			}
		};

		calculateCountdown();
		const countdownInterval = setInterval(calculateCountdown, 1000);

		return () => {
			clearInterval(countdownInterval);
		};
	}, []);

	// Data produk
	const Produk = [
		{
			id: 1,
			name: "Kursi sandar berlengan",
			price: "Rp. 4.200.000",
			discountprice: "Rp. 3.200.000",
			image:
				" ./GambarProduk/Dataran/Kategori Kursi/Produk 1/Produk1gambar1.jpg", // Ganti URL gambar sesuai dengan URL gambar produk
			terjual: 5,
			ongkoskirim: "Gratis Ongkir",
			flashsaleStock: 10,
		},
		{
			id: 2,
			name: "Kursi Model Fritz Hansen",
			price: "Rp. 8.000.000",
			discountprice: "Rp. 5.000.000",
			image:
				"./GambarProduk/Dataran/Kategori Kursi/Produk 2/Produk2gambar1.jpg", // Ganti URL gambar sesuai dengan URL gambar produk
			terjual: 3,
			ongkoskirim: "Gratis Ongkir",
			flashsaleStock: 11,
		},
		{
			id: 3,
			name: "Sofa Model cas Ret 2 Seater",
			price: "Rp. 25.000.000",
			discountprice: "Rp. 20.000.000",
			image:
				" ./GambarProduk/Dataran/Kategori Sofa/Produk 3/Produk3gambar1.jpg", // Ganti URL gambar sesuai dengan URL gambar produk
			terjual: 3,
			ongkoskirim: "Gratis Ongkir",
			flashsaleStock: 12,
		},
		{
			id: 4,
			name: "Sofa Ruang Tamu 2 Seater",
			price: "Rp. 19.000.000",
			discountprice: "Rp. 15.000.000",
			image: "./GambarProduk/Dataran/Kategori Sofa/Produk 4/Produk4gambar1.jpg", // Ganti URL gambar sesuai dengan URL gambar produk
			terjual: 8,
			ongkoskirim: "Gratis Ongkir",
			flashsaleStock: 12,
		},
		{
			id: 5,
			name: "Produk FS 5",
			price: "Rp 300.000",
			discountprice: "Rp 100.000",
			image: "./gambar/product-5.jpg", // Ganti URL gambar sesuai dengan URL gambar produk
			terjual: 2,
			ongkoskirim: "Gratis Ongkir",
			flashsaleStock: 16,
		},
		{
			id: 6,
			name: "Produk FS 6",
			price: "Rp 350.000",
			discountprice: "Rp 300.000",
			image: "./gambar/product-3.jpg", // Ganti URL gambar sesuai dengan URL gambar produk
			terjual: 4,
			ongkoskirim: "Gratis Ongkir",
			flashsaleStock: 8,
		},
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: window.innerWidth <= 768 ? 2 : 4, // Menampilkan 3 produk pada smartphone, 4 produk pada desktop
		slidesToScroll: 1,
	};
	// Penting
	const shortenTitle = (title) => {
		const words = title.split(" ");
		if (words.length > 3) {
			return words.slice(0, 3).join(" ") + "...";
		}
		return title;
	};

	return (
		<div>
			<Container>
				<Container>
					<Row>
						<Col
							className="flash-sale-header"
							style={{ marginBottom: "20px", marginTop: "20px" }}
							data-aos="fade-right" // Tambahkan data-aos pada Col
							data-aos-delay="300" // Tambahkan data-aos-delay pada Col
						>
							<h1 style={{ fontSize: "3.4vw", marginRight: "10px" }}>
								<b>Flash Sale 1.1 </b>
							</h1>

							<span style={{ fontSize: "10px" }}>Berakhir dalam:</span>
							<div className="countdown-timer">
								{/* Kotak hitam untuk bagian days */}
								<div className="countdown-box">{countdownData.days}</div>
								<span style={{ color: "black" }}>:</span>
								{/* Kotak hitam untuk bagian hours */}
								<div className="countdown-box">{countdownData.hours}</div>
								<span style={{ color: "black" }}>:</span>
								{/* Kotak hitam untuk bagian minutes */}
								<div className="countdown-box">{countdownData.minutes}</div>
								<span style={{ color: "black" }}>:</span>
								{/* Kotak hitam untuk bagian seconds */}
								<div className="countdown-box">{countdownData.seconds}</div>
							</div>
						</Col>
					</Row>

					<Container>
						<Slider {...settings}>
							{Produk.map((Produk) => (
								<Col key={Produk.id}>
									<Link
										to={`/Detailprodukdiskon`}
										style={{ textDecoration: "none" }}
									>
										<Card
											data-aos="fade-up"
											data-aos-delay="450"
											style={{ marginRight: "5px", marginBottom: "20px" }}
										>
											{/* Ini penting untuk responsif gambar */}
											<div className="card-image-container">
												<Card.Img
													variant="top"
													src={Produk.image}
													style={{ maxHeight: "260px" }}
												/>
											</div>
											{/* End penting */}
											<Card.Body>
												<p style={{ textDecoration: "none", fontSize: "1rem" }}>
													<b>{shortenTitle(Produk.name)}</b>
												</p>
												<p>
													<del>
														<p
															style={{
																textDecoration: "none",
																fontSize: "1rem",
															}}
														>
															{" "}
															{Produk.price}
														</p>
													</del>
												</p>
												<p
													style={{
														textDecoration: "none",
														fontSize: "1.2rem",
														marginTop: "-20px",
													}}
												>
													<b>{Produk.discountprice}</b>
												</p>

												{/* Progress bar */}
												<div className="progress">
													<div
														className="progress-bar bg-dark"
														role="progressbar"
														style={{
															width: `${(Produk.terjual / Produk.flashsaleStock) * 100}%`, // Menggunakan persentase penjualan dari stok flash sale sebagai panjang progress bar
														}}
														aria-valuenow={Produk.terjual}
														aria-valuemin="0"
														aria-valuemax={Produk.flashsaleStock}
													>
														{Produk.terjual} Terjual
													</div>
												</div>

												<div style={{ marginTop: "10px" }}>
													{Produk.flashsaleStock - Produk.terjual < 5 ? (
														<span style={{ color: "red", fontSize: "1rem" }}>
															Segera Habis <i class="bi bi-fire"></i>
														</span>
													) : (
														<span style={{ color: "green", fontSize: "1rem" }}>
															Tersedia <i class="bi bi-check-lg"></i>
														</span>
													)}
												</div>
											</Card.Body>
											<Card.Footer
												className="bg-white"
												style={{
													display:
														Produk.ongkoskirim !== "Gratis Ongkir"
															? "none"
															: "block",
												}}
											>
												<div className="d-flex justify-content-between">
													{Produk.ongkoskirim === "Gratis Ongkir" && (
														<Badge pill bg="success">
															{" "}
															<FontAwesomeIcon
																icon={faTruckFast}
																className="me-2"
																style={{ fontSize: "0.7rem" }}
															/>
															<span style={{ fontSize: "0.8rem" }}>
																{Produk.ongkoskirim}
															</span>
														</Badge>
													)}
												</div>
											</Card.Footer>
										</Card>
									</Link>
								</Col>
							))}
						</Slider>
					</Container>

					<br />
					<hr />

					<style>
						{`
          .flash-sale-header {
            display: flex;
            align-items: center;
          }
          
          .card-image-container {
            height: 190px; /* Sesuaikan tinggi yang diinginkan PENTING */
            overflow: hidden; /* Jika gambar melebihi tinggi, gunakan overflow untuk memotong gambar */
          }
          /* CSS untuk lapisan kotak hitam pada countdown timer */
          .countdown-timer {
            font-size: 12px;
            color: white; /* Ubah warna teks menjadi putih untuk kontras dengan kotak hitam */
            display: flex; /* Mengatur elemen countdown timer dalam satu baris */
            justify-content: center; /* Mengatur posisi elemen countdown timer ke tengah */
          }

          /* CSS untuk kotak hitam setiap bagian countdown timer */
          .countdown-box {
            background-color: black;
            padding: 5px 10px; /* Tambahkan jarak di dalam kotak hitam */
            margin: 0 5px; /* Tambahkan jarak antara kotak hitam */
            border-radius: 5px;
          }

          .slick-prev:before,
          .slick-next:before {
            font-size: 25px;
            color: black;
          }
          
        `}
					</style>
				</Container>
			</Container>
		</div>
	);
}

export default ContentFlashSaleDashboard;
