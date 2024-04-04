import { validateForm } from "@/shared";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterValidation = () => {
  // FEX ME
  // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,24}$/

  // для состояния кнопки, тоесть активная кнопка или не активная
  const [isDisabled, setIsDisabled] = useState(false);

  // состояние для фокуса
  const [focusedInput, setFocusedInput] = useState("");

  // -------
  const navigate = useNavigate();

  // данные для опции пола
  const optionsItems = ["Мужской", "Женский"];

  const validationRules = {
    name: {
      errorMessage: ["Заполните поле Имя", "Имя от 2 до 20 символов!"],
      minLength: 2,
      maxLength: 30,
    },
    surName: {
      errorMessage: ["Заполните поле Фамилия", "Фамилия от 2 до 20 символов!"],
      minLength: 2,
      maxLength: 30,
    },
    phone: {
      errorMessage: ["Заполните поле Номер", "Не корректный номер!"],
      minLength: 16,
    },
    date: {
      errorMessage: ["Заполните поле дата"],
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
        // "Пароль должен содержать от 6 до 14 символов, как минимум одну цифру, одну букву верхнего и нижнего регистра, а также один специальный символ (!@#$%^&*)",
      ],
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

    // функция валидация полей
    validateInput(inputName, value);
  };

  // сама функция валидации
  const validateInput = (inputName, value) => {
    const { minLength, maxLength, errorMessage } = validationRules[inputName];

    const error = validateForm(value, maxLength, minLength, errorMessage);

    setErrorsInput({ ...errorsInput, [inputName]: error });
  };

  // функция для добавления пола
  const handleOptionClick = (option) => {
    setInputValues({ ...inputValues, sex: option });
  };

  // проверка на повтор пароля
  const { password, enterPassword } = inputValues;
  const passwordMatch = enterPassword === password;

  useEffect(() => {
    // Проверка, должна ли кнопка стать неактивной
    setIsDisabled(
      Object.values(errorsInput).some((error) => error !== "") || // Проверка на наличие ошибок валидации
        Object.values(inputValues).some((value) => value.trim() === "") || // Проверка на пустые поля ввода
        !passwordMatch,
    );
  }, [errorsInput, inputValues, passwordMatch]);

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
    setFocusedInput,
    handleSubmit,
    isDisabled,
    navigate,
    passwordMatch,
  };
};
