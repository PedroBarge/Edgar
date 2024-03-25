import "./nav.css";

import { Link } from "react-router-dom";

import HomeImg from "/src/assets/img/botao-de-inicio.png"
import ShopImg from "/src/assets/img/pet-shop.png"


const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/home">
              <img src={HomeImg} alt="Home Page" className="my-img" />
            </Link>
          </li>
          <li>
            <Link to="/shop">
              <img src={ShopImg} alt="Shop" className="my-img" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
