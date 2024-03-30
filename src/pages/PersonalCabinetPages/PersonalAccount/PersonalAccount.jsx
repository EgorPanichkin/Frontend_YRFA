import { Container } from "@/shared";
import { PersonalAccount } from "@/features";

import style from "./PersonalAccount.module.scss";

export const PersonalAccountPage = () => {
  return (
    <Container>
      <div className={style.personalAccountWrapper}>
        <PersonalAccount />
      </div>
    </Container>
  );
};
