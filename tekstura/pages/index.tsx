import { Home } from '@/root/components/Home'
import { sanityClient } from '@/root/lib/sanity/client'

import type { Params } from '@/root/types/recipe'

type IndexPageProps = {
  latestRecipe: {
    title: string
    slug: string
    imageUrl: string
  }
}

export default function IndexPage({ latestRecipe }: IndexPageProps) {
  return <Home latestRecipe={latestRecipe} />
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

  return {
    props: { latestRecipe },
  }
}
