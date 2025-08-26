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
          flexWrap={"wrap"}
          spacing={2}
        >
          <Grid
            direction="row"
            justifyContent="space-between"
            alignItems={"center"}
            flexGrow={1}
            flexWrap={"wrap"}
          >
            <Typography color="black" variant="h5">
              {t("header.title")}
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems={"center"}
            spacing={1}
            flexWrap={"wrap"}
          >
            <Grid>
              <LangSelect />
            </Grid>
            <Grid sx={{ width: "125px" }}>
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
