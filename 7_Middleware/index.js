const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const initialState = {
  product: ["suger", "salt"],
  numberOfProduct: 2,
};

const getProduct = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        product: [...state.product, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      };

    default:
      return state;
  }
};

const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct("pen"));
