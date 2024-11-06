import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingSummary.css';

const BookingSummary = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { firstName, lastName, phone, email, passportId, selectedFlight } = location.state || {};

    const handleReturn = () => {
        navigate('/flight-booking'); // Change the path as needed
    };

    return (
        <div className="summary-container">
            <h1>Booking Summary</h1>
            <div className="summary-details">
                <h2>Flight Details</h2>
                {/* Display the flight details here */}
                <p><strong>Flight:</strong> {selectedFlight?.flightNumber}</p>
                <p><strong>Departure:</strong> {selectedFlight?.departureTime}</p>
                <p><strong>Cost:</strong> {selectedFlight?.cost}</p>

                <h2>Personal Information</h2>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Passport ID:</strong> {passportId}</p>
            </div>

            <div className="button-container">
                <button type="button" onClick={handleReturn}>Return</button>
                <button type="button">Proceed to Payment</button>
            </div>
        </div>
    );
};

export default BookingSummary;
