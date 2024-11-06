import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PersonalInformation.css';

const PersonalInformation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedFlight, departureCountry, arrivalCountry, departureDate, returnDate } = location.state || {};

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        passportId: '',
        accountName: '',
        accountNumber: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/payment', {
            state: { 
                ...formData,
                selectedFlight,
                departureCountry,
                arrivalCountry,
                departureDate,
                returnDate 
            }
        });
    };

    const handleReturn = () => {
        navigate('/flight-booking'); // Change the path as needed
    };

    return (
        <div className="personal-info-container">
            <h1>Personal Information</h1>
            <form onSubmit={handleSubmit}>
                <div className="personal-info-section">
                    <h2>Contact Details</h2>
                    <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
                    <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
                    <input type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
                    <input type="text" name="passportId" placeholder="Passport ID" required onChange={handleChange} />
                </div>

                <div className="credit-card-section">
                    <h2>Credit Card Information</h2>
                    <input type="text" name="accountName" placeholder="Account Name" required onChange={handleChange} />
                    <input type="text" name="accountNumber" placeholder="Account Number" required onChange={handleChange} />
                    <input type="text" name="cvv" placeholder="CVV" required onChange={handleChange} />
                </div>

                <div className="button-container">
                    <button type="button" onClick={handleReturn}>Return</button>
                    <button type="submit">Continue to Payment</button>
                </div>
            </form>
        </div>
    );
};

export default PersonalInformation;
