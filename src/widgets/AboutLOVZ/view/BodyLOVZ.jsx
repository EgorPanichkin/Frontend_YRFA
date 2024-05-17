import style from "./BodyLOVZ.module.scss";
import { Container, Typography } from "@/shared";

const data = {
  list1: [
    "Доступная среда: Безбарьерная инфраструктура, включая пандусы и лифты.",
    "Специализированные программы реабилитации: Индивидуальные планы восстановления и реабилитации.",
    "Комплексная медицинская помощь: Консультации узких специалистов, диагностика и лечение.",
    "Психологическая поддержка: Консультации психологов и психотерапевтов.",
  ],
  list2: [
    "Индивидуальный подход к каждому пациенту.",
    "Высококвалифицированные специалисты с опытом работы с ЛОВЗ.",
    "Современное оборудование для диагностики и лечения.",
    "Удобное расположение и доступность всех услуг.",
  ],
};

export const BodyLovz = () => {
  return (
    <>
      <Container>
        <div className={style.content}>
          <Typography variant="h4" weight="bold" color="primary">
            В клинике ЮРФА мы стремимся обеспечить высокий уровень медицинского
            обслуживания для людей с ограниченными возможностями здоровья
            (ЛОВЗ). Мы предлагаем:
          </Typography>
          <ul className={style.list}>
            {data.list1.map((item, index) => {
              return (
                <li key={index}>
                  <Typography>{item}</Typography>
                </li>
              );
            })}
          </ul>
          <Typography variant="h4" weight="bold" color="primary">
            Преимущества клиники ЮРФА для ЛОВЗ:
          </Typography>
          <ul className={style.list}>
            {data.list2.map((item, index) => {
              return (
                <li key={index}>
                  <Typography>{item}</Typography>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </>
  );
};
