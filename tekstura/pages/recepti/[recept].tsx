import { Recipe } from '@/root/components/Recipe'
import {
  getRecipe,
  getRecipePaths,
  getTranslatedText,
} from '@/root/lib/api/sanity'
import { useRecipePreview } from '@/root/lib/hooks/useRecipePreview'

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

  return {
    props: {
      recipe,
      translatedText,
      preview,
      slug,
    },
  }
}
