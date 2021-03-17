import React from 'react'
import { motion } from 'framer-motion'

import { Layout } from '@/root/components/Layout'
import { Ingredients } from '@/root/components/Recipe/Ingredients'
import { formatIngredients, Ingredient } from '@/root/utils/recipe'

const data = [
  {
    id: 1,
    amount: '400',
    ingredient: 'bijele riže',
    unit: 'g',
  },
  {
    id: 2,
    amount: '1',
    ingredient: 'rižinog vinskog octa',
    unit: 'žlica',
  },
  {
    id: 3,
    amount: '2',
    ingredient: 'ulja sezama',
    unit: 'žlica',
  },
  {
    id: 4,
    amount: '1',
    ingredient: 'brašna',
    unit: 'kg',
  },
  {
    id: 5,
    amount: '1',
    ingredient: 'čili umaka',
    unit: 'žličica',
  },
  {
    id: 6,
    amount: '4',
    ingredient: 'majoneze',
    unit: 'žličica',
  },
  {
    id: 7,
    amount: '1/2',
    ingredient: 'krastavaca',
    unit: '',
  },
  {
    id: 8,
    amount: '1 1/2',
    ingredient: 'kupusa',
    unit: '',
  },
  {
    id: 9,
    amount: '',
    ingredient: 'morska sol',
    unit: '',
  },
  {
    id: 10,
    amount: '',
    ingredient: 'crni papar',
    unit: '',
  },
]

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

export function Recipe() {
  const [portion, setPortion] = React.useState<number>(2)
  const [ingredients, setIngredients] = React.useState<Ingredient[]>(data)

  React.useEffect(() => {
    if (portion >= 1) {
      const newIngredients = formatIngredients(data, portion)
      setIngredients(newIngredients)
    } else {
      setIngredients(data)
    }
  }, [portion])

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
      <div className="h-96 mt-8 px-8 md:mt-16 md:px-16">
        <img
          className="h-full w-full object-cover"
          src="/images/dish.webp"
          alt="Dish"
        />
      </div>

      <motion.main
        className="my-8 md:my-16 px-8 md:px-16 dark:text-gray-50 md:flex md:gap-x-16"
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
                  <span className="font-bold">34 min</span>
                </div>
              </div>

              <div className="pl-6">
                <h3 className="text-lg">Porcija</h3>
                <div className="text-xl font-bold space-x-2">
                  <button onClick={decreasePortion}>-</button>
                  <span className="select-none">{portion}</span>
                  <button onClick={increasePortion}>+</button>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mr-8">
              <h2 className="text-xl dark:text-yellow-400">Sastojci</h2>
              <Ingredients ingredients={ingredients} />
            </div>

            <div className="max-w-lg mx-auto mt-8 p-6 border border-gray-800 dark:border-gray-50 border-opacity-10 dark:border-opacity-10 shadow-sm md:mr-8">
              <h2 className="text-xl">Budite obaviješteni</h2>
              <form className="flex flex-col gap-y-2 mt-4">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="p-2 text-gray-800 shadow-sm"
                  type="email"
                  id="email"
                  placeholder="budi@zakon.com"
                />
                <button
                  className="p-2 text-gray-800 bg-yellow-400"
                  type="submit"
                >
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
            </div>
          </div>
        </div>

        <section className="space-y-8 leading-relaxed md:w-full">
          <div>
            <h1 className="mt-8 text-2xl dark:text-yellow-400 capitalize md:mt-0 md:text-3xl">
              Svako Jutro Jedno Jaje Organizmu Snagu Daje
            </h1>
            <div className="h-1 w-16 mt-4 bg-yellow-400"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ullam dicta vero deleniti necessitatibus dignissimos, id nulla
            repudiandae, impedit explicabo eos soluta possimus inventore
            temporibus? Fugit soluta at dolorum mollitia! Odio similique, est
            nam asperiores molestiae praesentium harum perferendis officia quam
            dignissimos sed a natus ipsa facilis corrupti labore maxime fugiat
            iure optio autem suscipit. Error iste quisquam maxime quis. Fugiat
            ullam quas consequuntur excepturi vero!
          </p>

          <img
            className="h-96 w-full object-cover"
            src="/images/dish.webp"
            alt="Dish"
          />

          <div className="p-8 border border-gray-50 border-opacity-10 md:p-0 md:border-0 md:flex md:items-center md:gap-x-8">
            <div className="h-16 w-16 flex flex-shrink-0 justify-center items-center mx-auto text-gray-800 bg-yellow-400 rounded-full">
              <span className="text-3xl font-bold">1</span>
            </div>
            <div className="mt-8 space-y-8 md:mt-0">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate illum minus dolorem iusto voluptatum asperiores
                laudantium suscipit magnam debitis fuga autem ad quasi quaerat
                sit beatae, sequi architecto. Quos, ullam.
              </p>
            </div>
          </div>

          <div className="p-8 border border-gray-50 border-opacity-10 md:p-0 md:border-0 md:flex md:items-center md:gap-x-8">
            <div className="h-16 w-16 flex flex-shrink-0 justify-center items-center mx-auto text-gray-800 bg-yellow-400 rounded-full">
              <span className="text-3xl font-bold">1</span>
            </div>
            <div className="mt-8 space-y-8 md:mt-0">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate illum minus dolorem iusto voluptatum asperiores
                laudantium suscipit magnam debitis fuga autem ad quasi quaerat
                sit beatae, sequi architecto. Quos, ullam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate illum minus dolorem iusto voluptatum asperiores
                laudantium suscipit magnam debitis fuga autem ad quasi quaerat
                sit beatae, sequi architecto. Quos, ullam.
              </p>
            </div>
          </div>
        </section>
      </motion.main>
    </Layout>
  )
}
