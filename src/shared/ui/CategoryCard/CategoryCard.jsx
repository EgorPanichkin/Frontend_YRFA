import { Typography } from "@/shared";
import style from "./CategoryCard.module.scss";
import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/analysis/${data.analysis_slug}`);
  };

  return (
    <div className={style.card} onClick={handleClick}>
      <img src={data.image} alt={data?.analysis_name} className={style.image} />
      <div className={style.textSide}>
        <Typography varian="h4" weight="semibold">
          {data?.analysis_name}
        </Typography>
      </div>
    </div>
  );
};
