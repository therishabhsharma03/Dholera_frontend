    import React, { useEffect, useState } from 'react';
    import './PopupForm.css';
    import axios from 'axios';
    const PopupForm = () => {
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const timer = setTimeout(() => setIsVisible(true), 5000);
            return () => clearTimeout(timer);
        }, []);

        useEffect(() => {
            if (isVisible) {
                document.body.classList.add('unique-popup-active');
            } else {
                document.body.classList.remove('unique-popup-active');
            }
        }, [isVisible]);

        const closePopup = () => {
            setIsVisible(false);
        };
        const submitForm = async () => {
            alert('Form submitted successfully');

            const name = document.getElementById('name').value;
            const number = document.getElementById('number').value;
            const message = document.getElementById('message').value;
            try {

                const response = await axios.post('https://dholera-backend.onrender.com/submitPopUp', {
                    name: name,
                    number: number,
                    message: message
                })
                if (response.status === 200) {
                    alert('Form submitted successfully!');
                    setIsVisible(false); // Hide the popup after successful submission
                } else {
                    alert('Unexpected response from the server. Please try again.');
                }
            } catch (error) {
                console.error('Error while submitting the form:', error);
                alert('Failed to submit the form. Please check your network connection or try again later.');
            }

            setIsVisible(false);
        }
        return (
            isVisible && (
                <div className="unique-popup-overlay">
                    <div className="unique-popup-container">
                        <button className="unique-popup-close" onClick={closePopup}>
                            &times;
                        </button>
                        <h2>Get in Touch</h2>
                        <form>
                            <div className="unique-form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            <div className="unique-form-group">
                                <label htmlFor="number">Phone Number</label>
                                <input
                                    type="number"
                                    id="number"
                                    name="number"
                                    placeholder="Enter your Contact Number"
                                    required
                                />
                            </div>
                            <div className="unique-form-group">
                                <label htmlFor="message">Message</label>
                                <input
                                    type="text"
                                    id="message"
                                    name="message"
                                    placeholder="Write your message"
                                    required
                                />
                            </div>
                            <button type="submit" className="unique-submit-button" onClick={submitForm}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            )
        );
    };

    export default PopupForm;
