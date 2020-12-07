import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useForm, RegisterOptions } from 'react-hook-form'
import { auth } from '../../../firebase';
import useFormStyles from '../../../styles/FormStyles';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ILoginForm from '../ILoginForm';
import { emailRE } from '../validation';

export default function LoginForm() {
  const classes = useFormStyles();
  const { register, errors, handleSubmit, formState } = useForm<ILoginForm>({ mode: 'onChange'});
  const emailRegister: RegisterOptions = {
    required: 'Email is required',
    pattern: {
      value: emailRE,
      message: 'Invalid Email Domain'
    }
  };
  const passwordRegister: RegisterOptions = {
    required: 'Password is required'
  };

  const onSubmit = (loginForm: ILoginForm) => {
    const { email, password } = loginForm;
    auth.signInWithEmailAndPassword(email, password);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Email" name="email" inputRef={register(emailRegister)} error={Boolean(errors && errors.email)} helperText={(errors && errors.email) && errors.email.message}/>
      <TextField label="Password" name="password" inputRef={register(passwordRegister)} error={Boolean(errors && errors.password)} helperText={(errors && errors.password) && errors.password.message}/>

      <footer className={classes.footer}>
        <Button color="primary" variant="contained" disabled={!formState.isValid}>Submit</Button>
      </footer>
    </form>
  )
}
