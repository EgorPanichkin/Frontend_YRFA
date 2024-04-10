import style from "./DoctorsCard.module.scss";
import { CustomButton, Typography } from "@/shared";

export const DoctorsCard = ({ data }) => {
  return (
    <div className={style.articlesCard} key={data.id}>
      <div className={style.imges} style={{ background: `url(${data.imge})` }}>
        <CustomButton color="orange" link={data.slug}>
          {data.slug}
        </CustomButton>
      </div>
      <div className={style.contentPiece}>
        <Typography variant="h6" weight="bold" color="blue500">
          {data.title}
        </Typography>
        <Typography variant="body" weight="regular" color="black300">
          {data.pub_date}
        </Typography>
      </div>
      <Typography
        variant="body"
        weight="regular"
        color="black400"
        className={style.contentPiece}
      >
        {data.description}
      </Typography>
    </div>
  );
};
