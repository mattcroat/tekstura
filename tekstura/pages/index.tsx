import { Home } from '@/root/components/Home'
import {
  getLatestRecipe,
  getTranslatedHeaderText,
  getTranslatedText,
} from '@/root/lib/api/sanity'

import type {
  Params,
  TranslatedHeaderText,
  TranslatedHomeText,
} from '@/root/types/recipe'

type IndexPageProps = {
  latestRecipe: {
    title: string
    slug: string
    imageUrl: string
  }
  translatedText: TranslatedHomeText
  translatedHeaderText: TranslatedHeaderText
}

export default function IndexPage({
  latestRecipe,
  translatedText,
  translatedHeaderText,
}: IndexPageProps) {
  return (
    <Home
      latestRecipe={latestRecipe}
      translatedText={translatedText}
      translatedHeaderText={translatedHeaderText}
    />
  )
}

export async function getStaticProps({ locale }: Params) {
  const query = `
    *[_type == 'homePage' && _lang == $language][0] {
      title,
      secondaryTitle,
      subscribeTitle,
      subscribePlaceholder,
      subscribeCallToAction,
      recipeLink
    }
  `

  const latestRecipe = await getLatestRecipe(locale)
  const translatedText = await getTranslatedText(locale, query)
  const translatedHeaderText = await getTranslatedHeaderText(locale)

  return {
    props: { latestRecipe, translatedText, translatedHeaderText },
  }
}
