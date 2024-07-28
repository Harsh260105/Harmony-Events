import React from 'react'
import moun from '../../assets/mountain.jpeg'
import tree from '../../assets/tree.jpeg'
import lock from '../../assets/lock.png'
import './Contact.css'
import Footer from '../../components/Footer'
import Nav from '../../components/Navbar'
import secimg from '../../assets/frcontactus.jpeg'

export default function Contact() {
  return (
    <>
    <Nav />
      <div className="first">
        <img src={moun} alt="mountain-image" />
        <div className="headercontent">
            <h3 className='all'>C O N T A C T  &nbsp;  U S  &nbsp;   N O W</h3> 
            <h3 className='aa'><span className='ab'>KEEP</span> &nbsp; <span className='har'>IN TOUCH</span></h3>
            <p className='bc'>Home &nbsp;|&nbsp; Contact us</p>
        </div>
      </div>
      <div className="middl">
        <img src={secimg} alt="" />
        <div className="cont">
          <img src={lock} alt="" />
          <p>Contact Us</p>
          <div className="inp">
            <input type="text" placeholder='Name*' />
            <input type="text" placeholder='Email*' />
            <input type="text" placeholder='Country*'/>
            <input type="text" placeholder='Phone Number*' />
            <input type="text" placeholder='Password*' />   
            <button>Send</button>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}
