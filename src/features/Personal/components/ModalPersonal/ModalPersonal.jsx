import { useNavigate } from "react-router-dom";

import style from "./ModalPersonal.module.scss";
import { CustomButton, PATHS, usersRequester } from "@/shared";

export const ModalPersonal = (props) => {
  const {
    title,
    confirmation,
    setConfirmationExit,
    setConfirmationId,
    handleConfirmDelete,
  } = props;
  const navigate = useNavigate();

  const handleConfirmExit = async () => {
    const response = await usersRequester("/logout/", {});
    if (response.status === 205) {
      navigate(PATHS.home);
    }
  };

  return (
    <div className={style.exitNotification}>
      <span className={style.exitNotificationTtile}>{title}</span>
      <div className={style.exitNotificationButtons}>
        {confirmation === "exit" ? (
          // <Link to={"/login"}>Подтвердить</Link>
          <CustomButton onClick={handleConfirmExit}>Подтвердить</CustomButton>
        ) : (
          <CustomButton onClick={handleConfirmDelete}>Подтвердить</CustomButton>
        )}
        {confirmation === "exit" ? (
          <CustomButton
            color="default"
            onClick={() => setConfirmationExit(false)}
          >
            Отменить
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
