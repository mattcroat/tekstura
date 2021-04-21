import { Ingredient } from '@/root/types/recipe'

type IngredientsProps = {
  ingredients: Ingredient[]
}

export function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <div className="overflow-y-scroll divide-y divide-gray-800 max-h-80 scrollbar-thin dark:divide-gray-50 divide-opacity-10 dark:divide-opacity-10">
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
