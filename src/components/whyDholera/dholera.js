import React from "react";
import "./WhyDholera.css"; // Ensure you create a CSS file for styles

const WhyDholera = () => {
  return (
    <div className="why-dholera">
      <h1>WHY DHOLERA ?</h1>
      <div className="section">
        <div className="text">
          <h2>GROWING MARKET</h2>
          <p>
            Dholera is not just a city; its a vision of the future. As the
            largest city in the Delhi-Mumbai Industrial Corridor (DMIC) and
            India's first planned smart city, Dholera offers unparalleled growth
            potential and infrastructure development, making it the ideal
            location for:
          </p>
        </div>
        <div className="icon">
          <img
            src="images/flat.jpg" // Replace with actual icon URL
            alt="Growing Market Icon"
          />
        </div>
      </div>

      <div className="section">
        <div className="icon">
          <img
            src="https://via.placeholder.com/100" // Replace with actual icon URL
            alt="Growing Infrastructure Icon"
          />
        </div>
        <div className="text">
          <h2>GROWING INFRASTRUCTURE</h2>
          <p>
            Dholera is not just a city; it’s a vision of the future. As the
            largest city in the Delhi-Mumbai Industrial Corridor (DMIC) and
            India's first planned smart city, Dholera offers unparalleled growth
            potential and infrastructure development, making it the ideal
            location for:
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyDholera;
