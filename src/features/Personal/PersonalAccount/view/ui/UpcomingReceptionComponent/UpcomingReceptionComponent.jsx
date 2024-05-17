import style from "./UpcomingReceptionComponent.module.scss";

export const UpcomingReceptionComponent = (props) => {
  const { reception } = props;

  return (
    <>
      <div className={style.upcomingReception}>
        <div>
          <span>Направление:</span>
          <span className={style.upcomingReceptionData}>
            {reception.direction}
          </span>
        </div>
        <div>
          <span>Врач:</span>
          <span className={style.upcomingReceptionData}>
            {reception.doctor}
          </span>
        </div>
        <div>
          <span>Дата:</span>
          <span className={style.upcomingReceptionData}>{reception.date}</span>
        </div>
        <div>
          <span>Время:</span>
          <span className={style.upcomingReceptionData}>{reception.time}</span>
        </div>
      </div>
    </>
  );
};
