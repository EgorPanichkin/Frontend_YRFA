import { PATHS } from "@/shared/lib/variables";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const userToken = localStorage.getItem("access");

  if (!userToken) {
    return <Navigate to={PATHS.login} />;
  }

  return children;
};
