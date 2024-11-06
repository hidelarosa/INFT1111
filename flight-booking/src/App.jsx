import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchFlightsPage from './components/SearchFlightsPage';
import AvailableFlightsPage from './components/AvailableFlightsPage';
import CustomerInfoPage from './components/CustomerInfoPage';
import BookingSummaryPage from './components/BookingSummaryPage';
import PaymentConfirmationPage from './components/PaymentConfirmationPage';
import ViewBookingsPage from './components/ViewBookingsPage';

function App() {
  const [bookingInfo, setBookingInfo] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    departing: {},
    returning: {},
    cost: 0,
    personalInfo: {},
    passportInfo: {},
  });
  const [referenceId, setReferenceId] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-flights" element={<SearchFlightsPage setBookingInfo={setBookingInfo} />} />
        <Route path="/available-flights" element={<AvailableFlightsPage setBookingInfo={setBookingInfo} />} />
        <Route path="/customer-info" element={<CustomerInfoPage setBookingInfo={setBookingInfo} />} />
        <Route path="/booking-summary" element={<BookingSummaryPage bookingInfo={bookingInfo} />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmationPage bookingInfo={bookingInfo} setReferenceId={setReferenceId} />} />
        <Route path="/view-bookings" element={<ViewBookingsPage referenceId={referenceId} bookingInfo={bookingInfo} />} />
      </Routes>
    </Router>
  );
}

export default App;
