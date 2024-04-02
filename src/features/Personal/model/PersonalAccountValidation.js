import { useEffect, useRef, useState } from "react";

export const usePersonalAccount = () => {
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

  // FIX ME
  // const validationRules = {
  //   name: {
  //     errorMessage: ['Заполните поле Имя', 'Имя от 2 символов!'],
  //     maxLength: 500,
  //     minLength: 2,
  //   },
  //   surName: {
  //     errorName: ['Заполните поле Фамилия', 'Фамилия от 2 символов!'],
  //     maxLength: 500,
  //     minLength: 2,
  //   },
  //   phone: {
  //     errorName: ['Заполните поле Номер', 'Не корректный номер!'],
  //     minLength: 16,
  //   },
  //   date: {
  //     errorName: 'Заполните поле дата',
  //     minLength: 0,
  //   },
  // }

  const [inputValues, setInputValues] = useState({
    name: "Чынгыз",
    surName: "Айтматов",
    phone: "+996 000 000 000",
    date: "",
    password: "hello1234",
    sex: "",
  });

  // FIX ME
  // const [errorsInput, setErrorsInput] = useState({
  //   name: '',
  //   surName: '',
  //   phone: '',
  //   date: '',
  //   password: '',
  //   sex: '',
  // })

  const handleInputChange = (event, inputName) => {
    const { value } = event.target;
    setInputValues({ ...inputValues, [inputName]: value });
  };

  // ------
  const [focusedInput, setFocusedInput] = useState("");

  // ------ данные для выпадающего списка
  const optionsItems = ["Мужской", "Женский"];

  //функция для хранения состояния с выбраного варианта
  const handleOptionClick = (option) => {
    setInputValues({ ...inputValues, sex: option });
  };

  // ------
  const [dropDownMenu, setDropDownMenu] = useState(true);

  // ------
  const selectRef = useRef(null);

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

  // ------
  const [editMode, setEditMode] = useState(true);

  // функция редактирование, для выкл выпадающего списка опций и для активаций елементов для редактирования
  const handleEdit = () => {
    setEditMode(false);
    setDropDownMenu(true);
  };

  const infoCabinetSettingsClose = () => {
    setEditMode(true);
    setDropDownMenu(true);
  };

  // -------
  // удоление предстоящих приемов
  const [confirmationId, setConfirmationId] = useState(null);

  const handleDeleteConfirmation = (receptionId) => {
    setConfirmationId(receptionId); // Показываем уведомление для подтверждения удаления
  };

  const handleConfirmDelete = () => {
    setReceptionsList(
      receptionsList.filter((reception) => reception.id !== confirmationId),
    ); // Удаляем прием из списка
    setConfirmationId(null); // Скрываем уведомление
  };

  // -----
  const [confirmationExit, setConfirmationExit] = useState(false);

  // -----
  const handleSubmit = (event) => {
    event.preventDefault();
    setEditMode(true);
    console.log("данные с формы:", inputValues);
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
    // errorsInput,
    inputValues,
    handleEdit,
    selectRef,
    editMode,
    setDropDownMenu,
  };
};
