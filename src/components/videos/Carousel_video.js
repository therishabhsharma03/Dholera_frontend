import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import AutoPlayVideo from './AutoPlayVideo';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';

const AutoPlayCarousel = ({ videos }) => {
  const sliderRef = useRef(null);

  const handleVideoEnd = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="carousel-container">
      <Slider
        ref={sliderRef}
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={true}
      >
        {videos.map((video, index) => (
          <div key={index}>
            <AutoPlayVideo
              videoId={video.videoId}
              width="100%"
              height="500px"
              title={video.title}
              onVideoEnd={handleVideoEnd}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlayCarousel;
