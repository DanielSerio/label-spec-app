import { title } from 'process'
import React from 'react'
import usePageStyles from '../../../styles/PageStyles'
import PageProps from './PageProps'

export default function Page({ title, children }: PageProps) {
  const classes = usePageStyles();
  return (
    <main className={classes.root}>
      { title &&
        <header className={classes.header}>
          <h1>{title}</h1>
        </header>
      }
      {children}
    </main>
  )
}
