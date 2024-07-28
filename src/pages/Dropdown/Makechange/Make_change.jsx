import React from 'react'
import { useState } from 'react'
import frmakechange from '../../../assets/frmakechange.jpeg'
import Navbar from '../../../components/Navbar.jsx'
import Footer from '../../../components/Footer.jsx'
import './Make_change.css'

const Make_change = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="image-container">
          <img src={frmakechange} alt="Background" />
        </div>
        <div className="form-container3">
          <h2>Change User Detail</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <select name="gender" >
              <option value="Select">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
            <input type="tel" placeholder="Phone Number" />
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <button type="submit">CHANGE</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Make_change