import { addPhoneRegister } from "@/app/store/verificationDataSlice";
import {
  PATHS,
  notify,
  phoneNumberRefactorer,
  usersRequester,
  validateForm,
} from "@/shared";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const RegisterValidation = () => {
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
      minLength: 8,
      maxLength: 24,
      errorMessage: [
        "Заполните поле пароля",
        "Не менее 8 до 24 символов",
        "Пароли не совпадают",
        "Пароль должен содержать от 8 до 24 символов, как минимум одну цифру, одну букву верхнего и нижнего регистра",
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
    gender: "",
  });

  const [errorsInput, setErrorsInput] = useState({
    name: "",
    surName: "",
    phone: "",
    date: "",
    password: "",
    enterPassword: "",
    gender: "",
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
    setInputValues({ ...inputValues, gender: option });
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

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // диструктуризация значений с полей
    const { name, surName, date, gender, phone } = inputValues;

    // Перевожу с русский на английский
    const genderRuEn = gender === "Мужской" ? "Man" : "Women";

    // функция для того чтобы убрать тере и скобки
    const phoneNum = phoneNumberRefactorer(phone);

    try {
      const response = await usersRequester("/register/", {
        phone_number: phoneNum,
        first_name: name,
        last_name: surName,
        birth_date: date,
        gender: genderRuEn,
        password: password,
        confirm_password: enterPassword,
      });

      if (response && response.status === 200) {
        navigate(PATHS.registrationPhoneConfirmation);
        dispatch(addPhoneRegister({ phoneNum }));
        notify.success("Успешно!");
      }
    } catch {
      console.log("error");
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
