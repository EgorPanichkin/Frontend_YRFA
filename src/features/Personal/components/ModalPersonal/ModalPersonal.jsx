import { Link } from "react-router-dom";

import style from "./ModalPersonal.module.scss";

export const ModalPersonal = (props) => {
  const {
    title,
    confirmation,
    onOverlay,
    setConfirmationExit,
    setConfirmationId,
    handleConfirmDelete,
  } = props;

  // FIX ME
  // const overlayRef = useRef()

  return (
    <div className={style.notificationOverlay} onClick={onOverlay}>
      <div className={style.upcomingReceptionNotification}>
        <span className={style.upcomingReceptionNotificationTitle}>
          {title}
        </span>
        <div className={style.upcomingReceptionNotificationButtons}>
          {confirmation === "exit" ? (
            <Link to={"/login"}>Подтвердить</Link>
          ) : (
            <button onClick={handleConfirmDelete}>Подтвердить</button>
          )}
          {confirmation === "exit" ? (
            <button onClick={() => setConfirmationExit(false)}>Отменить</button>
          ) : (
            <button onClick={() => setConfirmationId(null)}>Отменить</button>
          )}
        </div>
      </div>
    </div>
  );
};
