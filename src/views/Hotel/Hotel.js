import React  from 'react';
import "./Hotel.css"
import Dropdown from '../../component/Dropdown/Dropdown';
import Dropdown1 from '../../component/Dropdown1/Dropdown1';
// import Dropdown2 from '../../component/Dropdown2/Dropdown2';
// import Navbar from '../../component/Navbar/Navbar';
// import Footer from '../../component/Footer/Footer';


function FlightHotel() {

  return (
    <div className="body">
      <div className="background-img">
        <h1 className='heading'>Your entire holiday in one click!</h1>
        <h3>Book Your Hotel Now</h3>
          <Dropdown/> <Dropdown1/>  
         <p className='text'></p>
         
      </div>
    </div>
  );
}


export default FlightHotel;


