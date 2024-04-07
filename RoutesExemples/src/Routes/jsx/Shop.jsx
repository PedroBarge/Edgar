import "/src/App.css";

import Card from "../../Componets/Card/Card";
import InfoCard from "../../Componets/Card/InfoCard";
import catJson from "/src/catsDb.json";
import { useState, useEffect } from "react";

function Shop() {
  const [catInfo, setCatInfo] = useState([]);
  const [indexOfClickedCat, setIndexOfClickedCat] = useState(0);

  useEffect(() => {
    setCatInfo(Object.values(catJson));
  }, []);

  function openInfoCat(index){
    setIndexOfClickedCat(index);
  }

  return (
    <>
      {catInfo.map((cat, index) => (
        <Card key={index} {...cat} infoCat={() => openInfoCat(index)} />
      ))}
      {catInfo.length > 0 && <InfoCard {...catInfo[indexOfClickedCat]} />}
    </>
  );
}

export default Shop;
