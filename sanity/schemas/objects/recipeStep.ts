import type { Rule, StepPreview } from '../../types/schemaTypes'

export default {
  name: 'recipeStep',
  type: 'object',
  title: 'Step',
  fields: [
    {
      name: 'stepNumber',
      type: 'number',
      title: 'Step Number',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'stepText',
      type: 'recipeStepText',
      title: 'Step',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      step: 'number',
    },
    prepare({ step }: StepPreview) {
      return {
        title: `Step ${step ?? ''}`,
      }
    },
  },
}
