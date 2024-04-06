import { Link } from "react-router-dom";

import style from "./ModalPersonal.module.scss";
import { CustomButton, Typography } from "@/shared";

export const ModalPersonal = (props) => {
  const {
    title,
    confirmation,
    setConfirmationExit,
    setConfirmationId,
    handleConfirmDelete,
  } = props;

  return (
    <div className={style.exitNotification}>
      <span className={style.exitNotificationTtile}>{title}</span>
      <div className={style.exitNotificationButtons}>
        {confirmation === "exit" ? (
          <Link to={"/login"}>Подтвердить</Link>
        ) : (
          <CustomButton onClick={handleConfirmDelete}>Подтвердить</CustomButton>
        )}
        {confirmation === "exit" ? (
          <CustomButton
            color="default"
            onClick={() => setConfirmationExit(false)}
          >
            <Typography>Отменить</Typography>
          </CustomButton>
        ) : (
          <CustomButton
            color="default"
            onClick={() => setConfirmationId(false)}
          >
            Отменить
          </CustomButton>
        )}
      </div>
    </div>
  );
};
