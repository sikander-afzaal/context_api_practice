import React, { useContext } from "react";
import { AppContext } from "../context/app-context";
function ProdCard({ prod }) {
  const {
    cartState: { cart },
    dispatchCart,
  } = useContext(AppContext);
  return (
    <div className="card-div" key={prod.id}>
      <img src={prod.thumbnail} alt="" />
      <div className="bot-card">
        <h2>{prod.title}</h2>
        <p>${prod.price}</p>
        {cart.some((elem) => elem.id === prod.id) ? (
          <button
            onClick={() =>
              dispatchCart({ type: "REMOVE_FROM_CART", payload: prod.id })
            }
            className="add-to-cart"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => dispatchCart({ type: "ADD_TO_CART", payload: prod })}
            className="add-to-cart"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProdCard;
