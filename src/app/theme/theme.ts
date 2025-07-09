import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',

          '#root': {
            minHeight: '100vh',
            display: 'flex'
          }
        }
      }
    }
  }
});