import { Container } from "@/shared";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { Breadcrumbs, Feedback } from "@/features";
// import { Footer, Header } from "@/widgets";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { LoaderPage } from "@/pages";
import { useLayoutEffect } from "react";

export const Layout = () => {
  const navigation = useNavigation();

  const pathname = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      {/* <Header /> */}
      <Container>
        <ToastContainer />
        <Breadcrumbs />
        <Feedback />
      </Container>
      {navigation.state === "loading" ? <LoaderPage /> : <Outlet />}
      {/* <Footer /> */}
    </>
  );
};
