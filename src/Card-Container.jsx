import React, { useContext } from "react";
import { AppContext } from "./context/app-context";
import ProdCard from "./ProdCard/ProdCard";
function CardContainer() {
  const {
    cartState: { products },
  } = useContext(AppContext);
  return (
    <div className="card-container">
      {products.map((prod) => {
        return <ProdCard prod={prod} />;
      })}
    </div>
  );
}

export default CardContainer;
