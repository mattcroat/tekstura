import React from 'react'

import { RecipesList } from '@/root/components/Recipes/RecipesList'
import { Search } from '@/root/components/Recipes/Search'
import { SearchResults } from '@/root/components/Recipes/SearchResults'
import { Layout } from '@/root/components/Layout'

export function Recipes() {
  const [searchQuery, setSearchQuery] = React.useState<string>('')

  return (
    <Layout>
      <main className="px-8 md:px-16">
        <h1 className="mt-8 text-2xl dark:text-gray-50 md:mt-16">Pretraga</h1>
        <Search setSearchQuery={setSearchQuery} />
        {searchQuery && <SearchResults searchQuery={searchQuery} />}
        {!searchQuery && <RecipesList />}
      </main>
    </Layout>
  )
}
