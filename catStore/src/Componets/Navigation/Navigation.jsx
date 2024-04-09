
import {Link} from "react-router-dom";
import "./Navigation.css";

import HomeBtn from "../../assets/img/home.png";
import AboutBtn from "../../assets/img/about.png";
import ShopBtn from "../../assets/img/cat.png";


const Navigation = ()=>{
    return(
        <>
        <nav className="navMain">
            <ul className="ulList">
                <li><Link to="/"><img className="menuImg" src={HomeBtn} alt="Home" /></Link></li>
                <li><Link to="/about"><img className="menuImg" src={AboutBtn} alt="About US" /></Link></li>
                <li><Link to="/shop"><img className="menuImg" src={ShopBtn} alt="Adopt" /></Link></li>
            </ul>
        </nav>
        <div className="line">
        </div>
        </>
    );
}

export default Navigation;