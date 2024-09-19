import { GET_TODOS_FAIELD, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constantsTodo/constantsTodo";

const initialTodos = {
  isLoading: false,
  todos: [],
  error: null,
};

export const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        isLoading: true,
        ...state,
      };
    case GET_TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
        error: null,
      };
    case GET_TODOS_FAIELD:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
