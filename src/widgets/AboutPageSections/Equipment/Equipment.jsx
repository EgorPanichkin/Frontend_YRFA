import { EquipmentCard, Typography } from "@/shared";
import style from "./Equipment.module.scss";
import { useLoaderData } from "react-router-dom";

export const Equipment = () => {
  const { equipment } = useLoaderData();

  return (
    <>
      <Typography variant="h3" weight="bold">
        Оснащение
      </Typography>
      <div className={style.cards}>
        {equipment.map((item) => {
          return (
            <EquipmentCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </>
  );
};
