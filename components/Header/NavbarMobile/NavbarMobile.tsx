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
  const headerColor = isOpen ? 'bg-yellow-500' : ''
  const logoTextColor = !isOpen ? 'dark:text-gray-50' : ''

  return (
    <header
      className={`${headerColor} pt-8 px-8 font-bold transition md:hidden`}
    >
      <div className="flex justify-between">
        <div className={`${logoTextColor} text-2xl font-heading font-bold`}>
          <Link href="/">
            <a>Tekstura</a>
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
                <div className="inline-block group">
                  <Link href="/">
                    <a>Početna</a>
                  </Link>
                  <div className="h-0.5 scale-x-0 origin-left bg-gray-800 transform group-hover:scale-x-100 transition"></div>
                </div>
              </motion.li>
              <motion.li variants={variants.item}>
                <div className="inline-block group">
                  <Link href="/recepti">
                    <a>Recepti</a>
                  </Link>
                  <div className="h-0.5 scale-x-0 origin-left bg-gray-800 transform group-hover:scale-x-100 transition"></div>
                </div>
              </motion.li>
              <motion.li variants={variants.item}>
                <div className="inline-block group">
                  <Link href="/saznaj-vise">
                    <a>Saznaj više</a>
                  </Link>
                  <div className="h-0.5 scale-x-0 origin-left bg-gray-800 transform group-hover:scale-x-100 transition"></div>
                </div>
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
