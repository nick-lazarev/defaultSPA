import { logout } from "@entities/auth";
import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
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
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
          flexGrow={1}
        >
          <Grid
            direction="row"
            justifyContent="flex-end"
            alignItems={"center"}
            spacing={1}
          >
            <Typography color="black" variant="h5">
              {t("header.title")}
            </Typography>
          </Grid>
          <Grid
            size={4}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems={"center"}
            spacing={1}
          >
            <Grid size={5}>
              <LangSelect />
            </Grid>
            <Grid size={5}>
              <Button variant="text" onClick={handleLogout}>
                {t("header.logout")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
