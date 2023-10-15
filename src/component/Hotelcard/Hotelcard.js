import React from 'react';
import "./Hotelcard.css"

const Card = ({ hotel }) => {
  return (
    <div className="card">
      <img src={hotel.image} className="card-img-top" alt="Hotel" />
      <div className="card-body">
        <h5 className="card-title">{hotel.name}</h5>
        <p className="card-text">{hotel.description}</p>
      </div>
    </div>
  );
};

export default Card;
