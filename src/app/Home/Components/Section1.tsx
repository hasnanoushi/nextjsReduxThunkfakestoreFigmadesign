import React from "react";
import "../../Home/Home.css";

export default function Section1() {
  return (
    <div className="row bg_color">
      <div className="col leftcol">
        <h5 className="welcome texts">Welcome</h5>
        <h1 className="texts">Best Learning Opportunities</h1>
        <h4 className="texts">
          Our goal is to make online education work for everyone
        </h4>
        <button className="joinus_button">Join Us</button>{" "}
        <button className="learn">Learn More</button>
      </div>
      <div className="col">
        <img src={"/Assets/images.png"} className="img"></img>
      </div>
    </div>
  );
}
