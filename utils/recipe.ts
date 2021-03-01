export type Ingredient = {
  id: number
  amount: string
  ingredient: string
  unit: string
}

export function formatIngredients(ingredients: Ingredient[], portion: number) {
  const newIngredients = ingredients.map(
    ({ id, amount, ingredient, unit }: any) => {
      const totalAmount = getTotalAmount(amount, portion)

      return {
        id,
        ingredient,
        amount: formattedAmount(totalAmount),
        unit: formattedUnit(totalAmount, unit),
      }
    }
  )

  return newIngredients
}

function isFraction(amount: string | number) {
  if (typeof amount === 'string') {
    return amount.includes('/')
  }
}

function getTotalAmount(amount: string, portion: number): string | number {
  const defaultPortion = 2
  let totalAmount = 0

  if (isFraction(amount)) {
    return amount
  }

  if (portion === defaultPortion) {
    totalAmount = +amount
  }

  if (portion > defaultPortion) {
    totalAmount = (+amount / defaultPortion) * portion
  }

  if (portion <= 1) {
    totalAmount = +amount / defaultPortion
  }

  return totalAmount
}

function formattedAmount(amount: string | number) {
  if (!amount) return

  if (isFraction(amount)) {
    return amount
  }

  const threshold = 1000
  const totalAmount = (+amount / threshold).toFixed(1)

  if (+amount < threshold) {
    return amount
  }

  return totalAmount
}

function formattedUnit(amount: string | number, unit: string) {
  const units = {
    g: { singular: 'g', plural: 'g' },
    kg: { singular: 'kg', plural: 'kg' },
    žličica: { singular: 'žličica', plural: 'žličice' },
    žlica: { singular: 'žlica', plural: 'žlice' },
  }

  if (units[unit]) {
    if (amount > 1) {
      if (amount > 1000 && unit === 'g') {
        return units['kg'].plural
      } else {
        return units[unit].plural
      }
    } else {
      return units[unit].singular
    }
  }

  return unit
}
