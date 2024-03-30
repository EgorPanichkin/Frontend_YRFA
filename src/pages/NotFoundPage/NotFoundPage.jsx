import { Container, HomeIcon, Typography } from "@/shared";
import style from "./NotFoundPage.module.scss";
import errorImg from "../../shared/assets/images/notFound.png";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <Container>
      <div className={style.errorWrapper}>
        <div className={style.errorContent}>
          <img className={style.errorImg} src={errorImg} alt="404" />
          <Typography variant="h2" weight="700" className={style.errorTitle}>
            Ой, кажется возникла ошибка
          </Typography>
          <Typography
            variant="span"
            weight="600"
            className={style.errorSubTtitle}
          >
            К сожалению страница не найдена
          </Typography>
          <Link to={"/"} className={style.errorBtn}>
            <HomeIcon color="white" width={24} />
            <Typography
              variant="span"
              weight="700"
              className={style.errorBtnText}
            >
              На главную
            </Typography>
          </Link>
        </div>
      </div>
    </Container>
  );
};
