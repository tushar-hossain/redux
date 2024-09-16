const { createStore, combineReducers } = require("redux");

// product constants
const PRODUCTS = "PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// cart constants
const CARTS = "CARTS";
const ADD_CART = "ADD_CART";

// product initial state
const initialProducts = {
  products: ["suger", "salt"],
  productsItem: 2,
};
// cart initial state
const initialCart = {
  cart: ["suger", "banana"],
  numberOfCarts: 2,
};
// product action
const getProduct = () => {
  return {
    type: PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
// cart action
const getCart = () => {
  return {
    type: CARTS,
  };
};
const addCart = (cart) => {
  return {
    type: ADD_CART,
    payload: cart,
  };
};
// product reducer
const productReducer = (state = initialProducts, action) => {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        products: [...state.products],
        productsItem: state.productsItem,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        productsItem: state.productsItem + 1,
      };

    default:
      return state;
  }
};
// cart reducer
const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case CARTS:
      return {
        ...state,
        cart: [...state.cart],
        numberOfCarts: state.numberOfCarts,
      };
    case ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        numberOfCarts: state.numberOfCarts + 1,
      };

    default:
      return state;
  }
};

// combine reducer
const combineReducerStore = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

// store
const store = createStore(combineReducerStore);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(getCart());

store.dispatch(addProduct("banana"));
store.dispatch(addCart("pen"));
