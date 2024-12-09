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
              Mumbai
            </h2>
          </div>
        </div>
      </div>

      <div className="App">
        <div className="home-features_dholera">
          <div className="featuresContainer">
            <h2 className='bodyLarge goldText'>Explore Premier Properties in Mumbai</h2>
            <div className='news'>
              <p className="bodySmall">Discover luxurious living spaces from top developers offering unparalleled amenities and prime locations. Find your dream 
                home in the heart of Mumbai with our exclusive listings.</p>
            </div>
          </div>
        </div>

        <ParallaxComponent image="/images/lodha_amara_emitence.jpeg" alignment="left" bg_align="right">
          <h2 className='bodyLarge goldText'>Hiranandani Estate</h2>
          <div className='news'>
              <p className="bodySmall">Hiranandani Estate is one of Thane's largest and most well-planned townships, offering a mix of residential, commercial, and retail spaces. Known for its well-maintained infrastructure, green spaces, and a variety of amenities like schools, hospitals, and shopping areas within the township.</p>
            </div>
        </ParallaxComponent>

        <ParallaxComponent image="/images/dosti_west_county_emitence.jpeg" alignment="right" bg_align="left">
          <h2 className='bodyLarge goldText'>Lodha Sterling</h2>
          <div className='news'>
              <p className="bodySmall">Lodha Sterling is a luxury residential project inspired by London’s garden city concept. The project offers spacious residences with exclusive amenities such as a private theater, grand clubhouse, and lush green gardens, catering to those looking for high-end living.</p>
            </div>
        </ParallaxComponent>

        <ParallaxComponent image="/images/raunak_maximum_city_emitence.png" alignment="left" bg_align="right">
          <h2 className='bodyLarge goldText'>Lodha Park</h2>
          <div className='news'>
              <p className="bodySmall">Lodha Park is an upscale residential project located in South Mumbai, offering luxury apartments with stunning views of the Arabian Sea and the Mumbai skyline. The project includes world-class amenities like a grand clubhouse, swimming pools, landscaped gardens, and more.</p>
            </div>
        </ParallaxComponent>

        <ParallaxComponent image="/images/jp_infra_emitence.png" alignment="left" bg_align="left">
          <h2 className='bodyLarge goldText'>Piramal Vaikunth</h2>
          <div className='news'>
              <p className="bodySmall">Piramal Vaikunth is a premium residential project offering a serene living experience amidst greenery. The development is known for its spacious apartments, lush landscapes, and a host of lifestyle amenities, making it a popular choice for families seeking a tranquil environment close to the city.</p>
            </div>
        </ParallaxComponent>

        <ParallaxComponent image="/images/runwal_25_hours_emitence.webp" alignment="left" bg_align="right">
          <h2 className='bodyLarge goldText'>Piramal Revanta</h2>
          <div className='news'>
              <p className="bodySmall">Piramal Revanta is a modern residential development located in Mulund, offering contemporary living spaces with panoramic views of the surrounding hills and cityscape. The project includes state-of-the-art amenities such as a swimming pool, gym, and landscaped gardens.</p>
            </div>
        </ParallaxComponent>

        <ParallaxComponent image="/images/y_square_emitence.png" alignment="left" bg_align="left">
          <h2 className='bodyLarge goldText'>Godrej Karjat</h2>
          <div className='news'>
              <p className="bodySmall">Godrej Properties' project in Karjat offers affordable yet modern residential options in a picturesque setting. It is designed for those who prefer a quieter, more nature-centric lifestyle, with a range of amenities catering to family needs.</p>
            </div>
        </ParallaxComponent>

        <ParallaxComponent image="/images/runwal_25_hours_emitence.webp" alignment="right" bg_align="right">
          <h2 className='bodyLarge goldText'>Rustomjee La Vie</h2>
          <div className='news'>
              <p className="bodySmall">Rustomjee La Vie is a part of Rustomjee's integrated township, offering well-designed residences with ample green spaces and amenities like a clubhouse, sports facilities, and more. The project is designed to offer a balanced lifestyle with easy access to Thane’s commercial hubs.</p>
            </div>
        </ParallaxComponent>

        <ParallaxComponent image="/images/jp_infra_emitence.png" alignment="left" bg_align="left">
          <h2 className='bodyLarge goldText'>Prestige City</h2>
          <div className='news'>
              <p className="bodySmall">Prestige City in Mulund is a residential project by Prestige Group, offering a mix of high-rise apartments and luxury villas. The development features extensive amenities including a clubhouse, swimming pool, and landscaped gardens, aimed at providing a premium living experience.</p>
            </div>
        </ParallaxComponent>
      </div>
    </ParallaxProvider>
  );
};

export default Mumbai;
