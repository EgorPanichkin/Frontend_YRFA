import { useLoaderData, useParams } from "react-router-dom";
import style from "./CategoryList.module.scss";
import { SubCategoryCard } from "@/shared/ui/SubCategoryCard";

export const CategorysList = () => {
  const { idCategory } = useParams();
  const { services, subCategorys } = useLoaderData();

  const filteredServices = services.filter(
    (service) => service.category === Number(idCategory),
  );

  const filteredSubCategorys = subCategorys.filter(
    (subCategory) => subCategory.category === Number(idCategory),
  );

  return (
    <div className={style.cardList}>
      {filteredSubCategorys?.map((item, index) => {
        return <SubCategoryCard data={item} key={index} />;
      })}
      {filteredServices?.map((item, index) => {
        return <SubCategoryCard data={item} key={index} />;
      })}
    </div>
  );
};
