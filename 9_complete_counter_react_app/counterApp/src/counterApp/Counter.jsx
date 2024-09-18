import { useDispatch, useSelector } from "react-redux";
import { counterDecrementAction, counterIncrementAction, counterResetAction } from "./services/action/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterIncrementAction());
  };
  const handleDecrement = () => {
    dispatch(counterDecrementAction());
  };
  const handleIReset = () => {
    dispatch(counterResetAction());
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h3> Count : {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
