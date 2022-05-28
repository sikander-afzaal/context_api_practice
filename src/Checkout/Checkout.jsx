import React, { useContext, useEffect, useState } from "react";
import "./Checkout.css";
import { AppContext } from "../context/app-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function Checkout() {
  //state from the context
  const {
    cartState: { cart },
    dispatchCart,
  } = useContext(AppContext);
  //temp component state
  const [Total, setTotal] = useState(0);
  //use effect to check the new total every time cart updates
  useEffect(() => {
    let temp = 0;
    if (cart.length > 0) {
      cart.forEach((element) => {
        temp += element.price * element.qty;
      });
    } else {
      temp = 0;
    }

    setTotal(temp);
  }, [cart]);

  return (
    <div className="checkout">
      <div className="left-checkout">
        {cart.length > 0
          ? cart.map((elem, idx) => {
              return (
                <div className="checkout-item">
                  <img src={elem.thumbnail} alt="" />
                  <h2>{elem.title}</h2>
                  <p>${elem.price}</p>
                  <select
                    onChange={(e) => {
                      dispatchCart({
                        type: "CHANGE_QTY",
                        payload: { id: elem.id, newQty: e.target.value },
                      });
                    }}
                  >
                    {[...Array(elem.stock)].map((elem, idx) => {
                      return (
                        <option key={idx + 9} value={idx + 1}>
                          {idx + 1}
                        </option>
                      );
                    })}
                  </select>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() =>
                      dispatchCart({
                        type: "REMOVE_FROM_CART",
                        payload: elem.id,
                      })
                    }
                  />
                </div>
              );
            })
          : "Cart is Empty"}
      </div>
      <div className="right-checkout">
        <h2>Total</h2>
        <p>${Total}</p>
      </div>
    </div>
  );
}

export default Checkout;
