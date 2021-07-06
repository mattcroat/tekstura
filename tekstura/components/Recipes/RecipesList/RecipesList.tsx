import React from 'react'
import { useInfiniteQuery } from 'react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { fetchRecipes } from '@/root/lib/api/sanity'
import { useIntersectionObserver } from '@/root/lib/hooks/useIntersectionObserver'

import type { Recipe } from '@/root/types/recipe'

export function RecipesList() {
  const { locale = 'hr' } = useRouter()
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
    enabled: hasNextPage as boolean,
  })

  const recipesNotFoundMessage =
    locale === 'hr' ? 'Nema recepta.' : 'There are no recipes.'
  const recipesErrorMessage =
    locale === 'hr' ? 'Nešto je pošlo po krivu.' : 'Something went wrong.'

  return (
    <>
      {!recipes?.pages && (
        <div className="my-8 dark:text-gray-50">{recipesNotFoundMessage}</div>
      )}
      {recipes?.pages && (
        <section className="my-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {recipesError && (
            <span className="dark:text-gray-50">{recipesErrorMessage}</span>
          )}
          {!recipesError &&
            recipes?.pages.map((recipe) =>
              recipe.data.map(({ id, title, imageUrl, slug }: Recipe) => (
                <article key={id} className="mt-8 md:mt-0">
                  <Link href={`/recepti/${slug}`}>
                    <a className="inline-block w-full">
                      <div className="relative overflow-hidden">
                        <img
                          className="object-cover w-full transition transform h-72 hover:scale-110"
                          src={`${imageUrl}?h=400`}
                          alt={title}
                        />
                      </div>
                    </a>
                  </Link>
                  <div className="mt-2 text-lg font-bold dark:text-gray-50">
                    {title}
                  </div>
                </article>
              ))
            )}
          <div ref={loadMoreRef}></div>
        </section>
      )}
    </>
  )
}
