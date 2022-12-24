import React from "react";
import logo from "../images/logo.jpg";
import sec1image from "../images/sec1image.jpg";
import "./sec1.css";

function sec1() {
  return (
    <div className="Sec1">
      <div className="navbar">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="items">
          <div className="item">Courses</div>
          <div className="item">About Us</div>
          <div className="item">Teachers</div>
          <div className="item">Pricing</div>
          <div className="item">Careers</div>
          <div className="item">Blog</div>
        </div>
        <div className="button">Get Started</div>
      </div>
      <div className="sec1">
        <div className="component">
          <div className="majortext">A <span style={ {color: '#5D5AD8'} }>unique</span> approach to learning foreign languages online</div>
          <div className="minortext">
            Learn at your own pace, with lifetime access on mobile and desktop
          </div>
          <div className="button1">Get Started</div>
        </div>
        <div className="image">
          <img src={sec1image} />
        </div>
      </div>
    </div>
  );
}

export default sec1;
