import React from 'react';
import './VisionSection.css';

const VisionTextImageSection = () => {
  return (
    <div>

      <div className="vision-container">
        <div className="vision-text-section">
          <h1 className='gold'>Dholera : The New Era</h1>
          <h2>An Attractive Investment Destination</h2>
          <p>
            Spread over 920 sq. km, Dholera SIR is India's first Greenfield Smart City, strategically located between Ahmedabad, Baroda, Rajkot, and Bhavnagar, offering immense growth potential and advanced infrastructure.
          </p>
          <h2>A Thriving Business Ecosystem</h2>
          <p>
            A part of the DMIC project, Dholera is envisioned as a global manufacturing hub with opportunities in residential, commercial, and industrial sectors supported by smart infrastructure.
          </p>
          <h2>Government Backing and Policy Support</h2>
          <p>
            Backed by the Smart City Mission and government incentives, Dholera provides fast-track approvals, single-window clearances, and a stable, investor-friendly environment.
          </p>
        </div>
        <div className="vision-image-section">
          <img
            src="images/dholera_map.jpg"
            width={"400px"}
            alt="Dholera Map"
            className="vision-building-image"
          />
        </div>

      </div>
      <div className="vision-container">
        <div className="vision-image-section">
          <img
            src="images/dholera_prototype.jpg"
            alt="Building"
            className="vision-building-image"
          />
        </div>
        <div className="vision-text-section">
          <h1 className='gold'>Vision Dholera</h1>
          <h2>An Attractive Investment Destination</h2>
          <p>
            Dholera is emerging as one of the most promising investment hubs in India,
            driven by its world-class infrastructure, strategic location, and forward-thinking
            urban planning. It promises high returns for businesses and investors looking
            to capitalize on its growth potential.
          </p>
          <h2>A Thriving Business Ecosystem</h2>
          <p>
            With a focus on manufacturing, technology, and renewable energy, Dholera offers a diverse
            range of sectors for investment. Its robust infrastructure, including an international
            airport, smart city amenities, and well-connected transport networks, positions it as a
            prime business and industrial destination.
          </p>
          <br />
          <h2>Government Backing and Policy Support</h2>
          <p>
            Dholera benefits from government incentives, favorable policies, and the Smart City Mission,
            making it an attractive proposition for investors seeking a stable and growth-oriented environment.
          </p>
        </div>

      </div>




    </div>
  );
};

export default VisionTextImageSection;
