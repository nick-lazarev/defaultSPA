import { logout } from "@entities/auth";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { LangSelect } from "../LangSelect";

export const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar sx={{ flexGrow: 1 }}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          flexGrow={1}
          spacing={2}
        >
          <Stack direction="row" spacing={2}>
            <LangSelect />
            <Button variant="text" onClick={handleLogout}>
              {t("header.logout")}
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
