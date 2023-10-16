import React from "react";
import "./AttractionNavabar.css"
import { Link } from "react-router-dom";


 export default function AttractionNavbar(){


    return(
        <div className="navbar-container">
            
            

            <Link className="navbar-menu europe-class" to="/">Europe</Link>
            <Link className="navbar-menu"  to="/northamerica">North America</Link>
            <Link className="navbar-menu"  to="/asia">Asia</Link>
            <Link className="navbar-menu"  to="/africa">Africa</Link>
            <Link className="navbar-menu"  to="/southamerica">South America</Link>
            <Link className="navbar-menu"  to="/centralamerica">Central America</Link>
           </div>

    )
}