import { Suspense } from "react";
import { Routing } from "./Router/Router";
import "./scss/index.scss";
import { LoaderPage } from "@/pages";

const App = () => {
  return (
    <Suspense fallback={<LoaderPage />}>
      <Routing />
    </Suspense>
  );
};

export default App;
