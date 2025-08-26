import { AuthForm } from "@features/AuthForm";
import { Stack } from "@mui/material";
import { LangSelect } from "@shared/ui/LangSelect";

export const AuthPage = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      flexGrow={1}
      spacing={2}
    >
      <AuthForm />
      <LangSelect />
    </Stack>
  );
};
