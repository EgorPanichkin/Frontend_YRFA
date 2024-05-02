import { PATHS, Typography } from "@/shared";
import style from "./Treatment.module.scss";
import { Link, useLoaderData } from "react-router-dom";

export const Treatment = () => {
  const { categories } = useLoaderData();

  return (
    <div className={style.treatment}>
      <Typography variant="h3" weight="bold">
        Лечение
      </Typography>
      <div className={style.categories}>
        {categories?.map((items, index) => (
          <Link to={PATHS.selectDirections + `/${items.id}`} key={index}>
            <Typography variant="h6" color="primary" className={style.link}>
              {items.category_name}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};
