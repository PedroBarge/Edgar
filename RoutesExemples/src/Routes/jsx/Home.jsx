import "/src/App.css";
import Table from "../../Componets/Table/Table";

async function getCat() {
  const response = await fetch("/src/catsDb.json");
  const data = await response.json();
  console.log(data);
}

function renderCat() {
  <Table name="Test"/>;
}

getCat().then(renderCat());
function Home() {
  console.log("ola");
  return (
    <>
      <h1>{renderCat}</h1>
    </>
  );
}

export default Home;
