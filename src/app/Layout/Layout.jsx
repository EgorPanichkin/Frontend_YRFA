import { Container } from "@/shared";
import { Outlet } from "react-router-dom";
import { Breadcrumbs, Feedback } from "@/features";
import { Footer, Header } from "@/widgets";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <ToastContainer />
        <Breadcrumbs />
        <Feedback />
      </Container>
      <Outlet />
      <Footer />
    </>
  );
};
