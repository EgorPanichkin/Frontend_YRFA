import { Typography } from "@/shared";
import style from "./RehabilitationBody.module.scss";
import dataBody from "./data/data.json";
import { imageArray } from "@/shared/assets/images/rehabilitation/index";

export const RehabilitationBody = () => {
  return (
    <section aria-label="RehabilitationBody">
      <div className={style.rehabilitationBody}>
        {dataBody.map((service, index) => {
          const img = imageArray.find((item) => item.id === service.id);
          const reverse = index % 2 === 0 ? style.rehabilitationItem : "";
          return (
            <div
              className={reverse ? reverse : style.rehabilitationItemReverse}
              key={service.id}
            >
              <div>
                <img
                  src={img.src}
                  alt={service.title}
                  className={style.rehabilitationImage}
                />
              </div>
              <div className={style.rehabilitationContent}>
                <Typography variant="h4" weight="semibold" color="blue300">
                  {service.title}
                </Typography>
                <Typography variant="body" weight="regular" color="black400">
                  {service.description}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
