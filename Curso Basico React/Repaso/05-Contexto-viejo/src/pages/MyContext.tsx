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
  const contextDefaultValue = {
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
  }

  return (
    <>
      <h1>Context!</h1>
      <CounterContext.Provider
        value={contextDefaultValue}
      >
        ContextChildLocalA:
        <ContextChildLocalA />

        ContextChildLocalB:
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

//Leer el contexto con useContext
const ContextChildLocalA: FC = () => {
  const { counterState, incrementCounter, decrementCounter, setCounterState } =
    useContext(CounterContext);
  return (
    <>
      <div className="box">
        <h3>Context Child Local A - state: {counterState}</h3>
        <button onClick={decrementCounter}>---</button>
        <button onClick={() => setCounterState(0)}>Reset</button>
        <button onClick={incrementCounter}>+++</button>
      </div>
    </>
  );
};

//Leer el contexto con <miContexto.Consumer>
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
          <div className="box">
            <h3>Context Child Local B - state: {counterState}</h3>
            <button onClick={decrementCounter}>---</button>
            <button onClick={() => setCounterState(0)}>Reset</button>
            <button onClick={incrementCounter}>+++</button>
          </div>
        </>
      )}
    </CounterContext.Consumer>
  </>
);
