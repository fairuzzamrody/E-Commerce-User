import React, { useEffect, useState } from "react";
import { Badge, Dropdown, Container, Card, Button } from "react-bootstrap";

function ExperimenARdindingDimensiplusvarian() {
	const [selectedColor, setSelectedColor] = useState("Original"); // Set Original selectedColor

	useEffect(() => {
		const modelViewer = document.querySelector("#ARdimension");
		// update svg
		function drawLine(svgLine, dotHotspot1, dotHotspot2, dimensionHotspot) {
			if (dotHotspot1 && dotHotspot2) {
				svgLine.setAttribute("x1", dotHotspot1.canvasPosition.x);
				svgLine.setAttribute("y1", dotHotspot1.canvasPosition.y);
				svgLine.setAttribute("x2", dotHotspot2.canvasPosition.x);
				svgLine.setAttribute("y2", dotHotspot2.canvasPosition.y);

				// use provided optional hotspot to tie visibility of this svg line to
				if (dimensionHotspot && !dimensionHotspot.facingCamera) {
					svgLine.classList.add("hide");
				} else {
					svgLine.classList.remove("hide");
				}
			}
		}

		const dimLines = modelViewer.querySelectorAll("line");

		const renderSVG = () => {
			drawLine(
				dimLines[0],
				modelViewer.queryHotspot("hotspot-dot+X-Y+Z"),
				modelViewer.queryHotspot("hotspot-dot+X-Y-Z"),
				modelViewer.queryHotspot("hotspot-dim+X-Y"),
			);
			drawLine(
				dimLines[1],
				modelViewer.queryHotspot("hotspot-dot+X-Y-Z"),
				modelViewer.queryHotspot("hotspot-dot+X+Y-Z"),
				modelViewer.queryHotspot("hotspot-dim+X-Z"),
			);
			drawLine(
				dimLines[2],
				modelViewer.queryHotspot("hotspot-dot+X+Y-Z"),
				modelViewer.queryHotspot("hotspot-dot-X+Y-Z"),
			); // always visible
			drawLine(
				dimLines[3],
				modelViewer.queryHotspot("hotspot-dot-X+Y-Z"),
				modelViewer.queryHotspot("hotspot-dot-X-Y-Z"),
				modelViewer.queryHotspot("hotspot-dim-X-Z"),
			);
			drawLine(
				dimLines[4],
				modelViewer.queryHotspot("hotspot-dot-X-Y-Z"),
				modelViewer.queryHotspot("hotspot-dot-X-Y+Z"),
				modelViewer.queryHotspot("hotspot-dim-X-Y"),
			);
		};

		modelViewer.addEventListener("load", () => {
			const center = modelViewer.getBoundingBoxCenter();
			const size = modelViewer.getDimensions();
			const x2 = size.x / 2;
			const y2 = size.y / 2;
			const z2 = size.z / 2;

			modelViewer.updateHotspot({
				name: "hotspot-dot+X-Y+Z",
				position: `${center.x + x2} ${center.y - y2} ${center.z + z2}`,
			});

			modelViewer.updateHotspot({
				name: "hotspot-dim+X-Y",
				position: `${center.x + x2 * 1.2} ${center.y - y2 * 1.1} ${center.z}`,
			});
			// =======================Untuk Lebar sebelah Kanan
			// modelViewer.querySelector('button[slot="hotspot-dim+X-Y"]').textContent = `${dimensions} cm`;
			modelViewer.querySelector('button[slot="hotspot-dim+X-Y"]').textContent =
				`232 cm (Lebar Kanan)`;

			modelViewer.updateHotspot({
				name: "hotspot-dot+X-Y-Z",
				position: `${center.x + x2} ${center.y - y2} ${center.z - z2}`,
			});

			modelViewer.updateHotspot({
				name: "hotspot-dim+X-Z",
				position: `${center.x + x2 * 1.2} ${center.y} ${center.z - z2 * 1.2}`,
			});
			// Tinggi Kanan
			modelViewer.querySelector('button[slot="hotspot-dim+X-Z"]').textContent =
				`999 cm (Tinggi Kanan)`;

			modelViewer.updateHotspot({
				name: "hotspot-dot+X+Y-Z",
				position: `${center.x + x2} ${center.y + y2} ${center.z - z2}`,
			});

			modelViewer.updateHotspot({
				name: "hotspot-dim+Y-Z",
				position: `${center.x} ${center.y + y2 * 1.1} ${center.z - z2 * 1.1}`,
			});

			// ====================Panjang yang dibagian atas
			modelViewer.querySelector('button[slot="hotspot-dim+Y-Z"]').textContent =
				`123 cm (Panjang atas)`;

			modelViewer.updateHotspot({
				name: "hotspot-dot-X+Y-Z",
				position: `${center.x - x2} ${center.y + y2} ${center.z - z2}`,
			});

			modelViewer.updateHotspot({
				name: "hotspot-dim-X-Z",
				position: `${center.x - x2 * 1.2} ${center.y} ${center.z - z2 * 1.2}`,
			});
			// ===============Untuk bagian Tinggi sebelah kiri
			modelViewer.querySelector('button[slot="hotspot-dim-X-Z"]').textContent =
				`463 cm (Tinggi Kiri)`;

			modelViewer.updateHotspot({
				name: "hotspot-dot-X-Y-Z",
				position: `${center.x - x2} ${center.y - y2} ${center.z - z2}`,
			});

			modelViewer.updateHotspot({
				name: "hotspot-dim-X-Y",
				position: `${center.x - x2 * 1.2} ${center.y - y2 * 1.1} ${center.z}`,
			});

			// =============Lebar bagian kiri
			modelViewer.querySelector('button[slot="hotspot-dim-X-Y"]').textContent =
				`492 cm (Lebar Kiri)`;

			modelViewer.updateHotspot({
				name: "hotspot-dot-X-Y+Z",
				position: `${center.x - x2} ${center.y - y2} ${center.z + z2}`,
			});

			renderSVG();

			modelViewer.addEventListener("camera-change", renderSVG);
		});
	}, []);

	const dotStyle = {
		display: "none",
	};

	const dimStyle = {
		background: "#fff",
		borderRadius: "4px",
		border: "none",
		boxSizing: "border-box",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
		color: "rgba(0, 0, 0, 0.8)",
		display: "block",
		fontFamily: "Futura, Helvetica Neue, sans-serif",
		fontSize: "1em",
		fontWeight: 700,
		maxWidth: "128px",
		overflowWrap: "break-word",
		padding: "0.5em 1em",
		position: "absolute",
		width: "max-content",
		height: "max-content",
		transform: "translate3d(-50%, -50%, 0)",
		pointerEvents: "none",
		"--min-hotspot-opacity": 0,
	};

	const dimensionLineContainerStyle = {
		pointerEvents: "none",
		display: "block",
	};

	const dimensionLineStyle = {
		stroke: "#16a5e6",
		strokeWidth: 2,
		strokeDasharray: 2,
	};

	const dataARdindingTanpaVarianDenganScale = {
		src: "https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/KabinetPenyimananDinding.glb?v=1699908710437",
		iosSrc:
			"https://cdn.glitch.global/6a714b05-e482-46c1-9985-88f4f05c9148/SanderLounge.glb?v=1690982403449",
		poster:
			"https://cdn.glitch.global/6a714b05-e482-46c1-9985-88f4f05c9148/SanderLounge.glb?v=1690982403449",
		alt: "floor",
		skyboxImage:
			"https://cdn.glitch.global/eeff5289-f8a2-4538-8a01-b356b23342ea/AdobeStock_190358116_Preview.jpeg?v=1673511925791",
	};

	const [isARworks, setIsARworks] = useState(false);

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
		{ color: [0, 0, 1, 1], name: "Biru", dataColor: "#0000ff" },
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
					Saat menggunakan AR, arahkan smartphone Anda <b>PADA DINDING</b> untuk
					produk ini.
				</div>
			</div>

			<hr />
			<Container>
				<model-viewer
					id="ARdimension"
					ar
					ar-modes="webxr scene-viewer quick-look"
					xr-environment
					ar-scale="fixed"
					camera-orbit="-30deg auto auto"
					max-camera-orbit="auto 100deg auto"
					shadow-intensity="1"
					camera-controls
					touch-action="pan-y"
					ar-placement="wall"
					src={dataARdindingTanpaVarianDenganScale.src}
					ios-src={dataARdindingTanpaVarianDenganScale.iosSrc}
					skybox-image={dataARdindingTanpaVarianDenganScale.skyboxImage}
					alt="A 3D model of an armchair."
					style={{
						width: "100%",
						height: "400px",
						borderRadius: "10px",
						position: "relative",
					}}
				>
					
					<Card style={{ position: "absolute", bottom: "10px", left: "10px" }}>
						<Card.Body style={{ marginBottom: "-25px", marginTop: "-20px" }}>
							<Card.Title></Card.Title>
							<div className="d-flex justify-content-between">
                                {/* Tampilkan dan non aktifkan dimensi masih belum work */}
								<p style={{ marginRight: "12px", marginTop: "-2px" }}>
									Tampilakan Dimensi :{" "}
								</p>
								<input
									class="form-check-input"
									type="checkbox"
									role="switch"
									id="flexSwitchCheckDefault"
								/>
							</div>
						</Card.Body>
					</Card>
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
					
					<button
						slot="hotspot-dot+X-Y+Z"
						style={dotStyle}
						data-position="1 -1 1"
						data-normal="1 0 0"
					></button>
					<button
						slot="hotspot-dim+X-Y"
						style={dimStyle}
						data-position="1 -1 0"
						data-normal="1 0 0"
					></button>
					<button
						slot="hotspot-dot+X-Y-Z"
						style={dotStyle}
						data-position="1 -1 -1"
						data-normal="1 0 0"
					></button>
					<button
						slot="hotspot-dim+X-Z"
						style={dimStyle}
						data-position="1 0 -1"
						data-normal="1 0 0"
					></button>
					<button
						slot="hotspot-dot+X+Y-Z"
						style={dotStyle}
						data-position="1 1 -1"
						data-normal="0 1 0"
					></button>
					<button
						slot="hotspot-dim+Y-Z"
						style={dimStyle}
						data-position="0 -1 -1"
						data-normal="0 1 0"
					></button>
					<button
						slot="hotspot-dot-X+Y-Z"
						style={dotStyle}
						data-position="-1 1 -1"
						data-normal="0 1 0"
					></button>
					<button
						slot="hotspot-dim-X-Z"
						style={dimStyle}
						data-position="-1 0 -1"
						data-normal="-1 0 0"
					></button>
					<button
						slot="hotspot-dot-X-Y-Z"
						style={dotStyle}
						data-position="-1 -1 -1"
						data-normal="-1 0 0"
					></button>
					<button
						slot="hotspot-dim-X-Y"
						style={dimStyle}
						data-position="-1 -1 0"
						data-normal="-1 0 0"
					></button>
					<button
						slot="hotspot-dot-X-Y+Z"
						style={dotStyle}
						data-position="-1 -1 1"
						data-normal="-1 0 0"
					></button>
					<svg
						id="dimLines"
						width="100%"
						height="100%"
						xmlns="http://www.w3.org/2000/svg"
						style={dimensionLineContainerStyle}
					>
						<line class="dimensionLine" style={dimensionLineStyle}></line>
						<line class="dimensionLine" style={dimensionLineStyle}></line>
						<line class="dimensionLine" style={dimensionLineStyle}></line>
						<line class="dimensionLine" style={dimensionLineStyle}></line>
						<line class="dimensionLine" style={dimensionLineStyle}></line>
					</svg>

				</model-viewer>
			</Container>
		</div>
	);
}

export default ExperimenARdindingDimensiplusvarian;
