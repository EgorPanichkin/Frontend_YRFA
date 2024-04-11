import style from "./ReusedHero.module.scss";
import { Typography, CustomButton } from "@/shared";

export const ReusedHero = (props) => {
  const { title, textButton, body, img } = props;
  const heroStyle = {
    backgroundImage: `url(${img})`,
  };
  return (
    <section className={style.hero} style={img ? heroStyle : null}>
      <div className={style.textBlock}>
        <Typography variant="h1" weight="bold" color="white">
          {title}
        </Typography>
        <Typography color="white" variant="body">
          {body}
        </Typography>
        <CustomButton className={style.btnBlurImg} color="orange">
          <Typography variant="h10" color="white" weight="semiBold">
            {textButton}
          </Typography>
        </CustomButton>
      </div>
    </section>
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
