import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Form, FormTextField } from '@shared/ui'
import { Button, DialogActions, DialogContent, DialogTitle, Paper, Stack } from "@mui/material";
import type { AuthFormData } from "../model";

export const defaultValues = {
  email: '',
  password: '',
}

export const AuthForm = () => {
  const formMethods = useForm<AuthFormData>({
    defaultValues
  })

  const onSubmit = useCallback((data: AuthFormData) => {
    
  }, []); 

  return (
    <Form onSubmit={onSubmit} {...formMethods}>
      <Paper sx={{ width: '400px'}}>
        <DialogTitle>Authorization</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <FormTextField name='email' label='email' placeholder='email'/>
            <FormTextField name='password' label='password' placeholder='password'/>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Sign In</Button>
        </DialogActions>
      </Paper>
    </Form>
  );
}