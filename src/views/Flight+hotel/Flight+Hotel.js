import React, { useState } from 'react';
import "./Flight.css"
import Dropdownlist from '../../component/Dropdownlist/Dropdownlist';
import Dropdown from '../../component/Dropdown/Dropdown';

//import FlightSearchForm from './FlightSearchForm';
//import HotelSearchForm from './HotelSearchForm';

function Flight() {

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


export default Flight;


