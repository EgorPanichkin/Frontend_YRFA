import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
};
