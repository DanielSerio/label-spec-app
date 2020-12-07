import React from 'react'
import {Switch} from 'react-router-dom';
import useAppContainerStyles from '../../styles/AppContainerStyles'
import Header from '../partials/Header/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { CircularProgress} from '@material-ui/core';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';

export default function AppContainer() {
  const classes = useAppContainerStyles();
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className={classes.root}>
      <Header />
      {loading && <CircularProgress color="primary" className={classes.loader}/> }
      {user && <DashboardPage /> }
      {!user && <LoginPage /> }
    </div>
  )
}
