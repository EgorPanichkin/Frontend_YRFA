import {
  AddFile,
  Container,
  CustomButton,
  Download,
  Typography,
  VacancyCard,
} from "@/shared";
import style from "./Vacancy.module.scss";
import { vacancies } from "./db.json";
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
          <label className={style.addFile} htmlFor="file">
            Загрузить файлы
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            multiple
            className={style.none}
          />
          <label className={style.secondLabel} htmlFor="file">
            {" "}
            <Download /> Загрузить сюда файлы
          </label>
        </div>
        <CustomButton className={style.btn}>
          Отправить резюме
          <AddFile />
        </CustomButton>
        <div className={style.box}>
          {vacancies?.map((vacancy) => (
            <VacancyCard key={vacancy.id} {...vacancy} />
          ))}
        </div>
      </Container>
    </>
  );
};
