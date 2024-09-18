import { createStore } from "redux";

import { counterReducer } from "../counterReducer/counterReducer";

export const store = createStore(counterReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch();
