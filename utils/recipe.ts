export type Ingredient = {
  id: number
  amount: Amount
  ingredient: string
  unit: string
}

type Amount = string | number

type Units = {
  [index: string]: {
    singular: string
    plural: string
  }
  g: {
    singular: string
    plural: string
  }
  kg: {
    singular: string
    plural: string
  }
  žličica: {
    singular: string
    plural: string
  }
  žlica: {
    singular: string
    plural: string
  }
}

export function formatIngredients(
  ingredients: Ingredient[],
  portion: number
): Ingredient[] {
  const formatIngredients = ingredients.map(
    ({ id, amount, ingredient, unit }) => {
      const totalAmount = getTotalAmount(amount, portion)

      return {
        id,
        ingredient,
        amount: formattedAmount(totalAmount),
        unit: formattedUnit(totalAmount, unit),
      }
    }
  )

  return formatIngredients
}

function isFraction(amount: Amount) {
  if (typeof amount === 'string') {
    return amount.includes('/')
  }
}

function getTotalAmount(amount: Amount, portion: number): Amount {
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

function formattedAmount(amount: Amount): Amount {
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

function formattedUnit(amount: Amount, unit: string): string {
  const units: Units = {
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
