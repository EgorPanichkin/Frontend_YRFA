import { Container } from "@/shared";
import {} from "@/shared/ui/SubCategoryCard";
import { HeaderMobile } from "@/widgets/Header/views/HeaderMobile/HeaderMobile";

export const TestPage = () => {
  return (
    <div>
      <Container>
        <div style={{ display: "flex" }}>
          <HeaderMobile />
        </div>
      </Container>
    </div>
  );
};
