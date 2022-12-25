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
          <a href="#" className="item">Courses</a>
          <a href="#" className="item">About Us</a>
          <a href="#" className="item">Teachers</a>
          <a href="#" className="item">Pricing</a>
          <a href="#" className="item">Careers</a>
          <a href="#" className="item">Blog</a>
        </div>
        <a href="#"className="button">Get Started</a>
      </div>
      <div className="sec1">
        <div className="component">
          <div className="majortext">A <span style={ {color: '#5D5AD8'} }>unique</span> approach to learning foreign languages online</div>
          <div className="minortext">
            Learn at your own pace, with lifetime access on mobile and desktop
          </div>
          <a href="#" className="button1">Get Started</a>
        </div>
        <div className="image">
          <img src={sec1image} />
        </div>
      </div>
    </div>
  );
}

export default sec1;
