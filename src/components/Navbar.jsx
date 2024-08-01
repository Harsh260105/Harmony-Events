import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/icon.png";
import "./Navbar.css";
import './Dropdown.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="nav">
      <div className="icon">
        <img src={logo} alt="logo" />
      </div>
      <div className="content">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({ isActive }) => (isActive ? "active" : "")}>
            EVENTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : "")}>
            GALLERY
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            CONTACT
          </NavLink>
        </li>
      </div>
      
      <div className="dropdown">
        <button onClick={toggleOpen} className="dropdown-button">Sign In <span className="">▽</span></button>
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
