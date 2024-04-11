import "./Coments.css";

/* eslint-disable react/prop-types */
const Coments = ({ name, avaliation, description }) => {
  return (
    <>
      <div className="mainAvaliation">
        <div className="avaliationArea">
       
          <p>by: {name}</p>
          <span>{avaliation}</span>
          Description:
          <div className="descriptionArea">{description}</div>
        </div>
        <div className="avaliationArea">
       
          <p>by: {name}</p>
          <span>{avaliation}</span>
          Description:
          <div className="descriptionArea">{description}</div>
        </div>
        <div className="avaliationArea">
       
          <p>by: {name}</p>
          <span>{avaliation}</span>
          Description:
          <div className="descriptionArea">{description}</div>
        </div>
      </div>
    </>
  );
};

export default Coments;
