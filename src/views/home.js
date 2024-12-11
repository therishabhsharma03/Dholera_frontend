import React from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet'
import "../i18n.js";
import { useHistory } from 'react-router-dom'
import AutoPlayCarousel from '../components/videos/Carousel_video'
import FeatureCard from '../components/FeatureCard/feature-card'
import Question1 from '../components/question1'
import PhotoCollage from '../components/clients_collage/PhotoCollage.js';
import TypingEffect from '../components/TypingEffect/Typing'
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';
import Carousels from '../components/carousel/Carousel';
import { Carousel } from 'antd';
import HeroSection from '../components/heroSection/herosection.js';
import WhyDholera from '../components/whyDholera/dholera.js';
import FeaturesSection from '../components/FeaturesSection/featureSection.js';
import PropertyMap from '../components/map/map.js';
import NewsCarousel from '../components/news/newsSection.js';
import VisionTextImageSection  from '../components/Vision-Dholera/visionDholera.js';
import FormPopUp from '../components/Pop-Up/popUpForm.js';
const Home = (props) => {
  const photos = Array.from({ length: 27 }, (_, i) => `images/clients/${i + 1}.jpeg`);
  const history = useHistory();
  const videos = [
    { videoId: '_7SMZ60byps?rel=0', title: 'Emitence Realty' },
    { videoId: 'J5kvFv1MUcE?rel=0', title: 'Dholera SIR' },
    { videoId: 'smZN9CW39YY?rel=0', title: 'YouTube Video 2' },
    // Add more videos as needed
  ];





  const { t } = useTranslation()



  return (
    <div>
      <FormPopUp/>
  
    <div className="home-container">
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <TypingEffect />
        </div>
      </div>
      <div className='featuresContainer'>
      <h1 className="home-banner-heading heading2">
            Features
          </h1>
      <FeaturesSection/>
      </div>
      <div className="home-container-emitence-colab">
        <div className="home-container02">

          <HeroSection />

          <div class  Name='why-emitence'>
            <div className="content-wrapper">
        
              <p className='gold'>
              We take pride in being a trusted name when it comes to real estate opportunities in Dholera. 
              With a proven track record of delivering value and building trust, we are committed to helping 
              you make informed investment decisions in India's first greenfield smart city.
              </p>
              <p>
                Whether you're a first-time buyer, an investor, or looking to sell your property, Emitence is here
                to guide you every step of the way. We use advanced tools and deep industry knowledge to offer
                personalized advice, helping you make informed decisions.
              </p>
   
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
        <h1 className="home-banner-heading heading2">
            News & Update
          </h1>
        <NewsCarousel/>
       
       
       
        
        <VisionTextImageSection/>


        <div className="home-banner ">
        <div className='whyDholeraCanvaBg'>
          <img src="images/investInDholera.png" alt="Why Dholera"  />
        </div>
        
      </div>
        




          {/* <div className="home-features1">
            <WhyDholera/>
            <div className="home-container03_HOME">




              <FeatureCard
                heading={t("soil_analysis")}
                subHeading={t("soil_analysis_guidance")}
              ></FeatureCard>
              <FeatureCard
                heading={t("crop_recommendation")}
                subHeading={t("crop_recommendation_guidance")}
              ></FeatureCard>
              <FeatureCard
                heading={t("seasonal_crop_recommendation")}
                subHeading={t("seasonal_crop_recommendation_guidance")}
              ></FeatureCard>
              <FeatureCard
                heading={t("optimal_crops")}
                subHeading={t("optimal_crops_guidance")}
              ></FeatureCard>
            </div>
          </div> */}
          {/* <PropertyMap/> */}
        </div>
      </div>
      <div className="home-container-emitence-colab1">
        <div className="home-container02">

          <HeroSection />
          <h1 className="home-banner-heading heading2 gold">
                "Emitence: Where Dreams Are Delivered with a Smile "
              </h1>
          {/* <AutoPlayCarousel videos={videos} /> */}
          <PhotoCollage photos={photos} />
          
        </div>
      </div>

      


     
      <div className="home-photos">
        <h1 className="home-banner-heading heading2">
        
        </h1>
        
      </div>

    </div>
    </div>
  )
}

export default Home
