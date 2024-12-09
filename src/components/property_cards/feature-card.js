// // PropertyCard.js
// import React from 'react';
// import PropTypes from 'prop-types';
// // import './PropertyCard.css'; // Optional: for styling the component
// import './feature-card.css';

// const PropertyCard = ({ image, projectName, price, type, location }) => {
//   return (
//     <div className="property-card">
//       <img src={image} alt={projectName} className="property-card-image" />
//       <div className="property-card-details">
//         <h2 className="property-card-title">{projectName}</h2>
//         <p className="property-card-price">{price}</p>
//         <p className="property-card-type">{type}</p>
//         <p className="property-card-location">{location}</p>
//       </div>
//     </div>
//   );
// };

// PropertyCard.propTypes = {
//   image: PropTypes.string.isRequired,
//   projectName: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
// };

// export default PropertyCard;

import React from 'react';
import { FaBed, FaBath, FaRulerCombined} from 'react-icons/fa';
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import './PropertyCard.css';

const PropertyCard = ({ imageUrl, address, bedrooms, bathrooms, squareFeet, type, price }) => {
  // const property = {
  //   imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqgtsGNO_IfzYM6VPS8lNikw4JWE-gsEBjQ&s',
  //   address: '2861 62nd Ave, Oakland, CA 94605',
  //   bedrooms: 3,
  //   bathrooms: 1,
  //   squareFeet: 1032,
  //   type: 'Family',
  //   price: 649900,
  // };

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={imageUrl} alt={address} />
      </div>
      <div className="property-details">
        <div className="property-address">{address}</div>
        <div className="property-features">
          <div className="feature">
            <FaBed className="feature-icon" />
            <span>{bedrooms} Bed Room</span>
          </div>
          <div className="feature">
            <FaBath className="feature-icon" />
            <span>{bathrooms} Bath</span>
          </div>
        </div>
        <div className="property-features">
        <div className="feature">
          <FaRulerCombined className="feature-icon" />
          <span>{squareFeet} carpet</span>
        </div>
        <div className="feature">
        <MdOutlineFamilyRestroom className="feature-icon" />
        <span>{type}</span>
        </div>
        </div>        
        <div className="property-price">{price.toLocaleString()}</div>
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;