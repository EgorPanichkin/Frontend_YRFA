import style from "./TreatmentAndDetailSection.module.scss";
import { Treatment } from "./model/Treatment/Treatment";
import { Detail } from "./model/Detail/Detail";

export const TreatmentAndDetailSection = () => {
  return (
    <div className={style.blockTreatmentAndDetail}>
      <Treatment />
      <Detail />
    </div>
  );
};
