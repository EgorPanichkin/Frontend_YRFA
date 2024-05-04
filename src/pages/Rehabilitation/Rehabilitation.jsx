import { Container } from "@/shared";
import { HeroRehabilitation, RehabilitationBody } from "@/widgets";
import style from "./Rehabilitation.module.scss";

export const RehabilitationPage = () => {
  return (
    <Container>
      <div className={style.rehabilitation}>
        <HeroRehabilitation />
        <RehabilitationBody />
      </div>
    </Container>
  );
};
