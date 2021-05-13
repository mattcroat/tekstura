export type Ingredient = {
  _key?: string
  id: number
  amount: Amount
  ingredient: string
  unit: string
}

export type Amount = string | number

export type Units = {
  [key: string]: {
    singular: string
    plural: string
    greater?: string
  }
  g: {
    singular: string
    plural: string
    greater: string
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

export type RecipeProps = {
  title: string
  imageUrl: string
  preparation: number
  amount: number
  ingredients: Ingredient[]
  content: any
  slug: string
}

export type Slug = string

export type Params = {
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
