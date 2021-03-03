import {
  fractionToDecimal,
  isFraction,
  numberToFraction,
} from '@/root/utils/fraction'

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
        amount: formatAmount(totalAmount),
        unit: formatUnit(totalAmount, unit),
      }
    }
  )

  return formatIngredients
}

function getTotalAmount(amount: Amount, portion: number): Amount {
  const defaultPortion = 2
  let totalAmount = 0

  if (!amount || portion === defaultPortion) {
    return amount
  }

  if (isFraction(amount)) {
    return formatFraction(amount, portion)
  }

  if (portion > defaultPortion) {
    totalAmount = (+amount / defaultPortion) * portion
  }

  if (portion <= 1) {
    totalAmount = +amount / defaultPortion
  }

  return totalAmount
}

function formatAmount(amount: Amount): Amount {
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

function formatUnit(amount: Amount, unit: string): string {
  const units: Units = {
    g: { singular: 'gram', plural: 'grama' },
    kg: { singular: 'kilogram', plural: 'kilograma' },
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

function formatFraction(amount, portion) {
  let totalAmount = 0

  const isNumberAndFraction = /[1-9] [1-9]\/[1-9]/.test(amount)
  const isFraction = /^[1-9]\/[1-9]/.test(amount)

  if (isNumberAndFraction) {
    const [ingredientAmount, fraction] = amount.split(' ')
    const total = +ingredientAmount + fractionToDecimal(fraction)
    const portionAmount = total / 2
    totalAmount = portionAmount * portion
  }

  if (isFraction) {
    const ingredientAmount = fractionToDecimal(amount)
    const portionAmount = ingredientAmount / 2
    totalAmount = portionAmount * portion
  }

  const [ingredientAmount, remainder] = totalAmount.toString().split('.')
  const decimal = parseFloat(`0.${remainder}`).toFixed(2)
  const fraction = decimal > 0 && numberToFraction(decimal)

  if (!+ingredientAmount) {
    return fraction
  }

  if (!fraction) {
    return ingredientAmount
  }

  return `${ingredientAmount} ${fraction}`
}
