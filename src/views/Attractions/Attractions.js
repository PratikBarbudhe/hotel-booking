import React from "react";
import "./Attractions.css"
import kolkata from "./kolkata.jpg"
import Navbar from "../../component/Navbar/Navbar";

function Attractions(){
    return(
        <>
        <div className="title-container">
        <Navbar/>
        
        <p className="attractions-title"><b>Attractions, activities and <br/>experiences</b></p>
        <p className="attractions-subtitle"> Discover new attractions and experiences to match your<br/> interests and travel style</p>
        <div className="place-container">
        <input type="text" placeholder="Where are you going" className="place-search"/>
        <label for="placedate">Select yours date</label>
        <input type="date" placeholder="Select yours date" className="place-date"/>
        </div>
        </div>
        <h3>Nearby Destinations</h3>
        <div>
            <img src={kolkata} alt="kolkata image " height={200} width={300}/>
            <h4>Kolkata</h4>
            <p>20 Things to do</p>
        </div>
        </>
    )

}

export default Attractions