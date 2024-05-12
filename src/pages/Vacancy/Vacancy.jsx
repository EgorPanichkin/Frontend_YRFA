import { Container, Typography, VacancyCard } from "@/shared";
import style from "./Vacancy.module.scss";
import { vacancies } from "./db.json";
import { CVForm } from "@/features";
// import { useLoaderData } from "react-router-dom";

export const Vacancy = () => {
  // const { vacancy } = useLoaderData();

  return (
    <>
      <Container>
        <Typography
          className={style.text}
          variant="h1"
          weight="bold"
          color="black500"
        >
          Работа и вакансии в Бишкеке
        </Typography>
        <div className={style.inputLabel}>
          <CVForm />
        </div>
        <div className={style.box}>
          {vacancies?.map((vacancy) => (
            <VacancyCard key={vacancy.id} {...vacancy} />
          ))}
        </div>
      </Container>
    </>
  );
};
