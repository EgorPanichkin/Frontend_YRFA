import style from "./DropMenuServices.module.scss";
import { Typography } from "@/shared";

export const DropMenuServices = ({ activeIndex, menuRef }) => {
  const data = {
    title: "Название",
    a: [
      "МРТ",
      "КТ",
      "Контрастирование",
      "Цифровая рентгенография",
      "УЗИ",
      "Функциональная диагностика",
      "Нейрофункциональная диагностика",
      "Эндоскопия",
    ],
  };

  return (
    <div
      ref={menuRef}
      className={activeIndex ? style.dropMenuBlock : style.notSee}
    >
      <div className={style.title}>
        <Typography variant="h3" weight="bold" color="blue400">
          {data.title}
        </Typography>
      </div>
      <ul className={style.links}>
        {data.a.map((items, index) => (
          <li key={index}>
            <a href="">{items}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
