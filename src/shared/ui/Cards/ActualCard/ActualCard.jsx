import { CustomButton, ModalWrapper, Typography } from "@/shared";
import style from "./ActualCard.module.scss";
import { useState } from "react";
import { ModalActual } from "./View/ModalActual";

export const ActualCard = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modalIsActive, setModalIsActive] = useState(false);
  const { title, expiration, description, imgSrc, reverse = false } = props;

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  if (windowWidth < 425) {
    return (
      <>
        <div className={style.card} onClick={() => setModalIsActive(true)}>
          <div className={style.imageWrapper}>
            <img src={imgSrc} alt="actual" />
          </div>
          <div className={style.infoBlock}>
            <Typography variant="h5" weight="bold">
              {title}
            </Typography>
            <Typography color="light" className={style.expiration}>
              {expiration}
            </Typography>
            <CustomButton
              variant="border"
              size="small"
              className={style.button}
            >
              Подробнее
            </CustomButton>
          </div>
        </div>
        {modalIsActive && (
          <ModalWrapper onCloseModal={() => setModalIsActive(false)}>
            <ModalActual
              title={title}
              expiration={expiration}
              description={description}
              imgSrc={imgSrc}
              onClose={setModalIsActive}
            />
          </ModalWrapper>
        )}
      </>
    );
  }

  return (
    <>
      <div
        onClick={windowWidth > 768 ? null : () => setModalIsActive(true)}
        className={[style.card, reverse ? style.reverse : ""].join(" ")}
      >
        {reverse && (
          <div className={style.imageWrapper}>
            <img src={imgSrc} alt="actual" />
          </div>
        )}
        <div className={style.infoBlock}>
          <Typography variant="h5" weight="bold">
            {title}
          </Typography>
          <Typography color="light" className={style.expiration}>
            {expiration}
          </Typography>
          <CustomButton
            onClick={() => setModalIsActive(true)}
            variant="border"
            size="small"
            className={style.button}
          >
            Подробнее
          </CustomButton>
        </div>
        {!reverse && (
          <div className={style.imageWrapper}>
            <img src={imgSrc} alt="actual" />
          </div>
        )}
      </div>
      {modalIsActive && (
        <ModalWrapper onCloseModal={() => setModalIsActive(false)}>
          <ModalActual
            title={title}
            expiration={expiration}
            description={description}
            imgSrc={imgSrc}
            onClose={setModalIsActive}
          />
        </ModalWrapper>
      )}
    </>
  );
};
