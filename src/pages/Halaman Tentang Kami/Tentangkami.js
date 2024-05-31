import React, { useEffect } from 'react';
import { Container} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../../components/Navbar Components/navbar';
import Footer from '../../components/Footer Components/footer';
import BreadCrumb from '../../components/BreadCrumb Components/BreadCrumb';
import BottomNavBar from '../../components/Bottom Navbar/Bottomnavbar';
import Contenttentangkami from '../../components/Tentang Kami Components/Contenttentangkami';

const Tentangkami = () => {
  useEffect(() => {
    initializePage();
  }, []);

  const initializePage = () => {
    AOS.init();
    window.scrollTo(0, 0);
  };


  return (
    <div>
      <BottomNavBar />
      <Navbar />
      <BreadCrumb />
      <Container>
        <Container>
    <Contenttentangkami />
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default Tentangkami;
