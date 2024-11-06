import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ViewBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [referenceId, setReferenceId] = useState('');
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(existingBookings);
  }, []);

  const handleSearch = () => {
    const foundBooking = bookings.find((b) => b.referenceId === referenceId.toUpperCase());
    if (foundBooking) {
      setBooking(foundBooking);
      setError('');
    } else {
      setBooking(null);
      setError('Invalid reference ID. Please try again.');
    }
  };

  return (
    <div>
      <h2>View Bookings</h2>
      <input
        type="text"
        placeholder="Enter Reference ID"
        value={referenceId}
        onChange={(e) => setReferenceId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {booking ? (
        <div>
          <h3>Booking Details</h3>
          <p>Reference ID: {booking.referenceId}</p>
          <p>Origin: {booking.origin}</p>
          <p>Destination: {booking.destination}</p>
          <p>Departure Date: {booking.departureDate}</p>
          <p>Return Date: {booking.returnDate}</p>
          <p>Departing Flight: {booking.departing.time} - ${booking.departing.cost}</p>
          <p>Returning Flight: {booking.returning.time} - ${booking.returning.cost}</p>
          <p>Total Cost: ${booking.cost}</p>
          <h3>Personal Information</h3>
          <p>Name: {booking.personalInfo.firstName} {booking.personalInfo.lastName}</p>
          <p>Phone: {booking.personalInfo.phone}</p>
          <p>Email: {booking.personalInfo.email}</p>
          <h3>Passport Information</h3>
          <p>Passport Number: {booking.passportInfo.passportNumber}</p>
          <p>Country of Issue: {booking.passportInfo.countryOfIssue}</p>
          <p>Expiration Date: {booking.passportInfo.expirationDate}</p>
        </div>
      ) : (
        <p>Please enter a reference ID to view your booking.</p>
      )}
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}

export default ViewBookingsPage;
