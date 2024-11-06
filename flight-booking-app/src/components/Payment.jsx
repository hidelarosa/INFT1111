import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css'; // Create and style this CSS file as needed

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedFlight, firstName, lastName, phone, email, address, postalCode, departureCountry, arrivalCountry, departureDate, returnDate } = location.state || {};

    const handleConfirmBooking = () => {
        // Here, you would typically handle payment processing
        alert('Payment Confirmed! Your flight has been booked successfully.');
        navigate('/'); // Redirect to home or confirmation page
    };

    return (
        <div className="payment-container">
            <h1>Payment Information</h1>
            <h2>Flight Summary</h2>
            <div>
                <p><strong>From:</strong> {departureCountry} <strong>To:</strong> {arrivalCountry}</p>
                <p><strong>Departure Date:</strong> {departureDate} <strong>Return Date:</strong> {returnDate}</p>
                <p><strong>Flight Cost:</strong> ${selectedFlight.departureCost + selectedFlight.returnCost}</p>
            </div>
            <h2>Personal Information</h2>
            <div>
                <p><strong>Name:</strong> {firstName} {lastName}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Address:</strong> {address}, {postalCode}</p>
            </div>
            <button onClick={handleConfirmBooking}>Confirm Payment</button>
        </div>
    );
};

export default Payment;
