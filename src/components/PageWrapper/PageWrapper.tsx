import React, { type ReactNode } from 'react'
import styles from './pageWrapper.module.scss'

interface Props {
  children: ReactNode
  title: string
}

export const PageWrapper = ({ children, title }: Props): JSX.Element => {
  return (
    <div className={styles.pageWrapper}>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
