import {
  CustomButton,
  CustomInput,
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
    setFocusedInput,
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

  const [count, setCount] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevSecond) => (prevSecond > 0 ? prevSecond - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotification = () => {
    setNotificationPhone(true);
    setCount(60);
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
      <Typography
        variant="h2"
        color="black"
        weight="semibold"
        className={style.smsFormTitle}
      >
        Введите код из СМС
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
      <Typography variant="span" className={style.phone}>
        {phone}
      </Typography>
      {errorsInput.code ? (
        <label className={style.errorLabel}>{errorsInput.code}</label>
      ) : (
        <label
          htmlFor="code"
          className={focusedInput === "code" ? style.focusedLabel : ""}
        >
          Код из СМС
        </label>
      )}
      <CustomInput
        id="code"
        type="code"
        className={
          focusedInput === "code"
            ? `${style.focusedCode} ${style.codeInput}`
            : style.codeInput
        }
        placeholder="Введите код"
        value={inputValues.code}
        onChange={(event) => handleInputChange(event, "code")}
        onFocus={() => setFocusedInput("code")}
        onBlur={() => setFocusedInput("")}
      />
      <CustomButton
        color="default"
        type="submit"
        className={style.smsButton}
        disabled={isDisabled}
      >
        Продолжить
      </CustomButton>
      {count !== 0 ? (
        <Typography variant="span" className={style.timerText}>
          Отправить код заново через{" "}
          <Typography className={style.timer} variant="span">
            {count}
          </Typography>
        </Typography>
      ) : (
        <button
          type="button"
          className={style.smsFormLink}
          onClick={handleNotification}
        >
          Отправить код снова
        </button>
      )}
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
