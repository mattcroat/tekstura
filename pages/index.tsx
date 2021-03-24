import { Home } from '@/root/components/Home'
import { sanityClient } from '@/root/lib/sanity/client'

type IndexPageProps = {
  latestPost: {
    slug: string
    title: string
    imageUrl: string
  }
}

export default function IndexPage({ latestPost }: IndexPageProps) {
  return <Home latestPost={latestPost} />
}

export async function getStaticProps() {
  const latestPost = await sanityClient.fetch(`
    *[_type == 'recipe'] | order(_createdAt desc)[0] {
      "slug": slug.current,
      "title": title,
      "imageUrl": mainImage.asset->url
    }
  `)

  return {
    props: { latestPost },
  }
}
