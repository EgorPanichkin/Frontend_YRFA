import { Container } from "@/shared";
import { PostHistory } from "@/features";

import style from "./PostHistory.module.scss";

export const PostHistoryPage = () => {
  return (
    <Container>
      <div className={style.postHistoryWrapper}>
        <PostHistory />
      </div>
    </Container>
  );
};
