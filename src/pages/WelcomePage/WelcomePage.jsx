import { Container, LocationCard, Typography } from "@/shared";
import style from "./WelcomePage.module.scss";
import { useNavigation } from "react-router-dom";
import { LoaderPage } from "..";
import { useEffect } from "react";
import { fetchRegions, selectLocation } from "@/app/store/locationSlice";
import { useDispatch, useSelector } from "react-redux";

export const WelcomePage = () => {
  const dispatch = useDispatch();

  const regions = useSelector(selectLocation);

  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);

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
              {regions.map((region) => {
                return <LocationCard data={region} key={region.id} />;
              })}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};
