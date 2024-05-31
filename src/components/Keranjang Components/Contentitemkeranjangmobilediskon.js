import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react"; // Import useState
import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Contentloading from "../Loading Components/Contentloading";

// Gunakan kode ini jika diperlukan
function Contentitemkeranjangmobilediskon() {
	// State untuk menyimpan warna yang dipilih
	const [selectedColor, setSelectedColor] = useState(null);

	// Fungsi handler untuk mengupdate warna yang dipilih
	const handleColorSelect = (color) => {
		setSelectedColor(color);
	};
	return (
		// // Gunakan kode ini jika diperlukan
		<div>
			<Card className="mb-4">
				<Card.Body>
                <Row className="align-items-center">
            <Col xs={1}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                />
              </div>
            </Col>
            <Col className="d-flex flex-column">
              {" "}
              {/* Menggunakan class "d-flex flex-column" untuk mengatur elemen dalam kolom */}
              <img
                src="./gambar/produkFS.png"
                alt="Produk"
                style={{ maxWidth: "140px", borderRadius: "10px" }}
              />
            </Col>

						<Col className="d-flex flex-column">
							<div>
								<p className="fw-bold" style={{ fontSize: "1.2rem" }}>
									Meja Kayu Jati
								</p>
								<p
									className="fw-bold text-muted"
									style={{ fontSize: "0.8rem" }}
								>
									Meja kayu jati asli dari jepara
								</p>
								<p className="text-muted">
									<Dropdown>
										<Dropdown.Toggle variant="dark" id="dropdown-basic">
											{selectedColor || "Pilih Warna"}{" "}
											{/* Tampilkan warna yang dipilih atau teks default */}
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item
												href="#/action-1"
												onClick={() => handleColorSelect("Hitam")}
											>
												Hitam
											</Dropdown.Item>
											<Dropdown.Item
												href="#/action-2"
												onClick={() => handleColorSelect("Pink")}
											>
												Abu-abu
											</Dropdown.Item>
											<Dropdown.Item
												href="#/action-3"
												onClick={() => handleColorSelect("Biru")}
											>
												Biru
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</p>
							</div>
						</Col>
					</Row>
					<Card className="mt-3">
						<Card.Body>
							<span style={{ fontSize: "1.1rem" }}>
								Harga Satuan : <del>Rp. 1.500.000</del> <br />
							</span>
							<p style={{ fontSize: "1.1rem", }} className="fw-bold">
								Rp. 1.100.000{" "}
								<span class="badge rounded-pill text-bg-warning">
									Flash Sale 1.1
								</span>
							</p>
							<span style={{ fontSize: "1.1rem" }}>
								{" "}
								Ongkos Kirim : <del> Rp. 5.000</del>
							</span>{" "}
							<br /> <p className="fw-bold">Rp 0 <span class="badge rounded-pill text-bg-success">
								{" "}
								<FontAwesomeIcon
									icon={faTruckFast}
									className="me-2"
									style={{ fontSize: "0.7rem" }}
								/>
								Gratis Ongkir
							</span></p>
							
							<span style={{ fontSize: "1.1rem" }}>
								{" "}
								Total Harga : Rp. 1.100.000
							</span>
						</Card.Body>
					</Card>
				</Card.Body>
				<Card.Footer className="bg-white">
					<div className="d-flex justify-content-between">
						<Button variant="danger">
							<FaTrash />
							<Contentloading />
						</Button>
						<div className="d-flex align-items-center">
							<Button variant="light" size="sm">
								<FontAwesomeIcon icon={faMinus} />
							</Button>
							<span className="mx-2">1</span>
							<Button variant="light" size="sm">
								<FontAwesomeIcon icon={faPlus} />
							</Button>
						</div>
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
}

export default Contentitemkeranjangmobilediskon;
