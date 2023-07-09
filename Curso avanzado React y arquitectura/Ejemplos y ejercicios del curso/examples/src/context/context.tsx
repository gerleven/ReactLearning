import { createContext, FC, useContext, useState } from 'react'

interface CounterState {
  counter: number
  setCounter: (newCounter: number) => void
  incrementCounter: () => void
}

//      Create
export const CounterContext = createContext<CounterState>({
  counter: Number(localStorage.getItem('counter')) ?? 0,
  setCounter: () => {},
  incrementCounter: () => {},
})

//      Consumer version Nueva
const ComponentA: FC = () => {
  const { counter, incrementCounter, setCounter } = useContext(CounterContext)
  return (
    <>
      <button onClick={() => setCounter(counter + 10)}>A1: {counter}</button>
      <button onClick={() => incrementCounter()}>A2: {counter}</button>
    </>
  )
}
//      Consumer version vieja
const ComponentB: FC = () => {
  return (
    <CounterContext.Consumer>
      {({ counter, setCounter }) => <button onClick={() => setCounter(counter + 10)}>B:{counter}</button>}
    </CounterContext.Consumer>
  )
}

//     App / MyComponent
export const Context: FC = () => {
  const [state, setState] = useState(0)

  //     Provider
  return (
    <CounterContext.Provider
      value={{
        counter: state,
        setCounter: counter => setState(1),
        incrementCounter: () => setState(state + 1),
      }}
    >
      <ComponentA />
      <ComponentB />
    </CounterContext.Provider>
  )
}
