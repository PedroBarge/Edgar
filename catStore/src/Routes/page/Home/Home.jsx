import "/src/App.css";
import './Home.css';

import Banner from "/src/Componets/Banner/Banner.jsx";
import TLDR from "../../../Componets/TLDR/Tldr";
import Comments from '../../../Componets/Comments/Comments.jsx';

function Home() {
  return (
    <>
      <Banner />
      <TLDR />
      <div className="comentsArea">
        <Comments/>
      </div>

      
    </>
  );
}

export default Home;
