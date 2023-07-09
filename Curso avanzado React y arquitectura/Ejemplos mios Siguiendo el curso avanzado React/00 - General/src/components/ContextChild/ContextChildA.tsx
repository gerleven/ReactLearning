import { Context, useContext } from "react";
import { CounterContextInterface } from "./CounterContextInterface";

const ContextChildA = (CounterContext: Context<CounterContextInterface>) => {
  const { counterState, incrementCounter, decrementCounter, setCounterState } =
    useContext(CounterContext);
  return (
    <>
      <span>
        <h3>Context Child A - state: {counterState}</h3>
        <button onClick={decrementCounter}>---</button>
        <button onClick={() => setCounterState(0)}>Reset</button>
        <button onClick={incrementCounter}>+++</button>
      </span>
    </>
  );
};

export default ContextChildA;
