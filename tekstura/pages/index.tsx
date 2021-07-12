import { Home } from '@/root/components/Home'
import { getLatestRecipe, getTranslatedText } from '@/root/lib/api/sanity'

import type { Params, TranslatedHomeText } from '@/root/types/recipe'

type IndexPageProps = {
  latestRecipe: {
    title: string
    slug: string
    imageUrl: string
  }
  translatedText: TranslatedHomeText
}

export default function IndexPage({
  latestRecipe,
  translatedText,
}: IndexPageProps) {
  return <Home latestRecipe={latestRecipe} translatedText={translatedText} />
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

  return {
    props: { latestRecipe, translatedText },
  }
}
