// create redux store function
const { createStore } = require("redux");

// defining constants variable
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// initial state
const initialCounterState = {
  count: 0,
};

// action
function incrementCounter() {
  return {
    type: INCREMENT,
  };
}
function decrementCounter() {
  return {
    type: DECREMENT,
  };
}

// create reducer for counter
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      state;
  }
};

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());

// 1. state
// 2. dispatch
// 3. action
// 4. store => getState(), dispatch(), subscribe()
