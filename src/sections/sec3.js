import React from "react";
import "./sec3.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";

function sec3() {
  return (
    <div className="sec3">
      <div className="texts3">
        <div className="key3">KEY PERSONS</div>
        <div className="teachers">Meet our teachers</div>
      </div>
      <div className="cards3">
        <div className="card31">
          <div className="image">
            <img src={image1} />
          </div>
          <div className="title3">
            <div className="name">Christian Howard</div>
            <div className="country">
              <img src={c1} />
              Italian teacher
            </div>
          </div>
        </div>
        <div className="card31">
          <div className="image">
            <img src={image2} />
          </div>
          <div className="title3">
            <div className="name">Sandra Wilson</div>
            <div className="country">
              <img src={c2} />
              Spanish teacher
            </div>
          </div>
        </div>
        <div className="card31">
          <div className="image">
            <img src={image3} />
          </div>
          <div className="title3">
            <div className="name">Jimmy Cooper</div>
            <div className="country">
              <img src={c3} />
              English teacher
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sec3;
