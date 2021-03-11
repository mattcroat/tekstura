import { Ingredient } from '@/root/utils/recipe'

type IngredientsProps = {
  ingredients: Ingredient[]
}

export function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <div className="inline-block divide-y divide-gray-50 divide-opacity-10">
      {ingredients.map(({ id, amount, ingredient, unit }) => (
        <div key={id} className="pt-4 pb-1">
          <strong>
            {amount} {unit}
          </strong>
          <span> {ingredient}</span>
        </div>
      ))}
    </div>
  )
}
