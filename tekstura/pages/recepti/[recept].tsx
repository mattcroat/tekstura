import { Recipe } from '@/root/components/Recipe'
import { useRecipePreview } from '@/root/lib/hooks/useRecipePreview'
import { getClient } from '@/root/lib/sanity/client'

import type {
  Params,
  RecipeItems,
  TranslatedRecipeText,
} from '@/root/types/recipe'

type RecipePageProps = {
  recipe: RecipeItems
  translatedText: TranslatedRecipeText | Record<string, string>
  preview: boolean
  slug: string
}

type PathsFromSlugs = {
  recept: string
  locale: string
}[]

export default function RecipePage({
  recipe,
  translatedText = {},
  preview,
  slug,
}: RecipePageProps) {
  const recipePreview = useRecipePreview(recipe, preview, slug)

  return <Recipe recipe={recipePreview} translatedText={translatedText} />
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
  const recipe: RecipeItems = await getClient(preview).fetch(
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

  const translatedText: TranslatedRecipeText = await getClient(preview).fetch(
    `
    *[_type == 'recipePage' && _lang == $language][0] {
      preparation,
      portion,
      ingredients,
      subscribeTitle,
      subscribePlaceholder,
      subscribeCallToAction
    }
  `,
    {
      language: locale === 'en' ? 'en_GB' : locale,
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
      translatedText,
      preview,
      slug: params.recept,
    },
  }
}
