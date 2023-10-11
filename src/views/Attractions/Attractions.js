import React from "react";
import "./Attractions.css"
import kolkata from "./kolkata.jpg"

function Attractions(){
    return(
        <>
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