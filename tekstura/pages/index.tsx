import { Home } from '@/root/components/Home'
import { sanityClient } from '@/root/lib/sanity/client'

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
  const latestRecipe = await sanityClient.fetch(
    `
    *[_type == 'recipe' && _lang == $language] | order(_createdAt desc)[0] {
      'title': title,
      'slug': slug.current,
      'imageUrl': mainImage.asset->url
    }
  `,
    {
      language: locale === 'en' ? 'en_GB' : locale,
    }
  )

  const translatedText: TranslatedHomeText = await sanityClient.fetch(
    `
    *[_type == 'homePage' && _lang == $language][0] {
      title,
      secondaryTitle,
      subscribeTitle,
      subscribePlaceholder,
      subscribeCallToAction,
      recipeLink
    }
  `,
    {
      language: locale === 'en' ? 'en_GB' : locale,
    }
  )

  return {
    props: { latestRecipe, translatedText },
  }
}
