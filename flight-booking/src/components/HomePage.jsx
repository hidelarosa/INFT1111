import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <h1>CANADA AIRLINES</h1>
      <div className='button-container'>
      <Link to="/search-flights">
        <button>Book a Flight</button>
      </Link>
      <Link to="/view-bookings">
        <button>View Bookings</button>
      </Link>
      </div>
    </div>
  );
}

export default HomePage;
