import { ChevronRightIcon, Cross, CustomButton, Typography } from "@/shared";
import style from "./ModalWindow.module.scss";

export const ModalWindow = (props) => {
  const { title, description, imgSrc, onClose, path, buttonText } = props;

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
      </div>
      <CustomButton link={path} className={style.button}>
        {buttonText}
        <ChevronRightIcon />
      </CustomButton>
    </div>
  );
};
