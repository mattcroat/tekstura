import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Layout } from '@/root/components/Layout'

const variants = {
  byline: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  },
  newsletter: {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
      },
    },
  },
  recipe: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.6,
      },
    },
  },
}

export function Home() {
  return (
    <Layout>
      <main>
        <motion.section
          className="p-6 md:p-8 lg:p-16"
          variants={variants.byline}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-2xl">Recepti, savjeti i više</h1>
          <p className="mt-2">
            Tekstura je namijenjena za dijeljenje izvrsne hrane sa drugima.
          </p>
        </motion.section>

        <motion.aside
          className="flex flex-col items-center mt-6 p-6 space-y-4 bg-gray-100"
          variants={variants.newsletter}
          initial="hidden"
          animate="show"
        >
          <img
            className="h-16 w-16 object-cover rounded-full"
            src="/images/avatar.webp"
            alt="Placeholder"
          />
          <h2 className="text-lg text-center">
            Besplatno primajte obavijesti u sandučić
          </h2>
          <form>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="p-2"
              type="email"
              id="email"
              placeholder="budi@zakon.com"
            />
            <button className="p-2 bg-yellow-400" type="submit">
              Prijava
            </button>
          </form>
        </motion.aside>

        <motion.section
          className="relative h-screen text-center"
          variants={variants.recipe}
          initial="hidden"
          animate="show"
        >
          <img
            className="h-full w-full object-cover"
            src="/images/dish.webp"
            alt="Dish"
          />
          <div className="h-full w-full absolute top-0 flex flex-col justify-center items-center px-2 text-gray-50 z-10">
            <h3 className="text-xl">
              Svako Jutro Jedno Jaje Organizmu Snagu Daje
            </h3>
            <Link href="/recepti/nevjerojatni-recept">
              <a
                className="mt-2 font-heading text-xl text-yellow-400 border-b-2 border-yellow-400 border-opacity-0 hover:border-opacity-100 transition
              "
              >
                recept
              </a>
            </Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900"></div>
        </motion.section>
      </main>
    </Layout>
  )
}
