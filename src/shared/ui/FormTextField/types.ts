import type { TextFieldProps } from "@mui/material"

export type FormTextFieldProps = Omit<TextFieldProps, 'value' | 'onChange' | 'onBlur' | 'ref'> & {
  name: string
}