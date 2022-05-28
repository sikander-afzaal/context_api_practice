const filterReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT":
      return { ...state, search: action.payload.toLowerCase() };

    default:
      return state;
  }
};

export default filterReducer;
