import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar Components/navbar';
import Footer from '../../components/Footer Components/footer';
import BreadCrumb from "../../components/BreadCrumb Components/BreadCrumb";
import BottomNavBar from '../../components/Bottom Navbar/Bottomnavbar';
import Contentloading from '../../components/Loading Components/Contentloading';
import ContentFAQ from '../../components/FAQ Components/ContentFAQ';

function FAQ() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Clear the timer when the component unmounts
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Contentloading />;
    } else {
      return (
        <>
          <BottomNavBar />
          <Navbar />
          <BreadCrumb />
          <ContentFAQ />
          <Footer />
        </>
      );
    }
  };

  return <div>{renderContent()}</div>;
}

export default FAQ;
