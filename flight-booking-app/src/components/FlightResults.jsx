import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FlightResults.css'; // Import CSS if needed

const FlightResults = () => {
    const { state } = useLocation(); // Access the state passed from the search form
    const navigate = useNavigate();
    const { departureCountry, arrivalCountry, departureDate, returnDate } = state || {};

    // Sample flight data with return costs
    const availableFlights = [
        { id: 1, from: departureCountry, to: arrivalCountry, departureCost: 300, returnCost: 250, departureTime: '10:00 AM', returnTime: '5:00 PM' },
        { id: 2, from: departureCountry, to: arrivalCountry, departureCost: 320, returnCost: 270, departureTime: '1:00 PM', returnTime: '8:00 PM' },
        { id: 3, from: departureCountry, to: arrivalCountry, departureCost: 280, returnCost: 240, departureTime: '3:00 PM', returnTime: '10:00 PM' },
        { id: 4, from: departureCountry, to: arrivalCountry, departureCost: 350, returnCost: 300, departureTime: '5:00 PM', returnTime: '11:00 PM' },
        { id: 5, from: departureCountry, to: arrivalCountry, departureCost: 400, returnCost: 320, departureTime: '7:00 PM', returnTime: '12:00 AM' },
    ];

    const [selectedFlight, setSelectedFlight] = useState(null);

    const handleReturnClick = () => {
        navigate('/flight-booking'); // Navigate back to the Flight Booking page
    };

    const handleSubmit = () => {
        if (selectedFlight) {
            navigate('/personal-information', { state: { 
                selectedFlight, 
                departureCountry, 
                arrivalCountry, 
                departureDate, 
                returnDate 
            } });
        } else {
            alert("Please select a flight before proceeding.");
        }
    };

    return (
        <div className="flight-results-container">
            <h1>Available Flights</h1>
            <h2>From: {departureCountry} To: {arrivalCountry}</h2>
            <h3>Date: {departureDate}</h3>

            <ul>
                {availableFlights.map(flight => (
                    <li key={flight.id} className="flight-item">
                        <div>
                            <input
                                type="radio"
                                name="flight"
                                value={flight.id}
                                onChange={() => setSelectedFlight(flight)}
                            />
                            Flight from {flight.from} to {flight.to}
                        </div>
                        <div>Departure Cost: ${flight.departureCost} at {flight.departureTime}</div>
                        <div>Return Cost: ${flight.returnCost} at {flight.returnTime}</div>
                    </li>
                ))}
            </ul>

            <button onClick={handleReturnClick} className="return-button">
                Return to Flight Booking
            </button>

            <button onClick={handleSubmit} className="submit-button">
                Proceed to Personal Information
            </button>
        </div>
    );
};

export default FlightResults;
