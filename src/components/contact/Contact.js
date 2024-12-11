import React from 'react';
import './Contact.css';
import axios from 'axios'
const ContactUs = () => {

  const submitForm = async () => {
    // Get form values
    const name = document.querySelector('input[name="name"]').value;
    const number = document.querySelector('input[name="number"]').value;
    const city = document.querySelector('select').value;
    const message = document.querySelector('textarea').value;

    // Validate inputs
    if (!name || !number || !city) {
        alert('Please fill out all required fields.');
        return;
    }

    // Construct the request payload
    const payload = {
        name: name,
        number: number,
        city: city,
        message: message,
    };

    try {
        // Send data to the backend
        const response = await axios.post('https://dholera-backend.onrender.com/submitContactForm', payload);

        if (response.status === 200) {
            alert('Form submitted successfully!');
            // Clear form fields after successful submission
            document.querySelector('input[name="name"]').value = '';
            document.querySelector('input[name="number"]').value = '';
            document.querySelector('select').value = '';
            document.querySelector('textarea').value = '';
        } else {
            alert('Failed to submit the form. Please try again later.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your form. Please try again later.');
    }
};


  return (
<div>

<div className="home-hero">
        <div className="heroContainer_contact home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading2"></h1>
            <span className="home-hero-sub-heading bodyLarge"></span>
            <div className="home-btn-group"></div>
            <h2 className="home-features-heading heading11">
              Get in Touch
            </h2>
          </div>
        </div>
      </div>
    <div className="contact-us">



      <div className="location-info">
        <h3 className='bodySmall goldText'>Location:</h3>
        <p className='bodySmall white'>
          Office No :- 342, Lodha Signet, Kolshet Road
          <br />
          Thane (W) , 
          Mumbai (MH)
        </p>
        <h3 className='bodySmall goldText' >Open Hours:</h3>
        <p className='bodySmall white'>10am–7:30pm</p>
        <p className='bodySmall white'>(Monday Closed)</p>
        <h3 className='bodySmall goldText' >Email:</h3>
        <p className='bodySmall white'>admin@emitencerealty.com</p>
        <h3 className='bodySmall goldText'>Call:</h3>
        <p className='bodySmall white'>+91 91591-55237</p>
      </div>
      <div className="contact-form">
        <h3>Name:</h3>
        <input type="text" placeholder="Name"  name="name" />
        <h3>Contact Number:</h3>
        <input type="text"  name="number" placeholder="Phone Number" />
        <h3>Preferred City &amp; Location:</h3>
        <select>
          <option value="mumbai">Mumbai</option>
          <option value="mumbai">Dholera</option>
        </select>
        {/* <h3>Typology:</h3> */}
        {/* <div className="typology-options">
          <div>
            <input type="radio" id="1rk" name="typology" value="1rk" />
            <label htmlFor="1rk">1 RK</label>
          </div>
          <div>
            <input type="radio" id="5bhk" name="typology" value="5bhk" />
            <label htmlFor="5bhk">5 BHK Jodi</label>
          </div>
          <div>
            <input type="radio" id="penthouse" name="typology" value="penthouse" />
            <label htmlFor="penthouse">Penthouse</label>
          </div>
        </div> */}
        {/* <h3>Budget:</h3>
        <select>
          <option value="10-15cr">10 To 15 Cr</option>
        </select> */}
        <h3>Message:</h3>
        <textarea placeholder="Drop a message (optional)"></textarea>
        <button type="submit" onClick={submitForm}>Submit</button>
      </div>
    </div>
</div>
  );
};

export default ContactUs;