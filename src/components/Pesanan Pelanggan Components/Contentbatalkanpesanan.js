import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import Swal from "sweetalert2";
import Contentloading from "../Loading Components/Contentloading";

function Contentmodalbatalkanpesanan() {
  const [showModal, setShowModal] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isConfirmButtonDisabled, setIsConfirmButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // State untuk loading

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Selamat Pagi");
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting("Selamat Siang");
    } else {
      setGreeting("Selamat Malam");
    }

    const isFlashSaleUpcoming = true;
    if (isFlashSaleUpcoming) {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue !== "") {
      setIsConfirmButtonDisabled(false);
    } else {
      setIsConfirmButtonDisabled(true);
    }
  };

  const handleConfirmClick = () => {
    if (selectedOption !== "") {
      Swal.fire({
        title: "Pembatalan Pemesanan Produk",
        text: "Apakah anda yakin untuk membatalkan pesanan produk ini ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, Batalkan Pesanan",
        cancelButtonText: "Kembali",
      }).then((result) => {
        if (result.isConfirmed) {
          // Display a loading state
          setIsLoading(true);
  
          // Simulate a 2.5-second (2500 milliseconds) delay before showing the success message
          setTimeout(() => {
            setIsLoading(false);
            // Show the success message
            Swal.fire(
              "Pesanan Dibatalkan!",
              "Pesanan Anda telah dibatalkan.",
              "success"
            ).then(() => {
              handleClose(); // Close the modal after SweetAlert2 is closed
            });
          }, 2500);
        }
      });
    }
  };
  

  return (
    <div>
      <Modal centered show={showModal} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Pembatalan Pesanan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {" "}
            {greeting}, <b>(Nama Pelanggan)</b>,{" "}
          </p>
          <div
            className="text-bg-warning p-3 mb-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FaExclamationTriangle
              style={{ marginRight: "10px", fontSize: "36px" }}
            />{" "}
            Mohon pilih alasan pembatalan. Pesananmu akan langsung dibatalkan
            setelah alasan pembatalan diajukan
          </div>

          <div className="form-floating mb-5">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="" disabled>
                Pilih Satu Alasan Pembatalan
              </option>
              <option value="1">1. Ingin mengubah alamat pengiriman</option>
              <option value="2">
                2. Ingin mengubah rincian & membuat pesanan baru
              </option>
              <option value="3">3. Lainnya/Berubah pikiran</option>
            </select>
            <label htmlFor="floatingSelect">Pilih Alasan Pembatalan</label>
          </div>

          <div className="d-flex justify-content-between">
            <Button variant="outline-secondary" onClick={handleClose}>
              Batal
            </Button>

            <Button
              variant="dark"
              onClick={handleConfirmClick}
              disabled={isConfirmButtonDisabled}
            >
              {isLoading ? <Contentloading /> : "Konfirmasi"}{" "}
              {isLoading ? null : <FaArrowRight style={{ marginLeft: "10px" }} />}
            </Button>
          </div>
        
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Contentmodalbatalkanpesanan;
