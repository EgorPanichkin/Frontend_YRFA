import style from "./HeroHome.module.scss";
import { Slider } from "@/features";
import { ActualCard } from "@/shared";
import { useLoaderData } from "react-router-dom";

export const HeroHome = () => {
  const { actual } = useLoaderData();

  return (
    <div className={style.blockHero}>
      <div className={style.slider}>
        <Slider />
      </div>

      {actual.map((item, index) => {
        return (
          index < 2 && (
            <div className={style.actualCards} key={index}>
              <ActualCard
                title={item.title}
                expiration={item.expiration}
                description={item.description}
                imgSrc={item.image}
                reverse={index % 2 === 0}
              />
            </div>
          )
        );
      })}
    </div>
  );
};
