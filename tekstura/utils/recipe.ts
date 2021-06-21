import {
  fractionToDecimal,
  isFraction,
  numberToFraction,
} from '@/root/utils/fraction'

import type { Ingredient, Amount, Units, Locale } from '@/root/types/recipe'
import { unitsCroatian, unitsEnglish } from '@/root/utils/units'

export function formatIngredients(
  ingredients: Ingredient[],
  portion: number,
  locale: Locale
): Ingredient[] {
  const formatIngredients = ingredients.map(
    ({ id, amount, ingredient, unit }) => {
      const totalAmount = getTotalAmount(amount, portion)

      return {
        id,
        ingredient,
        amount: formatAmount(totalAmount),
        unit: formatUnit(totalAmount, unit as Units, locale),
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
  const totalAmount = +amount / threshold

  if (+amount < threshold) {
    return amount
  }

  return totalAmount
}

function formatUnit(amount: Amount, unit: Units, locale: Locale): string {
  const threshold = 1000
  const units = locale === 'hr' ? unitsCroatian : unitsEnglish

  if (units[unit]) {
    if (amount <= 1 && amount < threshold) return units[unit].singular
    if (amount >= 1 && amount < threshold) return units[unit].plural

    if (amount >= threshold) {
      const greater = (units[unit].greater as Units) ?? unit

      return amount === threshold
        ? units[greater].singular
        : units[greater].plural
    }
  }

  return unit
}

function formatFraction(amount: Amount, portion: number): Amount {
  if (typeof amount !== 'string') return amount

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
  const decimal = +parseFloat(`0.${remainder}`).toFixed(2)
  const fraction = decimal > 0 ? numberToFraction(decimal) : decimal

  if (!+ingredientAmount) {
    return fraction
  }

  if (!fraction) {
    return ingredientAmount
  }

  return `${ingredientAmount} ${fraction}`
}
