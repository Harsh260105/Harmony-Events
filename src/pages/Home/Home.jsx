import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './Home.css'
import bcg from '../../assets/background.jpeg'
import th from '../../assets/th.jpeg'
import im2 from '../../assets/im2.jpeg'
import im3 from '../../assets/im3.jpeg'
import im4 from '../../assets/im4.jpeg'
import im5 from '../../assets/im5.jpeg'


const Home = () => {
  return (
    <>
      <Navbar />
      
      <div className="jp">
        <img className="bcgimg" src={bcg} alt="background image" />
        <div className="text-area">
            <h2>One Stop Event <br />Planner</h2>
            <div className="p">
              <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing
              Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow
              asked of</p>
              <p><br />Every Event should be perfect <br /></p>

              <div class='input-container'>  
                <input className="email" type="email" placeholder="Your Email Address" />
                <button class="get_started">Get <br/>Started</button>
              </div>
            </div>
            <div className="people">
              <img src={th} alt="image1" />
              <img src={im2} alt="image1" />
              <img src={im3} alt="image1" />
              <img src={im4} alt="image1" />
              <img src={im5} alt="image1" />
              <p>1600 people requested to access a visit in 24 hours</p>
            </div>
        </div> 
      </div>
      <Footer />
    </>
  )
}

export default Home