import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <div className="navbar">
            
            <img src="https://product-images.ibotta.com/offer/ZZ-QXZ_G8mrk9rk11yD-fA-normal.png" className="brand-name"/>
            <Link className="nav-menu" to="/">Stay</Link>

            <Link className="nav-menu" to="/Hotel">Hotel</Link>
            <Link className="nav-menu"  to="/flight">Flight</Link>
            <Link className="nav-menu"  to="/attraction">Attraction</Link>
            <Link className="nav-menu"  to="/CarRental">CarRental</Link>
            <Link className="nav-menu"  to="/login">Login</Link>
            <Link className="nav-menu"  to="/register">Register</Link>
           

        </div>
    )
}