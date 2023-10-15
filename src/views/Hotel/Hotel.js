import React  from 'react';
import "./Hotel.css"
import Dropdown1 from '../../component/Dropdown1/Dropdown1';
import Search from '../../component/Search Bar/Search';
import APIFetch from '../../component/APIFetch/APIFetch'
// import Hotelcard from '../../component/Hotelcard/Hotelcard';
// import Navbar from '../../component/Navbar/Navbar';
// import Footer from '../../component/Footer/Footer';


function Hotel() {

  return (
    <div className="body">
      <div className="background-img">
        <div className='tracking-in-contract'>
        <h1 className='heading '>Your entire holiday in one click!</h1>
        <h3 >Book Your Hotel Now</h3>
        </div>
        <Search/>  <Dropdown1/> 
      </div>
        <section className='book'>
          <div className='container flex_space'>
            <div className='text'>
              <h1> <span>Book</span> Your Rooms</h1>
            </div>
            <div className="from">
              <form className="grid">
                <input type="date" placeholder='Arivial Date'/>
                <input type="date" placeholder='Diparture Date'/> 
                <input type="number" placeholder='Adults'/>
                <input type="number" placeholder='Children'/> 
                <input type="submit" placeholder='CHECK AVAILABILITY'/>
              </form>  
            </div>
          </div>
        </section>
    </div>
  );
}


export default Hotel;


