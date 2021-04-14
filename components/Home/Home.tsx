import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Layout } from '@/root/components/Layout'

type HomeProps = {
  latestRecipe: {
    title: string
    slug: string
    imageUrl: string
  }
}

export function Home({ latestRecipe }: HomeProps) {
  const { slug, title, imageUrl } = latestRecipe

  return (
    <Layout layout={{ landingPage: true }}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-20 flex-1 mt-8 md:mt-16 lg:px-16"
      >
        <div className="px-8 text-left dark:text-gray-50 md:px-0 md:text-center">
          <h1 className="text-2xl md:text-3xl">Recepti, savjeti i više</h1>
          <p className="mt-2">
            Tekstura je namijenjena za dijeljenje izvrsne hrane sa drugima.
          </p>
        </div>

        <aside className="flex flex-col items-center p-8 mt-8 space-y-4 transition bg-gray-50 lg:border lg:border-opacity-10 md:shadow-sm md:hover:shadow-lg lg:mt-0 lg:absolute lg:bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:translate-y-1/2">
          <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 transform rotate-45 -translate-y-0.5 translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>

          <h2 className="text-center">
            Besplatno primajte obavijesti u sandučić
          </h2>
          <form className="w-full md:w-auto">
            <div className="flex flex-col space-y-4 shadow-sm md:flex-row md:space-y-0 md:border md:border-opacity-10">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="p-2 transition bg-white border focus:outline-none focus:ring-2 focus:ring-yellow-500 border-opacity-10 md:border-none"
                type="email"
                id="email"
                placeholder="budi@zakon.com"
              />
              <button
                className="p-2 transition bg-yellow-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:bg-yellow-400"
                type="submit"
              >
                <div className="flex items-center justify-center">
                  <svg
                    className="inline w-6 h-6 mx-1"
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
            </div>
          </form>
        </aside>
      </motion.section>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative text-center h-1/2"
      >
        <img
          className="object-cover w-full h-full"
          src={imageUrl}
          alt={title}
        />
        <div className="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full px-2 text-gray-50">
          <h3 className="text-2xl md:text-3xl md:pt-8 md:px-16">{title}</h3>
          <div className="mt-2 group">
            <Link href={`/recepti/${slug}`}>
              <a className="text-xl text-yellow-500 font-heading">recept</a>
            </Link>
            <div className="h-0.5 scale-x-0 origin-left bg-yellow-500 transform group-hover:scale-x-100 transition"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      </motion.main>
    </Layout>
  )
}
