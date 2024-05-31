import React, { useState } from "react";
import {
	Row,
	Col,
	Image,
	Modal,
	Button,
	Collapse,
	Card,
} from "react-bootstrap";
import { FaStar } from "react-icons/fa";

function Ulasanproduk() {
	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");
  const [buttonText, setButtonText] = useState("Lihat Balasan");


  const imageUrls = [
		"../gambar/product-1.jpg",
		"../gambar/product-2.jpg",
		"../gambar/product-3.jpg",
		// Tambahkan URL gambar lainnya sesuai kebutuhan
	];

	const handleImageClick = (image) => {
		setSelectedImage(image);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const [open, setOpen] = useState(false);
  
  const toggleCollapse = () => {
    setOpen(!open);
    if (buttonText === "Lihat Balasan") {
      setButtonText("Tutup Balasan");
    } else {
      setButtonText("Lihat Balasan");
    }
  };
	return (
		<div>
			<div className="d-flex justify-content-between mb-1">
				<Card.Title>Jhon Doe 1</Card.Title>
				<span className="text-muted" style={{ fontSize: "0.85rem" }}>
					10/03/2023
				</span>
			</div>
			<Row>
				<Col md={12}>
					{[...Array(5)].map((_, index) => (
						<FaStar
							key={index}
							className="checked"
							style={{ fontSize: "1.3rem", color: "gold" }}
						/>
					))}
				</Col>
			</Row>
			<p className="mt-2 text-muted">Varian : Biru</p>

			<Row className="mt-3 d-flex flex-wrap">
				<Col xs={4} md={4} lg={2} className="mb-3">
					<div
						className="image-container"
						onClick={() => handleImageClick("../gambar/product-2.jpg")}
					>
						<Image src="../gambar/product-2.jpg" rounded className="img-fluid" />
					</div>
				</Col>
				<Col xs={4} md={4} lg={2} className="mb-3">
					<div
						className="image-container"
						onClick={() => handleImageClick("../gambar/product-5.jpg")}
					>
						<Image src="../gambar/product-5.jpg" rounded className="img-fluid" />
					</div>
				</Col>
			</Row>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
				scelerisque arcu, et placerat velit. Phasellus in nisl nisi. Nullam
				varius purus id justo posuere mollis.
			</p>
			<div className="d-flex justify-content-end">
				<Button
          onClick={toggleCollapse}
					aria-controls="example-collapse-text"
					aria-expanded={open}
					variant="outline-dark"
				>
          {buttonText} <i className={`bi bi-chevron-${open ? "up" : "down"}`}></i>
				</Button>
			</div>
			<Collapse in={open}>
				<div id="example-collapse-text">
					<Card className="mt-3">
						<Card.Body>
							<div className="d-flex justify-content-between">
								<Card.Title>
									AR-Furniture{" "}
									<span
										class="badge text-bg-dark"
										style={{ fontSize: "0.7rem" }}
									>
										Penjual
									</span>
								</Card.Title>
								<p className="text-muted" style={{ fontSize: "0.85rem" }}>
									08/03/2023
								</p>
							</div>
							Terima kasih atas penilaian anda, semoga produknya awet.
						</Card.Body>
					</Card>
				</div>
			</Collapse>
			<hr />
			<div className="d-flex justify-content-between mb-1">
				<Card.Title>J********1</Card.Title>
				<span className="text-muted" style={{ fontSize: "0.85rem" }}>
					08/03/2023
				</span>
			</div>
			<Row>
				<Col md={12}>
					{[...Array(3  )].map((_, index) => (
						<FaStar
							key={index}
							className="checked"
							style={{ fontSize: "1.3rem", color: "gold" }}
						/>
					))}
				</Col>
			</Row>
			<Row className="mt-3 d-flex flex-wrap">
				{imageUrls.map((imageUrl, index) => (
					<Col xs={4} md={4} lg={2} className="mb-3" key={index}>
						<div
							className="image-container"
							onClick={() => handleImageClick(imageUrl)}
						>
							<Image src={imageUrl} rounded className="img-fluid" />
						</div>
					</Col>
				))}
			</Row>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
				scelerisque arcu, et placerat velit. Phasellus in nisl nisi. Nullam
				varius purus id justo posuere mollis.
			</p>
			<hr />
			
			<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
			<Modal show={showModal} onHide={handleCloseModal} centered>
				<Modal.Header closeButton>
					<Modal.Title>Gambar Ulasan</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="text-center">
						<Image
							src={selectedImage}
							fluid
							style={{
								maxWidth: "100%",
								maxHeight: "400px",
								margin: "0 auto",
                borderRadius: "10px"
							}}
						/>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Ulasanproduk;
