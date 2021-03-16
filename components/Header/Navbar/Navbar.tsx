import Link from 'next/link'

import { ThemeToggle } from '@/root/components/shared/ThemeToggle'

export function Navbar() {
  return (
    <header className="hidden text-gray-800 dark:text-gray-50 mt-16 px-16 md:flex md:justify-between md:items-center">
      <div className="text-2xl font-heading font-bold md:text-3xl">
        <Link href="/">
          <a>Tekstura</a>
        </Link>
      </div>

      <nav>
        <ul className="flex gap-x-6 font-bold">
          <li>
            <div className="group">
              <Link href="/">
                <a>Početna</a>
              </Link>
              <div className="h-0.5 scale-x-0 origin-left bg-gray-800 dark:bg-gray-50 transform group-hover:scale-x-100 transition"></div>
            </div>
          </li>
          <li>
            <div className="group">
              <Link href="/recepti">
                <a>Recepti</a>
              </Link>
              <div className="h-0.5 scale-x-0 origin-left bg-gray-800 dark:bg-gray-50 transform group-hover:scale-x-100 transition"></div>
            </div>
          </li>
          <li>
            <div className="group">
              <Link href="/saznaj-vise">
                <a>Saznaj više</a>
              </Link>
              <div className="h-0.5 scale-x-0 origin-left bg-gray-800 dark:bg-gray-50 transform group-hover:scale-x-100 transition"></div>
            </div>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
