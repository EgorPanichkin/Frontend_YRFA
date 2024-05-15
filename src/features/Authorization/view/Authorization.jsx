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
import { t } from "i18next";

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

  if (localStorage.getItem("refresh") != null) navigate(PATHS.personal);

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Проверка, должна ли кнопка стать неактивной
    setIsDisabled(
      Object.values(errorsInput).some((error) => error !== "") || // Проверка на наличие ошибок валидации
        Object.values(inputValues).some((value) => value.trim() === ""), // Проверка на пустые поля ввода
    );
  }, [errorsInput]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { phone, password } = inputValues;
    const phoneNum = phoneNumberRefactorer(phone);

    try {
      const response = await usersRequester("/login/", {
        phone_number: phoneNum,
        password: password,
      });

      if (response && response?.status === 200) {
        navigate(PATHS.personal);
        notify.success("Авторизация успешно!");
      }
    } catch {
      console.log("error");
    }
  };

  return (
    <form className={style.authorizationForm} onSubmit={handleSubmit}>
      <div className={style.formWrapper}>
        <div className={style.authorizationBlock}>
          <Typography
            variant="h2"
            weight="600"
            className={style.authorizationTitle}
          >
            {t("auth.login.title")}
          </Typography>
          <Typography
            className={style.authorizationBody}
            variant="body"
            weight="400"
          >
            {t("auth.login.body")}
          </Typography>
        </div>
        <div className={style.formWrapperInput}>
          <div>
            {errorsInput.phone ? (
              <label className={style.errorLabel}>{errorsInput.phone}</label>
            ) : (
              <label
                htmlFor="phone"
                className={focusedInput === "phone" ? style.focusedLabel : ""}
              >
                {t("auth.login.phoneInput.label")}
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
              className={
                focusedInput === "phone"
                  ? `${style.focusedInput} ${style.input}`
                  : style.input
              }
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
                {t("auth.login.passwordInput.label")}
              </label>
            )}
            <CustomInput
              id="password"
              type="password"
              onBlur={() => setFocusedInput("")}
              onFocus={() => setFocusedInput("password")}
              value={inputValues.password}
              placeholder={t("auth.login.phoneInput.placeholder")}
              onChange={(event) => handleInputChange(event, "password")}
              className={
                focusedInput === "password"
                  ? `${style.focusedInput} ${style.input}`
                  : style.input
              }
            />
          </div>
        </div>
        <CustomButton
          className={style.formWrapperButton}
          color="default"
          type="submit"
          disabled={isDisabled}
        >
          {t("auth.login.button")}
        </CustomButton>
      </div>
      <div className={style.helpBlock}>
        <Link className={style.helpBlockLinkTop} to="sms-verification">
          {t("auth.login.linkPassword")}
        </Link>
        <Typography className={style.helpBlockSpan} variant="span" weight="400">
          {t("auth.login.titleLinkRegister")}
        </Typography>
        <Link className={style.helpBlockLinkBottom} to="/registration">
          {t("auth.login.linkRegister")}
        </Link>
      </div>
    </form>
  );
};
