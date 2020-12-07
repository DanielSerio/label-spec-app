import { title } from 'process'
import React from 'react'
import PageProps from './PageProps'

export default function Page({ title, children }: PageProps) {
  return (
    <main className="page">
      { title &&
        <header className="page-header">
          <h1>{title}</h1>
        </header>
      }
      {children}
    </main>
  )
}
