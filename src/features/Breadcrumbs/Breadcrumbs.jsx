import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { Link, useLocation } from "react-router-dom";

import style from "./Breadcrumbs.module.scss";

export const Breadcrumbs = () => {
  const data = {
    about: "О Компании",
    "our-team": "Наша команда",
    diognostic: "Диагностика",
    FAQ: "FAQ",
    analysis: "Анализы",
    login: "Вход в кабинет",
    registration: "Регистрация",
    "sms-verification": "Восстановление пароля",
    verification: "Ввод кода",
    "password-reset": "Восстановление пароля",
    actual: "Акции",
    news: "Новости",
    vacancy: "Вакансии",
    directions: "Направления",
    "analysis-selector": "Выбор Анализа",
  };

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) {
    return;
  }

  if (data[pathnames[0]] == undefined) {
    return false;
  }

  return (
    <div className={style.breadcrumbs}>
      <Link to="/" className={style.homeLink}>
        <div className={style.icon}>
          <HomeIcon />
        </div>
        Главная
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <div className={style.link} key={`${name}${index}`}>
            <div className={style.chevron}>
              <ChevronRightIcon />
            </div>
            <div>{data[name]}</div>
          </div>
        ) : (
          <Link className={style.link} key={`${name}${index}`} to={routeTo}>
            <div className={style.chevron}>
              <ChevronRightIcon />
            </div>
            {data[name]}
          </Link>
        );
      })}
    </div>
  );
};
