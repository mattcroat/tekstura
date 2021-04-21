import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import { MenuButton } from '@/root/components/Header/NavbarMobile/MenuButton'
import { ThemeToggle } from '@/root/components/shared/ThemeToggle'

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

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const headerColor = isOpen ? 'bg-gold' : ''
  const logoTextColor = !isOpen ? 'dark:text-gray-50' : ''
  const focus = isOpen ? 'focus:outline-none focus:ring-2 focus:ring-black' : ''

  return (
    <header
      className={`${headerColor} pt-8 px-8 font-bold transition md:hidden`}
    >
      <div className="flex items-center justify-between">
        <div className={`${logoTextColor} text-2xl font-heading font-bold`}>
          <Link href="/">
            <a className={focus}>Tekstura</a>
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
                    <a className={focus}>Početna</a>
                  </Link>
                  <div className="h-0.5 scale-x-0 origin-left bg-gray-800 transform group-hover:scale-x-100 transition"></div>
                </div>
              </motion.li>
              <motion.li variants={variants.item}>
                <div className="inline-block group">
                  <Link href="/recepti">
                    <a className={focus}>Recepti</a>
                  </Link>
                  <div className="h-0.5 scale-x-0 origin-left bg-gray-800 transform group-hover:scale-x-100 transition"></div>
                </div>
              </motion.li>
              <motion.li variants={variants.item}>
                <div className="inline-block group">
                  <Link href="/saznaj-vise">
                    <a className={focus}>Saznaj više</a>
                  </Link>
                  <div className="h-0.5 scale-x-0 origin-left bg-gray-800 transform group-hover:scale-x-100 transition"></div>
                </div>
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
