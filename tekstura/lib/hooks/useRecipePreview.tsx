import { useRouter } from 'next/router'

import { usePreviewSubscription } from '@/root/lib/sanity/client'

import type { RecipeItems } from '@/root/types/recipe'

export function useRecipePreview(
  recipe: RecipeItems,
  preview: boolean,
  slug: string
): RecipeItems {
  const router = useRouter()

  const { data: recipePreview } = usePreviewSubscription(
    `
  *[_type == 'recipe' && slug.current == $slug][0] {
    'title': title,
    'imageUrl': mainImage.asset->url,
    'preparation': preparationTime,
    'amount': portionAmount,
    'ingredients': ingredients,
    'content': body,
    'slug': slug.current,
  }
`,
    {
      params: { slug },
      initialData: recipe,
      enabled: preview || router.query.preview !== null,
    }
  )

  return recipePreview
}
