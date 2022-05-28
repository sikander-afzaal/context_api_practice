import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/app-context";
import ProdCard from "./ProdCard/ProdCard";
function CardContainer() {
  const {
    cartState: { products },
    filterState: { search },
  } = useContext(AppContext);

  const [filtered, setfiltered] = useState(products); //temp state for the filtered cards

  //to filter cards when the search bar updates
  useEffect(() => {
    const newArr = products.filter((elem) =>
      elem.title.toLowerCase().includes(search)
    );
    setfiltered(newArr);
  }, [search, products]);

  return (
    <div className="card-container">
      {filtered.map((prod) => {
        return <ProdCard prod={prod} />;
      })}
    </div>
  );
}

export default CardContainer;
