import React from 'react'
import styled from '@emotion/styled'

import { Moon, Sun } from './Icons'

const Button = styled.button`
  height: 24px;
  width: 24px;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    fill: var(--text);
    transition: fill 1s;
  }
`

export function ThemeToggle() {
  const [isMounted, setIsMounted] = React.useState(false)
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return !!window.localStorage.getItem('theme')
    }
  })

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      window.localStorage.removeItem('theme')
    }
  }, [isDarkMode])

  return (
    <Button
      aria-label="Theme toggle"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isMounted && !isDarkMode ? <Moon /> : <Sun />}
    </Button>
  )
}
