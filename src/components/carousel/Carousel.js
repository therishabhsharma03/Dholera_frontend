import React, { useState } from 'react';
import './carousel.css';  // Import the CSS file
// Carousel Component
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, image: 'https://via.placeholder.com/300x200?text=Image+1' },
    { id: 2, image: 'https://via.placeholder.com/300x200?text=Image+2' },
    { id: 3, image: 'https://via.placeholder.com/300x200?text=Image+3' },
    // Add more items as needed
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-items"
        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.image} alt={`Item ${item.id}`} />
          </div>
        ))}
      </div>

      <div className="carousel-buttons">
        <button className="carousel-button" onClick={handlePrev}>
          &lt;
        </button>
        <button className="carousel-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
