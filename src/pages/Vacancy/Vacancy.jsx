import { Container, Typography, VacancyCard } from "@/shared";
import style from "./Vacancy.module.scss";
// import { vacancies } from "./db.json";
import { useLoaderData } from "react-router-dom";

export const Vacancy = () => {
  const { vacancy } = useLoaderData();

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
        <Typography
          className={style.text}
          variant="h4"
          weight="bold"
          color="blue400"
        >
          По профессиям
        </Typography>
        <div className={style.box}>
          {vacancy?.map((vacancy) => (
            <VacancyCard key={vacancy.id} {...vacancy} />
          ))}
        </div>
      </Container>
    </>
  );
};
