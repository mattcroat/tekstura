export default {
  name: 'recipeStep',
  type: 'object',
  title: 'Step',
  fields: [
    {
      name: 'number',
      type: 'number',
      title: 'Number',
    },
    {
      name: 'step',
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
