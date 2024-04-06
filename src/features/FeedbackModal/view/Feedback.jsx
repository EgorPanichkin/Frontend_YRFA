import { FeedbackValidation } from "../model/FeedbackValidation";
import { useState } from "react";
import {
  CustomButton,
  Cross,
  DocumentIcon,
  Typography,
  UserIcons,
  ModalWrapper,
  CustomInput,
  FeedbackIcon,
} from "@/shared";

import style from "./Feedback.module.scss";

export const Feedback = () => {
  const [feedbackModal, setFeedbackModal] = useState(false);
  const { handleInputChange, isButtonDisabled, inputValues, counter } =
    FeedbackValidation();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputValues);
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
              <CustomInput
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
                <DocumentIcon />
                <textarea
                  type="text"
                  placeholder="Введите текст"
                  value={inputValues.text}
                  onChange={(event) => handleInputChange(event, "text")}
                />
              </div>
              <span className={style.questioCounter}>{counter}/300</span>
              <CustomButton
                type="submit"
                disabled={isButtonDisabled}
                className={style.questioBtn}
              >
                <Typography>Отправить</Typography>
              </CustomButton>
            </form>
          </div>
        </ModalWrapper>
      )}
    </>
  );
};
