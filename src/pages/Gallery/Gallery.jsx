import React from "react";
import moun from "../../assets/mountain.jpeg";
import Offer from "../../assets/offer.jpeg";
import "./Gallery.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import collage from "../../assets/frgallery/collage.jpg";
import concert from "../../assets/frgallery/concert.jpg";
import concert2 from "../../assets/frgallery/concert 2.jpg";
import gathering from "../../assets/frgallery/gathering.jpg";
import gathering2 from "../../assets/frgallery/gathering 2.jpg";
import party from "../../assets/frgallery/party.jpg";
import wedding from "../../assets/frgallery/wedding.jpg";
import wedding2 from "../../assets/frgallery/wedding 2.jpg";

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
            <img className="topimg" src={wedding} alt="" />
            <div className="tr">
              <p>
                Wedding
              </p>
            </div>
          </div>
          <div className="card">
            <img className="topimg" src={wedding2} alt="" />
            <div className="tr">
              <p>
                Wedding 
              </p>
            </div>
          </div>
          <div className="card">
            <img src={concert} alt="" />
            <div className="tr">
              <p>
                Concert
              </p>
            </div>
          </div>
          <div className="card">
            <img src={concert2} alt="" />
            <div className="tr">
              <p>
                Concert
              </p>
            </div>
          </div>
          <div className="card">
            <img src={gathering} alt="" />
            <div className="tr">
              <p>
                Gathering
              </p>
            </div>
          </div>
          <div className="card">
            <img src={gathering2} alt="" />
            <div className="tr">
              <p>
                Gathering
              </p>
            </div>
          </div>
          <div className="card">
            <img src={party} alt="" />
            <div className="tr">
              <p>
                party
              </p>
            </div>
          </div>
          <div className="card">
            <img src={collage} alt="" />
            <div className="tr">
              <p>
                Collage Fest
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
