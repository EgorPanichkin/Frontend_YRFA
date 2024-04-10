import { LoaderPage } from "@/pages";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

const App = () => {
  return <RouterProvider router={router} fallbackElement={<LoaderPage />} />;
};

export default App;
