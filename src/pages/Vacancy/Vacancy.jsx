import { Container, Typography, VacancyCard } from "@/shared";
import style from "./Vacancy.module.scss";
// import { vacancies } from "./db.json";
import { useLoaderData } from "react-router-dom";

export const Vacancy = () => {
  const data = useLoaderData();
  console.log(data);

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
          {data.map((vacancy, index) => (
            <VacancyCard
              key={index}
              title={vacancy.title}
              salary={vacancy.salary}
              vacanciesCount={vacancy.vacanciesCount}
            />
          ))}
        </div>
      </Container>
    </>
  );
};
