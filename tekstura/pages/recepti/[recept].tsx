import { useRouter } from 'next/router'

import { Recipe } from '@/root/components/Recipe'
import { useRecipePreview } from '@/root/lib/hooks/useRecipePreview'
import { sanityClient } from '@/root/lib/sanity/client'

import type { Params, RecipeProps, Slug } from '@/root/types/recipe'

export default function RecipePage({ recipe }: { recipe: RecipeProps }) {
  const { query } = useRouter()
  const recipePreview = useRecipePreview(recipe, query?.preview)

  return <Recipe recipe={recipePreview} />
}

export async function getStaticPaths() {
  const pathsFromSlugs: Slug[] = await sanityClient.fetch(`
    *[_type == 'recipe'] {
      'recept': slug.current
    }
  `)

  return {
    paths: pathsFromSlugs.map((slug) => ({ params: slug })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: Params }) {
  const recipe: RecipeProps = await sanityClient.fetch(
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
    { slug: params.recept }
  )

  const ingredients = recipe?.ingredients?.map((field) => ({
    id: field._key,
    amount: field.amount ?? '',
    ingredient: field.ingredient,
    unit: field.unit ?? '',
  }))

  return {
    props: {
      recipe: { ...recipe, ingredients },
    },
  }
}
