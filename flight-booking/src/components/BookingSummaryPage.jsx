import React from 'react';
import { Link } from 'react-router-dom';

function BookingSummaryPage({ bookingInfo }) {
  const {
    departing,
    returning,
    cost,
    personalInfo,
    passportInfo,
    origin,
    destination,
    departureDate,
    returnDate,
  } = bookingInfo;

  return (
    <div>
      <h2>Booking Summary</h2>
      <h3>Flight Details</h3>
      <p>Origin: {origin}</p>
      <p>Destination: {destination}</p>
      <p>Departure Date: {departureDate}</p>
      <p>Return Date: {returnDate}</p>
      <p>Departing Flight: {departing?.time} - ${departing?.cost}</p>
      <p>Returning Flight: {returning?.time} - ${returning?.cost}</p>
      <p>Total Cost: ${cost}</p>
      <h3>Personal Information</h3>
      <p>Name: {personalInfo?.firstName} {personalInfo?.lastName}</p>
      <p>Phone: {personalInfo?.phone}</p>
      <p>Email: {personalInfo?.email}</p>
      <p>Date of Birth: {personalInfo?.dob}</p>
      <h3>Passport Information</h3>
      <p>Passport Number: {passportInfo?.passportNumber}</p>
      <p>Country of Issue: {passportInfo?.countryOfIssue}</p>
      <p>Expiration Date: {passportInfo?.expirationDate}</p>
      <Link to="/customer-info">
        <button>Return to Customer Info</button>
      </Link>
      <Link to="/payment-confirmation">
        <button>Proceed to Payment</button>
      </Link>
    </div>
  );
}

export default BookingSummaryPage;
