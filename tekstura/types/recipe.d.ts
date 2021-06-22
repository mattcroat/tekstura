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
  title: string
  secondaryTitle: string
  subscribeTitle: string
  subscribePlaceholder: string
  subscribeCallToAction: string
  recipeLink: string
}

export type TranslatedRecipeText = {
  preparation: string
  portion: string
  ingredients: string
  subscribeTitle: string
  subscribePlaceholder: string
  subscribeCallToAction: string
}

export type TranslatedRecipesText = {
  title: string
  placeholder: string
}
