import React from 'react';
import '../../Home/Home.css';


export default function Cards({people}:any) {
  
  return (
 
    <div className="card">
     <div  ><img src={people.image}alt="image" className='card-img'/></div>
     <div className="cardName">{people.name}</div>
      <div className='profession'>{people.Profession}</div>
      <div className="socialmedia">
        <img src={people.fbIcon} className="socialMedia" />
        <img src={people.instaIcon} className="socialMedia" />
        <img src={people.twitterIcon} className="socialMedia" />
      </div>
    </div>
  )
}
