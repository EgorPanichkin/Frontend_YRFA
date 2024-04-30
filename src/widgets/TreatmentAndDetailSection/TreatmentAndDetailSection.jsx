import style from "./TreatmentAndDetailSection.module.scss";
import { ActualCard, CustomButton, PATHS, Typography } from "@/shared";
import { Link, useLoaderData } from "react-router-dom";

export const TreatmentAndDetailSection = ({ detailData }) => {
  const { categories } = useLoaderData();

  return (
    <div className={style.blockTreatmentAndDetail}>
      <div className={style.blockContent}>
        <div className={style.treatmentBlock}>
          <Typography variant="h3" weight="bold" color="blue400">
            Лечение
          </Typography>
          <div className={style.contentSection}>
            <ul className={style.pieceContent}>
              {categories?.map((items, index) => (
                <li key={index} className={style.content}>
                  <Link to={PATHS.selectDirections + `/${items.id}`}>
                    <Typography
                      variant="h6"
                      weight="regular"
                      color="blue400"
                      className={style.linkText}
                    >
                      {items.category_name}
                    </Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.blockDetail}>
          <Typography variant="h3" weight="bold" color="blue400">
            {detailData.h2}
          </Typography>
          <ActualCard />
          <CustomButton variant="orange" className={style.button}>
            Записаться на приём к врачу
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
