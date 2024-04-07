/* eslint-disable react/prop-types */
const InfoCard = ({
  image,
  race,
  name,
  color,
  weight,
  age,
  location,
  price,
}) => {
  console.log("ola");
  return (
    <>
      <div className="container">
        <div className="cardsArea">
          <div className="imageCard">
            <img src={image} alt={name} />
          </div>
          <div>
            <h2>{name}</h2>
            <p>Race: {race}</p>
            <p>Color: {color}</p>
            <p>Weight: {weight}</p>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
            <p>Price: {price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
