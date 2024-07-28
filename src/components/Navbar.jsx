import logo from "../assets/icon.png";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import './Dropdown.css';

function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const navigate = useNavigate("");
  return (
    
    <div class="nav">
      <div class="icon">
        <img src={logo} alt="logo" />
      </div>
      <div class="content">
        <li onClick={() => navigate("/")}>HOME</li>
        <li onClick={() => navigate("/about")}>ABOUT</li>
        <li onClick={() => navigate("/events")}>EVENTS</li>
        <li onClick={() => navigate("/gallery")}>GALLERY</li>
        <li onClick={() => navigate("/contact")}>CONTACT</li>

        {/* <NavLink to="/" activeClassName="active"> HOME </NavLink>
        <NavLink to="/about" activeClassName="active"> ABOUT </NavLink>
        <NavLink to="/events" activeClassName="active"> EVENTS </NavLink>
        <NavLink to="/gallery" activeClassName="active"> GALLERY </NavLink>
        <NavLink to="/contact" activeClassName="active"> CONTACT </NavLink> */}
      </div>
      
      <div className="dropdown">
        <button onClick={toggleOpen} className="dropdown-button">Sign In <span className="">⯆</span></button>

        {isOpen && (
          <div className="dropdown-content">
            <a href="/signin">Sign In</a>
            <a href="/signup">Sign Up</a>
            <a href="/change-user-info">Change User Info</a>
          </div>
        )}
      </div>
      
    </div>
    
  );
}

export default Nav;
