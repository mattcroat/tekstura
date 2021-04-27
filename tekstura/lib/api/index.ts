import { sanityClient } from '@/root/lib/sanity/client'
import { Recipe } from '@/root/types/recipe'

type InfiniteRecipes = {
  data: Recipe[]
  nextPage: number
  hasNextPage: boolean
}

type FetchRecipeProps = { pageParam?: number }

type QueryRecipesProps = {
  queryKey: [key: string, searchQuery: string]
}

const recipeLimit = 20

async function getRecipeAmount(): Promise<number> {
  return (await sanityClient.fetch(`*[_type == 'recipe'] {}`)).length
}

export async function fetchRecipes({
  pageParam = recipeLimit,
}: FetchRecipeProps): Promise<InfiniteRecipes> {
  const recipeAmount = await getRecipeAmount()
  const recipes = await sanityClient.fetch(`
    *[_type == 'recipe'] | order(_createdAt desc) {
      'id': _id,
      'title': title,
      'imageUrl': mainImage.asset->url,
      'slug': slug.current
    }[0...${pageParam}]
  `)

  return {
    data: recipes,
    nextPage: pageParam + recipeLimit,
    hasNextPage: pageParam < recipeAmount,
  }
}

export async function queryRecipes({
  queryKey,
}: QueryRecipesProps): Promise<Recipe[]> {
  const [, searchQuery] = queryKey

  return sanityClient.fetch(
    `
    *[_type == 'recipe' && title match $title || $tag in tags] {
      'id': _id,
      'title': title,
      'imageUrl': mainImage.asset->url,
      'slug': slug.current
    }
  `,
    {
      title: `${searchQuery}*`,
      tag: searchQuery,
    }
  )
}
