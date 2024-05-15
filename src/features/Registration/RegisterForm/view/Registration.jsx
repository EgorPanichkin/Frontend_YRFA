import { AccordionForm, CustomButton, PATHS, Typography } from "@/shared";

import { RegisterValidation } from "../model/RegisterValidation";
import { IMaskInput } from "react-imask";

import style from "./Registration.module.scss";
import { CustomInput } from "@/shared/ui/CustomInput";
import { t } from "i18next";

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
          {t("auth.register.title")}
        </Typography>
        <Typography variant="body" weight="400" color="#4A4A4A">
          {t("auth.register.body")}
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
              {t("auth.register.nameInput.label")}
            </label>
          )}
          <CustomInput
            id="name"
            type="name"
            value={inputValues.name}
            onBlur={() => setFocusedInput("")}
            onFocus={() => setFocusedInput("name")}
            placeholder={t("auth.register.nameInput.placeholder")}
            onChange={(event) => handleInputChange(event, "name")}
            className={focusedInput === "name" ? style.registerInput : ""}
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
              {t("auth.register.surnameInput.label")}
            </label>
          )}
          <CustomInput
            id="surName"
            type="surName"
            onBlur={() => setFocusedInput("")}
            onFocus={() => setFocusedInput("surName")}
            value={inputValues.surName}
            placeholder={t("auth.register.surnameInput.placeholder")}
            onChange={(event) => handleInputChange(event, "surName")}
            className={focusedInput === "surName" ? style.registerInput : ""}
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
              {t("auth.register.phoneInput.label")}
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
            className={
              focusedInput === "phone"
                ? `${style.registerInput} ${style.phoneInput}`
                : style.phoneInput
            }
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
              {t("auth.register.dateInput.label")}
            </label>
          )}
          <CustomInput
            id="date"
            type="date"
            onBlur={() => setFocusedInput("")}
            onFocus={() => setFocusedInput("date")}
            value={inputValues.date}
            onChange={(event) => handleInputChange(event, "date")}
            className={focusedInput === "date" ? style.registerInput : ""}
          />
        </div>
        <div>
          <label htmlFor="gender">{t("auth.register.genderInput.label")}</label>
          <AccordionForm
            accordionTitle={
              inputValues.gender
                ? inputValues.gender
                : t("auth.register.genderInput.placeholder")
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
              {t("auth.register.passwordInput.label")}
            </label>
          )}
          <CustomInput
            id="password"
            type="password"
            onBlur={() => setFocusedInput("")}
            onFocus={() => setFocusedInput("password")}
            value={inputValues.password}
            placeholder={t("auth.register.passwordInput.placeholder")}
            onChange={(event) => handleInputChange(event, "password")}
            className={focusedInput === "password" ? style.registerInput : ""}
          />
        </div>
        <div>
          {errorsInput.enterPassword ? (
            <label className={style.errorLabel}>
              {errorsInput.enterPassword}
            </label>
          ) : !passwordMatch && inputValues.enterPassword ? (
            <label className={style.errorLabel}>
              {t("auth.register.enterPasswordInput.errorLabel.twoo")}
            </label>
          ) : (
            <label
              htmlFor="enterPassword"
              className={
                focusedInput === "enterPassword" ? style.focusedLabel : ""
              }
            >
              {t("auth.register.enterPasswordInput.label")}
            </label>
          )}
          <CustomInput
            id="enterPassword"
            type="password"
            onBlur={() => setFocusedInput("")}
            onFocus={() => setFocusedInput("enterPassword")}
            value={inputValues.enterPassword}
            placeholder={t("auth.register.enterPasswordInput.placeholder")}
            onChange={(event) => handleInputChange(event, "enterPassword")}
            className={
              focusedInput === "enterPassword" ? style.registerInput : ""
            }
          />
        </div>
      </div>
      <CustomButton color="default" type="submit" disabled={isDisabled}>
        {t("auth.register.button")}
      </CustomButton>
    </form>
  );
};
