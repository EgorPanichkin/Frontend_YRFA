import { CardDetail } from "@/entities";
import { Typography } from "@/shared";

import style from "./DetailSection.module.scss";

export const DetailSection = ({ detailData }) => {
  return (
    <div className={style.blockDetail}>
      <Typography variant="h3" color="blue" weight="demibold">
        {detailData.h2}
      </Typography>
      <CardDetail detailData={detailData} />
    </div>
  );
};
