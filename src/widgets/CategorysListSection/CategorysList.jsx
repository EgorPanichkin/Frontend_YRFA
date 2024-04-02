import { CategoryCard } from "@/shared";
import style from "./CategoryList.module.scss";
import { baseGetRequest } from "@/shared/lib/requester";
import { useState } from "react";
import { useEffect } from "react";

export const CategorysList = ({ requestParameter }) => {
  const [serverData, setServerData] = useState();

  useEffect(() => {
    return async () => {
      const response = await baseGetRequest(`/servises/${requestParameter}`);
      setServerData(response.data);
    };
  }, [requestParameter]);
  return (
    <div className={style.cardList}>
      {serverData?.map((item, index) => {
        return <CategoryCard data={item} key={index} />;
      })}
    </div>
  );
};
