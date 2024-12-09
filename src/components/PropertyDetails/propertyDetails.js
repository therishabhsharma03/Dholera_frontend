import React from 'react';
import './PropertyDetails.css';

function PropertyDetails() {
  return (
    <div className="property-container">
    <div className="property-images">
    {/* <div className="property-images2"> */}
      <div className="property-main-image">
        {/* Add the main image */}
        <img src="images/emitence-mainImage1.png" alt="Main" />
      </div>
      <div className="property-side-images">
        {/* Add the side images */}
        <img src="images/emitence-mainImage1.png" alt="Side 1" />
        <img src="images/emitence-mainImage1.png" alt="Side 2" />
      </div>
      {/* </div> */}
    </div>
    <div className = "property-highlights">
      <h1 className='heading2 goldText pro-heading'>Property Highlights</h1>
      <table>
        <tr>
          <td>Parking</td>
          <td>Yes</td>
          <td>Parking</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Water Supply</td>
          <td>Yes</td>
          <td>Water Supply</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Electricity</td>
          <td>Yes</td>
          <td>Electricity</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Security</td>
          <td>Yes</td>
          <td>Security</td>
          <td>Yes</td>
        </tr> 
      </table>
    </div>
    </div>  
  );
}

export default PropertyDetails;