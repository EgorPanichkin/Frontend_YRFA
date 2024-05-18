import { Typography } from "../Typography";

import style from "./ReusedTextSection.module.scss";

export const ReusedTextSection = (props) => {
  const { image, data, reverse = false } = props;

  return (
    <section className={`${style.section} ${reverse ? style.reverse : null}`}>
      {!reverse && image && (
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
        {data.list
          ? data.list.map((section, index) => {
              return (
                <div key={index}>
                  <Typography
                    variant="h4"
                    weight="bold"
                    className={style.header}
                  >
                    {section?.header}
                  </Typography>
                  <Typography variant="h5" color="primary">
                    {section?.description}
                  </Typography>
                  <Typography color="light" className={style.body}>
                    {section?.body}
                  </Typography>
                </div>
              );
            })
          : null}
      </div>
      {reverse && image && (
        <div className={style.imageWrapper}>
          <img src={image} alt="image" />
        </div>
      )}
    </section>
  );
};
