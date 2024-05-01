import {
  CustomButton,
  CustomInput,
  PATHS,
  Typography,
  notify,
  phoneNumberRefactorer,
  usersRequester,
} from "@/shared";

import style from "./PasswordResetForm.module.scss";
import { useEffect, useState } from "react";
import { useFormValidation } from "../model/useFormValidation";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PasswordResetForm = () => {
  const {
    // Получаем доступ к функциям и значениям с кастомного хука
    inputValues,
    handleInputChange,
    setFocusedInput,
    focusedInput,
    errorsInput,
  } = useFormValidation();

  const [isDisabled, setIsDisabled] = useState(false);

  const { password, enterPassword } = inputValues;
  const passwordMatch = enterPassword === password;

  const navigate = useNavigate();

  useEffect(() => {
    // Проверка, должна ли кнопка стать неактивной
    setIsDisabled(
      // Проверка на наличие ошибок валидации и на пустоту полей
      errorsInput.password !== "" ||
        inputValues.password === "" ||
        errorsInput.enterPassword !== "" ||
        inputValues.enterPassword === "" ||
        !passwordMatch,
    );
  }, [errorsInput, inputValues, passwordMatch]);

  // Вытаскиваю номер телефон
  const verificationData = useSelector(
    (state) => state.verificationData.verificationData,
  );
  const { phone } = verificationData;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const phoneNum = phoneNumberRefactorer(phone);
    const { password, enterPassword } = inputValues;

    try {
      const response = await usersRequester("/reset_password", {
        phone_number: phoneNum,
        new_password: password,
        confirm_password: enterPassword,
      });

      if (response && response.status === 200) {
        navigate(PATHS.login);
        notify.success("Пароль успешно изменён!");
      }
    } catch {
      console.log("error");
    }
  };

  return (
    <form className={style.smsForm} onSubmit={handleSubmit}>
      <Typography
        variant="h2"
        color="black"
        weight="semibold"
        className={style.smsFormTitle}
      >
        Придумайте новый пароль
      </Typography>
      <Typography
        variant="body"
        color="gray"
        weight="regular"
        className={style.smsFormBody}
      >
        Пароль должен состоять из восьми или более символов латинского алфавита,
        содержать заглавные и строчные буквы, цифры
      </Typography>
      <div className={style.passwordInput}>
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
          onBlur={() => setFocusedInput("")}
          onFocus={() => setFocusedInput("password")}
          value={inputValues.password}
          placeholder="Введите пароль"
          onChange={(event) => handleInputChange(event, "password")}
          className={
            focusedInput === "password"
              ? `${style.focusedInput} ${style.input}`
              : style.input
          }
        />
      </div>
      <div className={style.passwordInput}>
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
          onBlur={() => setFocusedInput("")}
          onFocus={() => setFocusedInput("enterPassword")}
          value={inputValues.enterPassword}
          placeholder="Повторите пароль"
          onChange={(event) => handleInputChange(event, "enterPassword")}
          className={
            focusedInput === "enterPassword"
              ? `${style.focusedInput} ${style.input}`
              : style.input
          }
        />
      </div>
      <CustomButton
        color="default"
        type="submit"
        className={style.smsButton}
        disabled={isDisabled}
      >
        Продолжить
      </CustomButton>
    </form>
  );
};
