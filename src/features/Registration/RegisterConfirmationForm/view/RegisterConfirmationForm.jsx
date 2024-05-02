import {
  CustomButton,
  CustomInput,
  ModalWrapper,
  PATHS,
  PhoneIcon,
  Typography,
  notify,
  phoneNumberRefactorer,
  usersRequester,
} from "@/shared";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import style from "./RegisterConfirmationForm.module.scss";
import { useFormValidation } from "../model/useFormValidation";

export const RegisterConfirmationForm = () => {
  const {
    // Получаем доступ к функциям и значениям с кастомного хука
    inputValues,
    handleInputChange,
    setFocusedInput,
    focusedInput,
    errorsInput,
    registerPhone,
  } = useFormValidation();

  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Проверка, должна ли кнопка стать неактивной
    setIsDisabled(
      // Проверка на наличие ошибок валидации и на пустоту поля
      errorsInput.code !== "" || inputValues.code === "",
    );
  }, [errorsInput, inputValues]);

  // Состояние для счётчика
  const [count, setCount] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevSecond) => (prevSecond > 0 ? prevSecond - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Функция для отправки кода повторно
  const handleNotification = async () => {
    setNotificationPhone(true);
    setCount(60);

    // --------------- FIX_ME!!!
    try {
      const response = await usersRequester("/accept_phone/", {
        phone_number: registerPhone,
      });

      if (response && response.status === 200) {
        setNotificationPhone(true);
      }
    } catch {
      console.log("error");
    }
  };

  // --------------- FIX_ME!!!
  // Состояние для уведомления
  const [notificationPhone, setNotificationPhone] = useState(false);

  // Закрыть уведомление через 2 секунды
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationPhone(false);
    }, 2000);

    // Очищаем таймер при размонтировании компонента или изменении состояния notificationPhone
    return () => clearTimeout(timer);
  }, [notificationPhone]); // Эффект будет перезапускаться при изменении состояния notificationPhone

  const handleSubmit = async (event) => {
    event.preventDefault();

    const phoneNum = phoneNumberRefactorer(inputValues.phone);

    try {
      const response = await usersRequester("/confirm_register/", {
        phone_number: phoneNum,
        verify_code: inputValues.code,
      });

      if (response && response.status === 200) {
        navigate(PATHS.login);
        notify.success("Регистрация успешна!");
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
      <Typography variant="span" className={style.phone}>
        {registerPhone}
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
