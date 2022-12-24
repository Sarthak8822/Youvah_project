import React from "react";
import play from "../images/play.jpg";
import tele from "../images/tele.jpg";
import docs from "../images/docs.jpg";
import './sec2.css'

function sec2() {
  return (
    <div className="sec2">
      <div className="text">
        <div className="t1">WHY CHOOSE US</div>
        <div className="t2">Our values</div>
      </div>
      <div className="cards">
        <div className="card">
          <div className="icons">
            <img src={play} />
          </div>
          <div className="textcontainer">
            <div className="header">Speaking clubs</div>
            <div className="body">
              In our school you will practice your speaking skills and just get
              a lot of positive emotions!
            </div>
          </div>
        </div>
        <div className="card">
          <div className="icons">
            <img src={tele} />
          </div>
          <div className="header">Quality Control</div>
          <div className="body">
            A huge work has been done with the teachers and their work has been
            monitored thoroughly.
          </div>
        </div>
        <div className="card">
          <div className="icons">
            <img src={docs} />
          </div>
          <div className="header">Progress analysis</div>
          <div className="body">
            The CEF of Reference has been used at our school. It allows to
            control our students’ success in studying.
          </div>
        </div>
      </div>
    </div>
  );
}

export default sec2;
