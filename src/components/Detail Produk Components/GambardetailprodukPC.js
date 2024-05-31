import React, { useState } from "react";
import {
	Card,
	Col,
	Container,
	Image,
	Row,
	Button,
	Modal,
	Carousel,
} from "react-bootstrap";

const styles = {
	overlayStyle: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		background: "rgba(115, 115, 115, 0.6)",
		borderRadius: "10px",
	},
	centeredCarousel: {
		textAlign: "center",
	},
	carouselIndicators: {
		position: "absolute",
		bottom: "10px",
		left: 0,
		right: 0,
		textAlign: "center",
		display: "flex",
		justifyContent: "center",
	},
};

function GambardetailprodukPC() {
 const [showModal, setShowModal] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const openModal = (index) => {
		setActiveIndex(index);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div>
			<Container>
				{/* Gambar 1 */}
				<Card style={{ backgroundColor: "#F9F9F9", border: "0" }}>
					<Card.Body>
						<Row>
							<Col>
							<Image
    src="./GambarProduk/Dataran/Kategori Kursi/Produk 1/Produk1gambar1.jpg"
    fluid
    style={{ borderRadius: '10px', maxHeight: '400px', maxWidth: '350px', width: '100%', height: '100%', objectFit: 'cover' }}
    onClick={() => openModal(0)}
/>
							</Col>
							<Col>
								<Row>
									<Col>
										<Image
											src="./GambarProduk/Dataran/Kategori Kursi/Produk 1/Produk1gambar2.jpg"
											fluid
											style={{ borderRadius : '10px' }}
											onClick={() => openModal(1)}
										/>
									</Col>
									<Col>
										<Image
											src="./GambarProduk/Dataran/Kategori Kursi/Produk 1/Produk1gambar3.jpg"
											fluid
											style={{ borderRadius : '10px' }}
											onClick={() => openModal(2)}
										/>
									</Col>
								</Row>
								<br />
								<Row>
									<Col>
										<Image
											src="./GambarProduk/Dataran/Kategori Kursi/Produk 1/Produk1gambar4.jpg"
											fluid
											style={{ borderRadius : '10px' }}
											onClick={() => openModal(3)}
										/>
									</Col>
									<Col>
										<div style={{ position: "relative" }}>
											<Image
												src="./GambarProduk/Dataran/Kategori Kursi/Produk 1/Produk1gambar5.jpg"
												fluid
												style={{ borderRadius : '10px' }}
												onClick={() => openModal(4)}
											/>
											<div style={styles.overlayStyle}>
												<Button
													variant="link"
													className="text-white"
													style={{ textDecoration: "none" }}
													onClick={() => openModal(4)}
												>
													+ 5 Lainnya
												</Button>
											</div>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</Card.Body>
				</Card>
				{/* end Gambar 1 */}
			</Container>

			<Modal show={showModal} onHide={closeModal} centered backdrop="static">
				<Modal.Header closeButton>
					<Modal.Title>SÖDERHAMN CHAIR</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Carousel
						activeIndex={activeIndex}
						onSelect={(index) => setActiveIndex(index)}
						style={styles.centeredCarousel}
						indicators={false} // Menyembunyikan indikator bawaan
					>
						<Carousel.Item>
							<Image
								src="./gambar/product-3.jpg"
								fluid
								style={{
									maxHeight: "370px",
									borderRadius: "10px",
									width: "430px",
								}}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								src="./gambar/product-2.jpg"
								fluid
								style={{
									maxHeight: "370px",
									borderRadius: "10px",
									width: "430px",
								}}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								src="./gambar/product-4.jpg"
								fluid
								style={{
									maxHeight: "370px",
									borderRadius: "10px",
									width: "430px",
								}}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								src="./gambar/product-1.jpg"
								fluid
								style={{
									maxHeight: "370px",
									borderRadius: "10px",
									width: "430px",
								}}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								src="./gambar/product-5.jpg"
								fluid
								style={{
									maxHeight: "370px",
									borderRadius: "10px",
									width: "430px",
								}}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								src="./gambar/product-1.jpg"
								fluid
								style={{
									maxHeight: "370px",
									borderRadius: "10px",
									width: "430px",
								}}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								src="./gambar/product-2.jpg"
								fluid
								style={{
									maxHeight: "370px",
									borderRadius: "10px",
									width: "430px",
								}}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								src="./gambar/product-3.jpg"
								fluid
								style={{
									maxHeight: "370px",
									borderRadius: "10px",
									width: "430px",
								}}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								src="./gambar/product-4.jpg"
								fluid
								style={{
									maxHeight: "370px",
									borderRadius: "10px",
									width: "430px",
								}}
							/>
						</Carousel.Item>
						<Carousel.Item>
							<Image
								src="./gambar/product-5.jpg"
								fluid
								style={{
									maxHeight: "370px",
									borderRadius: "10px",
									width: "430px",
								}}
							/>
						</Carousel.Item>
					</Carousel>
					<div style={styles.carouselIndicators}>
						{Array.from({ length: 10 }).map((_, index) => (
							<div
								key={index}
								onClick={() => setActiveIndex(index)}
								style={{
									width: "12px",
									height: "12px",
									borderRadius: "6px",
									backgroundColor: index === activeIndex ? "black" : "gray", // Warna indikator hitam atau abu-abu
									margin: "0 5px",
									cursor: "pointer",
								}}
							/>
						))}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeModal}>
						Tutup
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default GambardetailprodukPC