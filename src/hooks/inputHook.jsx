import { useState } from "react";

const useInput = (validateInput) => {
  const [inputName, setInputName] = useState("");
  const [inputNameTouched, setInputNameTouched] = useState(false);

  const inputValid = validateInput(inputName);
  const inputError = !inputValid && inputNameTouched;

  const inputChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const inputBlurHandler = () => {
    setInputNameTouched(true);
  };
  return {
    value: inputName,
    inputError,
    inputValid,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
