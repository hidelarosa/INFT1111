import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentConfirmationPage({ bookingInfo }) {
  const navigate = useNavigate();
  const [referenceId, setReferenceId] = useState(() => Math.random().toString(36).substr(2, 10).toUpperCase());

  // State for credit card information
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleConfirmPayment = () => {
    // Validate the inputs
    if (!accountName || /\d/.test(accountName)) {
      setErrorMessage('Account Name cannot contain numbers and must not be empty.');
      return;
    }
    if (!/^\d+$/.test(accountNumber)) {
      setErrorMessage('Account Number must contain only numbers.');
      return;
    }
    if (!/^\d{3,4}$/.test(cvv)) {
      setErrorMessage('CVV must be 3 or 4 digits long.');
      return;
    }
    if (!expirationDate) {
      setErrorMessage('Expiration Date cannot be empty.');
      return;
    }
    
    // Validate expiration date format (MM/YY)
    const dateRegex = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    if (!dateRegex.test(expirationDate)) {
      setErrorMessage('Expiration Date must be in MM/YY format.');
      return;
    }

    // Extract month and year from the expiration date
    const [month, year] = expirationDate.split('/').map(num => parseInt(num, 10));
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of the current year
    const currentMonth = new Date().getMonth() + 1; // Months are zero-indexed

    // Check if the entered date is in the past
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      setErrorMessage('Expiration Date cannot be in the past.');
      return;
    }

    setErrorMessage(''); // Clear error message if everything is valid

    const completeBooking = {
      referenceId,
      ...bookingInfo,
      paymentInfo: {
        accountName,
        accountNumber,
        expirationDate,
        cvv,
      },
    };

    // Store booking in localStorage
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    existingBookings.push(completeBooking);
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    alert(`Booking and payment confirmed. Your reference ID is: ${referenceId}`);
    navigate('/view-bookings');
  };

  return (
    <div>
      <h2>Payment Confirmation</h2>
      <p>Review your booking and confirm payment below.</p>
      <div>
        <label>
          Account Name:
          <input
            type="text"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Account Number:
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Expiration Date (MM/YY):
          <input
            type="text"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            placeholder="MM/YY"
          />
        </label>
      </div>
      <div>
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="3 or 4 digits"
          />
        </label>
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button onClick={handleConfirmPayment}>Confirm Payment</button>
      <button onClick={() => navigate(-1)}>Return to Previous Page</button>
    </div>
  );
}

export default PaymentConfirmationPage;
