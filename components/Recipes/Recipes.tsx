import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Layout } from '@/root/components/Layout'
import { sanityClient } from '@/root/lib/sanity/client'

type Recipe = {
  id: string
  title: string
  imageUrl: string
  slug: string
}

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
  const [recipes, setRecipes] = React.useState<Recipe[]>([])

  React.useEffect(() => {
    async function getRecipes() {
      const recipes: Recipe[] = await sanityClient.fetch(`
        *[_type == 'recipe'] | order(_createdAt desc) {
          'id': _id,
          'title': title,
          'imageUrl': mainImage.asset->url,
          'slug': slug.current
        }
      `)

      setRecipes(recipes)
    }

    getRecipes()
  }, [])

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
            className="absolute w-6 h-6 mx-2 text-gray-300 top-2 left-1"
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
            type="text"
            id="recipe-search"
            name="recipe-search"
            placeholder="Pretražite recepte"
          />
        </div>

        <motion.section
          className="my-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={variants.cards}
        >
          {recipes?.map(({ id, title, imageUrl, slug }) => (
            <motion.article
              key={id}
              className="mt-8 md:mt-0"
              variants={variants.card}
            >
              <Link href={`/recepti/${slug}`}>
                <a>
                  <div className="relative overflow-hidden">
                    <img
                      className="object-cover w-full transition transform h-72 hover:scale-110"
                      src={`${imageUrl}?h=400`}
                      alt={title}
                    />
                  </div>
                  <div className="mt-2 text-lg font-bold dark:text-gray-50">
                    {title}
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
