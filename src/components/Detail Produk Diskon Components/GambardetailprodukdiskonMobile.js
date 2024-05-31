import React from "react";
import { Card, Carousel, Col, Row, Image, Container } from "react-bootstrap";

function GambardetailprodukdiskonMobile() {
    const carouselImgStyle = {
        maxHeight: "500px", // Sesuaikan ukuran yang diinginkan
        objectFit: "cover",
      };
    
      return (
        <div>
          <Container>
            {/* Gambar 1 */}
            <Card>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src="./gambar/product-1.jpg"
                    alt="First slide"
                    style={carouselImgStyle}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src="./gambar/product-2.jpg"
                    alt="Second slide"
                    style={carouselImgStyle}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-fluid"
                    src="./gambar/product-4.jpg"
                    alt="Third slide"
                    style={carouselImgStyle}
                  />
                </Carousel.Item>
              </Carousel>
            </Card>
            {/* end Gambar 1 */}
    
            {/* Gambar 2 */}
            <Container className="mt-4">
              <Row>
                <Col>
                  <Image src="./gambar/product-1.jpg" fluid />
                </Col>
                <Col>
                  <Image src="./gambar/product-2.jpg" fluid />
                </Col>
                <Col>
                  <Image src="./gambar/product-3.jpg" fluid />
                </Col>
                <Col>
                  <Image src="./gambar/product-4.jpg" fluid />
                </Col>
                <Col>
                  <Image src="./gambar/product-5.jpg" fluid thumbnail />
                </Col>
              </Row>
            </Container>
            {/* Gambar 2 */}
          </Container>
        </div>
      );
    }

export default GambardetailprodukdiskonMobile