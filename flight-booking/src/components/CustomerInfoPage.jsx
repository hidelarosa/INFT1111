import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function CustomerInfoPage({ setBookingInfo }) {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: '',
  });
  
  const [passportInfo, setPassportInfo] = useState({
    passportNumber: '',
    countryOfIssue: '',
    expirationDate: '',
  });
  
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    // Validate fields
    if (!personalInfo.firstName || !personalInfo.lastName || !personalInfo.phone || 
        !personalInfo.email || !passportInfo.passportNumber || 
        !passportInfo.countryOfIssue || !passportInfo.expirationDate) {
      setError('Missing information. Please fill in all fields.');
      return;
    }
    
    // Validate phone number (check if it contains only integers)
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(personalInfo.phone)) {
      setError('Invalid phone number. Please enter digits only.');
      return;
    }

    // Clear error and set booking info
    setError('');
    setBookingInfo((prev) => ({
      ...prev,
      personalInfo,
      passportInfo,
    }));
    navigate('/booking-summary'); // Navigate to booking summary page
  };

  return (
    <div>
      <h2>Customer Information</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}
      
      <h3>Personal Information</h3>
      <input 
        placeholder="First Name" 
        value={personalInfo.firstName} 
        onChange={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })} 
      />
      <input 
        placeholder="Last Name" 
        value={personalInfo.lastName} 
        onChange={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })} 
      />
      <input 
        placeholder="Phone" 
        value={personalInfo.phone} 
        onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })} 
      />
      <input 
        placeholder="Email" 
        type="email" 
        value={personalInfo.email} 
        onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })} 
      />
      <label>Date of Birth:</label>
      <input 
        type="date" 
        value={personalInfo.dob} 
        onChange={(e) => setPersonalInfo({ ...personalInfo, dob: e.target.value })} 
      />
      
      <h3>Passport Information</h3>
      <input 
        placeholder="Passport Number" 
        value={passportInfo.passportNumber} 
        onChange={(e) => setPassportInfo({ ...passportInfo, passportNumber: e.target.value })} 
      />
      <input 
        placeholder="Country of Issue" 
        value={passportInfo.countryOfIssue} 
        onChange={(e) => setPassportInfo({ ...passportInfo, countryOfIssue: e.target.value })} 
      />
      <label>Expiration Date:</label>
      <input 
        type="date" 
        value={passportInfo.expirationDate} 
        onChange={(e) => setPassportInfo({ ...passportInfo, expirationDate: e.target.value })} 
      />
      
      <Link to="/available-flights">
        <button>Return to Available Flights</button>
      </Link>
      <button onClick={handleNext}>Continue</button>
    </div>
  );
}

export default CustomerInfoPage;
