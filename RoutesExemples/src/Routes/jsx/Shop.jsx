import "/src/App.css";

import Card from "../../Componets/Card/Card";
import catJson from "/src/catsDb.json";
import { useState , useEffect} from "react";


function Shop() {
    const [catInfo, setCatInfo] =useState([]);

    useEffect(() => {
        setCatInfo(Object.values(catJson));
    }, []);

  console.log("ola");
  return (
    <>
    {catInfo.map((cat, index) => (
        <Card key={index} {...cat} />
      ))}
    </>
  );
}

export default Shop;
