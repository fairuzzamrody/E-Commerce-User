import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import {
	faStar,
	faArrowRight,
	faBoltLightning,
	faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
// Jika user belum melihat sebuah produk maka display none saja
// Maksimal Menampilkan 4 Card produk yang terakhir dilihat
function Contentlastseen() {
	const [viewedProducts, setViewedProducts] = useState({});

	useEffect(() => {
		// Fetch data of viewed products from the backend
		fetch("/get-viewed-products")
			.then((response) => response.json())
			.then((data) => setViewedProducts(data));
	}, []);

	const handleProductClick = (productId) => {
		// Send product ID to backend to track viewed product
		fetch("/track-product", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ productId }),
		});
	};

	const produkData = [
		{
			id: 1,
			image: "./GambarProduk/Dataran/Kategori Meja/Produk 5/Produk5gambar1.jpg",
			title: "Meja Makan Skandinavia ",
			description:
				"Meja Makan Skandinavia adalah meja makan yang kokoh, elegan, dan multifungsi. Meja makan ini cocok untuk digunakan di berbagai macam ruangan.",
			rating: 4,
			reviews: 10,
			price: 500000,
			sold: 10,
			status: "Produk terbaru !!",
			badgeVariant: "danger",
		},
		{
			id: 2,
			image:
				"./GambarProduk/Dataran/Kategori Kursi/Produk 2/Produk2gambar1.jpg",
			title: "Kursi Model Fritz Hansen",
			description:
				"Kursi Model Fritz Hansen adalah kursi yang nyaman, elegan, dan multifungsi. Kursi ini cocok untuk digunakan di berbagai macam ruangan.",
			rating: 3,
			reviews: 5,
			price: 8000000,
			diskon: 3000000,
			sold: 1,
			status: "Flash Sale 1.1", // Ubah status menjadi "Flash Sale 1.1"
			badgeVariant: "warning",
			ongkoskirim: "Gratis Ongkir",
		},
		{
			id: 3,
			image:
				"./GambarProduk/Dataran/Kategori SideBoard/Produk 8/Produk8gambar1.jpg",
			title: "Rustic Sideboard",
			description:
				"Koleksi yang menggabungkan sentuhan art deco dan gaya rustic chic dengan gaya urban tribe melalui penggunaan bijaksana .",
			rating: 2,
			reviews: 5,
			price: 9014000,
			diskon: 250000,
			sold: 5,
			status: "Diskon 10%",
			badgeVariant: "danger",
			ongkoskirim: "Gratis Ongkir",
		},
		{
			id: 4,
			image:
				"./GambarProduk/Dataran/Kategori Lemarilaci/Produk 9/Produk9gambar1.jpg",
			title: "Lemari 6 Laci Model Bowen",
			description:
				"Bentuk mengikuti fungsi dalam koleksi ini karena estetikanya merupakan yang klasik, sederhana, memanfaatkan garis bersih, lengkungan organik, dan bentuk sederhana dengan",
			rating: 5,
			reviews: 5,
			price: 19466000,
			sold: 20,
			ongkoskirim: "Gratis Ongkir",
			DiscountPrice: "10000000",
			status: "Produk terlaris",
			badgeVariant: "primary",
		},
		// Tambahkan data produk terbaru lainnya di sini
	];

	const formatRupiah = (value) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(value);
	};

	return (
		<div>
			<Container>
				<p style={{ fontSize: "1.8rem" }}>
					<b>Produk yang baru dilihat.</b>
				</p>
				<Row>
					{produkData.map((produk) => (
						<Col xs={6} sm={6} md={4} lg={3} key={produk.id}>
							<Link to={`/Detailproduk`} style={{ textDecoration: "none" }}>
								<Card
									style={{
										width: "100%",
										marginBottom: "20px",
										position: "relative",
										transition: "box-shadow 0.3s", // Tambahkan properti transition
									}}
									onClick={() => handleProductClick(produk.id)}
									onMouseEnter={(e) =>
										(e.currentTarget.style.boxShadow =
											"0px 4px 8px rgba(0, 0, 0, 0.2)")
									}
									onMouseLeave={(e) =>
										(e.currentTarget.style.boxShadow = "none")
									}
								>
									{produk.status && (
										<Badge
											pill
											bg={produk.badgeVariant}
											style={{
												position: "absolute",
												top: "10px",
												right: "10px",
											}}
										>
											{produk.status}
											{produk.status === "Flash Sale 1.1" && (
												<FontAwesomeIcon
													icon={faBoltLightning}
													style={{
														marginLeft: "5px",
													}}
												/>
											)}
										</Badge>
									)}
									{/* Penting */}
									<Card.Img
										variant="top"
										src={produk.image}
										alt="Product"
										style={{ height: "200px" }}
									/>
									{/* End Penting */}
									<Card.Body>
										<p
											className="fw-bold"
											style={{
												fontSize: "1rem",
											}}
										>
											{produk.title}
										</p>
										<div
											style={{
												overflow: "hidden",
												display: "-webkit-box",
												WebkitLineClamp: 2,
												WebkitBoxOrient: "vertical",
											}}
										>
											{/* Penting */}
											<Card.Text
												style={{
													textAlign: "justify",
													fontSize : "0.9rem"
												}}
											>
												{produk.description}
											</Card.Text>
										</div>
										<div
											style={{
												marginTop: "10px",
												display: "flex",
												alignItems: "center",
												justifyContent: "left",
												marginBottom: "-12px",
											}}
										>
											{Array.from(
												{
													length: Math.min(produk.rating, 5),
												},
												(_, index) => (
													<FontAwesomeIcon
														key={index}
														icon={faStar}
														style={{
															color: "gold",
														}}
													/>
												),
											)}
											<span
												style={{
													marginLeft: "5px",
												}}
											>
												{produk.rating} ({produk.reviews})
											</span>
										</div>
										<br />
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
											}}
										>
											{produk.diskon ? (
												<div>
													<p
														style={{
															fontSize: "14px",
															textDecoration: "line-through",
															color: "#999",
															marginTop: "-12px",
															marginBottom: "-25px",
														}}
													>
														{formatRupiah(produk.price)}
													</p>
													<br />
													<p
														style={{
															fontSize: "18px",
															fontWeight: "bold",
															marginBottom: "-7px",
														}}
													>
														{formatRupiah(produk.price - produk.diskon)}
													</p>
												</div>
											) : (
												<span
													style={{
														fontSize: "18px",
														fontWeight: "bold",
													}}
												>
													{formatRupiah(produk.price)}
												</span>
											)}
										</div>
									</Card.Body>
									<Card.Footer className="bg-white">
										<div className="d-flex justify-content-between">
											{produk.ongkoskirim === "Gratis Ongkir" && (
												<Badge
													pill
													bg="success"
													style={{
														fontSize: "0.6rem",
													}}
												>
													{" "}
													<FontAwesomeIcon
														icon={faTruckFast}
														className="me-1"
													/>
													{produk.ongkoskirim}
												</Badge>
											)}
											<Badge
												pill
												bg="dark"
												style={{
													fontSize: "0.6rem",
												}}
											>
												Terjual {produk.sold}
											</Badge>
										</div>
									</Card.Footer>
								</Card>
							</Link>
						</Col>
					))}
				</Row>
				<div
					style={{
						textAlign: "right",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
					}}
				>
					<span style={{ marginRight: "5px" }}>
						<Link
							to="/Listseluruhproduklastseen"
							style={{
								textDecoration: "none",
								color: "black",
							}}
						>
							<b> Lihat Selengkapnya</b>
						</Link>
					</span>
					<FontAwesomeIcon icon={faArrowRight} className="me-2" />
				</div>
				<hr style={{ clear: "both" }} />
			</Container>
		</div>
	);
}

export default Contentlastseen;
