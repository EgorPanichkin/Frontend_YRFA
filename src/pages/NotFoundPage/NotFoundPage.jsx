import { Container, HomeIcon, Typography } from "@/shared";
import style from "./NotFoundPage.module.scss";
import errorImg from "../../shared/assets/images/notFound.svg";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <Container>
      <div className={style.errorWrapper}>
        <div className={style.errorContent}>
          <img className={style.errorImg} src={errorImg} alt="404" />
          <Typography variant="h3" weight="bold" color="blue500" className={style.errorTitle}>
            Ой, кажется возникла ошибка
          </Typography>
          <Typography variant="body2" weight="semibold" color="orange300" className={style.errorSubTtitle}>
            К сожалению страница не найдена
          </Typography>
          <Link to={"/"} className={style.errorBtn}>
            <HomeIcon fill="white" />
            <Typography variant="bodySmall" weight="bold" color="white" className={style.errorBtnText}>
              На главную
            </Typography>
          </Link>
        </div>
      </div>
    </Container>
  );
};
