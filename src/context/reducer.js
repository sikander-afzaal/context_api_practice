const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": //to add items to cart
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART": //to remove items from cart
      return {
        ...state,
        cart: state.cart.filter((elem) => elem.id !== action.payload), // every id not equal to the payload id should be returned
      };
    case "CHANGE_QTY": // to change quantity of items in the cart
      return {
        ...state,
        cart: state.cart.filter((elem) =>
          elem.id === action.payload.id
            ? (elem.qty = action.payload.newQty)
            : elem.qty
        ),
      };

    default:
      return state;
  }
};

export default reducer;
