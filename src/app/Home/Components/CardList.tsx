import React from "react";
import Cards from "./Cards";
import "../../Home/Home.css";

export default function CardList() {
  var people = [
    {
      id: 1,
      image: "/Assets/card1.jpeg",
      name: "Julian Jameson",
      Profession: "Profession",
      fbIcon: "/icons/facebook.png",
      instaIcon: "/icons/instagram.png",
      twitterIcon: "/icons/twitter.png",
    },
    {
      id: 2,
      image: "/Assets/man.png",
      name: "Julian Jameson",
      Profession: "Profession",
      fbIcon: "/icons/facebook.png",
      instaIcon: "/icons/instagram.png",
      twitterIcon: "/icons/twitter.png",
    },
    {
      id: 3,
      image: "/Assets/woman1.png",
      name: "Julian Jameson",
      Profession: "Profession",
      fbIcon: "/icons/facebook.png",
      instaIcon: "/icons/instagram.png",
      twitterIcon: "/icons/twitter.png",
    },
    {
      id: 4,
      name: "Julian Jameson",
      Profession: "Profession",
      fbIcon: "/icons/facebook.png",
      instaIcon: "/icons/instagram.png",
      twitterIcon: "/icons/twitter.png",
      image: "/Assets/woman2.png",
    },
  ];
  return (
    <div className="cardlist">
      {people.map((p) => {
        return <Cards key={p.id} people={p} />;
      })}
    </div>
  );
}
