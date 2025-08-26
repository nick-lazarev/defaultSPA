import { type SelectProps as MuiSelectProps } from "@mui/material/Select";

export type SelectPropsOption = {
  label: string | number;
  value: string | number;
};

export type SelectProps = MuiSelectProps & {
  options: SelectPropsOption[];
};
