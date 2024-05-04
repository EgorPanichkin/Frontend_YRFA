import { ReusedTextSection } from "@/shared";
import style from "./RehabilitationBody.module.scss";
import dataBody from "./data/data.json";
import { imageArray } from "@/shared/assets/images/rehabilitation/index";

export const RehabilitationBody = () => {
  return (
    <section aria-label="RehabilitationBody">
      <div className={style.rehabilitationBody}>
        {dataBody.map((service, index) => {
          const img = imageArray.find((item) => item.id === service.id);
          return (
            <ReusedTextSection
              image={img.src}
              data={{
                header: service.title,
                body: service.rehabilitation_description,
              }}
              reverse={!(index % 2 === 0)}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};
