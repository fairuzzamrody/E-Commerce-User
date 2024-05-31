import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style>
        {`
          #btn-back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: ${showButton ? 'block' : 'none'};
          }
        `}
      </style>
      <button
        type="button"
        className="btn btn-danger btn-floating btn-lg"
        id="btn-back-to-top"
        onClick={backToTop}
      >
        <FaArrowCircleUp />
      </button>
    </>
  );
}

export default BackToTop;
