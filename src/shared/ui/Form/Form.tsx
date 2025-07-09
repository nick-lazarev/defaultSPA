import { FormProvider, type FieldValues } from "react-hook-form"
import type { FormProps } from "./types";

export const Form = <T extends FieldValues = FieldValues>({  children, onSubmit, ...formMethods }: FormProps<T> ) => {
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          {children}
      </form>
    </FormProvider>
  );
}