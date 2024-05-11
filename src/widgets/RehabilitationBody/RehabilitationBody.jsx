import { ReusedTextSection } from "@/shared";
import style from "./RehabilitationBody.module.scss";
import { useLoaderData } from "react-router-dom";

export const RehabilitationBody = () => {
  const results = useLoaderData();

  return (
    <section aria-label="RehabilitationBody">
      <div className={style.rehabilitationBody}>
        {results.map((service, index) => {
          return (
            <ReusedTextSection
              image={service.image}
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
