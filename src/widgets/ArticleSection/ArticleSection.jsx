import style from "./ArticleSection.module.scss";
import { CustomButton, Typography, baseGetRequest } from "@/shared";
import { useEffect, useState } from "react";
import { DoctorsCard } from "..";

export const ArticleSection = ({ sectionId }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const response = async () => {
      const dataBase = await baseGetRequest("/blogs/doctors-articles/");
      console.log(dataBase);
      setData(dataBase);
    };
    response();
  }, []);
  const title = "Статьи";
  const btn = "Посмотреть ещё";
  return (
    <div className={style.articleBlock} id={sectionId}>
      <Typography variant="h4" weight="semibold">
        {title}
      </Typography>
      <div className={style.flex}>
        {data.map((items) => (
          <DoctorsCard data={items} key={items.id} />
        ))}
      </div>
      <CustomButton color="border" className={style.btn}>
        {btn}
      </CustomButton>
    </div>
  );
};
