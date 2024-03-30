import { Container } from "@/shared";
import { AnalysesHistory } from "@/features";

import style from "./AnalysesHistory.module.scss";

export const AnalysesHistoryPage = () => {
  return (
    <Container>
      <div className={style.analysesHistoryWrapper}>
        <AnalysesHistory />
      </div>
    </Container>
  );
};
