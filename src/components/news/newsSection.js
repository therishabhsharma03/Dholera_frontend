import React from "react";
import Slider from "react-slick";
import "./NewsCarousel.css"; // Custom styles for premium look

const NewsCarousel = () => {
  const newsUpdates = [
    {
      title: "New Luxury Apartments Launched",
      description: "Explore premium living spaces in the heart of the city.",
      image: "images/dholera_3.jpg",
    },
    {
      title: "Real Estate Market Trends 2024",
      description: "Get insights into the latest market trends ",
      image: "images/dholera-main.jpeg",
    },
    {
      title: "Smart Homes Revolution",
      description: "Discover how technology is redefining modern living.",
      image: "images/emitence_dholera.png",
    },
    {
      title: "Sustainable Living Spaces",
      description: "Eco-friendly homes for a greener future.",
      image: "images/lodha-township-emitence3.jpg",
    },
    {
      title: "Affordable Housing Projects",
      description: "Find affordable yet premium homes near you.",
      image: "images/kitchen.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="news-carousel">
      <Slider {...settings}>
        {newsUpdates.map((news, index) => (
          <div key={index} className="carousel-card">
            <div className="card-content">
              <img src={news.image} alt={news.title} className="card-image" />
              <div className="card-text">
                <h3>{news.title}</h3>
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
