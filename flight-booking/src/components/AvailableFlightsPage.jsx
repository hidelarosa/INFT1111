import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function AvailableFlightsPage({ setBookingInfo }) {
  const location = useLocation();
  const { origin, destination, departureDate, returnDate } = location.state || {};
  
  const [selectedDepartingFlight, setSelectedDepartingFlight] = useState(null);
  const [selectedReturningFlight, setSelectedReturningFlight] = useState(null);

  // Define flight data...
  const flights = [
    { id: 1, departing: { time: '08:00 AM', cost: 120 }, returning: { time: '06:00 PM', cost: 100 } },
    { id: 2, departing: { time: '09:30 AM', cost: 140 }, returning: { time: '07:30 PM', cost: 115 } },
    { id: 3, departing: { time: '10:15 AM', cost: 110 }, returning: { time: '08:45 PM', cost: 90 } },
    { id: 4, departing: { time: '11:45 AM', cost: 150 }, returning: { time: '09:15 PM', cost: 130 } },
    { id: 5, departing: { time: '01:00 PM', cost: 160 }, returning: { time: '10:30 PM', cost: 140 } },
    { id: 6, departing: { time: '02:15 PM', cost: 130 }, returning: { time: '11:45 PM', cost: 110 } },
    { id: 7, departing: { time: '03:30 PM', cost: 155 }, returning: { time: '12:30 AM', cost: 120 } },
    { id: 8, departing: { time: '04:45 PM', cost: 135 }, returning: { time: '01:45 AM', cost: 105 } },
    { id: 9, departing: { time: '06:00 PM', cost: 170 }, returning: { time: '03:00 AM', cost: 150 } },
    { id: 10, departing: { time: '07:30 PM', cost: 175 }, returning: { time: '04:15 AM', cost: 160 } },
  ];

  const handleSelectDeparting = (flight) => {
    setSelectedDepartingFlight(flight);
  };

  const handleSelectReturning = (flight) => {
    setSelectedReturningFlight(flight);
  };

  const handleNext = () => {
    setBookingInfo((prev) => ({
      ...prev,
      departing: selectedDepartingFlight,
      returning: selectedReturningFlight,
      cost: (selectedDepartingFlight?.cost || 0) + (selectedReturningFlight?.cost || 0),
      origin,         // Add origin
      destination,    // Add destination
      departureDate,  // Add departureDate
      returnDate,     // Add returnDate
    }));
  };

  return (
    <div>
      <h2>Available Flights</h2>
      {/* Display search details... */}
      <h3>Select Departing Flight</h3>
      <table>
        <thead>
          <tr>
            <th>Departure Time</th>
            <th>Cost</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.departing.time}</td>
              <td>${flight.departing.cost}</td>
              <td>
                <button onClick={() => handleSelectDeparting(flight.departing)}>
                  {selectedDepartingFlight === flight.departing ? 'Selected' : 'Select'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <h3>Select Returning Flight</h3>
      <table>
        <thead>
          <tr>
            <th>Return Time</th>
            <th>Cost</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.returning.time}</td>
              <td>${flight.returning.cost}</td>
              <td>
                <button onClick={() => handleSelectReturning(flight.returning)}>
                  {selectedReturningFlight === flight.returning ? 'Selected' : 'Select'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/search-flights">
        <button>Return to Search Flights</button>
      </Link>
      <Link to="/customer-info">
        <button onClick={handleNext} disabled={!selectedDepartingFlight || !selectedReturningFlight}>
          Book the Flight
        </button>
      </Link>
    </div>
  );
}

export default AvailableFlightsPage;
