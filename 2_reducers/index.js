// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// state
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

// 1. state
// 2. dispatch action
// 3. reducer -> initialState, action
// 4. store
