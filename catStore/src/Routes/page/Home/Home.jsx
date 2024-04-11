import "/src/App.css";

import Banner from "/src/Componets/Banner/Banner.jsx";
import TLDR from "../../../Componets/TLDR/Tldr";
import Coments from "../../../Componets/Coments/Coments";

function Home() {
  return (
    <>
      <Banner />
      <TLDR />
      <div className="container">
      <Coments
        name={"Name"}
        avaliation={"4/5"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        }
      />
      
      </div>
    </>
  );
}

export default Home;
