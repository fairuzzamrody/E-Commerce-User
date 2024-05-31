import React, { useState} from 'react';
import { Container, Dropdown, Row, Col, Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruckFast } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";

function Contentlistproduklastseen() {
	const [sortOption, setSortOption] = useState("Produk Terbaru");

	const handleSortOption = (option) => {
		setSortOption(option === "Produk Terbaru" ? "Produk Terbaru" : option);
	};

	const formatCurrency = (value) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(value);
	};

	const sortCardsAlphabetically = (cards, option) => {
		switch (option) {
			case "Alfabet A-Z":
				return cards.sort((a, b) => a.title.localeCompare(b.title));
			case "Alfabet Z-A":
				return cards.sort((a, b) => b.title.localeCompare(a.title));
			default:
				return cards;
		}
	};

	const sortCardsByNewest = (cards, option) => {
		if (option === "Produk Terbaru") {
			const cardsWithGratisOngkir = cards.filter(
				(card) =>
					card.Badge === "Produk Terbaru !!" &&
					card.ongkoskirim === "Gratis Ongkir",
			);

			const cardsWithoutGratisOngkir = cards.filter(
				(card) =>
					card.Badge === "Produk Terbaru !!" &&
					card.ongkoskirim !== "Gratis Ongkir",
			);

			const otherCards = cards.filter(
				(card) => card.Badge !== "Produk Terbaru !!" || !card.Badge,
			);

			const sortedCardsWithGratisOngkir = cardsWithGratisOngkir.sort(
				(a, b) => b.id - a.id,
			);

			const sortedCardsWithoutGratisOngkir = cardsWithoutGratisOngkir.sort(
				(a, b) => b.id - a.id,
			);

			return [
				...sortedCardsWithGratisOngkir,
				...sortedCardsWithoutGratisOngkir,
				...otherCards,
			];
		} else if (option === "Gratis Ongkir") {
			const cardsWithGratisOngkir = cards.filter(
				(card) => card.ongkoskirim === "Gratis Ongkir",
			);

			const cardsWithoutGratisOngkir = cards.filter(
				(card) => card.ongkoskirim !== "Gratis Ongkir",
			);

			const sortedCardsWithGratisOngkir = cardsWithGratisOngkir.sort(
				(a, b) => b.id - a.id,
			);

			const sortedCardsWithoutGratisOngkir = cardsWithoutGratisOngkir.sort(
				(a, b) => b.id - a.id,
			);

			return [
				...sortedCardsWithGratisOngkir,
				...sortedCardsWithoutGratisOngkir,
			];
		}
		return cards;
	};

	const sortCards = (cards, option) => {
		switch (option) {
			case "Harga Tertinggi":
				return cards.sort((a, b) => b.price - a.price);
			case "Harga Terendah":
				return cards.sort((a, b) => a.price - b.price);
			case "Alfabet A-Z":
			case "Alfabet Z-A":
			case "Produk Terbaru":
			case "Gratis Ongkir":
				return sortCardsByNewest(
					sortCardsAlphabetically([...cards], option),
					option,
				);
			default:
				return cards;
		}
	};

	const dataranCards = [
		{
			id: 1,
			image: "./gambar/product-4.jpg",
			title: "Kursi",
			description: "This is the description for Card 1.",
			rating: 4,
			reviews: 10,
			price: 999900,
			sold: 10,
			Badge: "Produk Terbaru !!",
			ongkoskirim: "Gratis Ongkir",
			linkproduk: "/Detailproduk1",
		},
		{
			id: 2,
			image: "./gambar/product-3.jpg",
			title: "Meja",
			description: "This is the description for Card 2.",
			rating: 4,
			reviews: 5,
			price: 1499900,
			sold: 1,
			Badge: "Produk Terbaru !!",
			ongkoskirim: "Gratis Ongkir",
			linkproduk: "/Detailproduk2",
		},
		{
			id: 3,
			image: "./gambar/product-2.jpg",
			title: "Sofa",
			description: "This is the description for Card 3.",
			rating: 2,
			reviews: 5,
			price: 2500000,
			sold: 5,
			linkproduk: "/Detailproduk3",
		},
	];

	const dindingCards = [
		{
			id: 4,
			image: "./gambar/product-5.jpg",
			title: "Rak Dinding",
			description: "This is the description for Card 4.",
			rating: 5,
			reviews: 15,
			price: 2499900,
			sold: 12,
			Badge: "Produk Terbaru !!",
			linkproduk: "/Detailproduk4",
		},
		{
			id: 5,
			image: "./gambar/product-2.jpg",
			title: "Kabinet Dinding",
			description: "This is the description for Card 5.",
			rating: 3,
			reviews: 8,
			price: 2999900,
			sold: 8,
			flashsale: (
				<Badge pill bg="warning" style={{ fontSize: "0.8rem" }}>
					<i class="bi bi-lightning-fill me-2"></i>
					Flash Sale
				</Badge>
			),
			ongkoskirim: "Gratis Ongkir",
			linkproduk: "/Detailproduk5",
		},
	];

	const sortedDataranCards = sortCards([...dataranCards], sortOption);
	const sortedDindingCards = sortCards([...dindingCards], sortOption);

    return (
      <div>
			<Container>
				<div style={{ fontSize: "1.85rem", textAlign: "center" }}>
					<b>Terakhir Dilihat.</b>
				</div>
				<hr />
				<div className="d-flex justify-content-between align-items-center">
					<div>
						<span style={{ fontSize: "1rem" }}>
							Menampilkan <b>"{sortOption}".</b>
						</span>
					</div>
					<Dropdown>
						<Dropdown.Toggle variant="outline-dark" id="dropdownMenuButton">
							{sortOption}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item onClick={() => handleSortOption("Produk Terbaru")}>
								Produk Terbaru
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => handleSortOption("Harga Tertinggi")}
							>
								Harga Tertinggi
							</Dropdown.Item>
							<Dropdown.Item onClick={() => handleSortOption("Harga Terendah")}>
								Harga Terendah
							</Dropdown.Item>
							<Dropdown.Item onClick={() => handleSortOption("Alfabet A-Z")}>
								Alfabet A-Z
							</Dropdown.Item>
							<Dropdown.Item onClick={() => handleSortOption("Alfabet Z-A")}>
								Alfabet Z-A
							</Dropdown.Item>
							<Dropdown.Item onClick={() => handleSortOption("Gratis Ongkir")}>
								Gratis Ongkir
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<br />
				<Card.Title style={{ fontSize: "1.7rem" }} className="mt-3 fw-bold">
					Produk Dataran.
				</Card.Title>
				<Row className="mt-3">
					{sortedDataranCards.map((card, index) => (
						<Col xs={6} sm={6} md={4} lg={3} key={index}>
							<Link to={card.linkproduk} style={{ textDecoration: "none" }}>
								<Card style={{ marginBottom: "20px", position: "relative" }}>
									{card.Badge && ( // Tampilkan badge hanya jika properti Badge ada
										<Badge
											pill
											bg="danger"
											style={{
												position: "absolute",
												top: "10px",
												right: "10px",
												fontSize: "0.8rem",
											}}
										>
											{card.Badge}
										</Badge>
									)}
									<Card.Img variant="top" src={card.image} />
									<Card.Body>
										<p className="fw-bold" style={{ fontSize: "1rem" }}>
											{card.title}
										</p>
										<div
											style={{
												overflow: "hidden",
												display: "-webkit-box",
												WebkitLineClamp: 2,
												WebkitBoxOrient: "vertical",
											}}
										>
											<Card.Text
												style={{ textAlign: "justify", fontSize: "0.9rem" }}
											>
												{card.description}
											</Card.Text>
										</div>
										<div
											style={{
												marginTop: "10px",
												display: "flex",
												alignItems: "center",
												justifyContent: "left",
												marginBottom: "-12px",
											}}
										>
											{Array.from(
												{ length: Math.min(card.rating, 5) },
												(_, index) => (
													<FontAwesomeIcon
														key={index}
														icon={faStar}
														style={{ color: "gold", fontSize: "0.9rem" }}
													/>
												),
											)}
											<span style={{ marginLeft: "5px", fontSize: "0.8rem" }}>
												{card.rating} ({card.reviews})
											</span>
										</div>
										<br />
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
											}}
										>
											<span style={{ fontSize: "1rem", fontWeight: "bold" }}>
												{formatCurrency(card.price)}
											</span>
										</div>
									</Card.Body>
									<Card.Footer className="bg-white">
										<div className="d-flex justify-content-between">
											{card.ongkoskirim === "Gratis Ongkir" && (
												<Badge pill bg="success" style={{ fontSize: "0.7rem" }}>
													<FontAwesomeIcon
														icon={faTruckFast}
														className="me-2"
													/>
													{card.ongkoskirim}
												</Badge>
											)}
											{card.ongkoskirim !== "Terjual" && (
												<Badge pill bg="dark" style={{ fontSize: "0.7rem" }}>
													Terjual {card.sold}
												</Badge>
											)}
										</div>
									</Card.Footer>
								</Card>
							</Link>
						</Col>
					))}
				</Row>

				<hr />
				<Card.Title style={{ fontSize: "1.7rem" }} className="mt-4 fw-bold">
					Produk Dinding.
				</Card.Title>
				<Row className="mt-3">
					{sortedDindingCards.map((card, index) => (
						<Col xs={6} sm={6} md={4} lg={3} key={index}>
							<Card style={{ marginBottom: "20px", position: "relative" }}>
								{card.Badge && ( // Tampilkan badge hanya jika properti Badge ada
									<Badge
										pill
										bg="danger"
										style={{
											position: "absolute",
											top: "10px",
											right: "10px",
											fontSize: "0.8rem",
										}}
									>
										{card.Badge}
									</Badge>
								)}
								{card.flashsale && ( // Tampilkan badge flash sale jika properti flashsale ada
									<Badge
										pill
										bg="warning"
										style={{
											position: "absolute",
											top: "10px",
											right: "10px", // Mengatur posisi badge di sebelah kanan
											fontSize: "0.8rem",
										}}
									>
										<i className="bi bi-lightning-fill me-2"></i>
										Flash Sale
									</Badge>
								)}
								<Card.Img variant="top" src={card.image} />
								<Card.Body>
									<p className="fw-bold" style={{ fontSize: "1rem" }}>
										{card.title}
									</p>
									<div
										style={{
											overflow: "hidden",
											display: "-webkit-box",
											WebkitLineClamp: 2,
											WebkitBoxOrient: "vertical",
										}}
									>
										<Card.Text
											style={{ textAlign: "justify", fontSize: "0.9rem" }}
										>
											{card.description}
										</Card.Text>
									</div>
									<div
										style={{
											marginTop: "10px",
											display: "flex",
											alignItems: "center",
											justifyContent: "left",
											marginBottom: "-12px",
										}}
									>
										{Array.from(
											{ length: Math.min(card.rating, 5) },
											(_, index) => (
												<FontAwesomeIcon
													key={index}
													icon={faStar}
													style={{ color: "gold", fontSize: "0.9rem" }}
												/>
											),
										)}
										<span style={{ marginLeft: "5px", fontSize: "0.8rem" }}>
											{card.rating} ({card.reviews})
										</span>
									</div>
									<br />
									<div
										style={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
										}}
									>
										<span style={{ fontSize: "1rem", fontWeight: "bold" }}>
											{formatCurrency(card.price)}
										</span>
									</div>
								</Card.Body>
								<Card.Footer className="bg-white">
									<div className="d-flex justify-content-between">
										{card.ongkoskirim === "Gratis Ongkir" && (
											<Badge pill bg="success" style={{ fontSize: "0.7rem" }}>
												<FontAwesomeIcon icon={faTruckFast} className="me-2" />
												{card.ongkoskirim}
											</Badge>
										)}
										<Badge pill bg="dark" style={{ fontSize: "0.65rem" }}>
											Terjual {card.sold}
										</Badge>
									</div>
								</Card.Footer>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
    );
}

export default Contentlistproduklastseen