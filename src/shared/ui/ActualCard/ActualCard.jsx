import { Typography } from "@/shared";
import style from "./ActualCard.module.scss";

export const ActualCard = ({
  title,
  discountExpiration,
  imageSrc,
  imgPosition,
}) => {
  return (
    <>
      <div className={style.section}>
        {imgPosition === "left" && (
          <img className={style.image} src={imageSrc} alt="actual" />
        )}
        <div>
          <Typography variant="h3" weight="bold">
            {title}
          </Typography>
          <Typography variant="small" color="gray">
            {discountExpiration}
          </Typography>
        </div>
        {imgPosition === "right" && (
          <img className={style.image} src={imageSrc} alt="actual" />
        )}
      </div>
    </>
  );
};
