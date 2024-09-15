const { createStore } = require("redux");
// finding constants
const ADD_USER = "ADD_USER";
// state => count : 0
const initialState = {
  users: ["Tushar"],
};
// action => increment, decrement, reset
const addUser = (value) => {
  return {
    type: ADD_USER,
    payload: value,
  };
};
// reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      state;
  }
};
// store
const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser("Nadia"));
store.dispatch(addUser("Shahin"));
