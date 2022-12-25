import React from "react";
import logo from "../images/logo.jpg";
import fb from "../images/fb.jpg";
import twitter from "../images/twitter.jpg";
import instagram from "../images/instagram.jpg";
import "./footer.css";

function footer() {
  return (
    <div className="footer">
      <div className="r1">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="address">
          20 Osgood Rd, Milford, NH 03055, USA +1283871239190213021
        </div>
      </div>
      <div className="r2">
        <div className="header">Company</div>
        <div className="components">Careers</div>
        <div className="components">Teachers</div>
        <div className="components">Support</div>
        <div className="components">Contact</div>
      </div>
      <div className="r3">
        <div className="header">Product</div>
        <div className="components">Courses</div>
        <div className="components">Pricing</div>
        <div className="components">Blog</div>
      </div>
      <div className="r4">
        <div className="header">Legal</div>
        <div className="components">Terms & Conditions</div>
        <div className="components">Privacy Policy</div>
      </div>
      <div className="socials">
        <a href="www.facebook.com">
          <img src={fb} />
        </a>
        <a href="www.twitter.com">
          <img src={twitter} />
        </a>
        <a href="www.instagram.com">
          <img src={instagram} />
        </a>
      </div>
    </div>
  );
}

export default footer;
