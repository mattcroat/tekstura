import { Recipe } from '@/root/components/Recipe'
import { useRecipePreview } from '@/root/lib/hooks/useRecipePreview'
import { getClient } from '@/root/lib/sanity/client'

import type { Params, RecipeProps, Slug } from '@/root/types/recipe'

type RecipePageProps = {
  recipe: RecipeProps
  preview: boolean
  slug: string
}

export default function RecipePage({ recipe, preview, slug }: RecipePageProps) {
  const recipePreview = useRecipePreview(recipe, preview, slug)

  return <Recipe recipe={recipePreview} />
}

export async function getStaticPaths() {
  const pathsFromSlugs: Slug[] = await getClient().fetch(`
    *[_type == 'recipe'] {
      'recept': slug.current
    }
  `)

  return {
    paths: pathsFromSlugs.map((slug) => ({ params: slug })),
    fallback: true,
  }
}

export async function getStaticProps({ params = {}, preview = false }: Params) {
  const slug = params.recept

  const recipe: RecipeProps = await getClient(preview).fetch(
    `
    *[_type == 'recipe' && slug.current == $slug][0] {
      'title': title,
      'imageUrl': mainImage.asset->url,
      'preparation': preparationTime,
      'amount': portionAmount,
      'ingredients': ingredients,
      'content': body,
      'slug': slug.current
    }
  `,
    { slug }
  )

  const ingredients =
    recipe?.ingredients?.map((field) => ({
      id: field._key,
      amount: field.amount ?? '',
      ingredient: field.ingredient,
      unit: field.unit ?? '',
    })) || null

  return {
    props: {
      recipe: {
        ...recipe,
        ingredients,
      },
      preview,
      slug,
    },
  }
}
