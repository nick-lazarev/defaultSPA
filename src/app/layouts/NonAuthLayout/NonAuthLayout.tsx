import { authSlice } from "@entities/auth";
import { routes } from "@shared/libs";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export const NonAuthLayout = () => {
  const { isAuth } = useSelector(authSlice.selectSlice);

  if (isAuth) {
    return <Navigate to={routes.index} />;
  }

  return <Outlet />;
};
