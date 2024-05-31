import React, { useState } from "react";
import { Button, Collapse, Row, Col, Container, Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";
import Contentberipenilaianuntukpesananlunas from "../Beri penilaian untuk pesanan lunas/Contentberipenilaianuntukpesananlunas";

const PesananLunas = () => {
	const [openCollapse, setOpenCollapse] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");
	const [isSubmittingRating, setIsSubmittingRating] = useState(false);
	const [currentCard, setCurrentCard] = useState(1); // Add the state variable for currentCard
	const [selectedImage, setSelectedImage] = useState(null);
	const [uploadedImages, setUploadedImages] = useState([]);
	const [nama, setNama] = useState("Jhon Doe 1");
	const [uploadedImagesPerRating, setUploadedImagesPerRating] = useState([]);
	const [uploadedImageCountPerRating, setUploadedImageCountPerRating] =
		useState(0);
	const [isRatingSubmitted, setIsRatingSubmitted] = useState(false);

	const toggleSwitch = () => {
		if (nama === "Jhon Doe 1") {
			setNama("J******1");
		} else {
			setNama("Jhon Doe 1");
		}
	};
	const handleImageChange = (event) => {
		const imageFile = event.target.files[0];

		if (uploadedImageCountPerRating < 3) {
			const updatedImages =
				currentCard === 1
					? [...uploadedImages, imageFile]
					: [...uploadedImagesPerRating, imageFile];

			currentCard === 1
				? setUploadedImages(updatedImages)
				: setUploadedImagesPerRating(updatedImages);
			setUploadedImageCountPerRating(uploadedImageCountPerRating + 1);
		} else {
			Swal.fire({
				icon: "error",
				title: "Maksimal 3 gambar diizinkan",
				text: "Anda telah mengunggah maksimal 3 gambar.",
				confirmButtonText: "Tutup",
			});
		}
	};

	const toggleCollapse = (collapseId) => {
		setOpenCollapse(openCollapse === collapseId ? "" : collapseId);
	};

	const handleRatingSubmit = () => {
		if (rating === 0 || comment.trim() === "") {
			// Jika rating belum diisi atau ulasan masih kosong, tampilkan pesan peringatan
			Swal.fire({
				icon: "error",
				title: "Rating dan Ulasan harus diisi",
				text: "Harap isi rating dan ulasan sebelum mengirim penilaian.",
				confirmButtonText: "Tutup",
			});
		} else if (comment.length < 50) {
			// Jika ulasan kurang dari 100 karakter, tampilkan pesan peringatan
			Swal.fire({
				icon: "error",
				title: "Ulasan harus minimal 50 karakter",
				text: "Harap isi ulasan dengan minimal 50 karakter sebelum mengirim penilaian.",
				confirmButtonText: "Tutup",
			});
		} else {
			// Jika rating dan ulasan telah diisi dengan benar, kirim penilaian
			// Anda bisa menambahkan logika pengiriman penilaian di sini
			// ...

			// Setelah berhasil mengirim penilaian, tutup modal dan reset nilai dan ulasan
			setShowModal(false);
			setRating(0);
			setComment("");
			setIsRatingSubmitted(true); // Tandai penilaian sudah dikirim

			// Tampilkan SweetAlert setelah menutup modal
			Swal.fire({
				icon: "success",
				title: "Penilaian Anda telah dikirim!",
				text: "Terima kasih atas penilaian Anda.",
				timer: 2500,
				timerProgressBar: true,
				showConfirmButton: false, // Menghilangkan tombol OK
			});
		}
	};

	const handleShowModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setIsSubmittingRating(false);
	};

	const handleReset = () => {
		setUploadedImages([]);
		setRating(0);
		setComment("");
	};

	const handleNextRating = () => {
		if (currentCard === 1) {
			// If currently in Card 1
			if (rating === 0 || comment.trim() === "") {
				// If rating or comment is empty or has a rating of 0, show the error message
				Swal.fire({
					icon: "error",
					title: "Rating dan Ulasan harus diisi",
					text: "Harap isi rating dan ulasan sebelum mengirim penilaian selanjutnya.",
					confirmButtonText: "Tutup",
				});
			} else if (comment.length < 50) {
				// If comment has less than 50 characters, show the error message
				Swal.fire({
					icon: "error",
					title: "Ulasan harus minimal 50 karakter",
					text: "Harap isi ulasan dengan minimal 50 karakter sebelum mengirim penilaian selanjutnya.",
					confirmButtonText: "Tutup",
				});
			} else {
				setCurrentCard(2); // Pindah ke Penilaian Selanjutnya
				setUploadedImagesPerRating([]); // Reset gambar yang diunggah untuk penilaian berikutnya
				setUploadedImageCountPerRating(0); // Reset jumlah gambar yang diunggah
				setRating(0);
				setComment("");
			}
		} else {
			// If currently in Card 2
			// Handle any actions related to Card 2, e.g., submit the rating
			// ...

			// Show the success message with automatic closing after 2000 milliseconds (2 seconds)
			Swal.fire({
				icon: "success",
				title: "Penilaian Anda telah dikirim!",
				text: "Terima kasih atas penilaian Anda.",
				confirmButtonText: "Tutup",
				timer: 2000, // Close the modal automatically after 2000 milliseconds (2 seconds)
			}).then(() => {
				setShowModal(false);
				setRating(0);
				setComment("");
			});
		}
	};
	// Tambahkan ini di atas komponen PesananLunas
	const modalContentStyle = {
		maxHeight: "70vh", // Ganti dengan tinggi yang Anda inginkan
		overflowY: "auto",
	};

	return (
		<div>
			<Card className="mt-3">
				<Card.Header className="bg-dark text-white">
					<Row>
						<Col>
							<span style={{ fontSize: "0.85rem" }}>
								AR-F/ORD-20230815-0001
							</span>{" "}
						</Col>
						<Col xs="auto">
							{" "}
							<span style={{ fontSize: "0.85rem" }}>
								16-02-2023 12:30:34
							</span>{" "}
						</Col>
					</Row>
				</Card.Header>
				<Card.Body>
					<Row>
						<Col>
							<Card.Title style={{ marginBottom: "-10px" }}>
								<p className="fs-3 fs-md-5">Rp 1.500.000</p>
							</Card.Title>
						</Col>
						<Col xs="auto">
							<Button
								onClick={() => toggleCollapse("collapse1")}
								variant="light"
								className={`collapse-button ${
									openCollapse === "collapse1" ? "open" : ""
								}`}
								style={{ borderRadius: "15px" }}
							>
								{openCollapse === "collapse1" ? (
									<BiChevronUp size={30} />
								) : (
									<BiChevronDown size={30} />
								)}
							</Button>
						</Col>
					</Row>
				</Card.Body>
				<Card.Footer className="text-muted bg-white">
					<Container>
						<Row>
							<Col className="text-right">2 Produk</Col>
							<Col xs="auto" className="text-right">
								Sudah Dibayar
							</Col>
						</Row>
					</Container>
				</Card.Footer>
			</Card>

			<Collapse in={openCollapse === "collapse1"}>
				<div>
					<br />
					<p
						className="p-3 bg-success text-white text-center"
						style={{ borderRadius: "3px" }}
					>
						Lunas
					</p>
					<Card className="mb-3">
						<Card.Body>
							<div className="d-flex justify-content-between">
								<Card.Title className="fw-bold">No. Pesanan</Card.Title>
								<Card.Title
									className="text-muted d-flex align-items-center"
									style={{ fontSize: "1rem" }}
								>
									AR-F/ORD-20230815-0001
								</Card.Title>
							</div>
						</Card.Body>
					</Card>
					<div className="mb-4">
						<Card className="mb-4">
							<Card.Body>
								<div
									className="d-flex justify-content-between"
									style={{ marginBottom: "-20px" }}
								>
									<p className="fw-bold" style={{ fontSize: "20px" }}>
										Rician Pesanan
									</p>
								</div>
								<hr />
								<Row>
									<Col className="d-flex flex-column">
										{" "}
										{/* Menggunakan class "d-flex flex-column" untuk mengatur elemen dalam kolom */}
										<img
											src="./gambar/product-1.jpg"
											alt="Produk"
											style={{ maxWidth: "150px", borderRadius: "10px" }}
										/>
									</Col>

									<Col className="d-flex flex-column">
										<div>
											<p className="fw-bold" style={{ fontSize: "1.2rem" }}>
												Kursi Klasik Eropa
											</p>
											<p className="text-muted">Varian : Biru</p>
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
									<p>Rp 500.000</p>
								</div>
								<div className="d-flex justify-content-between">
									<p>Sub Total Produk: </p>
									<p>Rp 500.000</p>
								</div>
								<div className="d-flex justify-content-between">
									<p>Ongkos Kirim: </p>
									<p>Rp 500.000</p>
								</div>
								<div className="d-flex justify-content-between">
									<p>Sub Total Ongkos Kirim: </p>
									<p>Rp 500.000</p>
								</div>
							</Card.Body>
							<Card.Footer>
								<div className="d-flex justify-content-between">
									<p className="fw-bold">Total Pesanan: </p>
									<p className="fw-bold ">Rp 500.000</p>
								</div>
							</Card.Footer>
						</Card>
					</div>
					<hr />
					<Card className="mb-4">
						<Card.Body>
							<div
								className="d-flex justify-content-between"
								style={{ marginBottom: "-20px" }}
							>
								<p className="fw-bold" style={{ fontSize: "20px" }}>
									Rician Pesanan
								</p>
							</div>
							<hr />
							<Row>
								<Col className="d-flex flex-column">
									{" "}
									{/* Menggunakan class "d-flex flex-column" untuk mengatur elemen dalam kolom */}
									<img
										src="./gambar/product-3.jpg"
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
								<p>Rp 500.000</p>
							</div>
							<div className="d-flex justify-content-between">
								<p>Harga Flash Sale:</p>
								<p>
									Rp 500.000{" "}
									<span class="badge rounded-pill text-bg-warning">-25%</span>
								</p>
							</div>
							<div className="d-flex justify-content-between">
								<p>Sub Total Produk: </p>
								<p>Rp 500.000</p>
							</div>
							<div className="d-flex justify-content-between">
								<p>Ongkos Kirim: </p>
								<p>Rp 500.000</p>
							</div>
							<div className="d-flex justify-content-between">
								<p>Sub Total Ongkos Kirim: </p>
								<p>-Rp 500.000</p>
							</div>
						</Card.Body>
						<Card.Footer>
							<div className="d-flex justify-content-between">
								<p className="fw-bold">Total Pesanan: </p>
								<p className="fw-bold ">Rp 500.000</p>
							</div>
						</Card.Footer>
					</Card>

					<hr />
					<div className="d-flex justify-content-between">
						<p className="fw-bold">Total Keseluruhan: </p>
						<p className="fw-bold">2 Produk </p>
						<p>
							<b> Rp. 1.500.000</b>
						</p>
					</div>

					<hr />

					{/*  */}
					<Row className="d-flex justify-content-between">
						<Col xs="auto">
							<a
								href="/DetailPesananUserLunas"
								className="btn btn-outline-dark mb-3"
							>
								Detail Pesanan
							</a>
						</Col>

						{/*  */}
						<Col xs="auto">
							{!isRatingSubmitted && uploadedImageCountPerRating < 3 && (
								<Button
									variant="success"
									className="mr-2"
									onClick={handleShowModal}
								>
									Beri Penilaian
								</Button>
							)}
						</Col>

						<Col xs="auto">
							<a
								href="/Invoicepesanan"
								className="btn btn-dark d-flex align-items-center"
							>
								Tampilkan Invoice{" "}
								<FontAwesomeIcon
									icon={faArrowRight}
									className="ml-2"
									style={{ marginLeft: "20px" }}
								/>
							</a>
						</Col>
					</Row>
				</div>
			</Collapse>

			{/* Step 4: Modal component */}
			<Modal
				show={showModal}
				onHide={handleCloseModal}
				backdrop="static"
				keyboard={false}
				size="lg"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title className="w-100 text-center">
						Beri Penilaian Pesanan Anda
					</Modal.Title>
				</Modal.Header>
				<Modal.Body style={modalContentStyle}>
					{" "}
					{/* Terapkan gaya CSS di sini */}
					<Contentberipenilaianuntukpesananlunas />
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default PesananLunas;
