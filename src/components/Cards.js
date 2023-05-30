import React from "react";

function Cards({ title, description, imageSrc, href }) {
  return (
    <div className="card mt-2">
      <h5 className="card-title bg-dark">{title}</h5>

      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body bg-dark">
        <p className="card-text bg-dark ">{description}</p>
        <a href={href} target="_blank" rel="noopener noreferrer">Click Here </a>
      </div>
    </div>
  );
}
export default Cards;
