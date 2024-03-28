import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterValidation = () => {
  // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,14}$/

  const validationRules = {
    name: {
      errorMessage: ["Заполните поле Имя", "Имя от 2 символов!"],
      minLength: 2,
      maxLength: 500,
    },
    surName: {
      errorMessage: ["Заполните поле Фамилия", "Фамилия от 2 символов!"],
      minLength: 2,
      maxLength: 500,
    },
    phone: {
      errorMessage: ["Заполните поле Номер", "Не корректный номер!"],
      minLength: 16,
    },
    date: {
      errorMessage: "Заполните поле дата",
      minLength: 0,
    },
    password: {
      minLength: 6,
      maxLength: 24,
      // regex: passwordRegex,
      errorMessage: [
        "Заполните поле пароля",
        "не менее 6 до 24 символов",
        "Пароли не совпадают",
      ],
      // errorMessage:
      //   'Пароль должен содержать от 6 до 14 символов, как минимум одну цифру, одну букву верхнего и нижнего регистра, а также один специальный символ (!@#$%^&*)',
    },
    enterPassword: {
      errorMessage: ["Заполните поле повтор пароля", "Пароли не совпадают"],
      minLength: 0,
    },
  };

  const [inputValues, setInputValues] = useState({
    name: "",
    surName: "",
    phone: "",
    date: "",
    password: "",
    enterPassword: "",
    sex: "",
  });

  const [errorsInput, setErrorsInput] = useState({
    name: "",
    surName: "",
    phone: "",
    date: "",
    password: "",
    enterPassword: "",
    sex: "",
  });

  // ------
  const handleInputChange = (event, inputName) => {
    const { value } = event.target;
    setInputValues({ ...inputValues, [inputName]: value });
    validateInput(inputName, value);
  };

  // ------
  const validateInput = (inputName, value) => {
    let error = "";
    const { minLength, maxLength, errorMessage } = validationRules[inputName];

    if (
      inputName !== "date" &&
      inputName !== "password" &&
      inputName !== "enterPassword"
    ) {
      error =
        value.trim().length === 0
          ? errorMessage[0]
          : value.trim().length < minLength ||
              (maxLength && value.trim().length > maxLength)
            ? errorMessage[1]
            : "";
    } else if (inputName === "date") {
      error = value.trim().length === minLength ? errorMessage : "";
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

  // ------
  const [focusedInput, setFocusedInput] = useState("");

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleInputBlur = () => {
    setFocusedInput("");
  };

  // ------
  const optionsItems = ["Мужской", "Женский"];

  const handleOptionClick = (option) => {
    setInputValues({ ...inputValues, sex: option });
  };

  // ------
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const { password, enterPassword } = inputValues;
  const passwordMatch = enterPassword === password;

  useEffect(() => {
    // Проверка, должна ли кнопка стать неактивной
    setIsSubmitButtonDisabled(
      Object.values(errorsInput).some((error) => error !== "") || // Проверка на наличие ошибок валидации
        Object.values(inputValues).some((value) => value.trim() === "") || // Проверка на пустые поля ввода
        !passwordMatch,
    );
  }, [errorsInput, inputValues]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isFormValid =
      Object.values(errorsInput).every((error) => error === "") ||
      Object.values(inputValues).every((value) => value.trim() !== "");
    if (isFormValid) {
      console.log("Данные формы:", inputValues);
      navigate("/personal-account");
    } else {
      console.log("Форма содержит ошибки валидации");
    }
  };

  return {
    optionsItems,
    inputValues,
    errorsInput,
    handleInputChange,
    handleOptionClick,
    focusedInput,
    handleInputFocus,
    handleInputBlur,
    handleSubmit,
    isSubmitButtonDisabled,
    navigate,
    passwordMatch,
  };
};
