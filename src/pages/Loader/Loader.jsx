import { Container, Loader } from "@/shared";
import style from "./Loader.module.scss";
import { useLayoutEffect } from "react";

export const LoaderPage = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Container>
      <div className={style.loaderWrapper}>
        <Loader />
      </div>
    </Container>
  );
};
