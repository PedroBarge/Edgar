/* eslint-disable react/prop-types */
const Card = ({ race, name, color, weight, age, location, image, price }) => {
    return (
      <div>
        <img src={image} alt={name} />
        <h2>Name: {name}</h2>
        <p>Race: {race}</p>
        <p>Color: {color}</p>
        <p>Weight: {weight}</p>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
        <p>Price: {price}</p>
      </div>
    );
  };

  export default Card;