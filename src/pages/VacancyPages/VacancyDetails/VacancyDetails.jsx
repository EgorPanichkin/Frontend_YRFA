import style from "./VacancyDetails.module.scss";
import { Container, Typography } from "@/shared";
import { CVForm } from "@/features";
import { useLoaderData } from "react-router-dom";

export const VacancyDetails = () => {
  const data = useLoaderData();

  return (
    <>
      <Container>
        <Typography
          color="primary"
          variant="h2"
          weight="bold"
          className={style.title}
        >
          {data.title}
        </Typography>
        <div className={style.inputLabel}>
          <CVForm />
        </div>
        <div className={style.details}>
          <Typography variant="h2" weight="bold">
            Требования
          </Typography>
          <Typography variant="body" color="light" className={style.text}>
            {data.description}
          </Typography>
        </div>
        <div className={style.details}>
          <Typography variant="h2" weight="bold">
            Опыт работы
          </Typography>
          <Typography variant="body" color="light" className={style.text}>
            {data.work_experience}
          </Typography>
        </div>
        <div className={style.details}>
          <Typography variant="h2" weight="bold">
            Подробная информация
          </Typography>
          <Typography variant="body" color="light" className={style.text}>
            {data.requirements}
          </Typography>
        </div>
      </Container>
    </>
  );
};
