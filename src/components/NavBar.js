import { Route, Routes, NavLink, Link } from "react-router-dom";


function NavBar(){
    return(
        <nav>
        <Link to="/">HomePage</Link>
        <Link to="/apartments">Apartments List</Link>
        <Link to="/apartments/:id">Apartment Details</Link>
        <Link to="/apartments/create">Add an Apartment</Link>
        </nav>





    )
}

export default NavBar