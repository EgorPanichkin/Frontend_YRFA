import { useEffect, useState } from "react";

import style from "./Feedback.module.sass";
import {
  ButtonSubmit,
  Cross,
  FeedbackIcon,
  InputComponent,
  Typography,
  UserIcons,
  Tech,
} from "@/shared";
import { useValidationFeedback } from "../hook/useValidationFeedback";

export const Feedback = () => {
  const [feedbackModal, setFeedbackModal] = useState(false);
  const { handleInputChange, isButtonDisabled, inputValues, counter } =
    useValidationFeedback();

  // Функция для обработки клика по тёмной области
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(style.notificationOverlay)) {
      // Закрываем уведомление, только если клик произошел на затемненной области
      setFeedbackModal(false);
    }
  };

  useEffect(() => {
    const body = document.body;
    if (feedbackModal) {
      body.style.overflow = "hidden"; // Запрещаем прокрутку страницы
    } else {
      body.style.overflow = ""; // Разрешаем прокрутку страницы
    }

    return () => {
      body.style.overflow = ""; // Убираем запрет на прокрутку при размонтировании компонента
    };
  }, [feedbackModal]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputValues);
  };

  return (
    <>
      <div
        className={style.feedback}
        onClick={() => setFeedbackModal(!feedbackModal)}
      >
        <FeedbackIcon />
      </div>
      {feedbackModal && (
        <div onClick={handleOverlayClick} className={style.notificationOverlay}>
          <div className={style.questio}>
            <Cross
              color="var(--black300)"
              className={style.closeModal}
              onClick={() => setFeedbackModal(false)}
            />
            <form onSubmit={handleSubmit} className={style.questioForm}>
              <Typography
                variant="h2"
                weight="600"
                className={style.questioTitle}
              >
                Введите свой вопрос, жалобу или предложение
              </Typography>
              <InputComponent
                type="text"
                placeholder="Номер телефона или email"
                value={inputValues.emailPhone}
                onChange={(event) => handleInputChange(event, "emailPhone")}
              />
              <div className={style.questioUser}>
                <UserIcons />
                <input
                  type="text"
                  placeholder="ФИО"
                  value={inputValues.fio}
                  onChange={(event) => handleInputChange(event, "fio")}
                />
              </div>
              <div className={style.questioText}>
                <Tech />
                <textarea
                  type="text"
                  placeholder="Введите текст"
                  value={inputValues.text}
                  onChange={(event) => handleInputChange(event, "text")}
                />
              </div>
              <span className={style.questioCounter}>{counter}/300</span>
              <ButtonSubmit
                type="submit"
                disabled={isButtonDisabled}
                className={style.questioBtn}
              >
                Отправить
              </ButtonSubmit>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
