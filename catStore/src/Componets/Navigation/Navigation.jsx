
import {Link} from "react-router-dom";
import "/src/Componets/Navigation/Navigation.css";


const Navigation = ()=>{
    return(
        <>
        <nav className="navMain">
            <ul className="ulList">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
        </nav>
        </>
    );
}

export default Navigation;