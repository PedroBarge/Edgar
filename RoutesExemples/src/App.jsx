/* eslint-disable react/prop-types */
//----------------------------------------------------------------
//IMPORTS
import Navigation from "/src/Componets/Navigation/Navigation.jsx";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Shop from "./Routes/jsx/Shop";
//----------------------------------------------------------------

function App() {
  
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={""} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
      <h1>Loja de Gatos</h1>
      <h3>MIAUU</h3>
      <p>+---------------------------------------------+</p>
    </>
  );
}

export default App;
