// Defining constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// State
const initialCounterState = {
  count: 0,
};
const initialUsersState = {
  user: [{ name: "tushar" }],
};

// Action -> Object -> type, payload
// INCREMENT COUNTER
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

function addUser() {
  return {
    type: ADD_USER,
    payload: { name: "nadia" },
  };
}

// 1. state
// 2. dispatch action
// 3. reducer
// 4. store
