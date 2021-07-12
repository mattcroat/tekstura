import {
  getTranslatedHeaderText,
  getTranslatedText,
} from '@/root/lib/api/sanity'
import { Recipes } from '@/root/components/Recipes'

import type {
  Params,
  TranslatedHeaderText,
  TranslatedRecipesText,
} from '@/root/types/recipe'

type RecipesPageProps = {
  translatedText: TranslatedRecipesText
  translatedHeaderText: TranslatedHeaderText
}

export default function RecipesPage({
  translatedText,
  translatedHeaderText,
}: RecipesPageProps) {
  return (
    <Recipes
      translatedText={translatedText}
      translatedHeaderText={translatedHeaderText}
    />
  )
}

export async function getStaticProps({ locale }: Params) {
  const query = `
    *[_type == 'recipesPage' && _lang == $language][0] {
      title,
      placeholder
    }
  `

  const translatedText = await getTranslatedText(locale, query)
  const translatedHeaderText = await getTranslatedHeaderText(locale)

  return {
    props: {
      translatedText,
      translatedHeaderText,
    },
  }
}
