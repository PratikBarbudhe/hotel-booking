import React, {useState} from "react";
import "./Cards.css"

 export default function Cards({img, name, info}){
  return(
    <div className="cards-container">
      <img src={img} className="cities-images"/>
      <h4 className="city-name">{name}</h4>
      <p className="description">{info}/-</p>
     
    </div>
  )
}
