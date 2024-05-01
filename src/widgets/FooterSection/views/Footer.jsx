import {
  Container,
  Facebook,
  FooterLogo,
  GeeksLogo,
  Instagram,
  Line,
  PhoneIcon,
  Typography,
  WhatsApp,
} from "@/shared";
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
          <div className={style.social}>
            <Typography variant="h7" color="dark">
              {t(data.list1.title)}
            </Typography>
            <Line color="blacklight" className={style.line} />
            <div className={style.socialLinks}>
              <a href="https://facebook.com">
                <Facebook />
              </a>
              <a href="https://instagram.com">
                <Instagram />
              </a>
            </div>
          </div>
          <div>
            <Typography variant="h7" color="dark">
              {t(data.list2.title)}
            </Typography>
            <Line color="blacklight" className={style.line} />
            {data.list2.items.map((item, index) => {
              return (
                <Link to={item.path} key={index} className={style.links}>
                  <Typography variant="body2" weight="semibold" color="dark">
                    {t(item.text)}
                  </Typography>
                </Link>
              );
            })}
          </div>
          <div>
            <Typography variant="h7" color="dark">
              {t(data.list3.title)}
            </Typography>
            <Line color="blacklight" className={style.line} />
            {data.list3.items.map((item, index) => {
              return (
                <Link to={item.path} key={index} className={style.links}>
                  <Typography variant="body2" color="dark">
                    {t(item.text)}
                  </Typography>
                </Link>
              );
            })}
          </div>
          <div>
            <Typography variant="h7" color="dark">
              {t(data.list4.title)}
            </Typography>
            <Line color="blacklight" className={style.line} />
            {data.list4.items.map((item, index) => {
              return (
                <Link to={item.path} key={index} className={style.links}>
                  <Typography variant="body2" color="dark">
                    {t(item.text)}
                  </Typography>
                </Link>
              );
            })}
          </div>
          <div>
            <div className={style.tel}>
              <Typography variant="h7" color="dark">
                {t(data.list5.title)}
              </Typography>
              <PhoneIcon color="dark" />
            </div>
            <Line color="blacklight" className={style.line} />
            <a href="tel:1-952-965-6121 x0456" className={style.links}>
              <Typography variant="body2" color="dark">
                1-952-965-6121 x0456
              </Typography>
            </a>
            <a href="tel:752-356-1881 x955" className={style.links}>
              <Typography variant="body2" color="dark">
                752-356-1881 x955
              </Typography>
            </a>
            <a href="tel:401-431-0582" className={style.links}>
              <Typography variant="body2" color="dark">
                401-431-0582
              </Typography>
            </a>
            <div className={style.tel}>
              <WhatsApp />
              <a href="tel:(230) 908-6360 x291" className={style.links}>
                <Typography variant="body2" color="dark">
                  (230) 908-6360 x291
                </Typography>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className={style.endFooter}>
        <div>
          <Typography variant="bodySmall" color="dark">
            {t(data.policy)}
          </Typography>
        </div>
        <div className={style.shortLine}></div>
        <div className={style.tel}>
          <a href="https://geeks.kg/geeks-pro" className={style.geeks}>
            <Typography variant="bodySmall" color="dark">
              Made by GeeksPro
            </Typography>
          </a>
          <GeeksLogo />
        </div>
      </div>
      <div className={style.disclamer}>
        <Typography variant="bodySmall" color="dark">
          {t(data.disclamer)}
        </Typography>
      </div>
    </footer>
  );
};
