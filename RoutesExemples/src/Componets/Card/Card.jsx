/* eslint-disable react/prop-types */
const Card = ({ race, name, color, weight, age, location, image, price }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: "10px",
          rowGap: "10px",
          padding: "2em",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "65%",
          }}
        >
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
    </>
  );
};

export default Card;
