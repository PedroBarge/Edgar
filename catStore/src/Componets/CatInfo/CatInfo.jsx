import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CatJson from "../../../catsDb.json";
import { useState, useEffect } from "react";

import "./CatInfo.css";

const CatInfo = () => {
  const { name } = useParams();

  const [cat, setCat] = useState(null);

  useEffect(() => {
    const catFound = Object.values(CatJson).find((cat) => cat.name === name);
    setCat(catFound);
  }, [name]);

  return (
    <>
      {cat ? (
        <div className="mainCnt">
          <div className="catInfoArea">
            <h1>{cat.name}</h1>
            <img src={cat.image} alt="cat" />
            <div className="moreInfo">
            <p>Race: {cat.race}</p>
            <p>Color: {cat.color}</p>
            <p>Weight: {cat.weight} kg</p>
            <p>Age: {cat.age}</p>
            <p>Location: {cat.location}</p>
            </div>
            <Link to="/shop">
              <button>Return</button>
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default CatInfo;
