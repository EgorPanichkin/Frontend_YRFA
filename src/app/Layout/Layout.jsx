import { Container } from "@/shared";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { Feedback } from "@/features";
import { Footer, Header } from "@/widgets";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { LoaderPage } from "@/pages";

export const Layout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <ScrollRestoration />
      <Container>
        <ToastContainer />
        <Feedback />
      </Container>
      {navigation.state === "loading" ? <LoaderPage /> : <Outlet />}
      <Footer />
    </>
  );
};
