import { useState, createContext, FC, useContext } from "react";
import { NavLink } from "react-router-dom";

interface CounterContextInterface {
  counterState: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
  setCounterState: (value: number) => void;
}

export const CounterContext = createContext<CounterContextInterface>({} as CounterContextInterface);

const MyContext = () => {
  const [counterState, setCounterState] = useState(0);

  return (
    <>
      <h1>Context!</h1>
      <CounterContext.Provider
        value={{
          counterState: counterState,
          incrementCounter: () => {
            setCounterState((prevState) => prevState + 1);
          },
          decrementCounter: () => {
            setCounterState((prevState) => prevState - 1);
          },
          setCounterState: (value: number) => {
            setCounterState(value);
          },
        }}
      >
        <ContextChildLocalA />
        <ContextChildLocalB />

        {/* <ContextChildA/>  //Pendiente */}
      </CounterContext.Provider>

      <NavLink to="/" className={"App-link"}>
        Back
      </NavLink>
    </>
  );
};

export default MyContext;

const ContextChildLocalA: FC = () => {
  const { counterState, incrementCounter, decrementCounter, setCounterState } =
    useContext(CounterContext);
  return (
    <>
      <span>
        <h3>Context Child Local A - state: {counterState}</h3>
        <button onClick={decrementCounter}>---</button>
        <button onClick={() => setCounterState(0)}>Reset</button>
        <button onClick={incrementCounter}>+++</button>
      </span>
    </>
  );
};
const ContextChildLocalB: FC = () => (
  <>
    <CounterContext.Consumer>
      {({
        counterState,
        incrementCounter,
        decrementCounter,
        setCounterState,
      }) => (
        <>
          <span>
            <h3>Context Child Local B - state: {counterState}</h3>
            <button onClick={decrementCounter}>---</button>
            <button onClick={() => setCounterState(0)}>Reset</button>
            <button onClick={incrementCounter}>+++</button>
          </span>
        </>
      )}
    </CounterContext.Consumer>
  </>
);
