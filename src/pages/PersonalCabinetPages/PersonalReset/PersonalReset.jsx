import { Container } from "@/shared";
import { PersonalReset } from "@/features";

import style from "./PersonalReset.module.scss";

export const PersonalResetPage = () => {
  return (
    <Container>
      <div className={style.personalResetWrapper}>
        <PersonalReset />
      </div>
    </Container>
  );
};
