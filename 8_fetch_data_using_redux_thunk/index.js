const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");

// defining constants
const GET_ACTION_REQUEST = "GET_ACTION_REQUEST";
const GET_ACTION_SUCCESS = "GET_ACTION_SUCCESS";
const GET_ACTION_FAIELD = "GET_ACTION_FAIELD";
const API_URL = "https://jsonplaceholder.typicode.com/todo";

// state
const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};
// action
const todosActionRequest = () => {
  return {
    type: GET_ACTION_REQUEST,
  };
};
const todosActionSuccess = (todos) => {
  return {
    type: GET_ACTION_SUCCESS,
    payload: todos,
  };
};
const todosActionField = (error) => {
  return {
    type: GET_ACTION_FAIELD,
    payload: error,
  };
};

// reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ACTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_ACTION_FAIELD:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// async action creator

const fetchData = () => {
  return (dispatch) => {
    dispatch(todosActionRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        console.log(titles);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

// store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
