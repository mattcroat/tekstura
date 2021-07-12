import { Recipe } from '@/root/components/Recipe'
import {
  getRecipe,
  getRecipePaths,
  getTranslatedHeaderText,
  getTranslatedText,
} from '@/root/lib/api/sanity'
import { useRecipePreview } from '@/root/lib/hooks/useRecipePreview'

import type {
  Params,
  RecipeItems,
  TranslatedHeaderText,
  TranslatedRecipeText,
} from '@/root/types/recipe'

type RecipePageProps = {
  recipe: RecipeItems
  translatedText: TranslatedRecipeText
  translatedHeaderText: TranslatedHeaderText
  preview: boolean
  slug: string
}

export default function RecipePage({
  recipe,
  translatedText = {},
  translatedHeaderText,
  preview,
  slug,
}: RecipePageProps) {
  const recipePreview = useRecipePreview(recipe, preview, slug)
  return (
    <Recipe
      recipe={recipePreview}
      translatedText={translatedText}
      translatedHeaderText={translatedHeaderText}
    />
  )
}

export async function getStaticPaths() {
  return {
    paths: await getRecipePaths(),
    fallback: true,
  }
}

export async function getStaticProps({
  locale,
  params = {},
  preview = false,
}: Params) {
  const query = `
    *[_type == 'recipePage' && _lang == $language][0] {
      preparation,
      portion,
      ingredients,
      subscribeTitle,
      subscribePlaceholder,
      subscribeCallToAction
    }
  `

  const slug = params.recept ?? ''
  const recipe = await getRecipe(locale, slug, preview)
  const translatedText = await getTranslatedText(locale, query)
  const translatedHeaderText = await getTranslatedHeaderText(locale)

  return {
    props: {
      recipe,
      translatedText,
      translatedHeaderText,
      preview,
      slug,
    },
  }
}
