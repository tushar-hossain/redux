import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { todosReducer } from "./services/reducerTodos/todosReducer";

export const store = createStore(todosReducer, applyMiddleware(thunk));
