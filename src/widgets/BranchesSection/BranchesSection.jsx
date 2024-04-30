import style from "./BranchesSection.module.scss";
import { Typography } from "@/shared";

export const BranchesSection = ({ branchesData }) => {
  // FIX ME
  // const { branches } = useLoaderData();

  return (
    <div className={style.branchesSection}>
      <Typography variant="h2" weight="extraBold">
        {branchesData.h2}
      </Typography>

      <div className={style.cardBlock}>
        {/* FIX_ME */}
        {/* <BrancheCard cardData={branchesData} />
        <BrancheCard cardData={branchesData} />
        <BrancheCard cardData={branchesData} /> */}
      </div>
    </div>
  );
};
