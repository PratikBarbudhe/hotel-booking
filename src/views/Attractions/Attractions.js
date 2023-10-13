import React from "react";
import "./Attractions.css"
import kolkata from "./kolkata.jpg"
import Navbar from "../../component/Navbar/Navbar";
import Cards from "../../component/Cards/Cards";
import Agra from "./agra.jpg";
import Oldgao from "./old gao.jpg";
import London from "./London.webp";
import Paris from "./paris.jpg";

function Attractions(){
    return(
        <>
        <div className="title-container">
        <Navbar/>
        
        <p className="attractions-title"><b>Attractions, activities and <br/>experiences</b></p>
        <p className="attractions-subtitle"> Discover new attractions and experiences to match your<br/> interests and travel style</p>
        <div className="place-container">
        <input type="text" placeholder="Where are you going" className="place-search"/>
        
        <input type="date" placeholder="Select yours date" className="place-date"/>
        </div>
        </div>
        <h3 className="heading1">Nearby Destinations</h3>
        <div>
            <Cards img={kolkata} name="kolkata" info="15 things to do"   />
            <Cards img={Agra} name="Agra" info="20 Things To Do "   />
            <Cards img={Oldgao} name="Old Gao" info="30 things to do" />
            <Cards img={London} name="London" info="25 things to do"/>
            <Cards img={Paris} name="Paris" info="40 things to do"/>
        </div>
        </>
    )

}

export default Attractions