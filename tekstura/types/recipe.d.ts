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

export type RecipeItems = {
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

export type TranslatedHomeText = {
  siteTitle: string
  siteSubtitle: string
  newsletterHeading: string
  newsletterPlaceholder: string
  newsletterText: string
  latestRecipe: string
}

export type TranslatedRecipeText = {
  priprema: string
  porcija: string
  sastojci: string
  newsletterTitle: string
  newsletterPlaceholder: string
  newsletterText: string
}
