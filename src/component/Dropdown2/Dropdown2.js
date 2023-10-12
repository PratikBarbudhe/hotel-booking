import React, { useState } from 'react';
import "./Dropdown2.css" 

const Dropdown2 = () => {
    const [numOfGuests, setNumOfGuests] = useState(1);
    const [roomType, setRoomType] = useState('Single');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
  
    const roomTypes = ['Single', 'Double', 'Suite', 'Deluxe', 'Family'];
  
    const handleGuestsChange = (event) => {
      setNumOfGuests(event.target.value);
    };
  
    const handleRoomTypeChange = (event) => {
      setRoomType(event.target.value);
    };
  
    const handleCheckInDateChange = (event) => {
      setCheckInDate(event.target.value);
    };
  
    const handleCheckOutDateChange = (event) => {
      setCheckOutDate(event.target.value);
    };
  
    return (
      <div className="booking-container">
        <div className="booking-option">
          <label htmlFor="numOfGuests">Number of Guests:</label>
          <select id="numOfGuests" value={numOfGuests} onChange={handleGuestsChange}>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
  
        <div className="booking-option">
          <label htmlFor="roomType">Room Type:</label>
          <select id="roomType" value={roomType} onChange={handleRoomTypeChange}>
            {roomTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
  
        <div className="booking-option">
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={handleCheckInDateChange}
          />
        </div>
  
        <div className="booking-option">
          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={handleCheckOutDateChange}
          />
        </div>
      </div>
    );
  };
  
  export default Dropdown2;