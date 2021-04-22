import { usePreviewSubscription } from '@/root/lib/sanity/client'

import type { RecipeProps } from '@/root/types/recipe'

export function useRecipePreview(
  recipe: RecipeProps,
  preview: string | string[] | undefined
): RecipeProps {
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
      params: { slug: recipe?.slug },
      initialData: recipe,
      enabled: preview !== undefined,
    }
  )

  return recipePreview
}
