import React, { useEffect, useState } from "react";
import { Container, Row, Col, Badge, Button, Toast } from "react-bootstrap";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const styles = {
	description: { marginBottom: "20px", fontSize: "18px", marginTop: "15px" },
	image: { width: "100%" },
	collection: { marginTop: "75px" },
	icon: { marginLeft: "15px" },
};

const DashboardAR = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Gunakan navigator.userAgent untuk mendeteksi jenis perangkat
		const userAgent = navigator.userAgent.toLowerCase();
		setIsMobile(
			/mobile|android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
				userAgent,
			),
		);
	}, []);
	const [showA, setShowA] = useState(false); // Set showA dan showB ke false agar toast tidak tampil saat halaman dimuat
	const [showB, setShowB] = useState(false);

	// Fungsi untuk menampilkan dan menyembunyikan toast A
	const toggleShowA = () => setShowA(!showA);

	// Fungsi untuk menampilkan dan menyembunyikan toast B
	const toggleShowB = () => setShowB(!showB);

	return (
		<section id="hero" className="d-flex align-items-center my-4">
			<Container>
				<Row>
					<Col lg={6} className="order-lg-1">
						<div className="d-flex flex-column justify-content-center align-items-lg-start">
							<h4
								data-aos="fade-up"
								style={{ fontSize: "1.2rem" }}
								className="mt-2"
							>
								<b>The Future is Today !</b>
							</h4>
							<h2
								data-aos="fade-up"
								style={{ fontSize: "1.8rem", marginTop: "-5px" }}
							>
								<b>Show Furniture In</b>
							</h2>
							<h2
								data-aos="fade-up"
								style={{ fontSize: "1.9rem", marginTop: "-5px" }}
							>
								<b>Your Room With WebAR!</b>
							</h2>
							<Col lg={12} className="order-lg-3 mt-3">
								<div className="d-none d-lg-block">
									<div
										data-aos="fade-up"
										data-aos-delay="200"
										style={styles.description}
									>
										Lihat produk furnitur kami dengan teknologi Augmented
										Reality yang menampilkan furnitur 3D secara virtual dan
										letakkan pada ruangan anda tanpa perlu mengunduh aplikasi
										apapun. Pastikan anda mengakses teknologi ini melalui
										smartphone yang dapat menjalankan teknologi AR.
									</div>
									<div data-aos="fade-up" data-aos-delay="200">
										<a
											href="/KategoriSC"
											className="btn btn-dark btn-lg"
											style={{ borderRadius: "100px", marginBottom: "100px" }}
										>
											Coba Pada Produk Lain{" "}
											<FontAwesomeIcon icon={faArrowRight} className="ml-2" />
										</a>
									</div>
								</div>
							</Col>
						</div>
					</Col>

					<Col lg={6} className="order-lg-5">
						<div
							className="text-center"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div data-aos="fade-left" data-aos-delay="100">
								<model-viewer
									src="https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/arm_chair__furniture.glb?v=1701710260247"
									ios-src="https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/Arm_chair__Furniture.usdz?v=1701711222687"
									skybox-image="https://cdn.glitch.global/eeff5289-f8a2-4538-8a01-b356b23342ea/AdobeStock_190358116_Preview.jpeg?v=1673511925791"
									id="ARdimension"
									ar="true"									
									ar-modes="webxr scene-viewer quick-look"
									xr-environment
									ar-scale="auto"
									skybox-height="1.8m"
									shadow-intensity="1"
									camera-controls
									touch-action="pan-y"
									ar-placement="floor"
									auto-rotate
									// ar-status="not-presenting"
									style={{
										width: "100%",
										height: "400px",
										borderRadius: "15px",
										position: "relative",
									}}
								>
									<a class="chakra-badge css-bfz86h" href="https://developers.google.com/ar/discover/supported-devices"></a>
									<Button
										class="Hotspot"
										slot="hotspot-2"
										data-position="0.01416733503943192m 0.862451242053726m -0.3752879799754811m"
										data-normal="-0.017823837342446927m 0.5798794577441483m 0.8145072899052178m"
										data-visibility-attribute="visible"
										variant="light"
										onClick={toggleShowA}
									>
										<div class="HotspotAnnotation">Premium Fabric Vintage</div>
									</Button>
									<Toast
										show={showA}
										onClose={toggleShowA}
										style={{ marginTop: " 5px", marginLeft: "10px" }}
									>
										<Toast.Header>
											<img
												src="holder.js/20x20?text=%20"
												className="rounded me-2"
												alt=""
											/>
											<strong className="me-auto">
												Premium Fabric Vintage
											</strong>
										</Toast.Header>
										<Toast.Body>
											Kain Vintage Premium yang terbuat secara handmade dan Kami
											berikan kain berkualitas tinggi yang unik, elegan dan
											nyaman{" "}
										</Toast.Body>
									</Toast>
									<Button
										class="Hotspot"
										slot="hotspot-3"
										data-position="-0.3613054325787509m 0.16424588767669734m 0.44516024504199986m"
										data-normal="-0.7903955305466316m 0.25415139922426283m 0.5573885283751886m"
										data-visibility-attribute="visible"
										variant="light"
										onClick={toggleShowB}
									>
										<div class="HotspotAnnotation">Wood American Cherry</div>
									</Button>

									<Toast
										onClose={toggleShowB}
										show={showB}
										style={{ marginTop: " 5px", marginLeft: "10px" }}
									>
										<Toast.Header>
											<img
												src="holder.js/20x20?text=%20"
												className="rounded me-2"
												alt=""
											/>
											<strong className="me-auto">Wood American Cherry</strong>
										</Toast.Header>
										<Toast.Body>
											Kayu Ceri Amerika adalah spesies kayu keras tertinggi dari
											hutan kayu keras AS dan unik di Amerika Utara
										</Toast.Body>
									</Toast>
									<div class="progress-bar hide" slot="progress-bar">
										<div class="update-bar"></div>
									</div>
									<div
										className="d-flex justify-content-end"
										style={{
											position: "absolute",
											bottom: "10px",
											right: "10px",
										}}
									>
										<Badge
											bg={isMobile ? "success" : "danger"}
											style={{ fontSize: "15px" }}
										>
											{isMobile
												? "Perangkat Ini Mendukung AR"
												: "Perangkat Ini Tidak Mendukung AR"}
										</Badge>
									</div>
									<button
										className="btn-primary"
										slot="ar-button"
										style={{
											backgroundColor: "white",
											borderRadius: "4px",
											border: "none",
											position: "absolute",
											top: "16px",
											right: "16px",
											height: "30px",
											display: isMobile ? "block" : "none", // Menampilkan tombol hanya jika di ponsel
										}}
									>
										👋 Hey, Gunakan AR
									</button>
								</model-viewer>
							</div>
						</div>
						<div className="d-lg-none">
							<div
								data-aos="fade-up"
								data-aos-delay="200"
								style={styles.description}
							>
								Lihat produk furnitur kami dalam bentuk Augmented Reality (AR)
								3D di smartphone Anda tanpa perlu mengunduh aplikasi.
							</div>
							<div data-aos="fade-up" data-aos-delay="200">
								<a
									href="/KategoriSC"
									className="btn btn-dark btn-lg"
									style={{ borderRadius: "100px", marginBottom: "100px" }}
								>
									Coba Pada Produk Lain{" "}
									<FontAwesomeIcon icon={faArrowRight} className="ml-2" />
								</a>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default DashboardAR;
