import { i18n } from '../../translation/documentTranslation'

export default {
  name: 'recipePage',
  title: 'Recept',
  type: 'document',
  i18n,
  fieldsets: [
    {
      name: 'recipe',
      title: 'Recipe',
    },
    {
      name: 'subscribe',
      title: 'Newsletter',
    },
  ],
  fields: [
    {
      name: 'preparation',
      title: 'Preparation',
      type: 'string',
      fieldset: 'recipe',
    },
    {
      name: 'portion',
      title: 'Portion',
      type: 'string',
      fieldset: 'recipe',
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'string',
      fieldset: 'recipe',
    },
    {
      name: 'subscribeTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'subscribe',
    },
    {
      name: 'subscribePlaceholder',
      title: 'Placeholder',
      type: 'string',
      fieldset: 'subscribe',
    },
    {
      name: 'subscribeCallToAction',
      title: 'Call to Action',
      type: 'string',
      fieldset: 'subscribe',
    },
  ],
}
