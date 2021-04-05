import type { Amount } from '@/root/types/recipe'

export function isFraction(amount: Amount) {
  if (typeof amount === 'string') {
    return amount.includes('/')
  }
}

export function fancyFraction(fraction: string): string {
  const [numerator, denominator] = fraction.split('/')
  return `<sup>${numerator}</sup>&frasl;<sub>${denominator}</sub>`
}

export function fractionToDecimal(fraction: string): number {
  const [numerator, denominator] = fraction.split('/')
  return +numerator / +denominator
}

export function numberToFraction(number: number) {
  const afterDecimal = number.toString().length - 2
  const denominator = Math.pow(10, afterDecimal)
  const numerator = number * denominator
  const divisor = greatestCommonDivisor(numerator, denominator)

  return `${numerator / divisor}/${denominator / divisor}`
}

function greatestCommonDivisor(numerator: number, denominator: number): number {
  if (!denominator) {
    return numerator
  }

  return greatestCommonDivisor(denominator, numerator % denominator)
}
