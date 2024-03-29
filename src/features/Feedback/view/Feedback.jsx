import { FeedbackIcon } from "@/shared/assets/icons/feedback";
import { FeedbackValidation } from "../model/FeedbackValidation";
import { useState } from "react";
import { Modal } from "@/shared/lib";

import { ButtonSubmit, InputComponent, Typography } from "@/shared";

import {
  DocumentTextIcon,
  UserIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";

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
        <Modal onCloseModal={() => setFeedbackModal(false)}>
          <div className={style.questio}>
            <XCircleIcon
              width={24}
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
                <UserIcon width={20} />
                <input
                  type="text"
                  placeholder="ФИО"
                  value={inputValues.fio}
                  onChange={(event) => handleInputChange(event, "fio")}
                />
              </div>
              <div className={style.questioText}>
                <DocumentTextIcon width={20} />
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
        </Modal>
      )}
    </>
  );
};
