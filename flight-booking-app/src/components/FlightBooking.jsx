import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FlightBooking.css';

const FlightBooking = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        origin: '',
        destination: '',
        departureDate: '',
        returnDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSearchFlights = (e) => {
        e.preventDefault();
        // Here you might want to handle flight searching logic.
        navigate('/flight-results', { state: { formData } });
    };

    return (
        <div className="flight-booking-container">
            <h1>Flight Booking</h1>
            <form onSubmit={handleSearchFlights} className="form-section">
                <label htmlFor="origin">Origin</label>
                <input type="text" name="origin" id="origin" required onChange={handleChange} />

                <label htmlFor="destination">Destination</label>
                <input type="text" name="destination" id="destination" required onChange={handleChange} />

                <label htmlFor="departureDate">Departure Date</label>
                <input type="date" name="departureDate" id="departureDate" required onChange={handleChange} />

                <label htmlFor="returnDate">Return Date</label>
                <input type="date" name="returnDate" id="returnDate" required onChange={handleChange} />

                <div className="button-container">
                    <button type="button" onClick={() => navigate('/')}>Home</button>
                    <button type="submit">Search Flights</button>
                </div>
            </form>
        </div>
    );
};

export default FlightBooking;
