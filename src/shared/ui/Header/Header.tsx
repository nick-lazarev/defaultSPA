import { logout } from "@entities/auth";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar sx={{ flexGrow: 1 }}>
        <Stack direction="row" justifyContent="flex-end" width="100%">
          <Button variant="text" onClick={handleLogout}>
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
