import React from "react";
import "./Card.css";

function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt="card" className="card-img" />

      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>

        <button>View More</button>
      </div>
    </div>
  );
}

export default Card;