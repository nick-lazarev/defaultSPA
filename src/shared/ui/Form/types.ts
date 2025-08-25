import type { FieldValues, FormProviderProps } from "react-hook-form";

export type FormProps<T extends FieldValues = FieldValues> =
  FormProviderProps<T> & {
    onSubmit: (data: T) => void;
  };
