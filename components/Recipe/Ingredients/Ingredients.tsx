import { Ingredient } from '@/root/utils/recipe'

type IngredientsProps = {
  ingredients: Ingredient[]
}

export function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <div className="max-h-80 overflow-y-scroll divide-y divide-gray-50 divide-opacity-10">
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
