import { Container, Loader } from "@/shared";
import style from "./Loader.module.scss";

export const LoaderPage = () => {
  return (
    <Container>
      <div className={style.loaderWrapper}>
        <Loader />
      </div>
    </Container>
  );
};
