import React from 'react'
import './Footer.css'
import logo from '../logo.svg'

export default function Footer() {
  return (
    <div className='foot'>
        <h1>Do you want to step in to the <br /> future of Your Upcoming Event</h1>
        <button className='Req'>Request Early Access</button>
        <div className="midcon">
            <div>
                <img className='reac' src={logo} alt="" />
                <p>Crechterwood K12 182 DK Alknjkcb <br />All rights reserved</p>
            </div>
            <div>
                <ul className='ful'>
                    <li>Links</li>
                    <li>Overons</li>
                    <li>Social Media</li>
                    <li>Counters</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Company</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className="fin">
            <ul>
                <li className=''>Get in touch</li>
                <li>Crechterwood K12 182 DK Alknjkcb</li>
                <li>085-132567</li>
                <li>info@payme.net</li>
            </ul>
        </div>
        <p className='gpt'>@2024. All rights conserved</p>
    </div>
  )
}
