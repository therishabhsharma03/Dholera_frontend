import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxComponent from '../components/parallex/ParallaxComponent';
import PropertyCard from '../components/property_cards/feature-card';
import './home.css';

const Mumbai = (props) => {
  const history = useHistory();
  const isUserLoggedIn = !!localStorage.getItem('user');

  const handleClick = () => {
    if (!isUserLoggedIn) {
      history.push('/log');
    } else {
      history.push('/predictor');
    }
  };

  const handleClick1 = () => {
    history.push('/guide');
  };

  const { t } = useTranslation();
  const properties = [
    // Your properties data
  ];

  const [results, setResults] = useState([]);
  const data = [
    'apple',
    'banana',
    'grape',
    'orange',
    'pineapple',
    'strawberry',
    'watermelon'
  ];

  const handleSearch = (query) => {
    const filteredResults = data.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <ParallaxProvider>

      <div className="home-hero">
        <div className="heroContainer_mumbai home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading2"></h1>
            <span className="home-hero-sub-heading bodyLarge"></span>
            <div className="home-btn-group"></div>
            <h2 className="home-features-heading heading11">
               This Page is Under Maintainance
            </h2>
          </div>
        </div>
      </div>


      <div className="App">
        <div className="home-features_dholera">
          <div className="featuresContainer">
            <h2 className='bodyLarge goldText'>Explore Premier Properties in Mumbai</h2>
            <div className='news'>
              <p className="bodySmall">Discover luxurious living spaces from top developers like Lodha, 
                Hiranandani, and Godrej, offering unparalleled amenities and prime locations. Find your dream 
                home in the heart of Mumbai with our exclusive listings.</p>
            </div>
          </div>
        </div>

        <ParallaxComponent image="/images/lodha-township-emitence3.jpg" alignment="left" bg_align="right">
          <h2 className='bodyLarge goldText'>Lodha Township</h2>
          <div>
          <PropertyCard
            imageUrl = "/images/lodha-township-emitence3.jpg"
            address = "Lodha Amara, Mumbai"
            // bedrooms = "3"
            // bathrooms = "2"
            squareFeet = "450 Carpet Area"
            type = "1bhk"
            price = "₹ 90 L"
          />
          </div>
        </ParallaxComponent>
        
        <ParallaxComponent image="/images/hiranandani-emitence.jpg" alignment="right" bg_align="left">
          <h2 className='bodyLarge goldText'>Hiranandani Estate</h2>
          <div>
          <PropertyCard
            imageUrl = "/images/hiranandani-emitence.jpg"
            address = "Hiranandani Estate, Mumbai"
            bedrooms = "3"
            bathrooms = "2"
            squareFeet = "2000"
            type = "Family"
            price = "₹ 1.5 Cr"
          />
          </div>
        </ParallaxComponent>

        <ParallaxComponent image="/images/emitence_godrej.webp" alignment="left" bg_align="right">
          <h2 className='bodyLarge goldText'>Godrej</h2>
          <div>
          <PropertyCard
            imageUrl = "/images/dholera_3.jpg"
            address = "Godrej, Mumbai"
            bedrooms = "3"
            bathrooms = "2"
            squareFeet = "2000"
            type = "Family"
            price = "₹ 1.5 Cr"
          />
          </div>
        </ParallaxComponent>
      </div>
      
      {/* <div className="home-features_dholera">
        <div className="featuresContainer">
          <h2 className='bodyLarge goldText'>Latest News Updates</h2>
          <div className='news1'>
            <img src="/images/dholera_news2.jpg" alt="team" className="Emitence_dholera_news" />
            <img src="/images/dholera_news1.jpeg" alt="team" className="Emitence_dholera_news" />
          </div>
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline"><br /></span>
              <span className="home-features-sub-heading bodyLarge"></span>
            </div>
          </div>
        </div>
      </div> */}
    </ParallaxProvider>
  );
};

export default Mumbai;
