import "/src/Componets/Card/Card.css";
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
          <div className="imageCard" onClick={handleClick}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
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
