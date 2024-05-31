import React, { useEffect, useState } from "react";
import {
	Card,
	Button,
	Container,
	Row,
	Col,
	Modal,
	Accordion,
} from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRight,
	faMinus,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import Penilaianproduk from "../Penilaian Produk Di Detail Produk/Penilaianproduk";
import Ulasanproduk from "../Ulasan Produk Dari Pelanggan/Ulasanprodukdihalamandetailproduk";
import Gambardetailproduk from "./Gambardetailproduk";
import Contentlastseen from "../Last Seen Components/Contentlastseen";
import Tentangprodukinikomponen from "./Tentangprodukinikomponen";

import ExperimenAR from "../Augmented Reality/AR Dataran/ExperimenAR";

import ARdataranTapaVarian from "../Augmented Reality/AR Dataran/ARdataranTanpaVarian"
import ARdataranpakaivarian from "../Augmented Reality/AR Dataran/ARdataranpakaivarian"

import ARdataranTanpaVariandenganScale from "../Augmented Reality/AR Dataran/ARdataranTanpaVariandenganScale"
import ARdataranPakaiVariandenganScale from "../Augmented Reality/AR Dataran/ARdatatanPakaiVariandenganScale"

// Batas ======================================================================================================

import ARdindingPakaiVarian from "../Augmented Reality/AR Dinding/ARdindingPakaiVarian"
import ARdindingTanpaVarian from "../Augmented Reality/AR Dinding/ARdindingTanpaVarian"

import ARdindingPakaiVariandenganScale from "../Augmented Reality/AR Dinding/ARdindingPakaiVariandenganScale"
import ARdindingTanpaVariandenganScale from "../Augmented Reality/AR Dinding/ARdindingTanpaVariandenganScale"
import ExperimenARdindingDimensiplusvarian from "../Augmented Reality/AR Dinding/ExperimenARdindingDimensiplusvarian";

const DetailProdukKomponen = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	const [showModal, setShowModal] = useState(false);
	const [selectedVariant, setSelectedVariant] = useState(null);
	const [item, setItem] = useState({ quantity: 1 });

	const handleAddToCart = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleAddToCartInModal = () => {
		// Menampilkan SweetAlert 2 ketika tombol "Tambah Ke Keranjang" di dalam modal diklik
		Swal.fire({
			icon: "success",
			title: "Produk berhasil ditambahkan ke keranjang",
			showConfirmButton: false,
			timer: 1500,
		});
		// Menutup modal
		handleCloseModal();
	};

	const handleSelectVariant = (variant) => {
		if (selectedVariant === variant) {
			setSelectedVariant(null);
		} else {
			setSelectedVariant(variant);
			setHoveredVariant(null); // Tambahkan baris ini untuk menghilangkan teks saat memilih varian
		}
	};

	const handleQuantityChange = (increment) => {
		const newQuantity = item.quantity + increment;
		if (newQuantity > 0) {
			setItem({ ...item, quantity: newQuantity });
		}
	};

	const rating = 0.4; // Contoh rating, bisa diganti dengan rating sesuai data

	// Mendapatkan bagian desimal dari rating (misal 4.5 menjadi 0.5)
	const decimalPart = rating % 1;
	// Mendapatkan jumlah bintang penuh
	const fullStars = Math.floor(rating);
	// Mendapatkan apakah akan menampilkan bintang setengah (jika desimalPart >= 0.5) atau bintang kosong (jika desimalPart < 0.5)
	const showHalfStar = decimalPart >= 0.5;
	// Variabel untuk varian warna 1 dan varian warna 2
	const varianWarna1 = "Yellow";
	const varianWarna2 = "Green";

	const formatRupiah = (value) => {
		const formatter = new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0,
		});
		return formatter.format(value);
	};
	const [hoveredVariant, setHoveredVariant] = useState(null);

	const handleMouseEnterVariant = (variant) => {
		setHoveredVariant(variant);
	};

	const handleMouseLeaveVariant = () => {
		setHoveredVariant(null);
	};
	const bodyStyle = {
		height: "100%",
		overflow: "hidden",
	};
	return (
		<div style={bodyStyle}>
			<Container>
				<Row className="mt-2">
					<Col xs={12} md={8}>
						{/* Gambar Produk */}
						<Gambardetailproduk />

						<Container className="mt-4">
							{/* Augmtented Reality */}

							{/* <ARdataranTapaVarian /> */}
							{/* <ARdataranpakaivarian /> */}
							{/* <ARdataranTanpaVariandenganScale /> */}
							<ARdataranPakaiVariandenganScale />

							{/* BATAS DATARAN DAN DINDING NON EXPERIMENTAL */}

							 {/* <ARdindingTanpaVarian /> */}
							 {/* <ARdindingPakaiVarian /> */}
							 {/* <ARdindingTanpaVariandenganScale /> */}
							 {/* <ARdindingPakaiVariandenganScale /> */}


							 {/* ============EXPERIMENTAL AR DATARAN==================================== */}
							 {/* <ExperimenAR /> */}


							{/*======================= EXPERIMENTAL AR DINDING=============================== */}
							{/* <ExperimenARdindingDimensiplusvarian /> */}
							<hr />

{/* <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
    <iframe
      src="https://modelviewer.dev/editor/"
      style={{
        border: "0px #ffffff none",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      }}
      title="Model Viewer"
      allowFullScreen
    ></iframe>
  </div> */}
							<div className="mt-4">
								{/* Tentang Produk ini */}
								<Tentangprodukinikomponen />
							</div>
							<hr />

							<div className="mt-4">
								{/* Penilaian dan Ulasan Produk */}
								<Accordion>
									<Accordion.Item eventKey="0">
										<Accordion.Header>
											<b>Penilaian Produk Ini</b>
										</Accordion.Header>
										<Accordion.Body>
											<Penilaianproduk />
											<hr />
											<Ulasanproduk />
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</div>
							<hr />
						</Container>
					</Col>

					<Col xs={12} md={4} className="mb-5">
						<Card>
							<Card.Body>
								{/* Nama Produk */}
								<Card.Title>SÖDERHAMN CHAIR</Card.Title>
								<Row className="mt-3">
									<Col>
										{/* Sub Nama Produk */}
										<p>
											"Lorem ipsum dolor sit amet, consectetur
											adipiscing elit."
										</p>
										<h2 style={{ fontSize: "1.4rem" }}>
											{/* Harga Produk */}

											<b>
												{formatRupiah(1500000)} -{" "}
												{formatRupiah(2000000)}
											</b>
										</h2>
									</Col>
								</Row>
								<Row className="mt-3">
									<Col>
										<div className="d-flex align-items-center">
											{[...Array(fullStars)].map((_, index) => (
												<FaStar
													key={index}
													className="checked"
													style={{ fontSize: "1.3rem" }}
												/>
											))}
											{showHalfStar && (
												<FaStarHalfAlt
													className="checked"
													style={{ fontSize: "1.3rem" }}
												/>
											)}
											{[
												...Array(
													5 - fullStars - (showHalfStar ? 1 : 0),
												),
											].map((_, index) => (
												<FaStar
													key={index}
													style={{ fontSize: "1.3rem" }}
												/>
											))}
											<span
												style={{
													marginLeft: "8px",
													fontSize: "20px",
												}}
											>
												4
											</span>
										</div>
									</Col>
								</Row>
								<Row className="mt-3">
									<Col>
										<hr />
										<p>Varian Produk</p>
										<div className="d-flex justify-content-start">
											<div
												className={`color-box ${
													selectedVariant === varianWarna1
														? "selected"
														: ""
												}`}
												style={{
													backgroundColor: varianWarna1,
													width: "30px",
													height: "30px",
													marginRight: "10px",
													position: "relative", // Menambahkan properti position
													borderRadius: "5px",
												}}
												onClick={() =>
													handleSelectVariant(varianWarna1)
												}
												onMouseEnter={() =>
													handleMouseEnterVariant(varianWarna1)
												}
												onMouseLeave={handleMouseLeaveVariant}
											>
												{hoveredVariant === varianWarna1 && (
													<div
														className="variant-text"
														style={{
															position: "absolute",
															top: "35px",
															left: "0",
															right: "0",
															textAlign: "center",
															fontSize: "12px",
															color: "#333",
															border: "solid",
															width: "40px",
															borderRadius: "5px",
														}}
													>
														{varianWarna1}
													</div>
												)}
											</div>
											<div
												className={`color-box ${
													selectedVariant === varianWarna2
														? "selected"
														: ""
												}`}
												style={{
													backgroundColor: varianWarna2,
													width: "30px",
													height: "30px",
													marginRight: "10px",
													position: "relative", // Menambahkan properti position
													borderRadius: "5px",
												}}
												onClick={() =>
													handleSelectVariant(varianWarna2)
												}
												onMouseEnter={() =>
													handleMouseEnterVariant(varianWarna2)
												}
												onMouseLeave={handleMouseLeaveVariant}
											>
												{hoveredVariant === varianWarna2 && (
													<div
														className="variant-text"
														style={{
															position: "absolute",
															top: "35px",
															left: "0",
															right: "0",
															textAlign: "center",
															fontSize: "12px",
															color: "#333",
															border: "solid",
															width: "40px",
															borderRadius: "5px",
														}}
													>
														{varianWarna2}
													</div>
												)}
											</div>
										</div>
										<hr />
										<span>Total Stock yang tersedia: 24</span>
									</Col>
								</Row>

								<Row className="mt-3">
									<Col>
										<Button
											variant="outline-dark"
											size="lg"
											className="w-100"
											style={{ borderRadius: "25px" }}
											onClick={handleAddToCart}
										>
											Masukkan Keranjang
										</Button>
									</Col>
								</Row>
								<hr />
								<p>Biaya ongkos kirim produk ini adalah :</p>
								<h4>
									<b>{formatRupiah(5000)}</b>
								</h4>
								<span style={{ textAlign: "justify" }}>
									("Harga ongkos kirim yang tertera berlaku untuk
									pembelian satu produk saja. Jika membeli lebih dari
									satu produk, maka akan dikenakan biaya kirim yang
									berkelipatan.")
								</span>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				<Modal
					show={showModal}
					onHide={handleCloseModal}
					backdrop="static"
					keyboard={false}
					centered
				>
					<Modal.Header closeButton>
						<Modal.Title>Tambah Ke Keranjang</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Container>
							<Row>
								<Col xs={12}>
									<p>
										<b>Varian Produk Yang Tersedia</b>
									</p>
									{/* Ganti warna merah (red) dengan varianWarna1 */}
									<Button
										variant={
											selectedVariant === varianWarna1
												? "dark"
												: "outline-dark"
										}
										onClick={() => handleSelectVariant(varianWarna1)}
										disabled={selectedVariant === varianWarna2}
										style={{ marginRight: "10px" }}
									>
										Kuning 
									</Button>
									<span
										style={{ marginRight: "10px", fontSize: "20px" }}
									>
										|
									</span>
									{/* Ganti warna biru (blue) dengan varianWarna2 */}
									<Button
										variant={
											selectedVariant === varianWarna2
												? "dark"
												: "outline-dark"
										}
										onClick={() => handleSelectVariant(varianWarna2)}
										disabled={selectedVariant === varianWarna1}
									>
										Hijau
									</Button>
									<br />
									<br />
									<span>Stok Produk {varianWarna1}: 12 </span> |
									<span> Stok Produk {varianWarna2}: 10 </span> <br />
									{selectedVariant === varianWarna1 && (

										<div>
											<hr/>
											<p>Dimensi Produk Varian Kuning (P : 20cm, L : 40cm, T : 30cm)</p>
											<span>
												Harga satuan dari varian {varianWarna1} :{" "}
												{formatRupiah(1500000)}
											</span>{" "}
											<br />

								
											<span>
												Harga Ongkir satuan dari varian{" "}
												{varianWarna1} : {formatRupiah(5000)}
											</span>
										</div>
									)}
									{selectedVariant === varianWarna2 && (
										
										<div>
											<hr/>
											<p>Dimensi Produk Varian Hijau (P : 20cm, L : 40cm, T : 30cm)</p>
											<span>
												Harga satuan dari varian {varianWarna2} :{" "}
												{formatRupiah(2000000)}
											</span>{" "}
											<br />
											<span>
												Harga Ongkir satuan dari varian{" "}
												{varianWarna2} : {formatRupiah(5000)}
											</span>
										</div>
									)}
								</Col>
							</Row>
							<hr />
							<div className="d-flex justify-content-between  align-items-center">
								<span>
									<b>Jumlah :</b>
								</span>
								<div className="d-flex justify-content-end align-items-center">
									<Button
										variant="light"
										size="sm"
										onClick={() => handleQuantityChange(-1)}
										disabled={item.quantity === 1}
									>
										<FontAwesomeIcon icon={faMinus} />
									</Button>
									<span className="mx-4">{item.quantity}</span>
									<Button
										variant="light"
										size="sm"
										onClick={() => handleQuantityChange(1)}
									>
										<FontAwesomeIcon icon={faPlus} />
									</Button>
								</div>
							</div>

							<hr />
							<Row>
								<Col xs={12}>
									<div className="d-flex justify-content-between">
										<span>
											<b>Total Harga :</b>
										</span>
										{/* Hitung total harga */}
										{selectedVariant === varianWarna1 && (
											<span>
												{formatRupiah(
													item.quantity * 1500000 +
														item.quantity * 5000,
												)}
											</span>
										)}
										{selectedVariant === varianWarna2 && (
											<span>
												{formatRupiah(
													item.quantity * 2000000 +
														item.quantity * 5000,
												)}
											</span>
										)}
									</div>
								</Col>
							</Row>
							<hr />

							<div className="d-flex justify-content-between">
								<Button
									variant="outline-secondary"
									onClick={handleCloseModal}
								>
									Kembali
								</Button>
								<Button
									variant="dark"
									className="d-flex align-items-center"
									onClick={handleAddToCartInModal}
								>
									Tambah Ke Keranjang
									<FontAwesomeIcon
										icon={faArrowRight}
										className="ml-2"
										style={{ marginLeft: "20px" }}
									/>
								</Button>
							</div>
						</Container>
					</Modal.Body>
				</Modal>

				{/* content Terakhir Dilihat  */}
				<Contentlastseen />
			</Container>
		</div>
	);
};

export default DetailProdukKomponen;
