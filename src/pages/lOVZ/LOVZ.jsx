import style from "./LOVZ.module.scss";
import { MainLovz } from "@/widgets";

export const LovzPage = () => {
  return (
    <div className={style.lovzPageWrapper}>
      <MainLovz />
    </div>
  );
};
