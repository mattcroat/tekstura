import { getClient, sanityClient } from '@/root/lib/sanity/client'

import type { Recipe, RecipeItems } from '@/root/types/recipe'

type InfiniteRecipes = {
  data: Recipe[]
  nextPage: number
  hasNextPage: boolean
}

type FetchRecipeProps = {
  pageParam?: number
  queryKey: string[]
}

type QueryRecipesProps = {
  queryKey: string[]
}

const recipeLimit = 20

// recipe amount is used to determine if there's any more results to fetch
async function getRecipeAmount(): Promise<number> {
  return (await sanityClient.fetch(`*[_type == 'recipe' && _lang == 'hr'] {}`))
    .length
}

// inside Sanity the locale is `en_GB` but in Next `en`
// because of routing so we flip them when doing a query
export async function fetchRecipes({
  pageParam = recipeLimit,
  queryKey,
}: FetchRecipeProps): Promise<InfiniteRecipes> {
  const [, locale] = queryKey
  const recipeAmount = await getRecipeAmount()
  const recipes = await sanityClient.fetch(
    `
    *[_type == 'recipe' && _lang == $language] | order(_createdAt desc) {
      'id': _id,
      'title': title,
      'imageUrl': mainImage.asset->url,
      'slug': slug.current
    }[0...${pageParam}]
  `,
    {
      language: locale === 'en' ? 'en_GB' : locale,
    }
  )

  return {
    data: recipes,
    nextPage: pageParam + recipeLimit,
    hasNextPage: pageParam < recipeAmount,
  }
}

export async function queryRecipes({
  queryKey,
}: QueryRecipesProps): Promise<Recipe[]> {
  const [, searchQuery, locale] = queryKey

  return sanityClient.fetch(
    `
    *[_type == 'recipe' && _lang == $language && title match $title || _lang == $language && $tag in tags] {
      'id': _id,
      'title': title,
      'imageUrl': mainImage.asset->url,
      'slug': slug.current
    }
  `,
    {
      title: `${searchQuery}*`,
      tag: searchQuery,
      language: locale === 'en' ? 'en_GB' : locale,
    }
  )
}

export async function getLatestRecipe(locale: string) {
  const query = `
    *[_type == 'recipe' && _lang == $language] | order(_createdAt desc)[0] {
      'title': title,
      'slug': slug.current,
      'imageUrl': mainImage.asset->url
    }
  `

  const params = {
    language: locale === 'en' ? 'en_GB' : locale,
  }

  const latestRecipe = await sanityClient.fetch(query, params)
  return latestRecipe
}

export async function getTranslatedText(locale: string, query: string) {
  const params = {
    language: locale === 'en' ? 'en_GB' : locale,
  }

  const translatedText = await sanityClient.fetch(query, params)
  return translatedText
}

export async function getTranslatedHeaderText(locale: string) {
  const seoTextQuery = `
    *[_type == 'seo' && _lang == $language][0] {
      title
    }
  `

  const navigationTextQuery = `
    *[_type == 'navigation' && _lang == $language][0] {
      home,
      recipes,
      about
    }
  `

  const translatedSeoText = await getTranslatedText(locale, seoTextQuery)
  const translatedNavigationText = await getTranslatedText(
    locale,
    navigationTextQuery
  )

  const translatedText = {
    ...translatedSeoText,
    ...translatedNavigationText,
  }

  return translatedText
}

export async function getRecipePaths() {
  const query = `
    *[_type == 'recipe'] {
      'locale': _lang,
      'recept': slug.current
    }
  `

  const pathsFromSlugs: {
    recept: string
    locale: string
  }[] = await getClient().fetch(query)

  const paths = pathsFromSlugs.map(({ locale, recept }) => ({
    params: { recept },
    locale: locale === 'en_GB' ? 'en' : locale,
  }))

  return paths
}

export async function getRecipe(
  locale: string,
  slug: string,
  preview: boolean
) {
  const query = `
    *[_type == 'recipe' && _lang == $language && slug.current == $slug][0] {
      'title': title,
      'imageUrl': mainImage.asset->url,
      'preparation': preparationTime,
      'amount': portionAmount,
      'ingredients': ingredients,
      'content': body,
      'slug': slug.current
    }
  `

  const params = {
    language: locale === 'en' ? 'en_GB' : locale,
    slug,
  }

  const recipe: RecipeItems = await getClient(preview).fetch(query, params)

  const ingredients =
    recipe?.ingredients?.map((field) => ({
      id: field._key,
      amount: field.amount ?? '',
      ingredient: field.ingredient,
      unit: field.unit ?? '',
    })) || null

  return {
    ...recipe,
    ingredients,
  }
}
