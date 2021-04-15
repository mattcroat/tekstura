import Link from 'next/link'

import { ThemeToggle } from '@/root/components/shared/ThemeToggle'

export function Navbar() {
  return (
    <header className="hidden px-16 mt-16 dark:text-gray-50 md:flex md:justify-between md:items-baseline">
      <div className="text-2xl font-bold font-heading md:text-3xl">
        <Link href="/">
          <a>Tekstura</a>
        </Link>
      </div>

      <nav>
        <ul className="flex font-bold list-none gap-x-6">
          <li>
            <div className="group">
              <Link href="/">
                <a>Početna</a>
              </Link>
              <div className="h-0.5 scale-x-0 origin-left bg-yellow-500 transform group-hover:scale-x-100 transition"></div>
            </div>
          </li>
          <li>
            <div className="group">
              <Link href="/recepti">
                <a>Recepti</a>
              </Link>
              <div className="h-0.5 scale-x-0 origin-left bg-yellow-500 transform group-hover:scale-x-100 transition"></div>
            </div>
          </li>
          <li>
            <div className="group">
              <Link href="/saznaj-vise">
                <a>Saznaj više</a>
              </Link>
              <div className="h-0.5 scale-x-0 origin-left bg-yellow-500 transform group-hover:scale-x-100 transition"></div>
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
