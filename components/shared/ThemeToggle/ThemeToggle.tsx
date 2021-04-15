import React from 'react'
import { Moon, Sun } from '@/root/components/shared/ThemeToggle/Icons'

type ThemeToggleProps = { focus?: string }

export function ThemeToggle({ focus }: ThemeToggleProps) {
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
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.removeItem('theme')
    }
  }, [isDarkMode])

  return (
    <button
      className={focus}
      aria-label="Theme toggle"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isMounted && !isDarkMode ? <Moon /> : <Sun />}
    </button>
  )
}
