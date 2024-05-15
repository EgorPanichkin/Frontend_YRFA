import { Container, FooterLogo, GeeksLogo, Line, Typography } from "@/shared";
import style from "./Footer.module.scss";
import { data } from "../api/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.section}>
          <FooterLogo />
          <div className={style.navigation}>
            {data.nav.map((item, index) => {
              return (
                <div key={index}>
                  <Typography
                    variant="h6"
                    weight="bold"
                    color="dark"
                    className={style.title}
                  >
                    {item.title}
                  </Typography>
                  <Line color="primary" className={style.line} />
                  {item.title === "Соц.сети" &&
                    item.links.map((link, index) => {
                      return (
                        <a href={link.path} className={style.link} key={index}>
                          <img src={data.icons[index]} alt="icon" />
                          <Typography color="dark">{link.name}</Typography>
                        </a>
                      );
                    })}
                  {item.title === "Контакты" &&
                    item.links.map((link, index) => {
                      return (
                        <a
                          href={`tel:${link.path}`}
                          className={style.link}
                          key={index}
                        >
                          {index === item.links.length - 1 ? (
                            <img src={data.icons[3]} alt="icon" />
                          ) : (
                            <img src={data.icons[2]} alt="icon" />
                          )}
                          <Typography color="dark">{link.name}</Typography>
                        </a>
                      );
                    })}
                  {item.title !== "Соц.сети" &&
                    item.title !== "Контакты" &&
                    item.links.map((link, index) => {
                      return (
                        <Link to={link.path} className={style.link} key={index}>
                          <Typography color="dark">{link.name}</Typography>
                        </Link>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.endFooter}>
          <div className={style.policy}>
            <div>
              <Typography variant="bodySmall" color="dark">
                {t(data.policy)}
              </Typography>
            </div>
            <div className={style.shortLine}></div>
            <div className={style.link}>
              <a href="https://geeks.kg/geeks-pro" className={style.geeks}>
                <Typography variant="bodySmall" color="dark">
                  Made by GeeksPro
                </Typography>
              </a>
              <GeeksLogo />
            </div>
          </div>
          <div className={style.disclamer}>
            <Typography variant="smallBody" className={style.disclamerText}>
              {t(data.disclamer)}
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
};
