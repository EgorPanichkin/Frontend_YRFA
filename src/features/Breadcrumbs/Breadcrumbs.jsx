import { ChevronRight, Container, Typography } from "@/shared";
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
  "current-service": "breadcrumbs.current-service",
  lovz: "breadcrumbs.lovz",
  search: "breadcrumbs.search",
  charity: "breadcrumbs.charity",
  "personal-account": "breadcrumbs.personal-account",
  "post-history": "breadcrumbs.post-history",
  "analyses-history": "breadcrumbs.analyses-history",
  "personal-reset": "breadcrumbs.personal-reset",
  doctors_articles: "breadcrumbs.doctors_articles",
  events: "breadcrumbs.events",
  "charity-more": "breadcrumbs.charity-more",
};

export const Breadcrumbs = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log(pathnames);

  const filteredPathnames = {};
  for (const key in pathnames) {
    if (Object.prototype.hasOwnProperty.call(pathnames, key)) {
      const parsedKey = parseInt(key, 10);
      if (parsedKey % 2 !== 0) {
        filteredPathnames[key] = pathnames[key];
        if (/\d/.test(key)) {
          filteredPathnames[key] = key;
        }
      }
    }
  }

  const isNumeric = (str) => {
    return /^\d+$/.test(str);
  };

  if (pathnames.length === 0) {
    return null;
  }

  if (data[pathnames[0]] == undefined) {
    return false;
  }

  const filteredPathnamess = pathnames.filter((name) => !isNumeric(name));

  if (filteredPathnamess.length === 0) {
    return null;
  }

  const numericPathnames = pathnames.map((name) => {
    const parsed = parseInt(name, 10);
    return isNaN(parsed) ? name : parsed;
  });
  return (
    <Container>
      <div className={style.breadcrumbs}>
        <Link to="/" className={style.homeLink}>
          <Typography variant="smallBody" weight="bold" color="primary">
            {t("breadcrumbs.home")}
          </Typography>
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === numericPathnames.length - 1;
          const filterNumberObj =
            Object.keys(filteredPathnames).length > 0
              ? routeTo
              : `${name}/${Object.keys(filteredPathnames)}`;
          const translationName = t(data[name]).replace(/\d+/g, "").trim();
          if (!translationName) {
            return null;
          }
          return isLast ? (
            <div className={style.link} key={`${name}${index}`}>
              <div className={style.chevron}>
                <ChevronRight className={style.chevronRight} />
              </div>
              <Typography
                variant="smallBody"
                weight="bold"
                color={isLast ? "" : "primary"}
              >
                {translationName}
              </Typography>
            </div>
          ) : (
            <Link
              className={style.link}
              key={`${name}${index}`}
              to={filterNumberObj}
            >
              <div className={style.chevron}>
                <ChevronRight className={style.chevronRight} />
              </div>
              <Typography
                variant="smallBody"
                weight="bold"
                color={isLast ? " " : "primary"}
              >
                {translationName}
              </Typography>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};
