import { CustomButton, Typography } from "@/shared";
import imageLOVZ from "@/shared/assets/images/lovz/imgLOVZ.jpg";
import style from "./BlurImg.module.scss";

export const BlurImg = (props) => {
  const { title, textButton, body } = props;
  return (
    <section
      style={{ backgroundImage: `url(${imageLOVZ})` }}
      className={style.hero}
    >
      <div className={style.textBlock}>
        <Typography variant="h1" weight="bold" color="white">
          {title}
        </Typography>
        <Typography color="white" variant="body">
          {body}
        </Typography>
        <CustomButton className={style.btnBlurImg} color="orange">
          {textButton}
        </CustomButton>
      </div>
    </section>
  );
};
