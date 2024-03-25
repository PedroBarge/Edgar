import "../../assets/css/nav.css";
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/">
              <img src="" alt="Home Page" className="my-img" />
            </Link>
          </li>
          <li>
            <Link to="/shop">
              <img src="" alt="Shop" className="my-img" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
