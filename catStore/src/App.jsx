import "./App.css";

import Header from "./Componets/Header/Header";
import Navigation from "./Componets/Navigation/Navigation";
import Shop from "./Routes/page/Shop/Shop";
import Home from "./Routes/page/Home/Home";
import About from "./Routes/page/About/About";
import CatInfo from "./Componets/CatInfo/CatInfo.jsx";
import Footer from "./Componets/Footer/Fotoer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//----------------------------------------------------------------

function App() {
  return (
    <>
      <Header />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path='/catinfo/:name' element={<CatInfo />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
