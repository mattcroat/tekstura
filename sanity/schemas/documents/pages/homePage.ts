import { i18n } from '../../translation/documentTranslation'

export default {
  name: 'homePage',
  title: 'Početna',
  type: 'document',
  i18n,
  fieldsets: [
    {
      name: 'title',
      title: 'Headings',
    },
    {
      name: 'subscribe',
      title: 'Newsletter',
    },
    {
      name: 'recipe',
      title: 'Latest Recipe',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'title',
    },
    {
      name: 'secondaryTitle',
      title: 'Secondary Title',
      type: 'string',
      fieldset: 'title',
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
    {
      name: 'recipeLink',
      title: 'Text',
      type: 'string',
      fieldset: 'recipe',
    },
  ],
}
