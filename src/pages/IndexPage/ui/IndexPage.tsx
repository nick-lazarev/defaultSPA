import { Stack, Typography } from "@mui/material";
import { LibList } from "@widgets";
import { useTranslation } from "react-i18next";

export const IndexPage = () => {
  const { t } = useTranslation("home");

  return (
    <Stack spacing={4}>
      <Typography color="black" variant="h4">
        {t("title")}
      </Typography>
      <LibList />
    </Stack>
  );
};
