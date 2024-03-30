import { Container } from "@/shared";

import style from "./AnalysesHistory.module.scss";
import { AnalysesHistory } from "@/features";

export const AnalysesHistoryPage = () => {
  return (
    <Container>
      <div className={style.analysesHistoryWrapper}>
        <AnalysesHistory />
      </div>
    </Container>
  );
};
