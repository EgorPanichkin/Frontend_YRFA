import { validateForm } from "@/shared";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useFormValidation = () => {
  const [focusedInput, setFocusedInput] = useState("");

  const [inputValues, setInputValues] = useState({
    code: "",
  });

  const [errorsInput, setErrorsInput] = useState({
    code: "",
  });

  const validationRules = {
    code: {
      errorMessage: ["Заполните поле код", "Не менее 6 цифр"],
      maxLength: 6,
      minLength: 6,
    },
  };

  const handleInputChange = (event, inputName) => {
    const { value } = event.target;
    setInputValues({ ...inputValues, [inputName]: value });
    validateInputs(inputName, value);
  };

  const validateInputs = (inputName, value) => {
    const { errorMessage, maxLength, minLength } = validationRules[inputName];

    const error = validateForm(value, maxLength, minLength, errorMessage);

    setErrorsInput({ ...errorsInput, [inputName]: error });
  };

  const verificationData = useSelector(
    (state) => state.verificationData.verificationData,
  );
  const { registerPhone } = verificationData;

  return {
    inputValues,
    handleInputChange,
    setFocusedInput,
    focusedInput,
    errorsInput,
    registerPhone,
  };
};
