import { AccordionForm, CustomButton, PATHS, Typography } from "@/shared";

import { RegisterValidation } from "../model/RegisterValidation";
import { IMaskInput } from "react-imask";

import style from "./Registration.module.scss";
import { CustomInput } from "@/shared/ui/CustomInput";

export const Registration = () => {
  const {
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
  } = RegisterValidation();

  if (localStorage.getItem("refresh") != null) navigate(PATHS.personal);

  return (
    <form className={style.registerForm} onSubmit={handleSubmit}>
      <div className={style.registerBlockTitle}>
        <Typography variant="h2" weight="600" className={style.registerTitle}>
          Заполните анкету
        </Typography>
        <Typography variant="body" weight="400" color="#4A4A4A">
          Заполните свои данные для дальнейшней регистрации
        </Typography>
      </div>
      <div className={style.formWrapper}>
        <div>
          {errorsInput.name ? (
            <label htmlFor="name" className={style.errorLabel}>
              {errorsInput.name}
            </label>
          ) : (
            <label
              htmlFor="name"
              className={focusedInput === "name" ? style.focusedLabel : ""}
            >
              Имя
            </label>
          )}
          <CustomInput
            id="name"
            type="name"
            value={inputValues.name}
            onBlur={() => setFocusedInput("")}
            onFocus={() => setFocusedInput("name")}
            placeholder="Введите Ваше имя"
            onChange={(event) => handleInputChange(event, "name")}
            className={style.registerInput}
          />
        </div>
        <div>
          {errorsInput.surName ? (
            <label htmlFor="surName" className={style.errorLabel}>
              {errorsInput.surName}
            </label>
          ) : (
            <label
              htmlFor="surName"
              className={focusedInput === "surName" ? style.focusedLabel : ""}
            >
              Фамилия
            </label>
          )}
          <CustomInput
            id="surName"
            type="surName"
            onBlur={() => setFocusedInput("")}
            onFocus={() => setFocusedInput("surName")}
            value={inputValues.surName}
            placeholder="Введите Ваше фамилие"
            onChange={(event) => handleInputChange(event, "surName")}
            className={style.registerInput}
          />
        </div>
        <div>
          {errorsInput.phone ? (
            <label htmlFor="phone" className={style.errorLabel}>
              {errorsInput.phone}
            </label>
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
            type="phone"
            mask="+{996}(000)000-000"
            placeholder="+996 (999) 999-999"
            value={inputValues.phone}
            onInput={(event) => handleInputChange(event, "phone")}
            onFocus={() => setFocusedInput("phone")}
            onBlur={() => setFocusedInput("")}
            className={style.phoneInput}
          />
        </div>
        <div>
          {errorsInput.date ? (
            <label htmlFor="date" className={style.errorLabel}>
              {errorsInput.date}
            </label>
          ) : (
            <label
              htmlFor="date"
              className={focusedInput === "date" ? style.focusedLabel : ""}
            >
              Дата рождения
            </label>
          )}
          <CustomInput
            id="date"
            type="date"
            onBlur={() => setFocusedInput("")}
            onFocus={() => setFocusedInput("date")}
            value={inputValues.date}
            onChange={(event) => handleInputChange(event, "date")}
            className={style.registerInput}
          />
        </div>
        <div>
          <AccordionForm
            accordionTitle={
              inputValues.gender ? inputValues.gender : "Укажите свой пол"
            }
            onClickOption={handleOptionClick}
            optionsItems={optionsItems}
          />
        </div>
        <div>
          {errorsInput.password ? (
            <label htmlFor="password" className={style.errorLabel}>
              {errorsInput.password}
            </label>
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
            className={style.registerInput}
          />
        </div>
        <div>
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
            className={style.registerInput}
          />
        </div>
        {/* <div>
        </div> */}
      </div>
      <CustomButton color="default" type="submit" disabled={isDisabled}>
        Далее
      </CustomButton>
    </form>
  );
};
