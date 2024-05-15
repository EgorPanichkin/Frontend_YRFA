import { validateForm } from "@/shared";
import { t } from "i18next";
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
      errorMessage: [
        t("auth.login.passwordInput.errorLabel.one"),
        t("auth.login.passwordInput.errorLabel.twoo"),
      ],
      minLength: 8,
      maxLength: 24,
    },
    phone: {
      errorMessage: [
        t("auth.login.phoneInput.errorLabel.one"),
        t("auth.login.phoneInput.errorLabel.twoo"),
      ],
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
