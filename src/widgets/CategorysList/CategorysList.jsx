import { CategoryCard } from "@/shared";
import style from "./CategoryList.module.scss";

export const CategorysList = ({ list }) => {
  return (
    <div className={style.cardList}>
      {list?.map((item, index) => {
        return <CategoryCard data={item} key={index} />;
      })}
    </div>
  );
};
