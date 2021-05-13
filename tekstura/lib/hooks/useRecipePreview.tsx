import { useRouter } from 'next/router'

import { usePreviewSubscription } from '@/root/lib/sanity/client'

import type { RecipeProps } from '@/root/types/recipe'

export function useRecipePreview(
  recipe: RecipeProps,
  preview: boolean,
  slug: string
): RecipeProps {
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
