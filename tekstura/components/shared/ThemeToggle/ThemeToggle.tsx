import { useEffect, useState } from 'react'
import { Moon, Sun } from '@/root/components/shared/ThemeToggle/Icons'

type ThemeToggleProps = { focus?: string }

export function ThemeToggle({ focus }: ThemeToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  function setTheme(isDarkMode: boolean) {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    }

    if (!isDarkMode) {
      document.documentElement.classList.remove('dark')
      window.localStorage.removeItem('theme')
    }
  }

  useEffect(() => {
    setIsDarkMode(!!window.localStorage.getItem('theme'))
  }, [])

  useEffect(() => {
    setTheme(isDarkMode)
  }, [isDarkMode])

  return (
    <button
      className={focus}
      aria-label="Theme toggle"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {/* {isMounted && !isDarkMode ? <Moon /> : <Sun />} */}
      {!isDarkMode ? <Moon /> : <Sun />}
    </button>
  )
}
