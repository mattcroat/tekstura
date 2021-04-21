import { sanityClient } from '@/root/lib/sanity/client'

import type { Recipe } from '@/root/types/recipe'

export async function fetchRecipes(): Promise<Recipe[]> {
  return sanityClient.fetch(`
    *[_type == 'recipe'] | order(_createdAt desc) {
      'id': _id,
      'title': title,
      'imageUrl': mainImage.asset->url,
      'slug': slug.current
    }[0...20]
  `)
}

export async function queryRecipes(searchQuery: string): Promise<Recipe[]> {
  return sanityClient.fetch(
    `
    *[_type == 'recipe' && title match $title || $tag in tags] {
      'id': _id,
      'title': title,
      'imageUrl': mainImage.asset->url,
      'slug': slug.current
    }[0...20]
  `,
    {
      title: `${searchQuery}*`,
      tag: searchQuery,
    }
  )
}
