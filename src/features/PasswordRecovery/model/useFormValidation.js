import { useState } from "react";

export const useFormValidation = () => {
  const [inputValues, setInputValues] = useState({
    phone: "",
    code: "",
    password: "",
    enterPassword: "",
  });

  const [errorsInput, setErrorsInput] = useState({
    phone: "",
    code: "",
    password: "",
    enterPassword: "",
  });

  const [focusedInput, setFocusedInput] = useState("");

  const validationRules = {
    phone: {
      errorMessage: ["Заполните поле номер", "Некорректный номер"],
    },
    code: {
      errorMessage: [
        "Неверный код",
        "Повторите попытку позже",
        "Смс был отправлен",
      ],
    },
    password: {
      minLength: 6,
      maxLength: 24,
      errorMessage: [
        "Заполните поле пароля",
        "не менее 6 до 24 символов",
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
    let error = "";

    if (inputName === "phone") {
      error =
        value.trim().length === 0
          ? errorMessage[0]
          : value.trim().length < 16
            ? errorMessage[1]
            : "";
    } else if (inputName === "code") {
      error = value.trim().length === 0 ? errorMessage[0] : "";
    } else if (inputName === "password") {
      error =
        value.trim().length === 0
          ? errorMessage[0]
          : value.trim().length < minLength || value.trim().length > maxLength
            ? errorMessage[1]
            : "";
    } else if (inputName === "enterPassword") {
      error = value.trim().length === 0 ? errorMessage[0] : "";
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
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    focusedInput,
    errorsInput,
  };
};
