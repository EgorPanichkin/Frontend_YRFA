import {
  CustomButton,
  Typography,
  notify,
  phoneNumberRefactorer,
  usersRequester,
} from "@/shared";
import { IMaskInput } from "react-imask";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPhone } from "@/app/store/verificationDataSlice";

import style from "./PhoneForm.module.scss";
import { useFormValidation } from "../model/useFormValidation";

export const PhoneForm = () => {
  const {
    // Получаем доступ к функциям и значениям с кастомного хука
    inputValues,
    handleInputChange,
    setFocusedInput,
    focusedInput,
    errorsInput,
  } = useFormValidation();

  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { phone } = inputValues;

  useEffect(() => {
    // Проверка, должна ли кнопка стать неактивной
    setIsDisabled(
      // Проверка на наличие ошибок валидации и на пустоту поля
      errorsInput.phone !== "" || inputValues.phone === "",
    );
  }, [errorsInput, inputValues]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const phoneNum = phoneNumberRefactorer(inputValues.phone);

    try {
      const response = await usersRequester("/accept_phone/", {
        phone_number: phoneNum,
      });

      if (response && response.status === 200) {
        navigate("verification");
        dispatch(addPhone({ phone }));
        notify.success("Номер принят!");
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
        weight="bold"
        className={style.smsFormTitle}
      >
        Введите номер телефона
      </Typography>
      <Typography
        variant="body"
        color="gray"
        weight="regular"
        className={style.smsFormBody}
      >
        Мы отправим код на этот номер для подтверждения и дальнейшего сброса
        пароля
      </Typography>
      {errorsInput.phone ? (
        <label className={style.errorLabel}>{errorsInput.phone}</label>
      ) : (
        <label
          htmlFor="phone"
          className={focusedInput === "phone" ? style.focusedLabel : ""}
        >
          Номер телефона
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
        className={style.phoneInput}
      />
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
