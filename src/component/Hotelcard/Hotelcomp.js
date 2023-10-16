import React from 'react'
 import "./Hotelcomp.css";

 const Card = ({ title, description, imageUrl }) => {
    return (
      <div className="card">
        <img src={imageUrl} alt="card" className="image" />
        <div className="cardBody">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
      </div>
    );
  };



export default Card;
