import { ChevronDownIcon } from "@/shared";
import { Typography } from "..";
import style from "./SubCategoryCard.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export const SubCategoryCard = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={isActive ? style.card : style.hidden}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={style.title}>
        <Typography variant="h8" weight="semi-bold" color="black500">
          {data.subcategory_name}
        </Typography>
        <ChevronDownIcon />
      </div>
      <ul>
        {data.diagnostic_subcategory?.map((item) => {
          return (
            <li key={item.id}>
              <Link to={"current-service/" + item.id}>
                {item.diagnostic_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
