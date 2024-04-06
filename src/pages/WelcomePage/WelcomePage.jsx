import { Container, Typography } from "@/shared";
import style from "./WelcomePage.module.scss";
import { CityCard } from "@/features";

export const WelcomePage = () => {
  const data = {
    bishkek: {
      city: "Bishkek",
      title: "Бишкек",
      text: "Lorem ipsum dolor sit amet consectetur. Nisi mattis aenean platea sed praesent non porta velit. In laoreet nisi mollis sodales elit nunc. Non lectus vitae aliquet maecenas pellentesque vestibulum. Cras ultrices varius vestibulum tempus purus.",
      image:
        "https://static.tildacdn.com/tild3365-3763-4531-b663-323437653763/2754296452.jpg",
    },
    osh: {
      city: "Osh",
      title: "Ош",
      text: "Lorem ipsum dolor sit amet consectetur. Nisi mattis aenean platea sed praesent non porta velit. In laoreet nisi mollis sodales elit nunc. Non lectus vitae aliquet maecenas pellentesque vestibulum. Cras ultrices varius vestibulum tempus purus.",
      image:
        "https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kyrgyzstan-3.jpg",
    },
    jalalAbad: {
      city: "Jalal-Abad",
      title: "Джалал-Абад",
      text: "Lorem ipsum dolor sit amet consectetur. Nisi mattis aenean platea sed praesent non porta velit. In laoreet nisi mollis sodales elit nunc. Non lectus vitae aliquet maecenas pellentesque vestibulum. Cras ultrices varius vestibulum tempus purus.",
      image:
        "https://2.bp.blogspot.com/-oDGjWCmlMuc/VyxfMMatcqI/AAAAAAAAHnk/5sl1fFVG69MgQRYX_wjjBItCToThF0WPgCLcB/s1600/0_10ee9c_b44ec43c_orig.jpg",
    },
  };

  return (
    <div className={style.wrapper}>
      <Container>
        <div className={style.text}>
          <Typography variant={"h1"} weight={"extraBold"} color={"blue500"}>
            Добро пожаловать!
          </Typography>
          <Typography variant={"h4"} weight={"semibold"} color={"black300"}>
            Выберите город
          </Typography>
        </div>

        <div className={style.cards}>
          <CityCard data={data.bishkek} />
          <CityCard data={data.osh} />
          <CityCard data={data.jalalAbad} />
        </div>
      </Container>
    </div>
  );
};
