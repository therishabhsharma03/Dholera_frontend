import React from "react";
import Slider from "react-slick";
import "./NewsCarousel.css"; // Custom styles for premium look

const NewsCarousel = () => {
  const newsUpdates = [
    {
      title: "New Luxury Apartments Launched",
      description: "Explore premium living spaces in the heart of the city.",
      image: "https://via.placeholder.com/800x400?text=Luxury+Apartments",
    },
    {
      title: "Real Estate Market Trends 2024",
      description: "Get insights into the latest market trends and opportunities.",
      image: "https://via.placeholder.com/800x400?text=Market+Trends",
    },
    {
      title: "Smart Homes Revolution",
      description: "Discover how technology is redefining modern living.",
      image: "https://via.placeholder.com/800x400?text=Smart+Homes",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="news-carousel">
      <Slider {...settings}>
        {newsUpdates.map((news, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-content">
              <img src={news.image} alt={news.title} className="carousel-image" />
              <div className="carousel-text">
                <h2>{news.title}</h2>
                <p>{news.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
