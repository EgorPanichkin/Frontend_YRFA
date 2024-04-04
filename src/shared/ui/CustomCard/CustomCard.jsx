import style from "./CustomCard.module.scss";
import { CustomButton, Typography } from "..";

export const CustomCard = (props) => {
  const { link, type, data } = props;
  const checkReverse = !data.reverse;
  const check = type === "stock";
  return (
    <div
      className={`${check ? style.cardStockBlock : style.cardDefaultBlock} ${checkReverse ? style.cardRevers : style}`}
    >
      <div className={check ? style.cardStock : style.cardDefault}>
        <div className={check ? style.cardPieceStock : style.cardPieceDefault}>
          {check ? (
            <div className={style.stockTitle}>
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
        {check ? (
          <></>
        ) : (
          <CustomButton color="border" link={link}>
            {data.btn}
          </CustomButton>
        )}
      </div>
      <img
        className={`${check ? style.imgStock : style.imgDefault} ${checkReverse ? style.imgLeftRadius : style.imgRightRadius}`}
        src={data.img}
        alt="card-img"
      />
    </div>
  );
};
