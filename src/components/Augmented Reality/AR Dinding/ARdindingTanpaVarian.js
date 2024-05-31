import React, { useEffect, useState } from "react";
import { Badge, Container } from "react-bootstrap";
// import "@google/model-viewer";

const dataARdindingTanpaVarian = {

// ini contoh link untuk AR android dan ios
	// SIZE NORMAL---------------------------------------------------------------
	// Kabinet penyimpanan Andro 
	// https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/KabinetPenyimananDinding.glb?v=1699908710437

	// Crimson iOS
	// https://cdn.glitch.global/6a714b05-e482-46c1-9985-88f4f05c9148/CrimsonMirror.glb?v=1690981997081


	// SIZE BESAR DAN LEBAR ===============================================================================
	// ANDROID LEBAR DAN BESAR
	// https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/RakBukuKayuModelRumah.glb?v=1699907451373

	// IOS LEBAR DAN BESAR
	// https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/CerminDualTone.glb?v=1699907986280

		// SRC itu untuk android
		// IoS SRC itu untuk ios
	src: "https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/RakBukuKayuModelRumah.glb?v=1699907451373",
	iosSrc: "https://cdn.glitch.global/6a714b05-e482-46c1-9985-88f4f05c9148/CrimsonMirror.usdz?v=1690981993188",
	skyboxImage:
		"https://cdn.glitch.global/eeff5289-f8a2-4538-8a01-b356b23342ea/AdobeStock_190358116_Preview.jpeg?v=1673511925791",
};

function ARdindingTanpaVarian() {
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

	// Fungsi untuk mengaktifkan AR saat tombol diklik
	const activateAR = () => {
		const modelViewer = document.querySelector("model-viewer");
		if (modelViewer) {
			modelViewer.activateAR();
		}
	};

	const hideDefaultARButton = () => {
		const modelViewer = document.querySelector("model-viewer");
		if (modelViewer) {
			modelViewer.style.setProperty("--ar-button-display", "none");
		}
	};

	useEffect(() => {
		hideDefaultARButton();
	}, []);

	return (
		<div>
			{/* Note : Kode AR dataran ini menyesuaikan apa yang diinputkan oleh Admin, 
        AR dataran ini tidak harus di produk bisa juga tetapi juga di produk Flash Sale, 
        karena ini hanya simulasi saja */}

			<p className="mt-4" style={{ fontSize: "1.2rem" }}>
				<b>Hey, Lihat Visualisasi 3D Produk dan AR. </b>
			</p>
			<p>
				Tombol Augmented Reality Akan Muncul Pada Ponsel atau Tablet
				Android dan iOS yang kompatibel.
			</p>
			<div
				class="alert alert-primary d-flex align-items-center"
				role="alert"
			>
				<i class="bi bi-exclamation-triangle me-3"></i>
				<div>
					Saat menggunakan AR, arahkan smartphone Anda{" "}
					<b>PADA DINDING </b> untuk produk ini.
				</div>
			</div>

			<hr />
			<Container>
				<div data-aos="fade-up" data-aos-delay="100">
					<model-viewer
						src={dataARdindingTanpaVarian.src}
						ios-src={dataARdindingTanpaVarian.iosSrc}
						ar
						ar-modes="scene-viewer webxr quick-look"
						shadow-intensity="1"
						ar-placement="wall"
						ar-scale="auto"
						auto-rotate
						camera-controls
						touch-action="pan-y"
						skybox-image={
							dataARdindingTanpaVarian.skyboxImage
						}
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
						<div className="d-block d-lg-none">
							<button
								onClick={activateAR}
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
						</div>
					</model-viewer>
				</div>
			</Container>
		</div>
	);
}

export default ARdindingTanpaVarian;
