import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import type { FormTextFieldProps } from "./types";

export const FormTextField = ({
  name, ...props
}: FormTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField
          {...props}
          {...field}
          inputRef={field.ref}
          error={fieldState.invalid}
        />
      )}
    />
  );
}