import { Container } from "@/shared";
import { CategorysList, ReusedHero } from "@/widgets";
import data from "./SelectDirectionPage.json";
import { baseGetRequest } from "@/shared/api/getResponce";
import { useEffect, useState } from "react";

export const SelectDirectionPage = ({ requestParameter }) => {
  const [serverData, setServerData] = useState();

  useEffect(() => {
    return async () => {
      const response = await baseGetRequest(`/servises/${requestParameter}`);
      setServerData(response);
    };
  }, [requestParameter]);

  return (
    <>
      <ReusedHero heroData={data} />
      <Container>
        <CategorysList list={serverData} />
      </Container>
    </>
  );
};
