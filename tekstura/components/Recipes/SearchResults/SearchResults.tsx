import { useQuery } from 'react-query'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { queryRecipes } from '@/root/lib/api/sanity'
import { variants } from '@/root/variants/recipes'

type SearchResultsProps = {
  searchQuery: string
}

export function SearchResults({ searchQuery }: SearchResultsProps) {
  const { locale = 'hr' } = useRouter()
  const { data: searchResults, error: searchError } = useQuery(
    ['search', searchQuery, locale],
    queryRecipes,
    {
      refetchOnWindowFocus: false,
      enabled: !!searchQuery,
    }
  )

  const noSearchResultsMessage =
    locale === 'hr' ? 'Nije pronađeno.' : 'Not found.'
  const searchErrorMessage =
    locale === 'hr' ? 'Nešto je pošlo po krivu.' : 'Something went wrong.'

  return (
    <>
      {searchResults && searchResults.length < 1 && (
        <div className="my-8 dark:text-gray-50">{noSearchResultsMessage}</div>
      )}
      {searchResults && (
        <motion.section
          className="my-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          variants={variants.recipes}
          initial="hidden"
          animate="show"
        >
          {searchError && (
            <span className="dark:text-gray-50">{searchErrorMessage}</span>
          )}
          {!searchError &&
            searchResults?.map(({ id, title, imageUrl, slug }) => (
              <motion.article
                key={id}
                className="mt-8 md:mt-0"
                variants={variants.recipe}
              >
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
              </motion.article>
            ))}
        </motion.section>
      )}
    </>
  )
}
