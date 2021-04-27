import { useQuery } from 'react-query'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { queryRecipes } from '@/root/lib/api'
import { variants } from '@/root/variants/recipes'

type SearchResultsProps = {
  searchQuery: string
}

export function SearchResults({ searchQuery }: SearchResultsProps) {
  const { data: searchResults, error: searchError } = useQuery(
    ['search', searchQuery],
    queryRecipes,
    {
      refetchOnWindowFocus: false,
      enabled: !!searchQuery,
    }
  )

  return (
    <>
      {searchResults && searchResults.length < 1 && (
        <div className="my-8 dark:text-gray-50">Nije pronađeno.</div>
      )}
      {searchResults && (
        <motion.section
          className="my-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          variants={variants.recipes}
          initial="hidden"
          animate="show"
        >
          {searchError && (
            <span className="dark:text-gray-50">Nešto je pošlo po krivu.</span>
          )}
          {!searchError &&
            searchResults?.map(({ id, title, imageUrl, slug }) => (
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
            ))}
        </motion.section>
      )}
    </>
  )
}
