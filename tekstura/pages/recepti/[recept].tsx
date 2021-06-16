import { Recipe } from '@/root/components/Recipe'
import { useRecipePreview } from '@/root/lib/hooks/useRecipePreview'
import { getClient } from '@/root/lib/sanity/client'

import type { Params, RecipeProps } from '@/root/types/recipe'

type RecipePageProps = {
  recipe: RecipeProps
  preview: boolean
  slug: string
}

type PathsFromSlugs = {
  recept: string
  locale: string
}[]

export default function RecipePage({ recipe, preview, slug }: RecipePageProps) {
  const recipePreview = useRecipePreview(recipe, preview, slug)

  return <Recipe recipe={recipePreview} />
}

export async function getStaticPaths() {
  const pathsFromSlugs: PathsFromSlugs = await getClient().fetch(`
    *[_type == 'recipe'] {
      'locale': _lang,
      'recept': slug.current
    }
  `)

  return {
    paths: pathsFromSlugs.map(({ locale, recept }) => ({
      params: { recept },
      locale: locale === 'en_GB' ? 'en' : locale,
    })),
    fallback: true,
  }
}

export async function getStaticProps({
  locale,
  params = {},
  preview = false,
}: Params) {
  const recipe: RecipeProps = await getClient(preview).fetch(
    `
    *[_type == 'recipe' && _lang == $language && slug.current == $slug][0] {
      'title': title,
      'imageUrl': mainImage.asset->url,
      'preparation': preparationTime,
      'amount': portionAmount,
      'ingredients': ingredients,
      'content': body,
      'slug': slug.current
    }
  `,
    {
      language: locale === 'en' ? 'en_GB' : locale,
      slug: params.recept,
    }
  )

  const ingredients =
    recipe?.ingredients?.map((field) => ({
      id: field._key,
      amount: field.amount ?? '',
      ingredient: field.ingredient,
      unit: field.unit ?? '',
    })) || null

  return {
    props: {
      recipe: {
        ...recipe,
        ingredients,
      },
      preview,
      slug: params.recept,
    },
  }
}
