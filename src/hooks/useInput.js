import { useReducer } from "react";

const DATE = new Date().toLocaleDateString();

const ACTIONS = {
  INPUT: "input",
  RESET: "reset",
};

const initialState = {
  title: "",
  content: "",
  date: DATE,
};

const CHARLIMIT = 100;

const inputReducer = (state, newState) => {
  if (newState.type === ACTIONS.INPUT) {
    return { ...state, ...newState };
  }

  if (newState.type === ACTIONS.RESET) {
    return initialState;
  }

  return initialState;
};

const useInput = () => {
  const [inputsState, dispatch] = useReducer(inputReducer, initialState);

  const handleChangeValue = (event) => {
    const { name, value: InputValue } = event.target;

    dispatch({ type: ACTIONS.INPUT, [name]: InputValue });
  };

  const resetInput = () => {
    dispatch({ type: ACTIONS.RESET });
  };

  const calcLimit = () => {
    return CHARLIMIT - inputsState.content.length;
  };

  return {
    inputs: inputsState,
    handleChangeValue,
    resetInput,
    calcLimit,
  };
};

export default useInput;
