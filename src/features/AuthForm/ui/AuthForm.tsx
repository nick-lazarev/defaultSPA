import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Form, FormTextField } from "@shared/ui";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Stack,
} from "@mui/material";
import { AuthFormDataScheme, type AuthFormData } from "../model";
import { useLoginMutation } from "@entities/auth";
import { usePageLoaderContext } from "@shared/model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react-refresh/only-export-components
export const defaultValues = {
  email: "",
  password: "",
};

export const AuthForm = () => {
  const { t } = useTranslation("auth");

  const formMethods = useForm<AuthFormData>({
    defaultValues,
    resolver: zodResolver(AuthFormDataScheme),
    resetOptions: {
      keepDirtyValues: true,
      keepErrors: true,
    },
  });

  const [login] = useLoginMutation();
  const { toggleLoading } = usePageLoaderContext();

  const onSubmit = useCallback(
    async (data: AuthFormData) => {
      toggleLoading();

      await login(data).unwrap();

      toggleLoading();
    },
    [login, toggleLoading],
  );

  return (
    <Box
      sx={{ width: "100%" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Paper sx={{ width: "100%", maxWidth: "400px", mx: "8px" }}>
        <Form onSubmit={onSubmit} {...formMethods}>
          <DialogTitle>{t("authorization")}</DialogTitle>
          <DialogContent>
            <Stack spacing={2}>
              <FormTextField
                name="email"
                label={t("email")}
                placeholder={t("email")}
              />
              <FormTextField
                name="password"
                label={t("password")}
                placeholder={t("password")}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button fullWidth variant="contained" type="submit">
              {t("signIn")}
            </Button>
          </DialogActions>
        </Form>
      </Paper>
    </Box>
  );
};
