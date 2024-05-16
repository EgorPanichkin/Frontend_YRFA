import { ChevronRightIcon, Cross, CustomButton, Typography } from "@/shared";
import style from "./ModalActual.module.scss";

export const ModalActual = (props) => {
  const { title, expiration, description, imgSrc, onClose } = props;

  return (
    <div className={style.modal}>
      <Cross
        className={style.cross}
        onClick={() => onClose(false)}
        color="#BFBFBF"
      />
      <div className={style.imageWrapper}>
        <img src={imgSrc} alt="actual image" />
      </div>
      <div className={style.text}>
        <Typography variant="h4" weight="bold">
          {title}
        </Typography>
        <Typography color="light">{description}</Typography>
        <Typography weight="bold" color="warning">
          {expiration}
        </Typography>
      </div>
      <CustomButton className={style.button}>
        Записаться на прием
        <ChevronRightIcon />
      </CustomButton>
    </div>
  );
};
