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
          <Typography variant="h4" weight="semibold" color="blue500">
            {title}
          </Typography>
          <Typography variant="h9" color="black400" weight="regular">
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
