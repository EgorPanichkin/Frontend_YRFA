import { ChevronRight, Typography } from "@/shared";
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
  "blog-more": "breadcrumbs.blog-more",
};

export const Breadcrumbs = () => {
  const { t } = useTranslation();
  const location = useLocation();
  let pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  const cleanPathnames = (pathnames) => {
    if (
      pathnames.length > 0 &&
      !isNaN(Number(pathnames[pathnames.length - 1]))
    ) {
      return pathnames.slice(0, -1);
    }
    return pathnames;
  };

  const cleanedPathnames = cleanPathnames(pathnames);

  if (cleanedPathnames.length > 1 && !isNaN(Number(cleanedPathnames[1]))) {
    pathnames = [`${pathnames[0]}/${pathnames[1]}`, ...pathnames.slice(2)];
  }

  const displayPathnames = cleanedPathnames.filter((segment) =>
    isNaN(Number(segment)),
  );

  if (displayPathnames.length === 0 || !data[displayPathnames[0]]) {
    return null;
  }
  return (
    <div className={style.breadcrumbs}>
      <Link to="/" className={style.homeLink}>
        <Typography variant="smallBody" weight="bold" color="primary">
          {t("breadcrumbs.home")}
        </Typography>
      </Link>
      {pathnames.map((name, index) => {
        const isLast = index === displayPathnames.length - 1;
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isNumericSegment = !isNaN(Number(name));
        const translationName = data[displayPathnames[index]]
          ? t(data[displayPathnames[index]])
          : name;
        if (isNumericSegment) {
          return null;
        }
        return isLast ? (
          <div className={style.link} key={index}>
            <div className={style.chevron}>
              <ChevronRight className={style.chevronRight} />
            </div>
            <Typography variant="smallBody" weight="bold">
              {translationName}
            </Typography>
          </div>
        ) : (
          <Link className={style.link} key={index} to={routeTo}>
            <div className={style.chevron}>
              <ChevronRight className={style.chevronRight} />
            </div>
            <Typography variant="smallBody" weight="bold" color="primary">
              {translationName}
            </Typography>
          </Link>
        );
      })}
    </div>
  );
};
