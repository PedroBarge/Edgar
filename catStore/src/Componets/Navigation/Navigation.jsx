
import {Link} from "react-router-dom";


const Navigation = ()=>{
    return(
        <>
        <nav>
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