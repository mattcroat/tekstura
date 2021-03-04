import styled from '@emotion/styled'
import { Ingredient } from '@/root/utils/recipe'

type IngredientsProps = {
  ingredients: Ingredient[]
}

const IngredientsList = styled.ul`
  max-height: 400px;
  max-width: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  list-style: none;
`

const IngredientItem = styled.li`
  &:not(:last-of-type) {
    margin: var(--spacing-16) 0;
    padding-bottom: var(--spacing-8);
    border-bottom: var(--color-primary-border);
  }
`

export function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <IngredientsList>
      {ingredients.map(({ id, amount, ingredient, unit }) => (
        <IngredientItem key={id}>
          <strong>
            {amount} {unit}
          </strong>
          <span> {ingredient}</span>
        </IngredientItem>
      ))}
    </IngredientsList>
  )
}
