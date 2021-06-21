import type { unitsCroatian, unitsEnglish } from '@/root/utils/units'

export type Ingredient = {
  _key?: string
  id: number
  amount: Amount
  ingredient: string
  unit: string
  locale?: Locale
}

export type Amount = string | number

export type Units = keyof typeof unitsCroatian | keyof typeof unitsEnglish

export type Locale = string

export type RecipeProps = {
  title: string
  imageUrl: string
  preparation: number
  amount: number
  ingredients: Ingredient[]
  content: any
  slug: string
}

export type Params = {
  locale: string
  params: {
    recept?: string
  }
  preview: boolean
}

export type Recipe = {
  id: string
  title: string
  imageUrl: string
  slug: string
}
