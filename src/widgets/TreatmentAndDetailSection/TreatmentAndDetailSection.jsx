import style from "./TreatmentAndDetailSection.module.scss";
import {
  CustomButton,
  DetailCard,
  PATHS,
  Typography,
  VerticalLine,
} from "@/shared";
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
        <VerticalLine height="239" />
        <div className={style.blockDetail}>
          <Typography variant="h3" weight="bold" color="blue400">
            {detailData.h2}
          </Typography>
          <DetailCard detailData={detailData} />
        </div>
      </div>
      <CustomButton color="default" icon="chevron">
        Записаться на прием
      </CustomButton>
    </div>
  );
};
