import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SearchFlightsPage() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const countries = [
    'Canada', 'USA', 'UK', 'France', 'Germany', 
    'Italy', 'Spain', 'Mexico', 'Brazil', 'Argentina', 
    'Japan', 'China', 'India', 'Australia', 'New Zealand', 
    'South Africa', 'Egypt', 'Turkey', 'Russia', 
    'UAE', 'Saudi Arabia', 'South Korea', 'Switzerland', 
    'Sweden', 'Netherlands', 'Norway', 'Denmark', 
    'Greece', 'Portugal', 'Poland'
  ];

  const handleSearchFlights = () => {
    if (!origin || !destination || !departureDate || !returnDate) {
      setError('Missing information. Please fill in all fields.');
      return; // Prevent navigation if there is an error
    }
    if (new Date(returnDate) < new Date(departureDate)) {
      setError('Return date cannot be before departure date.');
      return; // Prevent navigation if there is an error
    }
    setError(''); // Clear any previous error

    // Pass search parameters as state to navigate
    navigate('/available-flights', { state: { origin, destination, departureDate, returnDate } });
  };

  return (
    <div>
      <h2>Search Flights</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error message */}
      <label>Origin:</label>
      <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
      <label>Destination:</label>
      <select value={destination} onChange={(e) => setDestination(e.target.value)}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
      <label>Departure Date:</label>
      <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
      <label>Return Date:</label>
      <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
      <Link to="/">
        <button>Return Home</button>
      </Link>
      <button onClick={handleSearchFlights}>Search Flights</button> {/* Trigger search on button click */}
    </div>
  );
}

export default SearchFlightsPage;
