import { Container } from "@/shared";

import style from "./PersonalAccount.module.scss";
import { PersonalAccount } from "@/features/Personal/PersonalAccount/PersonalAccount";

export const PersonalAccountPage = () => {
  return (
    <Container>
      <div className={style.personalAccountWrapper}>
        <PersonalAccount />
      </div>
    </Container>
  );
};
