import React, { useEffect, useState } from "react";
import { Badge, Container } from "react-bootstrap";


// jalankan kode AR WAJIB di HTTPS / ngrok

const dataARdataranTanpaVarian = {
  
// ini contoh link untuk AR android dan ios
  // Link untuk simulasi AR dan percobaan menambah AR dataran
  // SIZE NORMAL -----------------------------------------------------------------------------------------
  // Android Dataran 
  // https://cdn.glitch.global/6a714b05-e482-46c1-9985-88f4f05c9148/SanderLounge.glb?v=1690982403449

  //  iOS Dataran
  // https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/LemariLaci5Susun.glb?v=1699907215280


  // SIZE BESAR ===========================================================================================
  // Android DATARAN FURNITUR BESAR DAN LEBAR
  // https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/SofaModelCasRet2Seater.glb?v=1699906320676


  // iOS DATARAN FURNITUR BESAR DAN LEBAR
  // https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/LinateExtendableDiningTable.glb?v=1699906787489


  	// SRC itu untuk android
	// IoS SRC itu untuk ios
  src: "https://cdn.glitch.global/483eed9c-fdd2-44f9-bc4b-a9d47fa50b8b/LinateExtendableDiningTable.glb?v=1699906787489",
  iosSrc:
  "https://cdn.glitch.global/6a714b05-e482-46c1-9985-88f4f05c9148/SanderLounge.glb?v=1690982403449",
  poster:
  "https://cdn.glitch.global/6a714b05-e482-46c1-9985-88f4f05c9148/SanderLounge.glb?v=1690982403449",
  alt: "floor",
  // LINK SKYBOX INI ADALAH BAWAAN, JIKA USER TIDAK MENGISI LINK SKYBOX MAKA LINK SKYBOX DI BAWAH MENJADI DEFAULT
  skyboxImage:
    "https://cdn.glitch.global/eeff5289-f8a2-4538-8a01-b356b23342ea/AdobeStock_190358116_Preview.jpeg?v=1673511925791",
};

function ARdataran() {
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
        Tombol Augmented Reality Akan Muncul Pada Ponsel atau Tablet Android dan
        iOS yang kompatibel.
      </p>
      <div class="alert alert-primary d-flex align-items-center" role="alert">
        <i class="bi bi-exclamation-triangle me-3"></i>
        <div>
          Saat menggunakan AR, arahkan smartphone Anda <b>PADA DATARAN / LANTAI</b>{" "}
          untuk produk ini.
        </div>
      </div>

      <hr />
      <Container>
        <div data-aos="fade-up" data-aos-delay="100">
          <model-viewer
            src={dataARdataranTanpaVarian.src}
            ios-src={dataARdataranTanpaVarian.iosSrc}
            alt={dataARdataranTanpaVarian.alt}
            poster={dataARdataranTanpaVarian.poster}
            ar
            skybox-height="2.8m" 
						ar-modes="scene-viewer webxr quick-look"
            shadow-intensity="1"
            ar-placement="floor"
            ar-scale="auto"
            // auto-rotate
            touch-action="pan-y"
            skybox-image={dataARdataranTanpaVarian.skyboxImage}
            camera-controls
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

export default ARdataran;
