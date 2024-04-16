import style from "./CustomCard.module.scss";
import { CustomButton, Typography } from "..";

export const CustomCard = (props) => {
  const { link, option, data, reverse, onClick } = props;

  const check = option === "accent";

  return (
    <div
      onClick={onClick}
      className={`${check ? style.cardAccentBlock : style.cardDefaultBlock} ${reverse ? style.cardRevers : style}`}
    >
      <div className={check ? style.cardAccent : style.cardDefault}>
        <div className={check ? style.cardPieceAccent : style.cardPieceDefault}>
          {check ? (
            <div className={style.accentTitle}>
              <Typography variant="h4" color="blue500" weight="semibold">
                {data.title}
              </Typography>
            </div>
          ) : (
            <Typography weight="semibold" color="blue500">
              {data.button_title}
            </Typography>
          )}
          <Typography variant="bodySmall" color="black300">
            {data.description}
          </Typography>
        </div>
        {!check && (
          <CustomButton color="border" link={link}>
            aaa
          </CustomButton>
        )}
      </div>
      <img
        className={`${check ? style.imgAccent : style.imgDefault} ${reverse ? style.imgLeftRadius : style.imgRightRadius}`}
        src={data.image}
        alt="card-img"
      />
    </div>
  );
};
