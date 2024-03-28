import style from "./AnalysesHistoryComponent.module.scss";

export const AnalysesHistoryComponent = ({ analyse, date, time, results }) => {
  return (
    <div className={style.analysesHistoryFormDataBlock}>
      <div>
        <span>Направление:</span>
        <span className={style.analysesHistoryFormText}>{analyse}</span>
      </div>
      <div>
        <span>Врач:</span>
        <span className={style.analysesHistoryFormText}>{date}</span>
      </div>
      <div>
        <span>Дата:</span>
        <span className={style.analysesHistoryFormText}>{time}</span>
      </div>
      <div>
        <span>Время:</span>
        <a
          href={results}
          target="_blank"
          className={style.analysesHistoryFormLink}
        >
          {results}
        </a>
      </div>
    </div>
  );
};
