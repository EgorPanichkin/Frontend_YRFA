import { FeedbackValidation } from "../model/FeedbackValidation";
import { useState } from "react";

import {
  CustomButton,
  Cross,
  Typography,
  ModalWrapper,
  CustomInput,
  FeedbackIcon,
  usersRequester,
  notify,
} from "@/shared";

import style from "./Feedback.module.scss";

export const Feedback = () => {
  const [feedbackModal, setFeedbackModal] = useState(false);
  const { handleInputChange, isButtonDisabled, inputValues, counter } =
    FeedbackValidation();

  const { fio, emailPhone, text } = inputValues;

  const handleSubmit = (event) => {
    event.preventDefault();

    const response = usersRequester("/feedback/", {
      full_name: fio,
      contacts: emailPhone,
      message: text,
    });

    if (response && response.status === 200) {
      notify.success("Форма успешно отправлена!");
      setFeedbackModal(false);
    }
  };

  return (
    <>
      <div className={style.feedback} onClick={() => setFeedbackModal(true)}>
        <FeedbackIcon />
      </div>
      {feedbackModal && (
        <ModalWrapper onCloseModal={() => setFeedbackModal(false)}>
          <div className={style.questio}>
            <Cross
              color="#BFBFBF"
              className={style.closeModal}
              onClick={() => setFeedbackModal(false)}
            />
            <form onSubmit={handleSubmit} className={style.questioForm}>
              <Typography
                variant="h7"
                weight="600"
                color="blue500"
                className={style.questioTitle}
              >
                Введите свой вопрос, жалобу или предложение
              </Typography>
              <div>
                <label className={style.feedbackLabel}>
                  Номер телефона или эл.почта
                </label>
                <CustomInput
                  type="text"
                  placeholder="Номер телефона или email"
                  value={inputValues.emailPhone}
                  onChange={(event) => handleInputChange(event, "emailPhone")}
                  className={style.questioInputPhone}
                />
              </div>
              <div>
                <label className={style.feedbackLabel}>ФИО</label>
                <CustomInput
                  type="text"
                  placeholder="ФИО"
                  value={inputValues.fio}
                  onChange={(event) => handleInputChange(event, "fio")}
                  className={style.fio}
                />
              </div>
              <div>
                <label className={style.feedbackLabel}>
                  Введите ваш вопрос
                </label>
                <textarea
                  type="text"
                  placeholder="Введите текст"
                  value={inputValues.text}
                  onChange={(event) => handleInputChange(event, "text")}
                  className={style.bodyText}
                />
              </div>
              <span className={style.questioCounter}>{counter}/300</span>
              <CustomButton
                color="default"
                type="submit"
                disabled={isButtonDisabled}
                className={style.questioBtn}
              >
                Отправить
              </CustomButton>
            </form>
          </div>
        </ModalWrapper>
      )}
    </>
  );
};
