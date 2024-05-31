import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRightLong,
	faPlus,
	faMinus,
	faArrowLeft,
	faCheck,
	faBoltLightning,
	faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Card, Table, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Contentloading from "../Loading Components/Contentloading";

function Contentitemprodukkeranjang() {
	// State untuk produk yang dipilih
	const [selectedProducts, setSelectedProducts] = useState([]);

	// State untuk produk dalam keranjang
	const [products, setProducts] = useState([
		{
			namaProduk: "Kursi Klasik Eropa",
			gambar: "./GambarProduk/Dataran/Kategori Kursi/Produk 1/Produk1gambar1.jpg",
			quantity: 1,
			variant: ["Biru", "Hijau"],
			price: 1000000,
			diskon: 500000,
			shippingCost: 20000,
			ongkoskirimfinal: 0,
			flashSaleName: "Flash Sale 1.1",
		},
		{
			namaProduk: "Meja Eropa",
			gambar: "./GambarProduk/Dataran/Kategori Kursi/Produk 2/Produk2gambar1.jpg",
			quantity: 1,
			variant: ["Hitam", "Kuning", "Merah"],
			price: 1000000,
			shippingCost: 30000,
			StockVariant: [10, 20],
		},
		{
			namaProduk: "Sofa Eropa",
			gambar: "./gambar/product-10.jpg",
			quantity: 1,
			variant: [],
			price: 1000000,
			shippingCost: 20000,
			Stock: 10,
		},
		{
			namaProduk: "Meja Bundar",
			gambar: "./GambarProduk/Dataran/Kategori Kursi/Produk 2/Produk2gambar1.jpg",
			quantity: 1,
			variant: [],
			price: 1000000,
			shippingCost: 20000,
			Stock: 10,
			ongkoskirimfinal: 0,
		},
	]);

	// State untuk mengontrol proses penghapusan produk
	const [isRemovingProduct, setIsRemovingProduct] = useState(false);

	// Fungsi untuk mengecek apakah tombol minus dinonaktifkan
	const isMinusDisabled = (index) => products[index].quantity === 1;

	// Fungsi untuk menghapus produk
	const removeProduct = (index) => {
		// Menampilkan Contentloading
		setIsRemovingProduct(true);

		setTimeout(() => {
			const updatedProducts = [...products];
			updatedProducts.splice(index, 1);
			setProducts(updatedProducts);

			// Menyembunyikan Contentloading setelah menghapus produk
			setIsRemovingProduct(false);
		}, 1500); // Menunggu 1.5 detik sebelum menghapus produk
	};

	// Fungsi untuk meng-handle perubahan checkbox
	const handleCheckboxChange = (index) => {
		const updatedSelectedProducts = [...selectedProducts];
		if (updatedSelectedProducts.includes(index)) {
			updatedSelectedProducts.splice(updatedSelectedProducts.indexOf(index), 1);
		} else {
			updatedSelectedProducts.push(index);
		}
		setSelectedProducts(updatedSelectedProducts);
	};

	// Fungsi untuk memilih semua produk
	const handleCheckAll = () => {
		const allIndexes = products.map((_, index) => index);
		setSelectedProducts(allIndexes);
	};

	// Fungsi untuk toggle memilih semua produk
	const toggleCheckAll = () => {
		if (selectedProducts.length === products.length) {
			setSelectedProducts([]);
		} else {
			const allIndexes = products.map((_, index) => index);
			setSelectedProducts(allIndexes);
		}
	};

	// Fungsi untuk meng-format harga dalam format Rupiah
	function formatRupiah(number) {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	}

	// Fungsi untuk mendapatkan harga produk dengan atau tanpa diskon
	function getProductPrice(product) {
		return product.diskon > 0 ? product.diskon : product.price;
	}

	// State untuk mengontrol modal
	const [showModal, setShowModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	// Fungsi untuk menampilkan modal saat tombol varian diklik
	const handleVariantClick = (product) => {
		setSelectedProduct(product);
		setShowModal(true);
	};

	// State untuk mengontrol indeks varian yang dipilih dalam modal
	const [selectedVariantIndex, setSelectedVariantIndex] = useState(null);

	// Fungsi untuk meng-handle perubahan indeks varian yang dipilih dalam modal
	const handleVariantButtonClick = (index) => {
		if (index === selectedVariantIndex) {
			setSelectedVariantIndex(null); // Klik kembali varian yang sama untuk membatalkan seleksi
		} else {
			setSelectedVariantIndex(index);
		}
	};

	// State untuk melacak kuantitas varian yang dipilih dalam modal
	const [selectedVariantQuantity, setSelectedVariantQuantity] = useState(1);

	// Fungsi untuk mengurangi kuantitas varian yang dipilih dalam modal
	const decreaseSelectedVariantQuantity = () => {
		if (selectedVariantQuantity > 1) {
			setSelectedVariantQuantity(selectedVariantQuantity - 1);
		}
	};

	// Fungsi untuk menambah kuantitas varian yang dipilih dalam modal
	const increaseSelectedVariantQuantity = () => {
		if (selectedVariantQuantity < selectedProduct.quantityLimit) {
			setSelectedVariantQuantity(selectedVariantQuantity + 1);
		}
	};

	const handleProductClick = (productId) => {
		// Handle the product click logic here
	};

	// Fungsi untuk menambah jumlah produk
	const increaseQuantity = (index) => {
		const updatedProducts = [...products];
		updatedProducts[index].quantity++;
		updatedProducts[index].total =
			updatedProducts[index].quantity *
				getProductPrice(updatedProducts[index]) +
			updatedProducts[index].shippingCost; // tambahkan harga ongkos kirim
		setProducts(updatedProducts);
	};

	// Fungsi untuk mengurangi jumlah produk
	const decreaseQuantity = (index) => {
		const updatedProducts = [...products];
		if (updatedProducts[index].quantity > 1) {
			updatedProducts[index].quantity--;
			updatedProducts[index].total =
				updatedProducts[index].quantity *
					getProductPrice(updatedProducts[index]) +
				updatedProducts[index].shippingCost; // tambahkan harga ongkos kirim
			setProducts(updatedProducts);
		}
	};

	return (
		<div>
			{isRemovingProduct && <Contentloading />}

			{products.length === 0 ? (
				<div className="text-center">
					<img
						src="./gambar/emptycart.png"
						alt="Keranjang Kosong"
						style={{ maxWidth: "320px" }}
					/>
					<h3>Oops, Keranjang Anda kosong.</h3>
				</div>
			) : (
				products.map((product, index) => (
					<Card
						key={index}
						className="bg-white mb-3"
						style={{
							width: "100%",
							marginBottom: "20px",
							position: "relative",
							transition: "box-shadow 0.3s",
						}}
						onClick={() => handleProductClick(product.id)} // Use the correct product ID
						onMouseEnter={(e) =>
							(e.currentTarget.style.boxShadow =
								"0px 4px 8px rgba(0, 0, 0, 0.2)")
						}
						onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
					>
						<Card.Body>
							<div className="table-responsive">
								<Table variant="borderless" responsive>
									<thead>
										<tr>
											<th className="text-center align-middle">
												<FontAwesomeIcon icon={faCheck} />
											</th>
											<th>Produk</th>
											<th>Varian</th>
											<th>Kuantitas</th>
											<th>Harga Satuan</th>
											<th>Ongkir</th>
											<th>Total Harga</th>
											<th>Aksi</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="text-center align-middle">
												<div className="d-flex justify-content-center align-items-center">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id={`flexCheckDefault-${index}`}
															checked={selectedProducts.includes(index)}
															onChange={() => handleCheckboxChange(index)}
														/>
													</div>
												</div>
											</td>
											<td className="align-middle">
    <img
        src={product.gambar}
        alt="Gambar Produk"
        width="100"
        height="100"
        style={{ borderRadius: "10px", objectFit: "cover" }}
    />
</td>

											{/* Tombol varian */}
											<td className="align-middle text-center">
												{product.variant.length > 0 ? (
													<Button
														style={{ marginLeft: "-15px" }}
														variant="outline-dark"
														onClick={() => handleVariantClick(product)}
													>
														Pilih Varian <i className="bi bi-chevron-down"></i>
													</Button>
												) : (
													"-"
												)}
											</td>
											{/* End Tombol varian */}

											<td className="align-middle">
												<div className="d-flex align-items-center">
													<Button
														variant="light"
														size="sm"
														onClick={() => decreaseQuantity(index)}
														disabled={isMinusDisabled(index)}
													>
														<FontAwesomeIcon icon={faMinus} />
													</Button>
													<span className="mx-3">{product.quantity}</span>
													<Button
														variant="light"
														size="sm"
														onClick={() => increaseQuantity(index)}
														disabled={product.quantity >= product.quantityLimit}
													>
														<FontAwesomeIcon icon={faPlus} />
													</Button>
												</div>
											</td>
											<td className="align-middle">
												{product.diskon > 0 ? (
													<div>
														<del>{formatRupiah(product.price)}</del> <br />
														<span>
															<small>{formatRupiah(product.diskon)}</small>
														</span>
														<br />
														{product.diskon > 0 && (
															<span className="badge bg-warning ml-2">
																<FontAwesomeIcon
																	icon={faBoltLightning}
																	style={{ marginRight: "5px" }}
																/>
																Flash Sale 1.1
															</span>
														)}
													</div>
												) : (
													formatRupiah(product.price)
												)}
											</td>

											<td className="align-middle">
												{product.ongkoskirimfinal === 0 ? (
													<div>
														<del>{formatRupiah(product.shippingCost)}</del>
														<br />
														<span>
															<small>
																{formatRupiah(product.ongkoskirimfinal)}
															</small>
														</span>
														<br />
														<span className="badge bg-success ml-2">
															<FontAwesomeIcon
																icon={faTruckFast}
																className="me-2"
															/>
															Gratis Ongkir
														</span>
													</div>
												) : (
													formatRupiah(product.shippingCost)
												)}
											</td>

											<td className="align-middle">
												{formatRupiah(
													product.quantity *
														(product.diskon > 0
															? product.diskon
															: product.price) +
														(product.ongkoskirimfinal !== undefined &&
														product.ongkoskirimfinal !== null
															? 0 // Gratis ongkir jika ada ongkos kirim final
															: product.shippingCost), // Jika tidak, gunakan ongkos kirim biasa
												)}
											</td>

											<td className="align-middle">
												<Button
													variant="danger"
													onClick={() => removeProduct(index)}
												>
													<FaTrash />
												</Button>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Card.Body>
					</Card>
				))
			)}

			<div className="d-flex justify-content-between mt-5">
				<Button variant="outline-dark">
					<FontAwesomeIcon
						icon={faArrowLeft}
						className="ml-2"
						style={{ marginRight: "10px" }}
					/>
					Kembali{" "}
				</Button>
				{products.length > 0 && (
					<Button
						variant="primary"
						onClick={() => toggleCheckAll()}
						className="mx-3"
						style={{
							display: selectedProducts.length === 0 ? "none" : "block",
						}}
					>
						{selectedProducts.length === products.length
							? "Batal Pilih Semua"
							: "Pilih Semua"}
					</Button>
				)}
				{products.length > 0 && (
					<Link
						to="/Checkoutproduk"
						className={`btn btn-dark d-flex align-items-center ${
							selectedProducts.length === 0 ? "disabled" : ""
						}`}
						onClick={(e) => {
							if (selectedProducts.length === 0) {
								e.preventDefault();
							}
						}}
					>
						Buat Pesanan{" "}
						<FontAwesomeIcon
							icon={faArrowRightLong}
							className="ml-2"
							style={{ marginLeft: "10px" }}
						/>
					</Link>
				)}
				{/* Modal untuk varian */}
				<Modal
					show={showModal}
					onHide={() => setShowModal(false)}
					centered
					backdrop="static"
				>
					<Modal.Header closeButton>
						<Modal.Title>
							Pilih Varian {selectedProduct ? selectedProduct.namaProduk : ""}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{/* Isi modal dengan konten pilihan varian */}
						{selectedProduct && (
							<div>
								<p className="fw-bold">Varian Produk</p>
								{selectedProduct.variant.map((variant, index) => (
									<Button
										key={index}
										variant={
											selectedVariantIndex === index
												? "dark"
												: selectedVariantIndex === null
													? "outline-dark"
													: "outline-dark disabled"
										}
										onClick={() => handleVariantButtonClick(index)}
										className="me-3"
									>
										{variant}
									</Button>
								))}

								<hr />
								<div className="d-flex justify-content-between">
									<span className="fw-bold">Kuantitas</span>
									<div className="d-flex align-items-center">
										<Button
											variant="light"
											size="sm"
											onClick={decreaseSelectedVariantQuantity}
											disabled={selectedVariantQuantity === 1}
										>
											<FontAwesomeIcon icon={faMinus} />
										</Button>
										<span className="mx-2">{selectedVariantQuantity}</span>
										<Button
											variant="light"
											size="sm"
											onClick={increaseSelectedVariantQuantity}
											disabled={
												selectedVariantQuantity ===
												selectedProduct.quantityLimit
											}
										>
											<FontAwesomeIcon icon={faPlus} />
										</Button>
									</div>
								</div>
								<hr />
								<div className="d-flex justify-content-between">
									<p>Harga Satuan : </p>
									<p>{formatRupiah(getProductPrice(selectedProduct))}</p>
								</div>
								<div className="d-flex justify-content-between">
									<p>Ongkos Kirim : </p>
									<p>
										{selectedProduct.ongkoskirimfinal === 0
											? "Gratis Ongkir"
											: formatRupiah(selectedProduct.shippingCost)}
									</p>
								</div>
								<hr />
								<div className="d-flex justify-content-between">
									<p>Total Harga : </p>
									<p>
										{selectedVariantQuantity *
											getProductPrice(selectedProduct) +
											selectedProduct.shippingCost}
									</p>
								</div>
							</div>
						)}
					</Modal.Body>

					<Modal.Footer className="d-flex justify-content-between">
						<Button variant="outline-dark" onClick={() => setShowModal(false)}>
							Batal
						</Button>
						<Button variant="dark" onClick={() => setShowModal(false)}>
							Konfirmasi <i className="bi bi-chevron-right"></i>
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
			<hr />
		</div>
	);
}

export default Contentitemprodukkeranjang;
