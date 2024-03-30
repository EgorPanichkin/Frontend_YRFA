import { Container } from "@/shared";
import style from "./smsPage.module.sass";
import { SmsForm } from "@/features/passwordRecovery";

export const SmsPage = () => {
  return (
    <Container>
      <div className={style.smsWrapper}>
        <SmsForm />
      </div>
    </Container>
  );
};
