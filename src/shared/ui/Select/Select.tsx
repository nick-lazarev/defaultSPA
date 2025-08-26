import MenuItem from "@mui/material/MenuItem";
import MuiSelect from "@mui/material/Select";
import type { SelectProps, SelectPropsOption } from "./types";

export const Select = ({ options, ...props }: SelectProps) => {
  return (
    <MuiSelect {...props}>
      {options.map(({ label, value }: SelectPropsOption) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};
