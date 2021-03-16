import Link from 'next/link'

import { ThemeToggle } from '@/root/components/shared/ThemeToggle'

export function Navbar() {
  return (
    <header className="hidden md:flex justify-between items-center mt-16 px-16">
      <div>
        <Link href="/">
          <a className="text-2xl md:text-3xl text-gray-800 font-heading font-bold dark:text-gray-50">
            Tekstura
          </a>
        </Link>
      </div>

      <nav>
        <ul className="flex gap-x-6">
          <li>
            <Link href="/">
              <a className="font-bold border-b-2 border-gray-800 border-opacity-0 hover:border-opacity-100 transition dark:text-gray-50">
                Početna
              </a>
            </Link>
          </li>
          <li>
            <Link href="/recepti">
              <a className="font-bold border-b-2 border-gray-800 border-opacity-0 hover:border-opacity-100 transition dark:text-gray-50">
                Recepti
              </a>
            </Link>
          </li>
          <li>
            <Link href="/saznaj-vise">
              <a className="font-bold border-b-2 border-gray-800 border-opacity-0 hover:border-opacity-100 transition dark:text-gray-50">
                Saznaj više
              </a>
            </Link>
          </li>
          <li className="dark:text-gray-50">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
