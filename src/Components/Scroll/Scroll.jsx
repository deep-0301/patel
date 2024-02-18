import "./Scroll.css";
import React, { useState, useEffect } from "react";
import Top from "../../img/top.svg";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "3px",
            zIndex: "1000",
            cursor: "pointer",
            borderRadius: "5px",
            padding: "10px 15px",
            fontSize: "16px",
            background: "none",
            border: "none",
          }}
        >
          <img src={Top} alt="top" height={50} width={50} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
