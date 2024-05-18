import { CustomButton, ModalWrapper, Typography } from "@/shared";
import style from "./ActualCard.module.scss";
import { useState } from "react";
import { ModalActual } from "./View/ModalActual";

export const ActualCard = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modalIsActive, setModalIsActive] = useState(false);
  const {
    className,
    title,
    expiration,
    description,
    imgSrc,
    reverse = false,
  } = props;

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <>
      <div
        onClick={windowWidth > 920 ? null : () => setModalIsActive(true)}
        className={[style.card, className, reverse ? style.reverse : null].join(
          " ",
        )}
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
