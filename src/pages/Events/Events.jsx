import React from 'react'
import moun from '../../assets/mountain.jpeg'
import Footer from '../../components/Footer'
import Party from '../../assets/party.jpeg'
import Navratri from '../../assets/navratri.jpeg'
import Standup from '../../assets/standup.jpeg'
import Bday from '../../assets/birthday.jpeg'
import Wedding from '../../assets/wedding.jpeg'
import Navbar from '../../components/Navbar'
import './Events.css'


const Events = () => {
  return (
      <>
        <Navbar/>
        <div className='outermost'>
          <div>
          <div className="first">
            <img src={moun} alt="mountain" />
            <div className="headercontent">
              <h3 className="all">H A R M O N I &nbsp; E V E N T S &nbsp; </h3>
              <h3 className="aa">
                <span className="ab">HARMONI </span> &nbsp;{" "}
                <span className="har">EVENTS</span>
              </h3>
              <p className="bc">Home &nbsp;|&nbsp; Harmoni Events</p>
            </div>
          </div>
          <div className="evimg">
            <div className='ev a'>
              <img src={Party} alt="" />
              <p>Party</p>
            </div>
            <div className='ev a'>
              <img src={Navratri} alt="" />
              <p>Navratri</p>
            </div>
            <div className='ev a'>
              <img src={Standup} alt="" />
              <p>Standup Comedy</p>
            </div>
            <div className='ev'>
              <img src={Bday} alt="" />
              <p>Birthday</p>
            </div>
            <div className='ev'>
              <img src={Wedding} alt="" />
              <p>Wedding</p>
            </div>
          </div>
          </div>
          <Footer/>
        </div>
        
    </>
  )
}

export default Events