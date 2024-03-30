import { useState } from "react";

export const AuthValidation = () => {
  const [focusedInput, setFocusedInput] = useState("");

  const [inputValues, setInputValues] = useState({
    phone: "",
    password: "",
  });

  const [errorsInput, setErrorsInput] = useState({
    phone: "",
    password: "",
  });

  const validationRules = {
    password: {
      errorMessage: ["Заполните поле Пароль", "Не менее 6 и 24 символов"],
      minLength: 6,
      maxLength: 24,
    },
    phone: {
      errorMessage: ["Заполните поле Номер", "Не корректный номер!"],
    },
  };

  const handleInputChange = (event, inputName) => {
    const { value } = event.target;
    setInputValues({ ...inputValues, [inputName]: value });
    validateInput(inputName, value);
  };

  const validateInput = (inputName, value) => {
    let error = "";

    const { errorMessage, maxLength, minLength } = validationRules[inputName];

    if (inputName === "password") {
      error =
        value.trim().length === 0
          ? errorMessage[0]
          : value.trim().length < minLength || value.trim().length > maxLength
            ? errorMessage[1]
            : "";
    } else {
      error =
        value.trim().length === 0
          ? errorMessage[0]
          : value.trim().length < 16
            ? errorMessage[1]
            : "";
    }
    setErrorsInput({ ...errorsInput, [inputName]: error });
  };

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleInputBlur = () => {
    setFocusedInput("");
  };

  return {
    inputValues,
    errorsInput,
    handleInputChange,
    focusedInput,
    handleInputFocus,
    handleInputBlur,
  };
};
