import {
  ChevronLeft,
  CustomButton,
  InputComponent,
  ModalWrapper,
  PhoneIcon,
  Typography,
} from "@/shared";
import { useNavigate } from "react-router-dom";

import style from "./VerificationForm.module.scss";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFormValidation } from "../model/useFormValidation";

export const VerificationForm = () => {
  const {
    // Получаем доступ к функциям и значениям с кастомного хука
    inputValues,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    focusedInput,
    errorsInput,
  } = useFormValidation();

  const verificationData = useSelector(
    (state) => state.verificationData.verificationData,
  );
  const { phone } = verificationData;

  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Проверка, должна ли кнопка стать неактивной
    setIsDisabled(
      // Проверка на наличие ошибок валидации и на пустоту поляы
      errorsInput.code !== "" || inputValues.code === "",
    );
  }, [errorsInput, inputValues]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("password-reset");
  };

  const [notificationPhone, setNotificationPhone] = useState(false);

  // Закрыть уведомление через 2 секунды
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationPhone(false);
    }, 2000);

    // Очищаем таймер при размонтировании компонента или изменении состояния notificationPhone
    return () => clearTimeout(timer);
  }, [notificationPhone]); // Эффект будет перезапускаться при изменении состояния notificationPhone

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
          Ввод кода
        </Typography>
      </div>
      <Typography
        variant="body"
        color="gray"
        weight="regular"
        className={style.smsFormBody}
      >
        Мы отправили код на номер заканчивающийся на {String(phone).slice(-3)}
      </Typography>
      {errorsInput.code ? (
        <label className={style.errorLabel}>{errorsInput.code}</label>
      ) : (
        <label
          htmlFor="code"
          className={focusedInput === "code" ? style.focusedLabel : ""}
        >
          Код
        </label>
      )}
      <InputComponent
        id="code"
        type="text"
        className={style.formInput}
        placeholder="Введите код"
        value={inputValues.code}
        onChange={(event) => handleInputChange(event, "code")}
        onFocus={() => handleInputFocus("phone")}
        onBlur={handleInputBlur}
      />
      <CustomButton
        color="default"
        type="submit"
        className={style.smsButton}
        disabled={isDisabled}
      >
        <Typography>Продолжить</Typography>
      </CustomButton>
      <a
        className={style.smsFormLink}
        onClick={() => setNotificationPhone(!notificationPhone)}
      >
        Не получили код?
      </a>
      {notificationPhone && (
        <ModalWrapper onCloseModal={() => setNotificationPhone(false)}>
          <div className={style.confirmationPhone}>
            <PhoneIcon color="black" />
            <Typography>Новый код отправлен</Typography>
          </div>
        </ModalWrapper>
      )}
    </form>
  );
};
