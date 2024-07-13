import React from "react";
import Link from "next/link";
import "./Header.css";
import '../../../app/globals.css';

export default function Header() {
  return (
   
      <div className="navigation_menu">
        <Link className="logo" href="#">
          Brandname
        </Link>
        <Link className="font" href="/Home">
          Home
        </Link>
        <Link className="font" href="/Product">
          Product
        </Link>
        <Link className="font" href="/Pricing">
          Pricing
        </Link>
        <Link className="font" href="/Contact">
          Contact
        </Link>
        <button className="login_button">Login</button>
        <button className="joinus_button">JOIN US</button>
      </div>
   
  );
}
