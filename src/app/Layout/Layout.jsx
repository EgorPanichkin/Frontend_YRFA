import { Container } from "@/shared";
import { Outlet } from "react-router-dom";
import { Breadcrumbs, Feedback } from "@/features";
import { Footer, Header } from "@/widgets";

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Breadcrumbs />
        <Feedback />
      </Container>
      <Outlet />
      <Footer />
    </>
  );
};
