import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row foot">
        <div className="col">
           <ul>
            <li>
              <b>Company info</b>
            </li>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>
              <b>Legal</b>
            </li>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="col">
         <ul>
            <li>
              <b>Features</b>
            </li>
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>
              <b>Resources</b>
            </li>
            <li>iOS &Android</li>
            <li>Watch a demo</li>
            <li>customer</li>
            <li>API</li>
          </ul>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <b>Get in Touch</b>
            </li>
            <li>
              <img src="/icons/phone.png" className="listimg" />
              (480) 555-3456
            </li>
            <li>
              <img src="/icons/location.png" className="listimg" />
              4517 Washington Ave.Manchester.
              <br />
              Kentucky 39495
            </li>
            <li>
              <img src="/icons/mail.png" className="listimg" />
              debra.holt@example.com
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="row Foot">
        <div className="col">
          Made with Love by FigmaLand All Rights Reserved
        </div>
        <div className="col">
          <img src="/icons/facebook.png" className="footimg" />
          <img src="/icons/instagram.png" className="footImg" />
          <img src="/icons/twitter.png" className="footImg" />
        </div>
      </div>
    </div>
  );
}
