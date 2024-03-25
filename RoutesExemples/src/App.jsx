/* eslint-disable react/prop-types */
//----------------------------------------------------------------
//IMPORTS
import Navigation from "/src/Componets/Navigation/Navigation.jsx";

import "./App.css";
import Icon from "/src/assets/img/Designer.png";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Shop from "./Routes/jsx/Shop";
import Home from "./Routes/jsx/Home";
//----------------------------------------------------------------

function App() {
  return (
    <>
      <img style={{ width: "25%", height: "100%" }} src={Icon} alt="IconHome" />
      <h1>Unique Cats Store</h1>
      <h3>MIAUU</h3>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={""} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
