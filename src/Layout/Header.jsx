import React, { useState, useContext } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/app-context";
import { Link } from "react-router-dom";
function Header() {
  const {
    cartState: { cart },
    dispatchCart,
    dispatchFilter,
    filterState: { search },
  } = useContext(AppContext);
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <div className="header">
      <Link to={"/"} className="logo">
        ONLINE CART
      </Link>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          dispatchFilter({ type: "SEARCH_PRODUCT", payload: e.target.value });
        }}
      />
      <div className="cart-div">
        <div
          onClick={() => setOpenDropDown((prev) => !prev)}
          className="cart-icon"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <h2>{cart.length}</h2>
        </div>
        <div className={`cart-drop-down ${openDropDown ? "open-drop" : ""}`}>
          {cart.length === 0
            ? "Cart is Empty"
            : cart.map((prod) => {
                return (
                  <>
                    <div className="drop-item">
                      <img src={prod.thumbnail} alt="" />
                      <h2>{prod.title}</h2>
                      <p>{prod.price}</p>
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() =>
                          dispatchCart({
                            type: "REMOVE_FROM_CART",
                            payload: prod.id,
                          })
                        }
                      />
                    </div>
                  </>
                );
              })}
          <Link onClick={() => setOpenDropDown(false)} to={"/checkout"}>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
