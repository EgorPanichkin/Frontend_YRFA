import style from "./CustomCard.module.scss";
import { CustomButton, Typography } from "..";

export const CustomCard = (props) => {
  const { link, option, data, reverse } = props;

  const check = option === "accent";
  return (
    <div
      className={`${check ? style.cardAccentBlock : style.cardDefaultBlock} ${reverse ? style.cardRevers : style}`}
    >
      <div className={check ? style.cardAccent : style.cardDefault}>
        <div className={check ? style.cardPieceAccent : style.cardPieceDefault}>
          {check ? (
            <div className={style.accentTitle}>
              <Typography variant="h4" color="blue500" weight="semibold">
                {data.h4}
              </Typography>
            </div>
          ) : (
            <Typography weight="semibold" color="blue500">
              {data.h4}
            </Typography>
          )}
          <Typography variant="bodySmall" color="black300">
            {data.p}
          </Typography>
        </div>
        {!check && (
          <CustomButton color="border" link={link}>
            {data.btn}
          </CustomButton>
        )}
      </div>
      <img
        className={`${check ? style.imgAccent : style.imgDefault} ${reverse ? style.imgLeftRadius : style.imgRightRadius}`}
        src={data.img}
        alt="card-img"
      />
    </div>
  );
};
