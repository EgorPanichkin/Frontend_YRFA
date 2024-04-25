import { PageNavBar } from "@/features";
import { ArticleBody } from "@/shared/ui/ArticleBody/ArticleBody";
import { ReusedHero } from "@/widgets";

export const FinalServicePage = () => {
  return (
    <>
      <ReusedHero />
      <PageNavBar
        links={[
          { text: "link", href: "#qwerty" },
          { text: "link", href: "#qwerty" },
          { text: "link", href: "#qwerty" },
        ]}
      />
      <ArticleBody />
    </>
  );
};
