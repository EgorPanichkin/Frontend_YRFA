import { Container } from "@/shared";

import style from "./PostHistory.module.scss";
import { PostHistory } from "@/features";

export const PostHistoryPage = () => {
  return (
    <Container>
      <div className={style.postHistoryWrapper}>
        <PostHistory />
      </div>
    </Container>
  );
};
