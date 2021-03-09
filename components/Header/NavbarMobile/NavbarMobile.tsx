import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import { MenuButton } from '@/root/components/Header/NavbarMobile/MenuButton'
import { ThemeToggle } from '@/root/components/shared/ThemeToggle'

const variants = {
  navbar: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  },
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
  const header = isOpen ? 'bg-yellow-400' : ''

  return (
    <motion.header
      className={`${header} p-8 transition md:hidden`}
      initial="hidden"
      animate="show"
      variants={variants.navbar}
    >
      <div className="flex justify-between">
        <div className="text-2xl text-gray-800 font-heading font-bold">
          <Link href="/">
            <a>Tekstura</a>
          </Link>
        </div>

        <MenuButton toggle={() => setIsOpen(!isOpen)} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <nav>
            <motion.ul
              className="mt-6 space-y-2"
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
    </motion.header>
  )
}
