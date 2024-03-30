import {
  ChevronLeft,
  CustomButton,
  CustomInput,
  Phone,
  Typography,
} from "@/shared";
import { addCode } from "@/app/store/verificationDataSlice";
// import { FormsValidation } from "../model/FormsValidation"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import style from "./VerificationForm.module.scss";
import { FormsValidation } from "../model/FormsValidation";

export const VerificationForm = () => {
  const {
    // Получаем доступ к функциям и значениям с кастомного хука
    inputValues,
    handleInputChange,
    handleInputFocus,
    handleInputBlur,
    focusedInput,
    errorsInput,
  } = FormsValidation();

  const verificationData = useSelector(
    (state) => state.verificationData.verificationData,
  );
  const { phone } = verificationData;

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = inputValues;

  useEffect(() => {
    // Проверка, должна ли кнопка стать неактивной
    setIsSubmitButtonDisabled(
      // Проверка на наличие ошибок валидации и на пустоту поляы
      errorsInput.code !== "" || inputValues.code === "",
    );
  }, [errorsInput, inputValues]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("password-reset");
    dispatch(addCode({ code }));
  };

  const [notificationPhone, setNotificationPhone] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (notificationPhone) {
      body.style.overflow = "hidden"; // Запрещаем прокрутку страницы
    } else {
      body.style.overflow = ""; // Разрешаем прокрутку страницы
    }

    return () => {
      body.style.overflow = ""; // Убираем запрет на прокрутку при размонтировании компонента
    };
  }, [notificationPhone]);

  // Закрыть уведомление через 2 секунды
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationPhone(false);
    }, 2000);

    // Очищаем таймер при размонтировании компонента или изменении состояния notificationPhone
    return () => clearTimeout(timer);
  }, [notificationPhone]); // Эффект будет перезапускаться при изменении состояния notificationPhone

  // Функция для обработки клика по тёмной области
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(style.notificationOverlay)) {
      // Закрываем уведомление, только если клик произошел на затемненной области
      setNotificationPhone(false);
    }
  };

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
      <CustomInput
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
        type="submit"
        className={style.smsButton}
        disabled={isSubmitButtonDisabled}
      >
        Продолжить
      </CustomButton>
      <a
        className={style.smsFormLink}
        onClick={() => setNotificationPhone(!notificationPhone)}
      >
        Не получили код?
      </a>
      {notificationPhone && (
        <div onClick={handleOverlayClick} className={style.notificationOverlay}>
          <div className={style.confirmationPhone}>
            <Phone />
            <Typography>Новый код отправлен</Typography>
          </div>
        </div>
      )}
    </form>
  );
};
