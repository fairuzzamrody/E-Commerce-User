import React, { useState, useEffect, useRef } from "react";
import { Form, Button, InputGroup, Card } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

function ContentpencariandiNavbar() {
  const [searchText, setSearchText] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showContentdatalist, setShowContentdatalist] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const [searchHistory, setSearchHistory] = useState([
    {
      id: 1,
      NamaProduk: "Meja Nippon",
      link: "/Detailproduk",
      icon: <i className="bi bi-clock-history me-3"></i>,
      status: "History",
    },
    {
      id: 2,
      NamaProduk: "Kursi Afrika",
      link: "/Detailprodukdiskon",
      icon: <i className="bi bi-clock-history me-3"></i>,
      status: "History",
    },
    {
      id: 3,
      NamaProduk: "Kabinet Dapur",
      link: "/Detailproduk",
      icon: <i class="bi bi-search me-3"></i>,
      status: "Active",
    },
    {
      id: 4,
      NamaProduk: "Lemari Djawa",
      link: "/Detailprodukdiskon",
      icon: <i class="bi bi-search me-3"></i>,
      status: "Active",
    },
    {
      id: 5,
      NamaProduk: "Kursi Antik",
      link: "/Detailproduk",
      icon: <i className="bi bi-clock-history me-3"></i>,
      status: "History",
    },
    {
      id: 6,
      NamaProduk: "Lemari Eropa",
      link: "/Detailproduk",
      icon: <i className="bi bi-clock-history me-3"></i>,
      status: "History",
    },
    {
      id: 7,
      NamaProduk: "Meja Kayu Jati",
      link: "/Detailproduk",
      icon: <i className="bi bi-clock-history me-3"></i>,
      status: "History",
    },
    {
      id: 8,
      NamaProduk: "Rak Dinding",
      link: "/Detailproduk",
      icon: <i className="bi bi-clock-history me-3"></i>,
      status: "History",
    },
    {
      id: 9,
      NamaProduk: "Rak Sepatu",
      link: "/Detailproduk",
      icon: <i className="bi bi-clock-history me-3"></i>,
      status: "History",
    },
    {
      id: 10,
      NamaProduk: "Meja Rias",
      link: "/Detailproduk",
      icon: <i className="bi bi-clock-history me-3"></i>,
      status: "History",
    },
    {
      id: 11,
      NamaProduk: "Meja Eropa",
      link: "/Detailproduk",
      icon: <i className="bi bi-clock-history me-3"></i>,
      status: "History",
    },
    {
      id: 12,
      NamaProduk: "Kabinet Djawa",
      link: "/Detailproduk",
      icon: <i className="bi bi-clock-history me-3"></i>,
      status: "History",
    },

    // Add more product data here
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (searchText === "") {
      // Tampilkan produk dengan status "History" saat teks pencarian kosong
      setFilteredProducts(
        searchHistory.filter((item) => item.status === "History"),
      );
    } else {
      // Urutkan daftar produk sehingga produk "Active" selalu berada di atas saat ada pencarian berdasarkan kata kunci
      const sortedProducts = searchHistory.sort((a, b) => {
        if (a.status === "Active" && b.status === "History") {
          return -1;
        }
        if (a.status === "History" && b.status === "Active") {
          return 1;
        }
        return 0;
      });

      // Filter produk sesuai teks pencarian
      setFilteredProducts(
        sortedProducts.filter(
          (item) =>
            (item.status === "Active" &&
              item.NamaProduk.toLowerCase().includes(
                searchText.toLowerCase(),
              )) ||
            (item.status === "History" &&
              item.NamaProduk.toLowerCase().includes(searchText.toLowerCase())),
        ),
      );
    }
  }, [searchText]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchText) {
      return;
    }

    setSearchText("");

    // Simulasikan menambahkan item baru ke riwayat pencarian
    const newSearchItem = {
      NamaProduk: searchText,
      link: "/Detailproduk",
      status: "Active", // Tambahkan status "Active" untuk item baru
    };
    setSearchHistory([newSearchItem, ...searchHistory]);

    navigate("/produknotfound");
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleInputClick = () => {
    setShowContentdatalist(true);
  };

  const handleDocumentClick = (e) => {
    if (
      showContentdatalist &&
      inputRef.current &&
      !inputRef.current.contains(e.target) &&
      e.target.className !== "btn btn-link"
    ) {
      setShowContentdatalist(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [showContentdatalist]);

  const handleRemoveSearchItem = (itemIndex) => {
    // Simulasikan penghapusan item dari riwayat pencarian
    const updatedSearchHistory = [...searchHistory];
    updatedSearchHistory.splice(itemIndex, 1);
    setSearchHistory(updatedSearchHistory);

    // Perbarui daftar produk yang ditampilkan
    if (searchText === "") {
      // Jika teks pencarian kosong, tampilkan produk dengan status "History"
      setFilteredProducts(
        updatedSearchHistory.filter((item) => item.status === "History"),
      );
    } else {
      // Jika ada teks pencarian, filter produk sesuai teks pencarian dan status "Active"
      setFilteredProducts(
        updatedSearchHistory.filter(
          (item) =>
            (item.status === "Active" &&
              item.NamaProduk.toLowerCase().includes(
                searchText.toLowerCase(),
              )) ||
            (item.status === "History" &&
              item.NamaProduk.toLowerCase().includes(searchText.toLowerCase())),
        ),
      );
    }
  };

  return (
    <div>
      {!isMobile && (
        <Form onSubmit={handleSearch} className="d-flex flex-grow-1 mx-lg-3">
          <InputGroup>
            <input
              type="search"
              placeholder="Cari yang terbaik untuk rumahmu..."
              value={searchText}
              onChange={handleChange}
              onClick={handleInputClick}
              className="form-control"
              list="datalistOptions"
              ref={inputRef}
              style={{ width: "645px" }}
            />
            <Button type="submit" variant="outline-dark">
              <BiSearch size={28} />
            </Button>
          </InputGroup>
        </Form>
      )}

      {showContentdatalist && filteredProducts.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: "27px",
            right: "0",
            zIndex: "999",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: "645px" }}>
            <Card.Body>
              {filteredProducts.map((item, index) => (
                <div
                  className="d-flex justify-content-between"
                  style={{ marginBottom: "-20.5px" }}
                  key={index}
                >
                  <Link
                    to={item.link}
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="d-flex">
                      {item.icon}
                      <p
                        style={{
                          marginBottom: "25px",
                          fontWeight:
                            item.status === "Active" ? "bold" : "normal", // Menambahkan "fw-bold" pada produk dengan status "Active"
                        }}
                      >
                        {item.NamaProduk}
                      </p>
                    </div>
                  </Link>
                  {item.status === "History" && (
                    <p
                      className="btn btn-link"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      onClick={() => handleRemoveSearchItem(index)}
                    >
                      Hapus
                    </p>
                  )}
                </div>
              ))}
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default ContentpencariandiNavbar;
