import React from 'react';
import './CarRental.css'; 
import Navbar from '../../component/Navbar/Navbar';

function CarRental() {
  return (
    <> 
    
    <Navbar/>
    <div className="car-rental-container">
      <header>
        <h1>Car Hire for Any Kind of Trip</h1>
        <p>Great Deals at Great Prices, From the Biggest Car Hire Companies</p>
      </header>
      <section className="search-section">
        <div className="search-details">
          <div className="pickup-location">
            <label>Pick-up location</label>
            <input type="text" placeholder="Enter location" />
          </div>
          <div className="date-time">
            <div className="pickup-date">
              <label>Pick-up date</label>
              <input type="text" placeholder="Wed, 11 Oct" />
              <input type="text" placeholder="10:00" />
            </div>
            <div className="drop-off-date">
              <label>Drop-off date</label>
              <input type="text" placeholder="Sat, 14 Oct" />
              <input type="text" placeholder="10:00" />
            </div>
          </div>
        </div>
        <button className="search-button">Search</button>
      </section>
    </div>
    </>
  );
}

export default CarRental;
