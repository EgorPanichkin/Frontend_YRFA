import { CustomButton, HomeIcon, Typography } from "@/shared";
import style from "./ErrorPage.module.scss";
import image from "@/shared/assets/images/Error.png";
import { Footer, Header } from "@/widgets";

export const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <div className={style.imageWrapper}>
          <img src={image} alt="Error" />
        </div>
        <Typography variant="h3" weight="bold" className={style.text}>
          Упс, кажется что-то пошло не так...
        </Typography>
        <CustomButton link="/" className={style.button}>
          <HomeIcon fill="#ffff" />
          На главную
        </CustomButton>
      </div>
      <Footer />
    </>
  );
};
