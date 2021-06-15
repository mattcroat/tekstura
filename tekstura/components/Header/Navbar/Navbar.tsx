import Link from 'next/link'
import { useRouter } from 'next/router'

import { ThemeToggle } from '@/root/components/shared/ThemeToggle'

export function Navbar() {
  const { asPath, locale } = useRouter()

  return (
    <header className="hidden px-16 mt-16 dark:text-gray-50 md:flex md:justify-between md:items-baseline print:hidden">
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
              <div className="h-0.5 scale-x-0 origin-left bg-gold transform group-hover:scale-x-100 transition"></div>
            </div>
          </li>
          <li>
            <div className="group">
              <Link href="/recepti">
                <a>Recepti</a>
              </Link>
              <div className="h-0.5 scale-x-0 origin-left bg-gold transform group-hover:scale-x-100 transition"></div>
            </div>
          </li>
          <li>
            <div className="group">
              <Link href="/saznaj-vise">
                <a>Saznaj više</a>
              </Link>
              <div className="h-0.5 scale-x-0 origin-left bg-gold transform group-hover:scale-x-100 transition"></div>
            </div>
          </li>
          <li>
            {locale === 'hr' ? (
              <Link href={asPath} locale="en">
                <a className="flex gap-x-2">
                  <img
                    alt="Flag of The United Kingdom"
                    className="inline-block"
                    src="/images/gb-24.png"
                  />
                  <span>(EN)</span>
                </a>
              </Link>
            ) : (
              <Link href={asPath} locale="hr">
                <a className="flex gap-x-2">
                  <img
                    alt="Flag of Croatia"
                    className="inline-block"
                    src="/images/hr-24.png"
                  />
                  <span>(HR)</span>
                </a>
              </Link>
            )}
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
