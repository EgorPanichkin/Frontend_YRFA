import style from "./PostHistoryComponent.module.scss";

export const PostHistoryComponent = ({ direction, doctor, date, time }) => {
  return (
    <div className={style.postHistoryFormDataBlock}>
      <div>
        <span>Направление:</span>
        <span className={style.postHistoryFormText}>{direction}</span>
      </div>
      <div>
        <span>Врач:</span>
        <span className={style.postHistoryFormText}>{doctor}</span>
      </div>
      <div>
        <span>Дата:</span>
        <span className={style.postHistoryFormText}>{date}</span>
      </div>
      <div>
        <span>Время:</span>
        <span className={style.postHistoryFormText}>{time}</span>
      </div>
    </div>
  );
};
