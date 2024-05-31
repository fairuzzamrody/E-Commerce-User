import React, { useState } from "react";
import {
	Row,
	Col,
	Image,
	Modal,
	Card,
} from "react-bootstrap";
import { FaStar } from "react-icons/fa";

function Ulasanprodukdihalamandetailpesananlunas2() {
    const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");


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
  
  return (
    <div>
        <div>
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
							<Image src={imageUrl} rounded className="img-fluid"/>
						</div>
					</Col>
				))}
			</Row>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
				scelerisque arcu, et placerat velit. Phasellus in nisl nisi. Nullam
				varius purus id justo posuere mollis.
			</p>
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
    </div>
  )
}

export default Ulasanprodukdihalamandetailpesananlunas2