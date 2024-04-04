import {
  ChevronLeft,
  CustomButton,
  SelectComponent,
  Typography,
} from "@/shared";

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

  return (
    <form className={style.registerForm} onSubmit={handleSubmit}>
      <div className={style.registerBlockTitle}>
        <ChevronLeft
          className={style.registerBack}
          width={24}
          onClick={() => navigate(-1)}
        />
        <Typography variant="h2" weight="600" className={style.registerTitle}>
          Регистрация
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
            className={style.formInput}
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
          />
        </div>
        <div>
          <label htmlFor="sex">Пол</label>
          <SelectComponent
            selectTitle={inputValues.sex ? inputValues.sex : "Укажите свой пол"}
            onClickOption={handleOptionClick}
            optionsItems={optionsItems}
          />
        </div>
      </div>
      <CustomButton color="default" type="submit" disabled={isDisabled}>
        Создать кабинет пациента
      </CustomButton>
    </form>
  );
};
