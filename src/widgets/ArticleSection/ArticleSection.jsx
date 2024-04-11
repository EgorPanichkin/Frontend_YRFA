import style from "./ArticleSection.module.scss";
import { CustomButton, Loader, Typography, baseGetRequest } from "@/shared";
import { useEffect, useState } from "react";
import { DoctorsCard } from "..";

export const ArticleSection = ({ sectionId, onDataCount }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const response = async () => {
      const dataBase = await baseGetRequest("/blogs/doctors-articles/");
      setData(dataBase);
      onDataCount(dataBase.length);
      setLoading(false);
    };
    response();
  }, [onDataCount]);
  const title = "Статьи";
  const btn = "Посмотреть ещё";
  return (
    <div className={style.articleBlock} id={sectionId}>
      <Typography variant="h4" weight="semibold">
        {title}
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.flex}>
          {data.map((items) => (
            <DoctorsCard data={items} key={items.id} link={"currentNews/"} />
          ))}
          <CustomButton color="border" className={style.btn}>
            {btn}
          </CustomButton>
        </div>
      )}
    </div>
  );
};
