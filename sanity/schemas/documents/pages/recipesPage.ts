import { i18n } from '../../translation/documentTranslation'

export default {
  name: 'recipesPage',
  title: 'Recepti',
  type: 'document',
  i18n,
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'placeholder',
      title: 'Search Placeholder',
      type: 'string',
    },
  ],
}
