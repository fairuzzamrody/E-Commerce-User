import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../components/Navbar Components/navbar";
import Footer from "../../components/Footer Components/footer";
import BreadCrumb from "../../components/BreadCrumb Components/BreadCrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import BottomNavBar from "../../components/Bottom Navbar/Bottomnavbar";
import Contentloading from "../../components/Loading Components/Contentloading";

function Login() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 15;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      Swal.fire({
        icon: "warning",
        title: "Format Email Salah",
        text: "Mohon masukkan alamat email yang valid.",
      });
      return;
    }

    if (!validatePassword(password)) {
      Swal.fire({
        icon: "warning",
        title: "Password Tidak Memadai",
        text: "Password harus memiliki setidaknya 15 karakter.",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Berhasil Masuk",
        text: "Anda telah berhasil masuk.",
      }).then(() => {
        setLoading(false);
        window.location.href = "/";
      });
    }, 1500);
  };

  return (
    <div>
      <BottomNavBar />
      <Navbar />
      {loading && <Contentloading />}
      <BreadCrumb />

      <section id="hero" className="d-flex align-items-center" style={{ marginTop: "40px", marginBottom: "140px" }}>
        <Container>
          <Row>
            <Col lg={6} pt-5 pt-lg-0 d-flex flex-column justify-content-center style={{ marginBottom: "30px" }}>
              <div className="d-none d-md-block">
                <p className="mb-3" data-aos="fade-up" style={{ fontSize: "5vw", maxWidth: "600px" }}>
                  <b>Silahkan masuk ke akun Anda.</b>
                </p>
              </div>
              <div className="d-block d-lg-none">
                <p className="fw-bold" data-aos="fade-up" style={{ fontSize: "2.4rem", maxWidth: "600px" }}>
                  Silahkan <br/>masuk ke akun Anda.
                </p>
              </div>
              <div className="d-none d-md-block" data-aos="fade-up" style={{ fontSize: "18px", marginTop: "15px" }}>
                Jika Anda belum memiliki akun <br />
                anda dapat 
                <Link to="/daftar" style={{ textDecoration : "none" }}>
                  <b> <u>Mendaftar di sini.</u></b>
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Alamat Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Masukkan email"
                    style={{ marginTop: "10px" }}
                    required />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                      placeholder="Masukkan kata sandi Anda"
                      style={{ marginTop: "10px" }}
                      required />
                    <div className="input-group-append" onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer", fontSize: "15px", position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}>
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </div>
                  </div>
                </Form.Group>
                <Button type="submit" className="btn btn-primary btn-lg w-100 btn-dark" style={{ borderRadius: "25px" }}>
                  {loading ? "Loading..." : "Masuk"}
                </Button>
              </Form>
              <div className="d-block d-lg-none" style={{ marginTop: "20px", fontSize: "18px", textAlign: "center" }}>
                 Jika Anda belum memiliki akun anda dapat <Link to="/daftar"><b> Mendaftar di sini.</b></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default Login;
