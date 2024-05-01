import { Typography } from "../Typography";

import style from "./ReusedTextSection.module.scss";

export const ReusedTextSection = (props) => {
  const { image, data, reverse = false } = props;

  return (
    <section className={`${style.section} ${reverse ? style.reverse : null}`}>
      {!reverse && (
        <div className={style.imageWrapper}>
          <img src={image} alt="image" />
        </div>
      )}
      <div className={style.text}>
        <Typography variant="h4" weight="bold" className={style.header}>
          {data?.header}
        </Typography>
        <Typography variant="h5" color="primary">
          {data?.description}
        </Typography>
        <Typography color="light" className={style.body}>
          {data?.body}
        </Typography>
      </div>
      {reverse && (
        <div className={style.imageWrapper}>
          <img src={image} alt="image" />
        </div>
      )}
    </section>
  );
};
