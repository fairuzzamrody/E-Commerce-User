import React, { useEffect, useState } from "react";
import { Badge, Dropdown, Container } from "react-bootstrap";

// jalankan kode AR WAJIB di HTTPS / ngrok

// SIZE NORMAL---------------------------------------------------------------
	// Kabinet penyimpanan Andro 
	// https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/KabinetPenyimananDinding.glb?v=1699908710437

	// Crimson iOS
	// https://cdn.glitch.global/6a714b05-e482-46c1-9985-88f4f05c9148/CrimsonMirror.glb?v=1690981997081

		// SRC itu untuk android
	// IoS SRC itu untuk ios
const dataARdindingPakaiVarian = {
	src: "https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/KabinetPenyimananDinding.glb?v=1699908710437",

	iosSrc:
		"https://cdn.glitch.global/6a714b05-e482-46c1-9985-88f4f05c9148/CrimsonMirror.usdz?v=1690981993188",

	poster:
		"https://cdn.glitch.global/6a714b05-e482-46c1-9985-88f4f05c9148/CrimsonMirror.glb?v=1690981997081",

	alt: "Wall",

	skyboxImage:
		"https://cdn.glitch.global/eeff5289-f8a2-4538-8a01-b356b23342ea/AdobeStock_190358116_Preview.jpeg?v=1673511925791",
};

function ARdindingPakaiVarian() {
	const [isARworks, setIsARworks] = useState(false);
	const [selectedColor, setSelectedColor] = useState("Original"); // Set Original selectedColor

	useEffect(() => {
		// Gunakan navigator.userAgent untuk mendeteksi jenis perangkat
		const userAgent = navigator.userAgent.toLowerCase();
		setIsARworks(
			/mobile|android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
				userAgent,
			),
		);
	}, []);

	const handleColorChange = (color, name) => {
		const modelViewer = document.querySelector("model-viewer");
		if (modelViewer) {
			const [material] = modelViewer.model.materials;
			if (color.length === 0) {
				material.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
				setSelectedColor("Original"); // Set selectedColor to "Original"
			} else {
				material.pbrMetallicRoughness.setBaseColorFactor(color);
				setSelectedColor(name);
			}
		}
	};

	const availableColors = [
		{ color: [], name: "Original", dataColor: "" },
		{ color: [1, 0, 0, 1], name: "Merah", dataColor: "#ff0000" },
		{ color: [0, 1, 0, 1], name: "Hijau", dataColor: "#00ff00" },
	];

	return (
		<div>
			<p className="mt-4" style={{ fontSize: "1.2rem" }}>
				<b>Hey, Lihat Visualisasi 3D Produk dan AR. </b>
			</p>
			<p>
				Tombol Augmented Reality Akan Muncul Pada Ponsel atau Tablet Android dan
				iOS yang kompatibel.
			</p>
			<div class="alert alert-primary d-flex align-items-center" role="alert">
				<i class="bi bi-exclamation-triangle me-3"></i>
				<div>
					Saat menggunakan AR, arahkan smartphone Anda <b>PADA DINDING </b>{" "}
					untuk produk ini.{" "}
				</div>
			</div>
			<hr />
			<Container>
				<div data-aos="fade-up" data-aos-delay="100">
					<model-viewer
						src={dataARdindingPakaiVarian.src}
						ios-src={dataARdindingPakaiVarian.iosSrc}
						alt={dataARdindingPakaiVarian.alt}
						poster={dataARdindingPakaiVarian.poster}
						ar
						ar-modes="webxr scene-viewer quick-look"
						shadow-intensity="1"
						ar-placement="wall"
						ar-scale="auto"
						auto-rotate
						skybox-image={dataARdindingPakaiVarian.skyboxImage}
						camera-controls
						style={{
							width: "100%",
							height: "400px",
							borderRadius: "10px",
							position: "relative",
						}}
					>
						 <div
							className="d-flex justify-content-end"
							style={{
								position: "absolute",
								bottom: "10px",
								right: "10px",
							}}
						>
							<Badge
								bg={isARworks ? "success" : "danger"}
								style={{ fontSize: "15px" }}
							>
								{isARworks
									? "Perangkat Ini Mendukung AR"
									: "Perangkat Ini Tidak Mendukung AR"}
							</Badge>
						</div> 

						<div
							className="controls"
							id="color-controls"
							style={{ position: "absolute", left: "10px", top: "10px" }}
						>
							<Dropdown>
								<Dropdown.Toggle variant="dark">
									Varian{" "}
									{selectedColor === "Original"
										? "(Original)"
										: `(${selectedColor})`}
								</Dropdown.Toggle>

								<Dropdown.Menu>
									{availableColors.map((colorData, index) => (
										<Dropdown.Item
											key={index}
											onClick={() =>
												handleColorChange(colorData.color, colorData.name)
											}
											data-color={colorData.dataColor}
										>
											{colorData.name}
										</Dropdown.Item>
									))}
								</Dropdown.Menu>
							</Dropdown>
						</div>
						<button
							slot="ar-button"
							style={{
								backgroundColor: "white",
								borderRadius: "4px",
								border: "none",
								position: "absolute",
								top: "16px",
								right: "16px",
								height: "30px",
							}}
						>
							👋 Hey, Gunakan AR
						</button>
					</model-viewer>
				</div>
			</Container>
		</div>
	);
}

export default ARdindingPakaiVarian;
