import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar Components/navbar';
import Footer from '../../components/Footer Components/footer';
import BreadCrumb from "../../components/BreadCrumb Components/BreadCrumb";
import { Container, Dropdown, Row, Col, Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import BottomNavBar from '../../components/Bottom Navbar/Bottomnavbar';
import Contentloading from '../../components/Loading Components/Contentloading';

function Hasilpencarian() {
  const [sortOption, setSortOption] = useState('Produk Terbaru');

  const handleSortOption = (option) => {
    setSortOption(option === 'Produk Terbaru' ? 'Produk Terbaru' : option); // Ubah teks opsi ke "produk terbaru" jika dipilih "Produk Terbaru"
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(value);
  }

  const sortCardsAlphabetically = (cards, option) => {
    switch (option) {
      case 'Alfabet A-Z':
        return cards.sort((a, b) => a.title.localeCompare(b.title));
      case 'Alfabet Z-A':
        return cards.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return cards;
    }
  };

  const sortCardsByNewest = (cards, option) => {
    if (option === 'Produk Terbaru') {
      return cards.sort((a, b) => b.id - a.id); // Dianggap semakin besar id, semakin baru produknya
    }
    return cards;
  };

  const sortCards = (cards, option) => {
    switch (option) {
      case 'Harga Tertinggi':
        return cards.sort((a, b) => b.price - a.price);
      case 'Harga Terendah':
        return cards.sort((a, b) => a.price - b.price);
      case 'Alfabet A-Z':
      case 'Alfabet Z-A':
      case 'Produk Terbaru':
        return sortCardsByNewest(sortCardsAlphabetically([...cards], option), option);
      default:
        return cards;
    }
  };
  const dataranCards = [
    {
      id: 1,
      image: './gambar/wall2.png',
      title: 'Kursi',
      description: 'This is the description for Card 1.',
      rating: 4,
      reviews: 10,
      price: 999900,
      sold: 10,
    },
    {
      id: 2,
      image: './gambar/wall2.png',
      title: 'Meja',
      description: 'This is the description for Card 2.',
      rating: 4,
      reviews: 5,
      price: 1499900,
      sold: 1,
    },
    {
      id: 3,
      image: './gambar/wall2.png',
      title: 'Sofa',
      description: 'This is the description for Card 3.',
      rating: 2,
      reviews: 5,
      price: 2500000,
      sold: 5,
    },
  ];

  const dindingCards = [
    {
      id: 4,
      image: './gambar/wall2.png',
      title: 'Rak Dinding',
      description: 'This is the description for Card 4.',
      rating: 5,
      reviews: 15,
      price: 2499900,
      sold: 12,
    },
    {
      id: 5,
      image: './gambar/wall2.png',
      title: 'Kabinet Dinding',
      description: 'This is the description for Card 5.',
      rating: 3,
      reviews: 8,
      price: 2999900,
      sold: 8,
    },
  ];

  const sortedDataranCards = sortCards([...dataranCards], sortOption);
  const sortedDindingCards = sortCards([...dindingCards], sortOption);

  
  const cardRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '-15px',
    marginRight: '-15px',
    height: '100%', // Menetapkan tinggi tetap untuk mencegah card memanjang saat pengurutan
    transition: 'all 0.3s ease',
  };

  const cardColStyle = {
    padding: '0 15px',
    marginBottom: '30px',
    height: '100%', // Menetapkan tinggi tetap untuk mencegah card memanjang saat pengurutan
    transition: 'all 0.3s ease',
  };
 // Gunakan useEffect untuk mengatur posisi halaman ke atas setiap kali komponen di-mount
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Contentloading />
      <BottomNavBar />
      <Navbar />
      <BreadCrumb />
      <Container>
        <div className="text-center mt-5 mb-5">
          <h1><b>Hasil Pencarian.</b></h1>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span>Menampilkan 10 barang untuk "Kursi".</span> {/* Tampilkan teks opsi yang dipilih */}
          </div>
          <div className="d-flex align-items-center">
            <span style={{ marginRight: '20px' }}><b>Urutkan : </b></span>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdownMenuButton">
                {sortOption}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSortOption('Harga Tertinggi')}>Harga Tertinggi</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortOption('Harga Terendah')}>Harga Terendah</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortOption('Alfabet A-Z')}>Alfabet A-Z</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortOption('Alfabet Z-A')}>Alfabet Z-A</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortOption('Produk Terbaru')}>Produk Terbaru</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <br />
        <h3>Produk <a style={{ position: 'relative' }}>Dataran
          <span style={{
            content: "",
            position: "absolute",
            left: "-4%",
            bottom: "-2px",
            width: "165px",
            height: "14px",
            transform: "skew(-12deg) translateX(-50%)",
            background: "rgba(238,111,87,0.5)",
            zIndex: "-1",
          }}></span>
        </a></h3>
        <Row style={cardRowStyle} className='mt-3'>
          {sortedDataranCards.map((card, index) => (
            <Col key={index} style={cardColStyle} xs={12} sm={6} md={4} lg={3}>
      <Card style={{ height: '100%' }}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <div style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
            <Card.Text>{card.description}</Card.Text>
          </div>
          <Card.Text>

          <div style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "left", marginBottom: "5px" }}>
            {Array.from({ length: Math.min(card.rating, 5) }, (_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} style={{ color: "gold" }} />
            ))}
            <span style={{ marginLeft: "5px" }}>
              {card.rating} ({card.reviews})
            </span>
          </div>
          <span style={{ fontSize: "16.2px", fontWeight: "bold" }}>
            {formatCurrency(card.price)} |{" "}
            <Badge pill bg="dark">Terjual {card.sold}</Badge>
          </span>
          </Card.Text>
          
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
<h3>Produk <a style={{ position: 'relative' }}>Dinding
<span style={{
            content: "",
            position: "absolute",
            left: "-4%",
            bottom: "-2px",
            width: "165px",
            height: "14px",
            transform: "skew(-12deg) translateX(-50%)",
            background: "rgba(238,111,87,0.5)",
            zIndex: "-1",
          }}></span>
        </a></h3>
        <Row style={cardRowStyle} className='mt-3'  >
          {sortedDindingCards.map((card, index) => (
            <Col key={index} style={cardColStyle} xs={12} sm={6} md={4} lg={3}>
      <Card style={{ height: '100%' }}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <div style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
            <Card.Text>{card.description}</Card.Text>
          </div>
          <Card.Text>

          <div style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "left", marginBottom: "5px" }}>
            {Array.from({ length: Math.min(card.rating, 5) }, (_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} style={{ color: "gold" }} />
            ))}
            <span style={{ marginLeft: "5px" }}>
              {card.rating} ({card.reviews})
            </span>
          </div>
          <span style={{ fontSize: "16.2px", fontWeight: "bold" }}>
            {formatCurrency(card.price)} |{" "}
            <Badge pill bg="dark">Terjual {card.sold}</Badge>
          </span>
          </Card.Text>
          
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Hasilpencarian;