import React, { useState } from 'react';
// import Search from '../../component/Search Bar/Search';
// import Hotelcard from '../../component/Hotelcard/Hotelcard';

const APIFetch = () => {
  const [hotels, setHotels] = useState([]);
  const handleSearch = async (city) => {
    try {
      const response = await fetch(`https://travel-advisor.p.?city=${city}`);
      const data = await response.json();
      setHotels(data); // assuming data is an array of hotel information
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div className="container">
      <search onSearch={handleSearch} />
      <div className="row">
        {hotels.map((hotel, index) => (
          <div className="col-md-4" key={index}>
            <hotels hotel={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default APIFetch;
