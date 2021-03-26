export default {
  name: 'recipeStep',
  type: 'object',
  title: 'Step',
  fields: [
    {
      name: 'stepNumber',
      type: 'number',
      title: 'Step Number',
    },
    {
      name: 'stepText',
      type: 'recipeStepText',
      title: 'Step',
    },
  ],
  preview: {
    select: {
      step: 'number',
    },
    prepare({ step = '' }) {
      return {
        title: `Step ${step}`,
      }
    },
  },
}
