import "./Flight.css"
import React, { useState } from 'react';
import FlightSearchForm from './FlightSearchForm';
import HotelSearchForm from './HotelSearchForm';

function FlightHotelPage() {
  const [flightSearchData, setFlightSearchData] = useState(null);
  const [hotelSearchData, setHotelSearchData] = useState(null);


  return (
    <div>
      <h2>Flight + Hotel Search</h2>
      <FlightSearchForm onSubmit={setFlightSearchData} />
      <HotelSearchForm onSubmit={setHotelSearchData} />


    </div>
  );
}

export default FlightHotelPage;


