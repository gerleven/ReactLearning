export interface CounterContextInterface {
  counterState: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
  setCounterState: (value: number) => void;
}