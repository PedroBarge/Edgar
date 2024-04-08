import "./App.css";

import Navigation from "./Componets/Navigation/Navigation";
import Shop from "./Routes/page/Shop";
import Home from "./Routes/page/Home";
import About from "./Routes/page/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//----------------------------------------------------------------
import IconHome from "./assets/img/logo.png";

function App() {
  return (
    <>
      <nav className="navMain">
        <img className="iconHome" src={IconHome} alt="Unique Logo" />
        <h1>Unique Cats Store</h1>
      </nav>
      <h3 className="slogan">MIAUU</h3>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
