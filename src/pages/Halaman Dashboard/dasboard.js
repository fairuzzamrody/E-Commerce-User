import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar Components/navbar";
import Footer from "../../components/Footer Components/footer";
import Hero from "../../components/Dashboard/hero";
import Category from "../../components/Dashboard/Kategori";
import Produkterbaru from "../../components/Produk Terbaru Components/produkterbaru";
import CobaAR from "../../components/Augmented Reality/AR Dashboard/DashboardAR";
import BottomNavBar from "../../components/Bottom Navbar/Bottomnavbar";
import Contentlastseen from "../../components/Last Seen Components/Contentlastseen";
import { Container } from "react-bootstrap";

import Contentloading from "../../components/Loading Components/Contentloading";
import ContentFlashSaleDashboard from "../../components/FlashSale Components/ContentFlashSaleDashboard";

function Dashboard() {

	const [loading, setLoading] = useState(true); // State untuk indikator loading

	useEffect(() => {
		window.scrollTo(0, 0);

		// Menampilkan loader selama 1.5 detik
		setTimeout(() => {
			setLoading(false); // Menutup loader setelah 1.5 detik
		}, 1500);

		
	}, []);

	const pageStyle = {
		height: "100%",
		overflow: "hidden",
	};

	return (
		<div style={pageStyle}>
			<BottomNavBar />
			<Navbar />
			{loading && <Contentloading />}{" "}
			{/* Menampilkan loader selama 1.5 detik */}
			<Hero />
			<Category />
			
			<ContentFlashSaleDashboard />
			<Produkterbaru />
			<Container>
				<Contentlastseen />
			</Container>
			<CobaAR />
			<Footer />
		</div>
	);
}

export default Dashboard;
