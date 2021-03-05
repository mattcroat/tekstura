import { Recipe } from '@/root/components/Recipe'

export default function RecipePage() {
  return <Recipe />
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          recept: 'nevjerojatni-recept',
        },
      },
    ],
    fallback: false,
  }
}

export async function getStaticProps() {
  const recipeIngredients = [
    {
      id: 1,
      amount: '400',
      ingredient: 'bijele riže',
      unit: 'g',
    },
    {
      id: 2,
      amount: '1',
      ingredient: 'rižinog vinskog octa',
      unit: 'žlica',
    },
    {
      id: 3,
      amount: '2',
      ingredient: 'ulja sezama',
      unit: 'žlica',
    },
    {
      id: 4,
      amount: '1',
      ingredient: 'brašna',
      unit: 'kg',
    },
    {
      id: 5,
      amount: '1',
      ingredient: 'čili umaka',
      unit: 'žličica',
    },
    {
      id: 6,
      amount: '4',
      ingredient: 'majoneze',
      unit: 'žličica',
    },
    {
      id: 7,
      amount: '1/2',
      ingredient: 'krastavaca',
      unit: '',
    },
    {
      id: 8,
      amount: '1 1/2',
      ingredient: 'kupusa',
      unit: '',
    },
    {
      id: 9,
      amount: '',
      ingredient: 'morska sol',
      unit: '',
    },
    {
      id: 10,
      amount: '',
      ingredient: 'crni papar',
      unit: '',
    },
  ]

  return {
    props: {
      recipeIngredients,
    },
  }
}
