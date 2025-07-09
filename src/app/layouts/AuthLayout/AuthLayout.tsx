import { authSlice } from "@entities/auth"
import { routes } from "@shared/libs"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

export const AuthLayout = () => {
  const { isAuth } = useSelector(authSlice.selectSlice)

  if (!isAuth) {
    return <Navigate to={routes.authorization} />
  }

  return <Outlet />
}