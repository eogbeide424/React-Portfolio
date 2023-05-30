import React from "react";

function Cards({ title, description, imageSrc, href }) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageSrc} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </a>
    );
  }
export default Cards;
