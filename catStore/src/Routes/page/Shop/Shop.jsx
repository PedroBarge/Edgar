import { useState, useEffect } from "react";
import Card from "../../../Componets/Card/Card";
import catJson from "../../../../catsDb.json";
import "./Shop.css";

function Shop() {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [catInfo, setCatInfo] = useState([]);

  useEffect(() => {
    setCatInfo(Object.values(catJson));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = catInfo.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  // Mude para a página anterior
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <div className="card-container">
        {currentItems.map((cat, index) => (
          <Card key={index} {...cat} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button onClick={nextPage} disabled={indexOfLastItem >= catInfo.length}>
          Próxima
        </button>
      </div>
    </>
  );
}

export default Shop;
