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

const CHARLIMIT = 250;

const inputReducer = (state, newState) => {
  if (newState.type === ACTIONS.INPUT) {
    return { ...state, ...newState.inputsType };
  }
  if (newState.type === ACTIONS.RESET) {
    return initialState;
  }
  return initialState;
};

const useInput = () => {
  const [inputsState, setInputs] = useReducer(inputReducer, initialState);

  const handleChangeValue = (event) => {
    const { name, value: InputValue } = event.target;

    setInputs({
      type: ACTIONS.INPUT,
      inputsType: { [name]: InputValue },
    });

  };

  const resetInput = () => {
    setInputs({ type: ACTIONS.RESET });
  };

  const calcRemaining = () => {
    return CHARLIMIT - inputsState.content.length;
  };

  return {
    inputs: inputsState,
    handleChangeValue,
    resetInput,
    calcRemaining,
  };
};

export default useInput;
