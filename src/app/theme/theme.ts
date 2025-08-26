import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: "100vh",

          "#root": {
            minHeight: "100vh",
            display: "flex",
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingTop: "8px !important",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "8px 24px 24px 24px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          fontWeight: 700,
        },
        h5: {
          fontWeight: 700,
        },
      },
    },
  },
});
