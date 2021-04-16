import React from 'react'
import { motion } from 'framer-motion'

import { Layout } from '@/root/components/Layout'
import { Ingredients } from '@/root/components/Recipe/Ingredients'
import { PortableText } from '@/root/lib/sanity/client'
import { formatIngredients } from '@/root/utils/recipe'

import type { Ingredient, RecipeProps } from '@/root/types/recipe'

const variants = {
  recipe: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  },
}

export function Recipe({ recipe }: { recipe: RecipeProps }) {
  const {
    title,
    imageUrl,
    preparation,
    amount,
    ingredients: listOfIngredients,
    content,
  } = recipe

  const [portion, setPortion] = React.useState<number>(amount)
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([])

  React.useEffect(() => {
    if (portion >= 1) {
      const newIngredients = formatIngredients(listOfIngredients, portion)
      setIngredients(newIngredients)
    } else {
      setIngredients(listOfIngredients)
    }
  }, [listOfIngredients, portion])

  function increasePortion() {
    if (portion >= 6) return
    setPortion((portion) => portion + 1)
  }

  function decreasePortion() {
    if (portion <= 1) return
    setPortion((portion) => portion - 1)
  }

  return (
    <Layout>
      <div className="px-8 mt-8 h-96 md:mt-16 md:px-16">
        <img
          className="object-cover w-full h-full"
          src={imageUrl}
          alt={title}
        />
      </div>

      <motion.main
        className="px-8 my-8 md:my-16 md:px-16 dark:text-gray-50 md:flex md:gap-x-16"
        initial="hidden"
        animate="show"
        variants={variants.recipe}
      >
        <div className="md:w-2/4 lg:border-r lg:border-gray-800 lg:dark:border-gray-50 lg:border-opacity-10 lg:dark:border-opacity-10">
          <div className="lg:sticky lg:top-8">
            <div className="flex">
              <div className="pr-6 border-r border-gray-50 border-opacity-10">
                <h3 className="text-lg">Priprema</h3>
                <div className="flex items-center gap-1 mt-1">
                  <svg
                    height="16"
                    width="16"
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                    ></path>
                  </svg>
                  <span className="font-bold">{preparation} min</span>
                </div>
              </div>

              <div className="pl-6">
                <h3 className="text-lg">Porcija</h3>
                <div className="space-x-2 text-xl font-bold">
                  <button onClick={decreasePortion}>-</button>
                  <span className="select-none">{portion}</span>
                  <button onClick={increasePortion}>+</button>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mr-8">
              <h2 className="text-xl">Sastojci</h2>
              <Ingredients ingredients={ingredients} />
            </div>

            <div className="max-w-lg p-6 mx-auto mt-8 border border-gray-800 shadow-sm dark:border-gray-50 border-opacity-10 dark:border-opacity-10 md:mr-8">
              <h2 className="text-xl">Budite obaviješteni</h2>
              <form className="flex flex-col mt-4 gap-y-2">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="p-2 border border-gray-800 shadow-sm border-opacity-10"
                  type="email"
                  id="email"
                  placeholder="budi@zakon.com"
                />
                <button
                  className="p-2 text-black transition bg-gold hover:bg-gold-light"
                  type="submit"
                >
                  <div className="flex items-center justify-center">
                    <svg
                      height="24"
                      width="24"
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
              </form>
            </div>
          </div>
        </div>

        <section className="leading-relaxed md:w-full">
          <div>
            <h1 className="mt-8 text-2xl capitalize md:mt-0 md:text-3xl">
              {title}
            </h1>
            <div className="w-16 h-1 mt-4 bg-gold"></div>
          </div>
          <PortableText blocks={content} className="mt-8 space-y-8" />
        </section>
      </motion.main>
    </Layout>
  )
}
