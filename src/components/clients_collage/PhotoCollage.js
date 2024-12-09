import React, { useState, useEffect, useRef } from 'react';
import './PhotoCollage.css'
const PhotoCarousel = ({ photos, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Next slide function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay) return;

    const slideTimer = setInterval(nextSlide, interval);
    return () => clearInterval(slideTimer);
  }, [autoPlay, interval, nextSlide]);

  // Update carousel position on currentIndex change
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel-slide" ref={carouselRef}>
        {photos.map((photo, index) => (
          <div key={index} className="carousel-slide-item">
            <img src={photo} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-nav-btn prev" onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </div>
      <div className="carousel-nav-btn next" onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </div>
      <div className="carousel-dots">
        {photos.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;