import { Typography } from "@/shared";
import style from "./CategoryCard.module.scss";
import { Link } from "react-router-dom";

export const CategoryCard = ({ data }) => {
  return (
    <Link to={"current-service/" + data.id} className={style.card}>
      <Typography variant="h8" weight="semi-bold" color="black500">
        {data.diagnostic_name}
      </Typography>
    </Link>
  );
};
