import "/src/Componets/Card/Card.css";
/* eslint-disable react/prop-types */
const Card = ({ race, name, image, infoCat }) => {
  return (
    <>
    <div className="container">
    <div className="cardsArea">
          <div className="imageCard" onClick={infoCat}>
            <img src={image} alt={name} />
          </div>
          <div>
            <h2>{name}</h2>
            <p>Race: {race}</p>
          </div>
        </div>
    </div>
        
    </>
  );
};

export default Card;
