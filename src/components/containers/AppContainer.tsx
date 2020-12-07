import React from 'react'
import useAppContainerStyles from '../../styles/AppContainerStyles'
import Header from '../partials/Header/Header';

export default function AppContainer() {
  const classes = useAppContainerStyles();
  return (
    <div className={classes.root}>
      <Header />
    </div>
  )
}
