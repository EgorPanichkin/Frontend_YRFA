import {
  CustomButton,
  CustomInput,
  PATHS,
  Typography,
  notify,
  phoneNumberRefactorer,
  usersRequester,
} from "@/shared";
import { AuthValidation } from "../model/AuthValidation";
import { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import { Link, useNavigate } from "react-router-dom";

import style from "./Authorization.module.scss";

export const Authorization = () => {
  const {
    // Получаем доступ к функциям и значениям
    inputValues,
    errorsInput,
    handleInputChange,
    focusedInput,
    setFocusedInput,
  } = AuthValidation();

  const navigate = useNavigate();

  if (localStorage.getItem("refresh") != null) {
    navigate(PATHS.personal);
  }

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Проверка, должна ли кнопка стать неактивной
    setIsDisabled(
      Object.values(errorsInput).some((error) => error !== "") || // Проверка на наличие ошибок валидации
        Object.values(inputValues).some((value) => value.trim() === ""), // Проверка на пустые поля ввода
    );
  }, [errorsInput, inputValues]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const phoneNum = phoneNumberRefactorer(inputValues.phone);
    const response = await usersRequester("/login/", {
      phone_number: phoneNum,
      password: inputValues.password,
    });

    if (response.status === 200) {
      navigate(PATHS.personal);
      notify("Авторизация успешно!");
    } else {
      console.log("Форма содержит ошибки валидации");
    }
  };

  return (
    <form className={style.authorizationForm} onSubmit={handleSubmit}>
      <div className={style.formWrapper}>
        <Typography
          variant="h2"
          weight="600"
          className={style.authorizationTitle}
        >
          Вход в кабинет
        </Typography>
        <div className={style.formWrapperInput}>
          <div>
            {errorsInput.phone ? (
              <label className={style.errorLabel}>{errorsInput.phone}</label>
            ) : (
              <label
                htmlFor="phone"
                className={focusedInput === "phone" ? style.focusedLabel : ""}
              >
                Номер
              </label>
            )}
            <IMaskInput
              lazy={true}
              id="phone"
              type="text"
              mask="+{996}(000)000-000"
              placeholder="+996 (999) 999-999"
              value={inputValues.phone}
              onInput={(event) => handleInputChange(event, "phone")}
              onFocus={() => setFocusedInput("phone")}
              onBlur={() => setFocusedInput("")}
              className={style.formInput}
            />
          </div>
          <div>
            {errorsInput.password ? (
              <label className={style.errorLabel}>{errorsInput.password}</label>
            ) : (
              <label
                htmlFor="password"
                className={
                  focusedInput === "password" ? style.focusedLabel : ""
                }
              >
                Пароль
              </label>
            )}
            <CustomInput
              id="password"
              type="password"
              onBlur={() => setFocusedInput("")}
              onFocus={() => setFocusedInput("password")}
              value={inputValues.password}
              placeholder="Введите пароль"
              onChange={(event) => handleInputChange(event, "password")}
            />
          </div>
        </div>
        <CustomButton color="default" type="submit" disabled={isDisabled}>
          Войти в кабинет
        </CustomButton>
      </div>
      <div className={style.helpFormBlock}>
        <Link className={style.formLink} to="/registration">
          Вы еще не зарегистрировались?
        </Link>
        <Link className={style.formLink} to="sms-verification">
          Забыли пароль?
        </Link>
      </div>
    </form>
  );
};
