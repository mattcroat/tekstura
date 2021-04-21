import { Home } from '@/root/components/Home'
import { sanityClient } from '@/root/lib/sanity/client'

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

export async function getStaticProps() {
  const latestRecipe = await sanityClient.fetch(`
    *[_type == 'recipe'] | order(_createdAt desc)[0] {
      'title': title,
      'slug': slug.current,
      'imageUrl': mainImage.asset->url
    }
  `)

  return {
    props: { latestRecipe },
  }
}
