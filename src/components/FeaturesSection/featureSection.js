import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./FeaturesSection.css";

const FeaturesSection = () => {
  const features = [
    {
      title: "Dholera: Where Connectivity Thrives",
      description: "Strategically located in a prime region for unmatched accessibility.",
    },
    {
      title: "Metro Connectivity Within Reach",
      description: "Dholera’s metro system keeps you seamlessly connected.",
    },
    {
      title: "Ahmedabad Just Around the Corner",
      description: "Stay near Gujarat’s vibrant capital, with fast and easy access.",
    },
    {
      title: "Designed for Speed and Access",
      description: "Close to the 10-lane expressway, ensuring hassle-free travel.",
    },
    {
      title: "Smart City Infrastructure",
      description: "Future-ready technology and state-of-the-art amenities.",
    },
    {
      title: "World-Class Industrial Zone",
      description: "Attracting global businesses with investor-friendly policies.",
    },
    {
      title: "Seamless Airport Connectivity",
      description: "Proximity to Dholera International Airport for global access.",
    },
    {
      title: "Sustainable Urban Development",
      description: "Environmentally conscious planning for a greener tomorrow.",
    },
    {
      title: "Economic Growth Hub",
      description: "Part of the DMIC project, driving economic growth in the region.",
    },
    {
      title: "Advanced Digital Infrastructure",
      description: "High-speed internet and digital services for residents and businesses.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 500,  // Duration of the animation
      easing: 'ease-in-out',  // Easing function
      once: true,  // Animation happens only once
      offset: 50,  // Distance from the bottom of the screen before the animation starts
    });
  }, []);

  return (
    <div className="features-wrapper">
      {features.map((feature, index) => (
        <div
          className="feature-card"
          key={index}
          data-aos="fade-up" // AOS fade-up animation for each card
          data-aos-delay={`${index * 200}`} // Delay for each card for staggered effect
        >
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
