import { useLoaderData } from "react-router-dom";
import style from "./BranchesSection.module.scss";
import { BrancheCard, Typography } from "@/shared";

export const BranchesSection = ({ branchesData }) => {
  const { branches } = useLoaderData();
  console.log(branches);
  
  return (
    <div className={style.branchesSection}>
      <Typography variant="h2" weight="extraBold">
        {branchesData.h2}
      </Typography>

      <div className={style.cardBlock}>
        <BrancheCard cardData={branchesData} />
        <BrancheCard cardData={branchesData} />
        <BrancheCard cardData={branchesData} />
      </div>
    </div>
  );
};
