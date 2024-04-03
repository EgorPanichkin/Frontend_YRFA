import { Garbage } from "@/shared";
import style from "./UpcomingReceptionComponent.module.scss";

export const UpcomingReceptionComponent = (props) => {
  const { reception, editMode, onDelete } = props;
  const handleDelete = () => {
    onDelete(reception.id); // Передаем id приема для удаления
  };
  return (
    <div className={style.upcomingReception}>
      <div className={style.upcomingReceptionBlock}>
        <div>
          <span>Направление:</span>
          <span className={style.upcomingReceptionData}>
            {reception.direction}
          </span>
        </div>
        {!editMode && (
          <Garbage
            className={style.upcomingReceptionsDelet}
            onClick={handleDelete}
          />
        )}
      </div>
      <div>
        <span>Врач:</span>
        <span className={style.upcomingReceptionData}>{reception.doctor}</span>
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
  );
};
