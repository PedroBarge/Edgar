import { Link } from "react-router-dom";
import "./Card.css";
import { useState } from "react";


// eslint-disable-next-line react/prop-types
const Card = ({ image, race, name }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  
  return (
    <>
      <div className="cardsArea">
      <h2>{name}</h2>
        <div className="infoCard">
          <img className="imageCard" src={image} alt={name} />
          <p>Race: {race}</p>
        </div>
        <Link to={`/catinfo/${name}`}>
          <button onClick={handleClick}>More Info</button>
        </Link>
      </div>
    </>
  );
};

export default Card;
