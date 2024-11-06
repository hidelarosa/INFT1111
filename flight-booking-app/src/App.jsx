import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightBooking from './components/FlightBooking';
import FlightResults from './components/FlightResults';
import PersonalInformation from './components/PersonalInformation';
import Payment from './components/Payment';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FlightBooking />} />
                <Route path="/flight-booking" element={<FlightBooking />} />
                <Route path="/flight-results" element={<FlightResults />} />
                <Route path="/personal-information" element={<PersonalInformation />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </Router>
    );
};

export default App;
