import { useLoaderData } from "react-router-dom";
import style from "./BranchesSection.module.scss";
import { BranchesCard, Typography } from "@/shared";

export const BranchesSection = ({ branchesData }) => {
  const { branches } = useLoaderData();

  return (
    <div className={style.branchesSection}>
      <Typography variant="h2" weight="bold">
        {branchesData.h2}
      </Typography>

      <div className={style.cardBlock}>
        {branches.map((item, index) => {
          return <BranchesCard cardData={item} key={index} />;
        })}
      </div>
    </div>
  );
};
