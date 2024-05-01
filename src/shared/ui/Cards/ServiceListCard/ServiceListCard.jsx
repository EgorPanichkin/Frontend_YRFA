import { ChevronDown } from "@/shared";
import { Typography } from "../..";
import style from "./ServiceListCard.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ServiceListCard = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={style.card}>
      <div className={style.imageWrapper}>
        <img src={data.image} alt={data.subcategory_name} />
      </div>
      <div
        className={isActive ? style.selectorOpen : style.selectorHidden}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={style.title}>
          <Typography weight="bold">{data.subcategory_name}</Typography>
          <ChevronDown className={isActive ? style.iconOpen : style.icon} />
        </div>
        <div className={style.links}>
          {data.diagnostic_subcategory.map((item) => {
            return (
              <Link to={item.url} className={style.link} key={item.id}>
                <Typography variant="smallBody" weight="bold" color="primary">
                  {item.diagnostic_name}
                </Typography>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
