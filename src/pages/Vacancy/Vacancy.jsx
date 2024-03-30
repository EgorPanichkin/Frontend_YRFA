import { Container, Typography, VacancyCard } from "@/shared";
import style from "./Vacancy.module.scss";
import { vacancies } from "./db.json";

export const Vacancy = () => {
  return (
    <div>
      <Container>
        <Typography className={style.text} variant="h2" weight="emibold">
          Работа и вакансии в Бишкеке
        </Typography>
        <Typography
          className={style.text}
          variant="h4"
          weight="regular"
          color="gray"
        >
          По профессиям
        </Typography>
        <div className={style.box}>
          {vacancies.map((vacancy, index) => (
            <VacancyCard
              key={index}
              title={vacancy.title}
              salary={vacancy.salary}
              vacanciesCount={vacancy.vacanciesCount}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
