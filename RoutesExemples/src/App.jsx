/* eslint-disable react/prop-types */
//----------------------------------------------------------------
//IMPORTS
import { useState, useEffect } from "react";
import Navigation from "/src/Componets/Navigation/Navigation.jsx";
import Table from "/src/Componets/Table/Table.jsx";
import catJson from "../src/catsDb.json";
import "./App.css";

//----------------------------------------------------------------
const Card = ({ race, name, color, weight, age, location, image, price }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Race: {race}</p>
      <p>Color: {color}</p>
      <p>Weight: {weight}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>Price: {price}</p>
      <img src={image} alt={name} />
    </div>
  );
};

function App() {
  const [catInfo, setCatInfo] = useState([]);

  useEffect(() => {
    setCatInfo(Object.values(catJson));
  }, []);

  console.log("Current catInfo:", catInfo);

  return (
    <>
      <Navigation />
      <h1>Loja de Gatos</h1>
      <h3>MIAUU</h3>
      {catInfo.map((cat) => (
        <Card key={cat.id} {...cat} />
      ))}
    </>
  );
}

export default App;
