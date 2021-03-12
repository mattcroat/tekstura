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
      <main className="md:h-screen">
        <div className="md:h-5/6 md:flex md:p-16">
          <motion.section
            className="md:flex-1 md:grid md:place-content-center md:bg-yellow-400"
            variants={variants.byline}
            initial="hidden"
            animate="show"
          >
            <div className="mt-8 md:m-0 px-8 dark:text-gray-50">
              <h1 className="text-2xl md:text-3xl md:text-gray-800">
                Recepti, savjeti i više
              </h1>
              <p className="mt-2 md:text-gray-800">
                Tekstura je namijenjena za dijeljenje izvrsne hrane sa drugima.
              </p>
            </div>

            <motion.aside
              className="flex flex-col items-center mt-8 md:m-8 p-8 space-y-4 bg-gray-100 shadow-sm"
              variants={variants.newsletter}
              initial="hidden"
              animate="show"
            >
              <img
                className="h-16 w-16 object-cover rounded-full"
                src="/images/avatar.webp"
                alt="Placeholder"
              />
              <h2 className="text-center">
                Besplatno primajte obavijesti u sandučić
              </h2>
              <form className="w-full flex flex-col gap-y-4 lg:w-auto lg:flex lg:flex-row">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="p-2 shadow-sm"
                  type="email"
                  id="email"
                  placeholder="budi@zakon.com"
                />
                <button className="p-2 bg-yellow-400 shadow-sm" type="submit">
                  <div className="flex items-center justify-center">
                    <svg
                      className="inline h-6 w-6 mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Prijava</span>
                  </div>
                </button>
              </form>
            </motion.aside>
          </motion.section>

          <motion.section
            className="h-96 md:h-auto md:flex-1 relative text-center"
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
              <h3 className="text-xl md:text-3xl md:px-16">
                Svako Jutro Jedno Jaje Organizmu Snagu Daje
              </h3>
              <Link href="/recepti/nevjerojatni-recept">
                <a className="mt-2 font-heading text-xl text-yellow-400 border-b-2 border-yellow-400 border-opacity-0 hover:border-opacity-100 transition">
                  recept
                </a>
              </Link>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900"></div>
          </motion.section>
        </div>
      </main>
    </Layout>
  )
}
