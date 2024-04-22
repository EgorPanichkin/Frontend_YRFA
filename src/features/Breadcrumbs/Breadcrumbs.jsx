import { ChevronRight, HomeIcon } from "@/shared";
import style from "./Breadcrumbs.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const data = {
  about: "breadcrumbs.about",
  doctors: "breadcrumbs.doctors",
  diognostic: "breadcrumbs.diognostic",
  rehabilitation: "breadcrumbs.rehabilitation",
  FAQ: "breadcrumbs.FAQ",
  analysis: "breadcrumbs.analysis",
  login: "breadcrumbs.login",
  registration: "breadcrumbs.registration",
  "sms-verification": "breadcrumbs.sms-verification",
  verification: "breadcrumbs.verification",
  "password-reset": "breadcrumbs.password-reset",
  actual: "breadcrumbs.actual",
  news: "breadcrumbs.news",
  vacancy: "breadcrumbs.vacancy",
  directions: "breadcrumbs.directions",
  "select-direction": "breadcrumbs.select-direction",
  lovz: "breadcrumbs.lovz",
  charity: "breadcrumbs.charity",
};

export const Breadcrumbs = () => {
  const { t } = useTranslation();
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
        {t("breadcrumbs.home")}
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const translationName = t(data[name]);
        return isLast ? (
          <div className={style.link} key={`${name}${index}`}>
            <div className={style.chevron}>
              <ChevronRight className={style.chevronRight} />
            </div>
            <div>{translationName}</div>
          </div>
        ) : (
          <Link className={style.link} key={`${name}${index}`} to={routeTo}>
            <div className={style.chevron}>
              <ChevronRight className={style.chevronRight} />
            </div>
            {translationName}
          </Link>
        );
      })}
    </div>
  );
};
