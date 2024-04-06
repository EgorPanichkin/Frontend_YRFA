import { validateForm } from "@/shared";
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
      errorMessage: ["Заполните поле Пароль", "Не менее 8 и 24 символов"],
      minLength: 8,
      maxLength: 24,
    },
    phone: {
      errorMessage: ["Заполните поле Номер", "Не корректный номер!"],
      minLength: 16,
    },
  };

  const handleInputChange = (event, inputName) => {
    const { value } = event.target;
    setInputValues({ ...inputValues, [inputName]: value });
    validateInput(inputName, value);
  };

  const validateInput = (inputName, value) => {
    const { errorMessage, maxLength, minLength } = validationRules[inputName];

    const error = validateForm(value, maxLength, minLength, errorMessage);

    setErrorsInput({ ...errorsInput, [inputName]: error });
  };

  return {
    inputValues,
    errorsInput,
    handleInputChange,
    focusedInput,
    setFocusedInput,
  };
};
