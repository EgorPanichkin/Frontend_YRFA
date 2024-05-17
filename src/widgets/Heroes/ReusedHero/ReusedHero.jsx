import style from "./ReusedHero.module.scss";
import { Typography, CustomButton } from "@/shared";

export const ReusedHero = (props) => {
  const { title, textButton, body, img, className } = props;
  const heroStyle = {
    backgroundImage: `url(${img})`,
  };
  return (
    <>
      <section
        className={`${style.hero} ${className}`}
        style={img ? heroStyle : null}
      ></section>
      <div className={style.textBlock}>
        <Typography variant="h1" weight="bold" color="black">
          {title}
        </Typography>
        <Typography color="black" variant="body">
          {body}
        </Typography>
        <CustomButton className={style.btnBlurImg} variant="orange">
          <Typography variant="h10" color="white" weight="semiBold">
            {textButton}
          </Typography>
        </CustomButton>
      </div>
    </>
  );
};
