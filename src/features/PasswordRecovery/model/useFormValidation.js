import { validateForm } from "@/shared";
import { useState } from "react";

export const useFormValidation = () => {
  const [focusedInput, setFocusedInput] = useState("");

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

  const validationRules = {
    phone: {
      errorMessage: ["Заполните поле номер", "Некорректный номер"],
      minLength: 16,
    },
    code: {
      errorMessage: ["Заполните поле код", "Не менее 8 цифр"],
    },
    password: {
      minLength: 8,
      maxLength: 24,
      errorMessage: [
        "Заполните поле пароля",
        "От 8 до 24 символов",
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

    const error = validateForm(value, maxLength, minLength, errorMessage);

    setErrorsInput({ ...errorsInput, [inputName]: error });
  };

  return {
    inputValues,
    handleInputChange,
    setFocusedInput,
    focusedInput,
    errorsInput,
  };
};
