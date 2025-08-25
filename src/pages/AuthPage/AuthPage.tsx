import { AuthForm } from "@features/AuthForm";
import { Stack } from "@mui/material";

export const AuthPage = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
      <AuthForm />
    </Stack>
  );
};
