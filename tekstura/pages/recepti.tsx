import { sanityClient } from '@/root/lib/sanity/client'
import { Recipes } from '@/root/components/Recipes'

import type { Params, TranslatedRecipesText } from '@/root/types/recipe'

type RecipesPageProps = {
  translatedText: TranslatedRecipesText
}

export default function RecipesPage({ translatedText }: RecipesPageProps) {
  return <Recipes translatedText={translatedText} />
}

export async function getStaticProps({ locale }: Params) {
  const translatedText: TranslatedRecipesText = await sanityClient.fetch(
    `
    *[_type == 'recipesPage' && _lang == $language][0] {
      title,
      placeholder
    }
  `,
    {
      language: locale === 'en' ? 'en_GB' : locale,
    }
  )

  return {
    props: {
      translatedText,
    },
  }
}
