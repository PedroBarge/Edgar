import { useState, useEffect } from "react";
import Card from "../../../Componets/Card/Card";
import catJson from "../../../../catsDb.json";
import "./Shop.css";
import { Link } from "react-router-dom";

function Shop() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [catInfo, setCatInfo] = useState([]);

  useEffect(() => {
    setCatInfo(Object.values(catJson));
  }, []);

  useEffect(() => {
    const storedPage = sessionStorage.getItem("currentPage");
    setCurrentPage(storedPage ? parseInt(storedPage) : 1);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = catInfo.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    const nextPageValue = currentPage + 1;
    sessionStorage.setItem("currentPage", nextPageValue);
    setCurrentPage(nextPageValue);
  };

  const prevPage = () => {
    const prevPageValue = currentPage - 1;
    sessionStorage.setItem("currentPage", prevPageValue);
    setCurrentPage(prevPageValue);
  };

  return (
    <>
      <div className="card-container">
        {currentItems.map((cat, index) => (
          <Card key={index} {...cat} />
        ))}
      </div>

      <div className="pagination">
        <Link to={`/shop?page=${currentPage - 1}`}>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Anterior
          </button>
        </Link>
        <span>Página {currentPage}</span>
        <Link to={`/shop?page=${currentPage + 1}`}>
          <button
            onClick={nextPage}
            disabled={indexOfLastItem >= catInfo.length}
          >
            Próxima
          </button>
        </Link>
      </div>
    </>
  );
}

export default Shop;