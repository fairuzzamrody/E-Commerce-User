import React, { useState, useEffect } from "react";
import {
	Container,
} from "react-bootstrap";
import Navbar from "../../components/Navbar Components/navbar";
import Footer from "../../components/Footer Components/footer";
import BreadCrumb from "../../components/BreadCrumb Components/BreadCrumb";
import BottomNavBar from "../../components/Bottom Navbar/Bottomnavbar";
import Contentloading from "../../components/Loading Components/Contentloading";
import ComponentCheckoutProduk from "../../components/Checkout Produk Components/ComponentCheckoutProduk";

const CheckoutProduk = () => {
	const [isLoading, setIsLoading] = useState(true);

	// State dan efek samping
	useEffect(() => {
		// Fungsi untuk menggulir ke atas halaman
		const scrollToTop = () => {
			window.scrollTo(0, 0);
		};

		// Panggil fungsi scrollToTop saat halaman dimuat
		scrollToTop();

		// Tampilkan loading selama 1.5 detik
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);

	return (
		<div>
			<Container>
				{isLoading ? (
					<Contentloading />
				) : (
					<>
						<BottomNavBar />
						<Navbar />
						<BreadCrumb />
						<ComponentCheckoutProduk />
						<Footer />
					</>
				)}
			</Container>
		</div>
	);
};

export default CheckoutProduk;
