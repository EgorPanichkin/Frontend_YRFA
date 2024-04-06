import style from "./DetailCard.module.scss";
import { CustomButton, Typography } from "@/shared";

export const DetailCard = ({ detailData }) => {
  return (
    <div className={style.cardBlockDetail}>
      <div className={style.contentBlock}>
        <Typography variant="h6" weight="semibold" color="blue500">
          {detailData.h4}
        </Typography>
        <CustomButton type="link" path="/about" color="default">
          {detailData.button}
        </CustomButton>
      </div>
      <img
        src={detailData.img}
        alt="card-detail-img"
        className={style.cardDetailImg}
      />
    </div>
  );
};
