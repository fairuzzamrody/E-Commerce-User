import React, { useState } from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";

function Contentberipenilaianuntukpesananlunas() {
  const [currentCard, setCurrentCard] = useState(1);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedImagesPerRating, setUploadedImagesPerRating] = useState([]);
  const [uploadedImageCountPerRating, setUploadedImageCountPerRating] = useState(0);
  const [nama, setNama] = useState("Jhon Doe 1");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isRatingSubmitted, setIsRatingSubmitted] = useState(false);
  const [UlasanPenilaian, setUlasanPenilaian] = useState(""); // State untuk deskripsi produk

  const toggleSwitch = () => {
    setNama((prevNama) =>
      prevNama === "Jhon Doe 1" ? "J******1" : "Jhon Doe 1"
    );
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];

    if (uploadedImageCountPerRating < 3) {
      const updatedImages =
        currentCard === 1
          ? [...uploadedImages, imageFile]
          : [...uploadedImagesPerRating, imageFile];

      if (currentCard === 1) {
        setUploadedImages(updatedImages);
      } else {
        setUploadedImagesPerRating(updatedImages);
      }

      setUploadedImageCountPerRating(uploadedImageCountPerRating + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Maksimal 3 gambar diizinkan",
        text: "Anda telah mengunggah maksimal 3 gambar.",
        confirmButtonText: "Tutup",
      });
    }
  };

  const toggleCollapse = (collapseId) => {
    setCurrentCard(collapseId === 1 ? 2 : 1);
  };

  const handleRatingSubmit = () => {
    if (rating === 0 || comment.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Rating dan Ulasan harus diisi",
        text: "Harap isi rating dan ulasan sebelum mengirim penilaian.",
        confirmButtonText: "Tutup",
      });
    } else if (comment.length < 50) {
      Swal.fire({
        icon: "error",
        title: "Ulasan harus minimal 50 karakter",
        text: "Harap isi ulasan dengan minimal 50 karakter sebelum mengirim penilaian.",
        confirmButtonText: "Tutup",
      });
    } else {
      setRating(0);
      setComment("");
      setIsRatingSubmitted(true);

      Swal.fire({
        icon: "success",
        title: "Penilaian Anda telah dikirim!",
        text: "Terima kasih atas penilaian Anda.",
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const handleShowModal = () => {
    setCurrentCard(1);
  };

  const handleReset = () => {
    setUploadedImages([]);
    setRating(0);
    setComment("");
  };

  const handleNextRating = () => {
    if (rating === 0 || comment.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Rating dan Ulasan harus diisi",
        text: "Harap isi rating dan ulasan sebelum mengirim penilaian selanjutnya.",
        confirmButtonText: "Tutup",
      });
    } else if (comment.length < 50) {
      Swal.fire({
        icon: "error",
        title: "Ulasan harus minimal 50 karakter",
        text: "Harap isi ulasan dengan minimal 50 karakter sebelum mengirim penilaian selanjutnya.",
        confirmButtonText: "Tutup",
      });
    } else {
      setCurrentCard(2);
      setUploadedImagesPerRating([]);
      setUploadedImageCountPerRating(0);
      setRating(0);
      setComment("");
    }
  };

  const handleDeleteImage = (index, cardNumber) => {
    if (cardNumber === 1) {
      const updatedImages = [...uploadedImages];
      updatedImages.splice(index, 1);
      setUploadedImages(updatedImages);
      setUploadedImageCountPerRating(uploadedImageCountPerRating - 1);
    } else {
      const updatedImagesPerRating = [...uploadedImagesPerRating];
      updatedImagesPerRating.splice(index, 1);
      setUploadedImagesPerRating(updatedImagesPerRating);
      setUploadedImageCountPerRating(uploadedImageCountPerRating - 1);
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    setUlasanPenilaian(e.target.value);
  };

  return (
    <div>
      {currentCard === 1 && (
        <Container>
          <Card className="mb-3">
            <Card.Body>
              <Row>
                <Col className="d-flex flex-column">
                  <div>
                    <img
                      src="./gambar/product-3.jpg"
                      alt="Produk"
                      className="img-fluid"
                      style={{
                        maxWidth: "120px",
                        maxHeight: "90px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </Col>
                <Col className="d-flex flex-column">
                  <div>
                    <h5>Nama_Produk 1</h5>
                    <p className="mb-0">Varian : Biru</p>
                    <p className="mb-0">Kuantitas : 1x</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      )}
      {currentCard === 2 && (
        <Container>
          <Card className="mb-3">
            <Card.Body>
              <Row>
                <Col className="d-flex flex-column">
                  <div>
                    <img
                      src="./gambar/product-2.jpg"
                      alt="Produk"
                      className="img-fluid"
                      style={{ maxWidth: "120px", maxHeight: "90px", borderRadius : "10px" }}
                    />
                  </div>
                </Col>
                <Col className="d-flex flex-column">
                  <div>
                    <h5>Nama_Produk 2</h5>
                    <p className="mb-0">Varian : -</p>
                    <p className="mb-0">Kuantitas : 1x</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      )}

      <div
        className="mb-3"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 200, width: "100%" }}>
          <Rating value={rating} onChange={setRating} />
        </div>
      </div>

      <div class="alert" role="alert" style={{ backgroundColor: "#F5F5F5" }}>
        <textarea
          rows={5}
          value={comment}
          onChange={handleCommentChange}
          placeholder="Tulis ulasan Anda Disini... (Min 50 Karakter)"
          style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
          required
          minLength={50}
          maxLength="250"
        />
        <div className="d-flex justify-content-end ">
          <span className="text-muted">{UlasanPenilaian.length} / 250</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <figcaption class="blockquote-footer mt-2">
            Sisa gambar penilaian yang dapat diupload (
            {3 -
              (currentCard === 1
                ? uploadedImages.length
                : uploadedImagesPerRating.length)}
            )
          </figcaption>
          <label
            htmlFor="imageInput"
            className="btn btn-outline-dark"
            style={{ marginBottom: "10px" }}
          >
            <i class="bi bi-camera"></i> Tambah Foto
            <input
              type="file"
              accept="image/*"
              id="imageInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </label>
        </div>
        <Row
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "10px",
            marginTop: "20px",
          }}
        >
          {currentCard === 1
            ? uploadedImages.map((image, index) => (
                <Col key={index}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded ${index + 1}`}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteImage(index, 1)}
                      style={{
                        position: "absolute",
                        marginTop: "10px",
                        marginLeft: "160px",
                      }}
                    >
                      <FontAwesomeIcon icon={faTimes} className="delete-icon" />
                    </Button>
                  </div>
                </Col>
              ))
            : uploadedImagesPerRating.map((image, index) => (
                <Col key={index}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded ${index + 1}`}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="delete-icon"
                      onClick={() => handleDeleteImage(index, 2)}
                    />
                  </div>
                </Col>
              ))}
        </Row>
      </div>

      <hr />
      <Container>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <p>
              Tampilkan nama anda pada penilaian.
              <br />
              <span>
                <figcaption className="blockquote-footer mt-1">
                  Nama yang ditampilkan adalah{" "}
                  <cite title="Source Title">{nama}</cite>
                </figcaption>
              </span>
            </p>
            <Form>
              <Form.Check type="switch" id="custom-switch" onChange={toggleSwitch} />
            </Form>
          </div>
          <div className="d-flex justify-content-between ">
            <Button variant="outline-secondary" onClick={handleReset}>
              Reset
            </Button>
            <Button
              variant="dark"
              className="d-flex align-items-center"
              onClick={currentCard === 1 ? handleNextRating : handleRatingSubmit}
            >
              {currentCard === 1 ? "Penilaian Selanjutnya" : "Kirim Penilaian"}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2"
                style={{ marginLeft: "20px" }}
              />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contentberipenilaianuntukpesananlunas;
