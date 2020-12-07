import { AppBar, Button, CircularProgress, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import useHeaderStyles from '../../../styles/HeaderStyles';
import HeaderProps from './HeaderProps'



export default function Header({user, loading }: HeaderProps) {
  const classes = useHeaderStyles();
  const onClick = () => {
    if (user) {} else {}
  };
  
  const AuthButton = () => {
    return  <Button color="secondary" style={{fontWeight: 'bold'}} variant="contained" onClick={onClick}>{user ? 'Logout' : 'Login'}</Button>;
  };

  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <Typography>
          <h1>Accumedix, Inc</h1>
        </Typography>
        {loading && <CircularProgress color="secondary"/> }
        <AuthButton />
      </Toolbar>
    </AppBar>
  )
}
