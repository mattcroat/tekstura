import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MenuButton } from '@/root/components/Header/NavbarMobile/MenuButton'
import { ThemeToggle } from '@/root/components/shared/ThemeToggle'

import type { TranslatedHeaderText } from '@/root/types/recipe'

type NavbarMobileProps = {
  translatedText: TranslatedHeaderText
}

const variants = {
  menu: {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.1,
      },
    },
    yeet: { opacity: 0 },
  },
  item: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
}

export function NavbarMobile({ translatedText }: NavbarMobileProps) {
  const { asPath, locale } = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const headerColor = isOpen ? 'bg-gold' : ''
  const logoTextColor = !isOpen ? 'dark:text-gray-50' : ''
  const logoColor = isOpen ? 'text-black-800' : 'text-gold'
  const focus = isOpen ? 'focus:outline-none focus:ring-2 focus:ring-black' : ''

  return (
    <header
      className={`${headerColor} pt-8 px-8 font-bold transition md:hidden print:hidden`}
    >
      <div className="flex items-center justify-between">
        <div className={`${logoTextColor} text-2xl font-heading font-bold`}>
          <Link href="/">
            <a className={`flex items-center gap-2 ${focus}`}>
              <svg
                className={`w-8 h-8 ${logoColor}`}
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
        <MenuButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <nav>
            <motion.ul
              className="py-8 space-y-4 list-none"
              initial="hidden"
              animate="show"
              exit="yeet"
              variants={variants.menu}
            >
              <motion.li variants={variants.item}>
                <div className="inline-block group">
                  <Link href="/">
                    <a className={focus}>{translatedText?.home}</a>
                  </Link>
                  <div className="h-0.5 scale-x-0 origin-left bg-gray-800 transform group-hover:scale-x-100 transition"></div>
                </div>
              </motion.li>
              <motion.li variants={variants.item}>
                <div className="inline-block group">
                  <Link href="/recepti">
                    <a className={focus}>{translatedText?.recipes}</a>
                  </Link>
                  <div className="h-0.5 scale-x-0 origin-left bg-gray-800 transform group-hover:scale-x-100 transition"></div>
                </div>
              </motion.li>
              <motion.li variants={variants.item}>
                <div className="inline-block group">
                  <Link href="/saznaj-vise">
                    <a className={focus}>{translatedText?.about}</a>
                  </Link>
                  <div className="h-0.5 scale-x-0 origin-left bg-gray-800 transform group-hover:scale-x-100 transition"></div>
                </div>
              </motion.li>
              <motion.li variants={variants.item}>
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
              </motion.li>
              <motion.li variants={variants.item}>
                <ThemeToggle focus={focus} />
              </motion.li>
            </motion.ul>
          </nav>
        )}
      </AnimatePresence>
    </header>
  )
}
