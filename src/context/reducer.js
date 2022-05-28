const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((elem) => elem.id !== action.payload), // every id not equal to the payload id should be returned
      };
    case "CHANGE_QTY":
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
