import { PageNavBar } from "@/features";
import { ArticleBody } from "@/shared/ui/ArticleBody/ArticleBody";
import { ReusedHero } from "@/widgets";
import { useLoaderData } from "react-router-dom";

export const Article = () => {
  const data = useLoaderData();

  return (
    <>
      <ReusedHero
        title={data.title}
        textButton="Запись на прием"
        body="Lorem ipsum dolor sit amet consectetur. Non dignissim tempor nunc amet pretium pretium enim sed turpis. Id aliquet mauris in condimentum non. Ornare dui vulputate habitasse urna et nec volutpat nibh. Ultricies nisl hendrerit scelerisque egestas. Praesent massa aliquet aliquam fusce vitae amet habitant. Mi sed congue purus arcu. Iaculis pulvinar nibh eget semper vestibulum ultricies. Sed tempus sit non ac pellentesque."
        img={data.image}
      />
      <PageNavBar
        links={[
          { text: "Заголовок1", href: "#Заголовок1" },
          { text: "Заголовок2", href: "#Заголовок2" },
          { text: "Заголовок3", href: "#Заголовок3" },
        ]}
      />
      <ArticleBody />
    </>
  );
};
