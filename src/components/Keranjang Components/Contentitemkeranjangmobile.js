import React, { useState } from "react";
import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlus,
	faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FaTrash } from "react-icons/fa";
import Contentloading from "../Loading Components/Contentloading";

function Contentitemkeranjangmobile() {
	const [selectedColor, setSelectedColor] = useState(null);
	const [isRemovingProduct, setIsRemovingProduct] = useState(false);

	const handleColorSelect = (color) => {
		setSelectedColor(color);
	};

	const [produkData, setProdukData] = useState([
		{
			id: 1,
			imageSrc: "./gambar/product-4.jpg",
			title: "Kursi Klasik Eropa",
			subtitle: "Kursi Asli Eropa Dengan Desain Klasik",
			totalProductStock: 10,
			productStockForColorVariants: [5, 5],
			price: "Rp. 2.000.000",
			shippingCost: "Rp. 5.000",
			total: "Rp. 1.505.000",
			isDiscounted: false,
			quantity: 1, // Add this line to set an initial quantity
		},
		{
			id: 2,
			imageSrc: "./gambar/product-2.jpg",
			title: "Meja Kayu Jati",
			subtitle: "Meja kayu jati asli dari Jepara",
			colors: ["Hitam", "Abu-abu", "Biru"],
			totalProductStock: 20,
			productStockForColorVariants: [10, 5, 5],
			price: "Rp. 1.500.000",
			shippingCost: "Rp. 5.000",
			total: "Rp. 1.100.000",
			isDiscounted: true,
			quantity: 1, // Add this line to set an initial quantity
		},
		{
			id: 3,
			imageSrc: "./gambar/product-3.jpg",
			title: "Kursi Klasik Eropa",
			subtitle: "Kursi Asli Eropa Dengan Desain Klasik",
			colors: ["Merah", "Putih"],
			totalProductStock: 20,
			productStockForColorVariants: [10, 10],
			price: "Rp. 4.500.000",
			shippingCost: "Rp. 5.000",
			total: "Rp. 4.505.000",
			isDiscounted: false,
			quantity: 1, // Add this line to set an initial quantity
		},
		{
			id: 4,
			imageSrc: "./gambar/product-1.jpg",
			title: "Meja Kayu Jati",
			subtitle: "Meja kayu jati asli dari Jepara",
			colors: ["Coklat", "Hijau", "Merah"],
			totalProductStock: 20,
			productStockForColorVariants: [10, 5, 5],
			price: "Rp. 1.500.000",
			shippingCost: "Rp. 0",
			total: "Rp. 1.100.000",
			isDiscounted: true,
			quantity: 1, // Add this line to set an initial quantity
		},
		// Add more product data here
	]);

	const deleteProduct = (productId) => {
		// Menampilkan Contentloading
		setIsRemovingProduct(true);

		// Lakukan penghapusan
		const updatedProdukData = produkData.filter(
			(product) => product.id !== productId,
		);

		setTimeout(() => {
			setProdukData(updatedProdukData);
			// Menyembunyikan Contentloading setelah menghapus produk
			setIsRemovingProduct(false);
		}, 1500); // Menunggu 1.5 detik sebelum menghapus produk
	};

	const handleQuantityChange = (productId, newQuantity) => {
		const updatedProdukData = produkData.map((product) => {
			if (product.id === productId) {
				return { ...product, quantity: newQuantity };
			}
			return product;
		});

		setProdukData(updatedProdukData);
	};

	return (
		<div>
			{isRemovingProduct && <Contentloading />}

			{produkData.length === 0 ? (
				<div className="text-center mb-5">
					<img
						src="./gambar/emptycart.png"
						alt="Keranjang Kosong"
						style={{ maxWidth: "400px" }}
					/>
					<p className="text-muted">Oops, Keranjang Anda kosong.</p>
				</div>
			) : (
				produkData.map((product) => (
					<Card className="mb-4" key={product.id}>
						<Card.Body>
							<Row className="align-items-center">
								<Col xs={1}>
									<div className="form-check">
										<input className="form-check-input" type="checkbox" />
									</div>
								</Col>
								<Col className="d-flex flex-column">
									<img
										src={product.imageSrc}
										alt="Produk"
										style={{ maxWidth: "140px", borderRadius: "10px" }}
									/>
								</Col>
								<Col className="d-flex flex-column">
									<div>
										<p className="fw-bold" style={{ fontSize: "1.2rem" }}>
											{product.title}
										</p>
										<p
											className="fw-bold text-muted"
											style={{ fontSize: "0.8rem" }}
										>
											{product.subtitle}
										</p>
										<p className="text-muted">
											{product.colors ? (
												<Dropdown>
													<Dropdown.Toggle variant="dark" id="dropdown-basic">
														{selectedColor || "Pilih Varian"}
													</Dropdown.Toggle>
													<Dropdown.Menu>
														{product.colors.map((color, index) => (
															<Dropdown.Item
																key={index}
																href={`#/action-${index}`}
																onClick={() => handleColorSelect(color)}
															>
																{color}
															</Dropdown.Item>
														))}
													</Dropdown.Menu>
												</Dropdown>
											) : (
												"Varian : -"
											)}
										</p>
									</div>
								</Col>
							</Row>
							<Card className="mt-3">
								<Card.Body>
									<div className="d-flex justify-content-between">
										<span>Stok Tersedia : </span>
										<span>{product.totalProductStock} Produk</span>
									</div>
									<div className="d-flex justify-content-between">
										<span>Varian yang dipilih: </span>
										<span>
											{product.colors
												? selectedColor || "Varian Belum Dipilih"
												: "-"}
										</span>
									</div>
									<div className="d-flex justify-content-between">
										<span>Stock varian {selectedColor} yang tersisa: </span>
										<span>
											{product.colors
												? product.productStockForColorVariants[
														product.colors.indexOf(selectedColor)
													]
												: "-"}
										</span>
									</div>
								</Card.Body>
							</Card>

							<Card className="mt-3">
								<Card.Body>
									{product.isDiscounted ? (
										<>
											<div className="d-flex justify-content-between">
												<span style={{ fontSize: "1.1rem" }}>
													Harga Satuan :{" "}
												</span>
												<span>{product.price}</span>
											</div>
											<div className="d-flex justify-content-between">
												<span style={{ fontSize: "1.1rem" }}>
													Diskon Flash Sale :{" "}
												</span>
												<span>-{product.price}</span>
											</div>
											<div className="d-flex justify-content-between">
												<span style={{ fontSize: "1.1rem" }}>
													{" "}
													Ongkos Kirim :{" "}
												</span>
												<span>{product.shippingCost}</span>
											</div>
											<div className="d-flex justify-content-between">
												<span style={{ fontSize: "1.1rem" }}>
													Total Harga :{" "}
												</span>
												<span>{product.total}</span>
											</div>
										</>
									) : (
										<>
											<div className="d-flex justify-content-between">
												<span style={{ fontSize: "1.1rem" }}>
													Harga Satuan :{" "}
												</span>
												<span>{product.price}</span>
											</div>
											<div className="d-flex justify-content-between">
												<span style={{ fontSize: "1.1rem" }}>
													{" "}
													Ongkos Kirim :{" "}
												</span>
												<span>{product.shippingCost}</span>
											</div>
											<div className="d-flex justify-content-between">
												<span style={{ fontSize: "1.1rem" }}>
													Total Harga :{" "}
												</span>
												<span>{product.total}</span>
											</div>
										</>
									)}
									<br />
								</Card.Body>
							</Card>
						</Card.Body>
						<Card.Footer className="bg-white">
							<div className="d-flex justify-content-between">
								<Button
									variant="danger"
									onClick={() => deleteProduct(product.id)}
								>
									<FaTrash />
								</Button>
								<div className="d-flex align-items-center">
									<Button
										variant="light"
										size="sm"
										onClick={() =>
											handleQuantityChange(
												product.id,
												product.quantity - 1 < 1 ? 1 : product.quantity - 1,
											)
										}
									>
										<FontAwesomeIcon icon={faMinus} />
									</Button>
									<span className="mx-4">{product.quantity}</span>
									<Button
										variant="light"
										size="sm"
										onClick={() =>
											handleQuantityChange(
												product.id,
												product.quantity + 1 > product.totalProductStock
													? product.totalProductStock
													: product.quantity + 1,
											)
										}
									>
										<FontAwesomeIcon icon={faPlus} />
									</Button>
								</div>
							</div>
						</Card.Footer>
					</Card>
				))
			)}
		</div>
	);
}

export default Contentitemkeranjangmobile;
