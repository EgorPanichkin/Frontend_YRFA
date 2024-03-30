import { ButtonSubmit, Typography } from "@/shared";
import { IMaskInput } from "react-imask";
import { useFormValidation } from "../config/useFormValidation";
import { useNavigate } from "react-router-dom";

import style from "./smsForm.module.sass";
import { useDispatch } from "react-redux";
import { addPhone } from "@/app/store/verificationDataSlice";
import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

export const SmsForm = () => {
  const {
    // Получаем доступ к функциям и значениям с кастомного хука
    inputValues,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    focusedInput,
    errorsInput,
  } = useFormValidation();

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { phone } = inputValues;

  useEffect(() => {
    // Проверка, должна ли кнопка стать неактивной
    setIsSubmitButtonDisabled(
      // Проверка на наличие ошибок валидации и на пустоту поля
      errorsInput.phone !== "" || inputValues.phone === "",
    );
  }, [errorsInput, inputValues]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("verification");
    dispatch(addPhone({ phone }));
  };

  return (
    <form className={style.smsForm} onSubmit={handleSubmit}>
      <div className={style.smsFormHead}>
        <ChevronLeftIcon
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
          Номер телефона
        </Typography>
      </div>
      <Typography
        variant="body"
        color="gray"
        weight="regular"
        className={style.smsFormBody}
      >
        Введите номер, на который мы отправим код
      </Typography>
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
        onFocus={() => handleInputFocus("phone")}
        onBlur={handleInputBlur}
        className={style.formInput}
      />
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
