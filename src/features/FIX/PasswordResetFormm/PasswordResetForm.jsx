import { ButtonSubmit, ChevronLeft, CustomInput, Typography } from "@/shared";
import { FormsValidation } from "../model/FormsValidation";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import style from "./PasswordResetForm.module.scss";

export const PasswordResetForm = () => {
  const {
    // Получаем доступ к функциям и значениям с кастомного хука
    inputValues,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    focusedInput,
    errorsInput,
  } = FormsValidation();

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const { password, enterPassword } = inputValues;

  const passwordMatch = enterPassword === password;

  const navigate = useNavigate();

  useEffect(() => {
    // Проверка, должна ли кнопка стать неактивной
    setIsSubmitButtonDisabled(
      // Проверка на наличие ошибок валидации и на пустоту полей
      errorsInput.password !== "" ||
        inputValues.password === "" ||
        errorsInput.enterPassword !== "" ||
        inputValues.enterPassword === "" ||
        !passwordMatch,
    );
  }, [errorsInput, inputValues, passwordMatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={style.smsForm} onSubmit={handleSubmit}>
      <div className={style.smsFormHead}>
        <ChevronLeft
          className={style.smsFormBack}
          onClick={() => navigate(-1)}
          width={20}
        />
        <Typography
          variant="h2"
          color="black"
          weight="semibold"
          className={style.smsFormTitle}
        >
          Новый пароль
        </Typography>
      </div>
      <Typography
        variant="body"
        color="gray"
        weight="regular"
        className={style.smsFormBody}
      >
        Введите новый пароль
      </Typography>
      <div className={style.formInput}>
        {errorsInput.password ? (
          <label className={style.errorLabel}>{errorsInput.password}</label>
        ) : (
          <label
            htmlFor="password"
            className={focusedInput === "password" ? style.focusedLabel : ""}
          >
            Пароль
          </label>
        )}
        <CustomInput
          id="password"
          type="password"
          onBlur={handleInputBlur}
          onFocus={() => handleInputFocus("password")}
          value={inputValues.password}
          placeholder="Введите пароль"
          onChange={(event) => handleInputChange(event, "password")}
        />
      </div>
      <div className={style.formInput}>
        {errorsInput.enterPassword ? (
          <label className={style.errorLabel}>
            {errorsInput.enterPassword}
          </label>
        ) : !passwordMatch && inputValues.enterPassword ? (
          <label className={style.errorLabel}>Пароли не совпадают</label>
        ) : (
          <label
            htmlFor="enterPassword"
            className={
              focusedInput === "enterPassword" ? style.focusedLabel : ""
            }
          >
            Проверка пароля
          </label>
        )}
        <CustomInput
          id="enterPassword"
          type="password"
          onBlur={handleInputBlur}
          onFocus={() => handleInputFocus("enterPassword")}
          value={inputValues.enterPassword}
          placeholder="Повторите пароль"
          onChange={(event) => handleInputChange(event, "enterPassword")}
        />
      </div>
      <ButtonSubmit
        type="submit"
        className={style.smsButton}
        disabled={isSubmitButtonDisabled}
      >
        Продолжить
      </ButtonSubmit>
    </form>
  );
};
