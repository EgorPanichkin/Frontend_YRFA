import { validateForm } from "@/shared";
import { useState } from "react";

export const useFormValidation = () => {
  const [focusedInput, setFocusedInput] = useState("");

  const [inputValues, setInputValues] = useState({
    oldPassword: "",
    password: "",
    enterPassword: "",
  });

  const [errorsInput, setErrorsInput] = useState({
    oldPassword: "",
    password: "",
    enterPassword: "",
  });

  const validationRules = {
    oldPassword: {
      errorMessage: [
        "Заполните поле старый пароль",
        "Не менее 6 до 24 символов",
      ],
    },
    password: {
      minLength: 6,
      maxLength: 24,
      errorMessage: [
        "Заполните поле пароль",
        "Не менее 6 до 24 символов",
        "Пароли не совпадают",
      ],
    },
    enterPassword: {
      errorMessage: ["Заполните поле повтор пароля", "Пароли не совпадают"],
      minLength: 0,
    },
  };

  const handleInputChange = (event, inputName) => {
    const { value } = event.target;
    setInputValues({ ...inputValues, [inputName]: value });
    validateInputs(inputName, value);
  };

  const validateInputs = (inputName, value) => {
    const { maxLength, minLength, errorMessage } = validationRules[inputName];

    const error = validateForm(
      value,
      maxLength,
      minLength,
      errorMessage,
      password,
    );

    setErrorsInput({ ...errorsInput, [inputName]: error });
  };

  const { password, enterPassword } = inputValues;
  const passwordMatch = enterPassword === password;

  return {
    passwordMatch,
    inputValues,
    handleInputChange,
    setFocusedInput,
    focusedInput,
    errorsInput,
  };
};
