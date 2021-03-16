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
  const headerColor = isOpen ? 'bg-yellow-400' : ''
  const logoTextColor = isOpen
    ? 'text-gray-800'
    : 'text-gray-800 dark:text-gray-50'

  return (
    <header className={`${headerColor} pt-8 px-8 md:hidden transition`}>
      <div className="flex justify-between">
        <div>
          <Link href="/">
            <a className={`${logoTextColor} text-2xl font-heading font-bold`}>
              Tekstura
            </a>
          </Link>
        </div>
        <MenuButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <nav>
            <motion.ul
              className="py-8 space-y-4"
              initial="hidden"
              animate="show"
              exit="yeet"
              variants={variants.menu}
            >
              <motion.li variants={variants.item}>
                <Link href="/">
                  <a className="font-bold border-b-2 border-gray-800 border-opacity-0 hover:border-opacity-100 transition">
                    Početna
                  </a>
                </Link>
              </motion.li>
              <motion.li variants={variants.item}>
                <Link href="/recepti">
                  <a className="font-bold border-b-2 border-gray-800 border-opacity-0 hover:border-opacity-100 transition">
                    Recepti
                  </a>
                </Link>
              </motion.li>
              <motion.li variants={variants.item}>
                <Link href="/saznaj-vise">
                  <a className="font-bold border-b-2 border-gray-800 border-opacity-0 hover:border-opacity-100 transition">
                    Saznaj više
                  </a>
                </Link>
              </motion.li>
              <motion.li variants={variants.item}>
                <ThemeToggle />
              </motion.li>
            </motion.ul>
          </nav>
        )}
      </AnimatePresence>
    </header>
  )
}
