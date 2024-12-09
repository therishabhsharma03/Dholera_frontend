import React, { useEffect, useRef } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          container.classList.add("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-container" ref={containerRef}>
      <div className="hero-logo">
        <img src="images/logo.png" alt="Company Logo" />
      </div>
      <div className="hero-text">
        <h1>x Dholera</h1>
      </div>
    </div>
  );
};

export default HeroSection;
