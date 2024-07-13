import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="forms">
     <div className="heading">Connect with us ...</div>
      <div>
        <label className="elements">Name </label>
        <input
          className="name-box"
          type="text"
          placeholder="Enter your name"
        ></input>
        <br />
        <label className="elements">Email </label>
        <input
          className="email-box"
          type="text"
          placeholder="Enter your Email"
        ></input>
        <br />
        <label className="elements">Mobile</label>
        <input
          className="mob-box"
          type="text"
          placeholder="Enter your Contact Number"
        ></input>
        <br />
        <label className="elements">Message</label>
        <br />
        <textarea
          className="message"
          placeholder="Enter your message"
          cols={25}
          rows={4}
        ></textarea>
        <br />
        <button className="button">Submit</button>
      </div>
    </div>
  );
}
