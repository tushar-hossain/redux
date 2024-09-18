import { DECREMENT, INCREMENT, RESET } from "../constantState/constantState";

export const counterIncrementAction = () => {
  return {
    type: INCREMENT,
  };
};

export const counterDecrementAction = () => {
  return {
    type: DECREMENT,
  };
};
export const counterResetAction = () => {
  return {
    type: RESET,
  };
};
