import Link from 'next/link'
import { useRouter } from 'next/router'

import { ThemeToggle } from '@/root/components/shared/ThemeToggle'

import type { TranslatedHeaderText } from '@/root/types/recipe'

type NavbarProps = {
  translatedText: TranslatedHeaderText
}

export function Navbar({ translatedText }: NavbarProps) {
  const { asPath, locale } = useRouter()

  return (
    <header className="hidden px-16 mt-16 dark:text-gray-50 md:flex md:justify-between md:items-baseline print:hidden">
      <div className="text-2xl font-bold font-heading md:text-3xl">
        <Link href="/">
          <a className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-gold"
              viewBox="0 0 144 182"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M78.186 168.907c0 8.718-4.29 13.407-5.939 13.077-1.65.33-5.938-4.359-5.938-13.077V95.598c.33-1.816-.89-6.736-8.412-11.888-9.402-6.439-19.794-17.831-19.794-38.635S51.463 0 72.247 0s34.145 24.271 34.145 45.075c0 20.804-10.392 32.196-19.794 38.635-7.522 5.152-8.742 10.072-8.412 11.888v73.309z" />
              <path d="M89.072 104.019v41.608h20.784v-41.608C121.072 103.028 144 93.815 144 72.813c0-26.252-16.208-35.663-27.216-35.663C121.237 71.327 99 88.5 93.031 91.636c-3.471 1.823-3.794 9.411-3.959 12.383zM56 104.019v41.608H35.217v-41.608C24 103.028 1.072 93.815 1.072 72.813c0-26.252 16.208-35.663 27.217-35.663C23.835 71.327 46.072 88.5 52.04 91.636c3.471 1.823 3.794 9.411 3.959 12.383z" />
            </svg>
            <span>{translatedText?.title}</span>
          </a>
        </Link>
      </div>

      <nav>
        <ul className="flex font-bold list-none gap-x-6">
          <li>
            <div className="group">
              <Link href="/">
                <a>{translatedText?.home}</a>
              </Link>
              <div className="h-0.5 scale-x-0 origin-left bg-gold transform group-hover:scale-x-100 transition"></div>
            </div>
          </li>
          <li>
            <div className="group">
              <Link href="/recepti">
                <a>{translatedText?.recipes}</a>
              </Link>
              <div className="h-0.5 scale-x-0 origin-left bg-gold transform group-hover:scale-x-100 transition"></div>
            </div>
          </li>
          <li>
            <div className="group">
              <Link href="/saznaj-vise">
                <a>{translatedText?.about}</a>
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
