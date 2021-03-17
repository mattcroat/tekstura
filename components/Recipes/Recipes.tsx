import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Layout } from '@/root/components/Layout'

const recipes = [
  {
    id: 1,
    title: 'Svako Jutro Jedno Jaje Organizmu Snagu Daje',
    src: '/images/dish.webp',
  },
  {
    id: 2,
    title: 'Osveta je Najbolje Servirana Hladna',
    src: '/images/dish.webp',
  },
  {
    id: 3,
    title: 'Jelo Utopljeno u Umaku, ti si Idući',
    src: '/images/dish.webp',
  },
  {
    id: 4,
    title: 'Svako Jutro Jedno Jaje Organizmu Snagu Daje',
    src: '/images/dish.webp',
  },
  {
    id: 5,
    title: 'Osveta je Najbolje Servirana Hladna',
    src: '/images/dish.webp',
  },
  {
    id: 6,
    title: 'Jelo Utopljeno u Umaku, ti si Idući',
    src: '/images/dish.webp',
  },
]

const variants = {
  cards: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.3,
      },
    },
  },
  card: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
}

export function Recipes() {
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [searchResults, setSearchResults] = React.useState<
    {
      id: number
      title: string
      src: string
    }[]
  >()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTimeout(() => setSearchTerm(e.target.value), 1000)
  }

  React.useEffect(() => {
    const results = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <Layout>
      <main className="px-8 md:px-16">
        <h1 className="mt-8 text-2xl dark:text-gray-50 md:mt-16">Pretraga</h1>
        <div className="relative mt-4 text-gray-800">
          <label
            className="sr-only"
            aria-hidden="false"
            htmlFor="recipe-search"
          >
            Search
          </label>
          <svg
            className="absolute top-2 left-1 h-6 w-6 mx-2 text-gray-300"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M508.875 493.792L353.089 338.005c32.358-35.927 52.245-83.296 52.245-135.339C405.333 90.917 314.417 0 202.667 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c52.043 0 99.411-19.887 135.339-52.245l155.786 155.786a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125 4.166-4.167 4.166-10.917-.001-15.083zM202.667 384c-99.979 0-181.333-81.344-181.333-181.333S102.688 21.333 202.667 21.333 384 102.677 384 202.667 302.646 384 202.667 384z"
            />
          </svg>
          <input
            className="w-full py-2 pl-12 bg-white border border-gray-200 shadow-sm lg:w-search"
            onChange={handleChange}
            type="text"
            id="recipe-search"
            name="recipe-search"
            placeholder="Pretražite recepte"
          />
        </div>

        <motion.section
          className="my-8 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={variants.cards}
        >
          {searchResults?.map(({ id, title, src }) => (
            <motion.article
              key={id}
              className="border-2 border-gray-50 hover:border-yellow-400 dark:border-gray-800 dark:hover:border-yellow-400 transition"
              variants={variants.card}
            >
              <Link href="#">
                <a>
                  <div className="relative group overflow-hidden">
                    <img
                      className="h-80 w-full object-cover transform group-hover:scale-110 transition"
                      src={src}
                      alt={title}
                    />
                    <div className="absolute bottom-0 z-10">
                      <h3 className="p-4 text-2xl text-yellow-400 capitalize">
                        {title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800 dark:from-gray-900"></div>
                  </div>
                </a>
              </Link>
            </motion.article>
          ))}
        </motion.section>
      </main>
    </Layout>
  )
}
