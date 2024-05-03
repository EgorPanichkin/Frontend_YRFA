import { ChevronDown, PATHS } from "@/shared";
import { Typography } from "../..";
import style from "./ServiceListCard.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ServiceListCard = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { image, title, categoryList = [] } = props;

  return (
    <div className={style.card}>
      <div className={style.imageWrapper}>
        <img src={image} alt={title} />
      </div>
      <div
        className={isActive ? style.selectorOpen : style.selectorHidden}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={style.title}>
          <Typography weight="bold">{title}</Typography>
          <ChevronDown className={isActive ? style.iconOpen : style.icon} />
        </div>
        <div className={style.links}>
          {categoryList.map((item) => {
            return (
              <Link
                to={PATHS.selectDirections + `/${item.id}`}
                className={style.link}
                key={item.id}
              >
                <Typography variant="smallBody" weight="bold" color="primary">
                  {item.category_name ||
                    item.subcategory_name ||
                    item.diagnostic_name}
                </Typography>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
