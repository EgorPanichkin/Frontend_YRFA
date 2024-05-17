import { ChevronDown } from "@/shared";
import { Typography } from "..";
import style from "./SubCategoryCard.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export const SubCategoryCard = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  if (data.diagnostic_subcategory === null) {
    return (
      <Link to={"current-service/" + data.id} className={style.cardBlock}>
        <Typography weight="bold">{data.diagnostic_name}</Typography>
      </Link>
    );
  }

  return (
    <div className={style.card} onClick={() => setIsActive(!isActive)}>
      <div className={style.title}>
        <Typography weight="bold" color="default">
          {data.subcategory_name}
        </Typography>
        <ChevronDown className={isActive ? style.iconOpen : style.icon} />
      </div>
      <div className={isActive ? style.menu : style.hidden}>
        {data.diagnostic_subcategory?.map((item, index) => {
          return (
            <Link to={"current-service/" + item.id} key={index}>
              <Typography variant="smallBody" weight="bold" color="primary">
                {item.diagnostic_name}
              </Typography>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
