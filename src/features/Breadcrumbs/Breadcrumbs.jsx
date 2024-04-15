import { ChevronRight, HomeIcon } from "@/shared";
import style from "./Breadcrumbs.module.scss";
import { Link, useLocation } from "react-router-dom";

const data = {
  about: "О Компании",
  doctors: "Врачам",
  diognostic: "Диагностика",
  rehabilitation: "Реабилитация",
  FAQ: "FAQ",
  analysis: "Анализы",
  login: "Вход в кабинет",
  registration: "Регистрация",
  "sms-verification": "Восстановление пароля",
  verification: "Ввод кода",
  "password-reset": "Восстановление пароля",
  actual: "Акции",
  news: "Блог",
  vacancy: "Вакансии",
  directions: "Направления",
  "select-direction": "Выюор направления",
  lovz: "ЛОВЗ",
};

export const Breadcrumbs = () => {
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
        <HomeIcon className={style.homeIcon} />
        Главная
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <div className={style.link} key={`${name}${index}`}>
            <div className={style.chevron}>
              <ChevronRight className={style.chevronRight} />
            </div>
            <div>{data[name]}</div>
          </div>
        ) : (
          <Link className={style.link} key={`${name}${index}`} to={routeTo}>
            <div className={style.chevron}>
              <ChevronRight className={style.chevronRight} />
            </div>
            {data[name]}
          </Link>
        );
      })}
    </div>
  );
};
