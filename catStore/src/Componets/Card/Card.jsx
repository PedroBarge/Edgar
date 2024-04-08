import "./Card.css";
import { useState } from "react";

/* eslint-disable react/prop-types */
const Card = ({ image, race, name, color, weight, age, location, price }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };
  return (
    <>
      <div className="container">
        <div className="cardsArea">

          <div className="infoCard">
            <h2>{name}</h2>
            <img className="imageCard" src={image} alt={name} />
            <p>Race: {race}</p>
          </div>

          <button onClick={handleClick}>
            {showInfo ? "Hide Info" : "More Info"}
          </button>
          {showInfo && (
            <div className="info">
              <p>Color: {color}</p>
              <p>Weight: {weight}</p>
              <p>Age: {age}</p>
              <p>Location: {location}</p>
              <p>Price: {price}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
