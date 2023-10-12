import React, { useState } from 'react';
import "./Flight+Hotel.css"
import Dropdownlist from '../../component/Dropdownlist/Dropdownlist';
import Dropdown from '../../component/Dropdown/Dropdown';

//import FlightSearchForm from './FlightSearchForm';
//import HotelSearchForm from './HotelSearchForm';

function FlightHotel() {

  return (
    <div className="body">
      <div className="background-img">
        <h1 className='heading'>Your entire holiday in one click!</h1>
        <h3>Book flight + hotel</h3>
         <Dropdown/> <Dropdownlist/>         
          <p className='text'></p>
      </div>
    </div>
  );
}


export default FlightHotel;


