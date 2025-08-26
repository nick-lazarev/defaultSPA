import { Backdrop, CircularProgress } from "@mui/material";
import type { LoaderProps } from "./types";

export const Loader = ({ isLoading }: LoaderProps) => {
  return (
    <Backdrop
      sx={(theme) => ({ color: "white", zIndex: theme.zIndex.drawer + 1 })}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
