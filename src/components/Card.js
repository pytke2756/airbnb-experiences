import React from "react";

import photo from "../assets/katie-zaferes.png";
import star from "../assets/star.png";

const Card = () => {
  return (
    <div className="card">
      <img className="card--image" src={photo} />
      <div className="card--stats">
        <img className="card--star" src={star} />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
};

export default Card;
