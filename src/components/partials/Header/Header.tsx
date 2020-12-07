import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography>
          <h1>Accumedix, Inc</h1>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
