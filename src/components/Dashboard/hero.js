import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const styles = {
  h1: { fontSize: "3rem", marginTop: "15px" },
  h2: { fontSize: "3.5rem", marginTop: "-5px" },
  description: { marginBottom: "20px", fontSize: "1.26rem", marginTop: "15px", },
  button: { borderRadius: "100px", marginTop: "20px" },
  image: { width: "100%", borderRadius : "15px" },
  collection: { marginTop: "75px" },
  categoryTitle: { fontSize: "1.65rem", marginBottom: "10px" },
  categorySubtitle: { fontSize: "1.75rem", marginBottom: "20px" },
  icon: { marginLeft: "15px" },
};

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const scrollToCollection = () => {
    const collectionSection = document.getElementById("collection");
    collectionSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="d-flex align-items-center my-3 mt-4"> {/* Add margin at the top and bottom */}
      <Container>
        <Container>
        <Row>
          <Col lg={6} className="order-lg-1">
            <div className="d-flex flex-column justify-content-center align-items-lg-start">
              <div className="d-none d-md-block">
              <h1 data-aos="fade-up" style={styles.h1}>
                <b>Find Your</b>
              </h1>
              <h2 data-aos="fade-up" style={styles.h2}>
                <b>Dream Furniture.</b>
              </h2>
              </div>
              <div className="d-block d-lg-none">
              <h1 data-aos="fade-up" style={styles.h1}>
                <b>Find Your</b>
              </h1>
              <h2 data-aos="fade-up" style={styles.h2}>
                <b>Dream Furniture.</b>
              </h2>
              </div>
              <Col lg={12} className="order-lg-3"> {/* Add margin at the top */}
                <div className="d-none d-lg-block">
                  <div data-aos="fade-up" data-aos-delay="200" style={styles.description}>
                  Membawa sentuhan elegan dengan pilihan 
            furnitur berkualitas tinggi yang benar-benar 
            membuat ruangan Anda terasa seperti rumah impian.
                  </div>
                  <Button data-aos="fade-up" data-aos-delay="300" className="btn-dark btn-lg" style={styles.button} onClick={scrollToCollection}>
                    <span>
                      Browse Our Collection
                      <FontAwesomeIcon icon={faArrowDown} style={styles.icon} />
                    </span>
                  </Button>
                </div>
              </Col>
            </div>
          </Col>

          <Col lg={6} className="order-lg-5"> {/* Tambahkan mb-4 untuk memberikan jarak ke bawah */}
          
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <img src="./gambar/none.jpg" className="img-fluid animated mt-2 mb-2" alt="" style={styles.image} />
          </div>
          <div className="d-lg-none">
            <div data-aos="fade-up" data-aos-delay="200" style={styles.description}>
            Membawa sentuhan elegan dengan pilihan 
            furnitur berkualitas tinggi yang benar-benar 
            membuat ruangan Anda terasa seperti rumah impian.
            </div>
            <Button data-aos="fade-up" data-aos-delay="300" className="btn-dark btn-lg" style={styles.button} onClick={scrollToCollection}>
              <span>
                Browse Our Collection
                <FontAwesomeIcon icon={faArrowDown} style={styles.icon} />
              </span>
            </Button>
          </div>
        </Col>
        
      </Row>
      <Row>
        
          <Col>
            <div id="collection" style={styles.collection}>
              <h1 data-aos="fade-up" data-aos-delay="100" style={styles.categoryTitle}>
                <b>Browse The Categories</b>
              </h1>
              <h1 data-aos="fade-up" data-aos-delay="200" style={styles.categorySubtitle}>
                <b>That We Designed For You.</b>
              </h1>
            </div>
          </Col>
        </Row>
        </Container>
    </Container>
  </section>
);
};

export default Hero;