import { motion } from 'framer-motion'
import Link from 'next/link'

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
}

export function Navbar() {
  return (
    <motion.header
      className="hidden md:flex justify-between items-center p-8 lg:p-16"
      initial="hidden"
      animate="show"
      variants={variants.navbar}
    >
      <div className="text-2xl lg:text-3xl text-gray-800 font-heading font-bold">
        <Link href="/">
          <a>Tekstura</a>
        </Link>
      </div>

      <nav>
        <ul className="flex gap-x-6">
          <li>
            <Link href="/">
              <a className="font-bold border-b-2 border-gray-800 border-opacity-0 hover:border-opacity-100 transition">
                Početna
              </a>
            </Link>
          </li>
          <li>
            <Link href="/recepti">
              <a className="font-bold border-b-2 border-gray-800 border-opacity-0 hover:border-opacity-100 transition">
                Recepti
              </a>
            </Link>
          </li>
          <li>
            <Link href="/saznaj-vise">
              <a className="font-bold border-b-2 border-gray-800 border-opacity-0 hover:border-opacity-100 transition">
                Saznaj više
              </a>
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
