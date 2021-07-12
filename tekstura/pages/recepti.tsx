import { getTranslatedText } from '@/root/lib/api/sanity'
import { Recipes } from '@/root/components/Recipes'

import type { Params, TranslatedRecipesText } from '@/root/types/recipe'

type RecipesPageProps = {
  translatedText: TranslatedRecipesText
}

export default function RecipesPage({ translatedText }: RecipesPageProps) {
  return <Recipes translatedText={translatedText} />
}

export async function getStaticProps({ locale }: Params) {
  const query = `
    *[_type == 'recipesPage' && _lang == $language][0] {
      title,
      placeholder
    }
  `

  const translatedText = await getTranslatedText(locale, query)

  return {
    props: {
      translatedText,
    },
  }
}
