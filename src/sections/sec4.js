import React from "react";
import stud from "../images/stud.jpg";
import country from '../images/c2.jpg'
import "./sec4.css";

function sec4() {
  return (
    <div className="sec4">
      <div className="texts4">
        <div className="key4">TOP STUDIYING</div>
        <div className="teachers">Our students say</div>
      </div>
      <div className="students">
        <div className="image4">
          <img src={stud} />
        </div>
        <div className="text4">
          <div className="namec">
            <div className="name4">Martin Watson</div>
            <div className="country4"><img src={country} />B2 course student</div>
          </div>
          <div className="body4">
            There is no way I could have made the same progress learning Spanish
            without using Lingua. The best part is now learning Spanish has
            become one of my biggest hobbies.
          </div>
        </div>
      </div>
    </div>
  );
}

export default sec4;
