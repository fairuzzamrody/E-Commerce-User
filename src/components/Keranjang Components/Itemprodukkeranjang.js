import React, { useState, useEffect } from "react";
import ContentLastSeen from "../Last Seen Components/Contentlastseen";
import Contentitemkeranjangmobile from "./Contentitemkeranjangmobile";
import Contentitemprodukkeranjang from "./Contentitemprodukkeranjang";

function Itemprodukkeranjang() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {!isMobile && <Contentitemprodukkeranjang />}
      {isMobile && <Contentitemkeranjangmobile />}
      <div className="d-block d-lg-none">
<hr/>
      </div>
      <ContentLastSeen />


      
    </div>
  );
}

export default Itemprodukkeranjang;
