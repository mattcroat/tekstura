import { Recipe } from '@/root/components/Recipe'
import { sanityClient } from '@/root/lib/sanity/client'

import type { Ingredient } from '@/root/utils/recipe'

type RecipeProps = {
  title: string
  imageUrl: string
  preparation: number
  amount: number
  ingredients: Ingredient[]
  content: any
}

type Slug = string

type Params = { recept: string }

export default function RecipePage({ recipe }: { recipe: RecipeProps }) {
  return <Recipe recipe={recipe} />
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
