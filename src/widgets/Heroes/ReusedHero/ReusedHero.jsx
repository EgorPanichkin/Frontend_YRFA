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
        <CustomButton className={style.btnBlurImg} color="orange">
          <Typography variant="h10" color="white" weight="semiBold">
            {textButton}
          </Typography>
        </CustomButton>
      </div>
    </>
  );
};

// export const ReusedHero = ({ heroData }) => {
//   return (
//     <section className={style.hero}>
//       <div className={style.textBlock}>
//         <Typography variant="h1" weight="bold" color="white">
//           {heroData?.header}
//         </Typography>
//         <Typography color="white">{heroData?.text}</Typography>
//         <SignUpButton>Записаться на прием</SignUpButton>
//       </div>
//     </section>
//   );
// };
