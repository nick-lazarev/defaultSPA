import { CssBaseline, ThemeProvider as ThemeProviderMaterial } from "@mui/material"
import { theme } from "./theme";
import type { PropsWithChildren } from "react";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProviderMaterial theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProviderMaterial>
  );
}