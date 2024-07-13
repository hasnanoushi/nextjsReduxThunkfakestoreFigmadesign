import React from "react";
import "./Home.css";
import CardList from "./Components/CardList";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";

export default function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <CardList />
    </div>
  );
}
