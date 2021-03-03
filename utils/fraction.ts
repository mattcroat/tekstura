export function isFraction(amount) {
  if (typeof amount === 'string') {
    return amount.includes('/')
  }
}

export function fancyFraction(fraction) {
  const [numerator, denominator] = fraction.split('/')
  return `<sup>${numerator}</sup>&frasl;<sub>${denominator}</sub>`
}

export function fractionToDecimal(fraction) {
  return fraction
    .split('/')
    .reduce((numerator, denominator) => numerator / denominator)
}

export function numberToFraction(number) {
  const afterDecimal = number.toString().length - 2
  const denominator = Math.pow(10, afterDecimal)
  const numerator = number * denominator
  const divisor = greatestCommonDivisor(numerator, denominator)

  return `${numerator / divisor}/${denominator / divisor}`
}

function greatestCommonDivisor(numerator, denominator) {
  if (!denominator) {
    return numerator
  }

  return greatestCommonDivisor(denominator, numerator % denominator)
}
