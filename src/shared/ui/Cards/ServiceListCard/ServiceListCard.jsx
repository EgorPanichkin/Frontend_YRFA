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
      <div className={style.selector} onClick={() => setIsActive(!isActive)}>
        <div className={style.title}>
          <Typography weight="bold">{title}</Typography>
          <ChevronDown className={isActive ? style.iconOpen : style.icon} />
        </div>
        <div className={isActive ? style.links : style.noLinks}>
          {categoryList.map((item, index) => {
            return (
              <Link
                to={PATHS.selectDirections + `/${item.id}`}
                className={style.link}
                key={index}
              >
                <Typography variant="smallBody" weight="bold" color="primary">
                  {item.category_name ||
                    item.subcategory_name ||
                    item.diagnostic_name ||
                    item}
                </Typography>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
