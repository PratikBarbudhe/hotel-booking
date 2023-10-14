import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <div className="navbar">
            <h1 className="nav-brand">Booking.com</h1>
            <Link className="nav-menu" to="/">Stay</Link>

            <Link className="nav-menu" to="/Hotel">Hotel</Link>
            <Link className="nav-menu"  to="/flight">Flight</Link>
            <Link className="nav-menu"  to="/attraction">Attraction</Link>
            <Link className="nav-menu"  to="/CarRental">Car Rental</Link>
            <Link className="nav-menu"  to="/login">Login</Link>
            <Link className="nav-menu"  to="/register">Register</Link>
           

        </div>
    )
}