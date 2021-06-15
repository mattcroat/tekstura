import React from 'react'
import { useInfiniteQuery } from 'react-query'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { fetchRecipes } from '@/root/lib/api/sanity'
import { useIntersectionObserver } from '@/root/lib/hooks/useIntersectionObserver'
import { Recipe } from '@/root/types/recipe'
import { variants } from '@/root/variants/recipes'

export function RecipesList() {
  const { locale = 'hr' } = useRouter()
  const [isAnimating, setIsAnimating] = React.useState(false)
  const loadMoreRef = React.useRef<HTMLDivElement>(null)
  const {
    data: recipes,
    error: recipesError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(['recipes', locale], fetchRecipes, {
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage) =>
      lastPage.hasNextPage ? lastPage.nextPage : false,
  })

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: !isAnimating && (hasNextPage as boolean),
  })

  return (
    <>
      {!recipes?.pages && (
        <div className="my-8 dark:text-gray-50">Nema recepta.</div>
      )}
      {recipes?.pages && (
        <motion.section
          className="my-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          variants={variants.recipes}
          initial="hidden"
          animate="show"
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {recipesError && (
            <span className="dark:text-gray-50">Nešto je pošlo po krivu.</span>
          )}
          {!recipesError &&
            recipes?.pages.map((recipe) =>
              recipe.data.map(({ id, title, imageUrl, slug }: Recipe) => (
                <motion.article
                  key={id}
                  className="mt-8 md:mt-0"
                  variants={variants.recipe}
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
              ))
            )}
          <div ref={loadMoreRef}></div>
        </motion.section>
      )}
    </>
  )
}
