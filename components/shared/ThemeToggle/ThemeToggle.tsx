import React from 'react'
import { Moon, Sun } from '@/root/components/shared/ThemeToggle/Icons'

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
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.removeItem('theme')
    }
  }, [isDarkMode])

  return (
    <button
      className="text-gray-800 dark:text-gray-50"
      aria-label="Theme toggle"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isMounted && !isDarkMode ? <Moon /> : <Sun />}
    </button>
  )
}
