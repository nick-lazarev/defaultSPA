import * as z from "zod/v4";

export const AuthFormDataScheme = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type AuthFormData = z.infer<typeof AuthFormDataScheme>;
