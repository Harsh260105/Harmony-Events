import React from "react";
import moun from "../../assets/mountain.jpeg";
import Speaker from "../../assets/speaker2.jpeg";
import Guitar from "../../assets/guitar.jpeg";
import Food from "../../assets/food.jpeg";
import Laptop from "../../assets/laptop.jpeg";
import Firecracker from "../../assets/firecracker.jpeg";
import Party from "../../assets/party.jpeg";
import Man from "../../assets/man.jpeg";
import Running from "../../assets/runnimg.jpeg";
import Offer from "../../assets/offer.jpeg";
import "./Gallery.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Gallery = () => {
  return (
    <>
      <Navbar />

      <div className="mainone">
        <div className="first">
          <img src={moun} alt="mountain" />
          <div className="headercontent">
            <h3 className="all">H A R M O N I &nbsp; E V E N T S &nbsp; </h3>
            <h3 className="aa">
              <span className="ab">HARMONI </span> &nbsp;{" "}
              <span className="har">GALLERY</span>
            </h3>
            <p className="bc">Home &nbsp;|&nbsp; Harmoni Gallery</p>
          </div>
        </div>
        <div className="midheader">--------🌟Our Gallery🌟--------</div>
        <div className="imgrid">
          <div className="card">
            <img className="topimg" src={Speaker} alt="" />
            <div className="tr">
              <p>
                
              </p>
            </div>
          </div>
          <div className="card">
            <img className="topimg" src={Guitar} alt="" />
            <div className="tr">
              <p>
               
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Food} alt="" />
            <div className="tr">
              <p>
                Hii there <br /> Hello there
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Laptop} alt="" />
            <div className="tr">
              <p>
                Hii there <br /> Hello there
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Firecracker} alt="" />
            <div className="tr">
              <p>
                Hii there <br /> Hello there
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Party} alt="" />
            <div className="tr">
              <p>
                Hii there <br /> Hello there
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Man} alt="" />
            <div className="tr">
              <p>
                Hii there <br /> Hello there
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Running} alt="" />
            <div className="tr">
              <p>
                Hii there <br /> Hello there
              </p>
            </div>
          </div>
        </div>
        <div className="location">
          <p>Your Location</p>
          <iframe
            src="https://www.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Akshat+Tower+ahmedabad+(My+Business+Name)&amp;t&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameborder="0"
            title="Location"
          ></iframe>
        </div>
        <div className="off">
          <img src={Offer} alt="" />
          <div className="offer">
            <p>30% Off In June~July For Birthday events</p>
            <button>MAKE AN EVENT NOW</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
