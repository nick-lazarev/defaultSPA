import { authSlice } from "@entities/auth"
import { Stack } from "@mui/material"
import { routes } from "@shared/libs"
import { Header } from "@shared/ui"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

export const AuthLayout = () => {
  const { isAuth } = useSelector(authSlice.selectSlice)

  if (!isAuth) {
    return <Navigate to={routes.authorization} />
  }

  return (
    <Stack flexGrow={1}>
      <Header />
      <Stack flexGrow={1} p={2}>
        <Outlet />
      </Stack>
    </Stack>
  )
}