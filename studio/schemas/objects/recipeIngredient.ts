type IngredientPreview = {
  amount: string | number
  ingredient: string
  unit: string
}

export default {
  name: 'recipeIngredient',
  type: 'object',
  title: 'Ingredients',
  icon: () => '🥕',
  fields: [
    {
      name: 'amount',
      title: 'Amount',
      type: 'string',
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'string',
      options: {
        list: [
          { title: 'litra (L)', value: 'L' },
          { title: 'mililitar (mL)', value: 'mL' },
          { title: 'gram (g)', value: 'g' },
          { title: 'kilogram (kg)', value: 'kg' },
          { title: 'žličica', value: 'žličica' },
          { title: 'žlica', value: 'žlica' },
        ],
      },
    },
    {
      name: 'ingredient',
      title: 'Ingredient',
      type: 'string',
    },
  ],
  preview: {
    select: {
      amount: 'amount',
      unit: 'unit',
      ingredient: 'ingredient',
    },
    prepare({ amount, unit, ingredient }: IngredientPreview) {
      if (!unit) {
        return {
          title: `${amount ?? ''} ${ingredient}`,
        }
      }

      return {
        title: `${amount ?? ''} ${unit} ${ingredient}`,
      }
    },
  },
}
