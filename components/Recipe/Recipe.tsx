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
      <div className="h-60 mt-8 md:mt-16 px-8 md:px-16">
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
        <div className="md:w-2/4 lg:border-r lg:border-gray-50 lg:border-opacity-10 ">
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
                <div className="text-2xl font-bold space-x-2">
                  <button onClick={decreasePortion}>-</button>
                  <span>{portion}</span>
                  <button onClick={increasePortion}>+</button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl text-yellow-400">Sastojci</h2>
              <Ingredients ingredients={ingredients} />
            </div>
          </div>
        </div>

        <section className="space-y-8 md:w-full">
          <h1 className="mt-8 md:mt-0 text-2xl md:text-3xl text-yellow-400">
            Svako Jutro Jedno Jaje Organizmu Snagu Daje
          </h1>
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

          <div className="p-8 md:p-0 border border-gray-50 border-opacity-10 md:border-0 md:flex md:items-center md:gap-x-8">
            <div className="h-16 w-16 flex flex-shrink-0 justify-center items-center mx-auto text-gray-800 bg-yellow-400 rounded-full">
              <span className="text-3xl font-bold">1</span>
            </div>
            <div className="mt-8 md:mt-0 space-y-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate illum minus dolorem iusto voluptatum asperiores
                laudantium suscipit magnam debitis fuga autem ad quasi quaerat
                sit beatae, sequi architecto. Quos, ullam.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-0 border border-gray-50 border-opacity-10 md:border-0 md:flex md:items-center md:gap-x-8">
            <div className="h-16 w-16 flex flex-shrink-0 justify-center items-center mx-auto text-gray-800 bg-yellow-400 rounded-full">
              <span className="text-3xl font-bold">2</span>
            </div>
            <div className="mt-8 md:mt-0 space-y-8">
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
