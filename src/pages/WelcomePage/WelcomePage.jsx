import { Container, LocationCard, Typography } from "@/shared";
import style from "./WelcomePage.module.scss";
import { useNavigation } from "react-router-dom";
import { LoaderPage } from "..";

export const WelcomePage = () => {
  const data = {
    bishkek: {
      city: "Bishkek",
      title: "Бишкек",
      image:
        "https://static.tildacdn.com/tild3365-3763-4531-b663-323437653763/2754296452.jpg",
    },
    osh: {
      city: "Osh",
      title: "Ош",
      image:
        "https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kyrgyzstan-3.jpg",
    },
    jalalAbad: {
      city: "Jalal-Abad",
      title: "Джалал-Абад",
      image:
        "https://2.bp.blogspot.com/-oDGjWCmlMuc/VyxfMMatcqI/AAAAAAAAHnk/5sl1fFVG69MgQRYX_wjjBItCToThF0WPgCLcB/s1600/0_10ee9c_b44ec43c_orig.jpg",
    },
  };

  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <LoaderPage />}
      {navigation.state === "idle" && (
        <div className={style.wrapper}>
          <Container>
            <div className={style.text}>
              <Typography variant="h1" weight="bold">
                Добро пожаловать!
              </Typography>
              <Typography variant="h4" color="light" className={style.title}>
                Выберите город
              </Typography>
              <Typography color="warning">
                Услуги могут отличаться в разных городах
              </Typography>
            </div>

            <div className={style.cards}>
              <LocationCard data={data.bishkek} />
              <LocationCard data={data.osh} />
              <LocationCard data={data.jalalAbad} />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};
