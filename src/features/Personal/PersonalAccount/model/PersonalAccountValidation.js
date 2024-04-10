import { usersRequester, validateForm } from "@/shared";
import { useEffect, useRef, useState } from "react";

export const usePersonalAccount = () => {
  // состояние для фокуса label
  const [focusedInput, setFocusedInput] = useState("");

  // данные для выпадающего списка
  const optionsItems = ["Мужской", "Женский"];

  // состояние для подтверждения об выходе с акунта
  const [confirmationExit, setConfirmationExit] = useState(false);

  // состояние для редактирования
  const [editMode, setEditMode] = useState(true);

  // состояние для удоления предстоящих приемов
  const [confirmationId, setConfirmationId] = useState(null);

  // состояние для дроп меню опции
  const [dropDownMenu, setDropDownMenu] = useState(true);

  // состояние для доступа к кнопке
  const [isDisabled, setIsDisabled] = useState(false);

  // ------
  const selectRef = useRef(null);

  // данные для предстоящих приёмом
  const [receptionsList, setReceptionsList] = useState([
    {
      direction: "Название специальности",
      doctor: "ФИО Специалиста",
      date: "20 февраля 2024",
      time: "12:30",
      id: 1,
    },
    {
      direction: "Название специальности",
      doctor: "ФИО Специалиста",
      date: "20 февраля 2024",
      time: "12:30",
      id: 2,
    },
  ]);

  // обьект с данными для валидации полей
  const validationRules = {
    name: {
      errorMessage: ["Заполните поле Имя", "Имя от 2 до 20 символов!"],
      maxLength: 20,
      minLength: 2,
    },
    lastName: {
      errorMessage: ["Заполните поле Фамилия", "Фамилия от 2 до 20 символов!"],
      maxLength: 20,
      minLength: 2,
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
      errorMessage: [
        "Заполните поле пароля",
        "не менее 6 до 24 символов",
        "Пароли не совпадают",
        // "Пароль должен содержать от 6 до 14 символов, как минимум одну цифру, одну букву верхнего и нижнего регистра, а также один специальный символ (!@#$%^&*)",
      ],
    },
  };

  // состояние для запроса данных клиента
  const [userProfil, setUserProfil] = useState([]);

  // сама функция для запроса
  const DataProfil = async () => {
    const response = await usersRequester("/profile/");
    if (response && response.status === 200) {
      setUserProfil(response.data);
    }
  };

  useEffect(() => {
    DataProfil();
  }, []);

  // состояния для полей
  const [inputValues, setInputValues] = useState({
    name: "",
    lastName: "",
    phone: "",
    date: "",
    password: "hello1234",
    gender: "",
  });

  useEffect(() => {
    // Обновляем inputValues после получения данных профиля
    setInputValues((prevValues) => ({
      ...prevValues,
      name: userProfil.first_name,
      lastName: userProfil.last_name,
      phone: userProfil.phone_number,
      date: userProfil.birth_date,
      gender: userProfil.gender,
    }));
  }, [userProfil]);

  // состояние для выводов ошибок полей
  const [errorsInput, setErrorsInput] = useState({
    name: "",
    lastName: "",
    phone: "",
    date: "",
    password: "",
    gender: "",
  });

  // функция для обработки инпутов (полей)
  const handleInputChange = (event, inputName) => {
    const { value } = event.target;
    setInputValues({ ...inputValues, [inputName]: value });

    // вызываем функцию для валидации
    validateInput(inputName, value);
  };

  // сама функция для валидации
  const validateInput = (inputName, value) => {
    const { errorMessage, maxLength, minLength } = validationRules[inputName];

    const error = validateForm(value, maxLength, minLength, errorMessage);

    setErrorsInput({ ...errorsInput, [inputName]: error });
  };

  //функция для хранения состояния с выбраного варианта
  const handleOptionClick = (option) => {
    setInputValues({ ...inputValues, gender: option });
  };

  // для выключения выпадающего списка опций, если пользователь нажал не на тот область
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setDropDownMenu(true);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // функция редактирование, для вкл выпадающего списка опций и для активаций елементов для редактирования
  const handleEdit = () => {
    setEditMode(false);
    setDropDownMenu(true);
  };

  // функция для включения режима редактирования и так же выкл опцию
  const infoCabinetSettingsClose = () => {
    setEditMode(true);
    setDropDownMenu(true);
  };

  // функция показываем уведомление для подтверждения удаления
  const handleDeleteConfirmation = (receptionId) => {
    setConfirmationId(receptionId);
  };

  // функция для удоления приёма
  const handleConfirmDelete = () => {
    setReceptionsList(
      receptionsList.filter((reception) => reception.id !== confirmationId),
    ); // Удаляем прием из списка
    setConfirmationId(null); // Скрываем уведомление
  };

  useEffect(() => {
    // Проверка, должна ли кнопка стать неактивной
    setIsDisabled(
      Object.values(errorsInput).some((error) => error !== "") || // Проверка на наличие ошибок валидации
        Object.values(inputValues).some((value) => value.trim() === ""), // Проверка на пустые поля ввода
    );
  }, [errorsInput]);

  // функция отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    setEditMode(true);
  };

  return {
    infoCabinetSettingsClose,
    handleDeleteConfirmation,
    handleConfirmDelete,
    setConfirmationExit,
    handleOptionClick,
    handleInputChange,
    setConfirmationId,
    confirmationExit,
    setFocusedInput,
    receptionsList,
    confirmationId,
    optionsItems,
    dropDownMenu,
    handleSubmit,
    focusedInput,
    errorsInput,
    inputValues,
    handleEdit,
    selectRef,
    editMode,
    isDisabled,
    setDropDownMenu,
  };
};
