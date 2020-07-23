import React from "react";
import gates from "../images/gates.png";
import rfid from "../images/rfid.jpg";
import metlife from "../images/metlife.png";
import security from "../images/security.png";
import thumb from "../images/thumb.png"
import Banner from "../components/banner/Banner"
import "./Steps.css"

function Steps() {
  return (
    <div className="steps-container">
      <Banner/>
      <div className="header">
        <h1>Let's get you checked in!</h1>
      </div>
      <div className="step-one">
        <h2>Step 1</h2>
        <img src={gates} alt="Entry Gates" className="images"/>
        <p>Go to your nearest gate on the map above.</p>
        <p>
          Enter between <span className="underline">7:40PM - 7:50PM.</span>
        </p>
        <p>We want to reduce crowding.</p>
      </div>
      <div className="step-two">
        <h2>Step 2</h2>
        <img src={rfid} alt="Rfid checkin" className="images"/>
        <p>Wave your phone near the reader</p>
        <p>
          <span className="underline">need help with a scanner?</span>
        </p>
      </div>
      <div className="step-three">
        <h2>Step 3</h2>
        <img src={metlife} alt="Security walk in" className="images" />
        <p>Walk through the gate.</p>
      </div>
      <div className="step-four">
        <h2>Step 4</h2>
        <img src={security} alt="Entry Gates" className="images" />
        <p>Walk to your closest security check.</p>
      </div>
      <div className="step-five">
        <h2>Step 5</h2>
        <img src={thumb} alt="success"  className="images"/>
        <p>Enjoy your day!.</p>
      </div>
    </div>
  );
}

export default Steps;
