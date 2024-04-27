import { EquipCard, Typography } from "@/shared";
import style from "./Equipment.module.scss";
import { useLoaderData } from "react-router-dom";

export const Equipment = () => {
  const { equipment } = useLoaderData();

  return (
    <>
      <Typography variant="h2" weight="extraBold">
        Оснащение
      </Typography>
      <div className={style.wrapper}>
        <div className={style.slider}>
          {equipment.map((item, index) => (
            <EquipCard
              key={index}
              title={item.title}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};
