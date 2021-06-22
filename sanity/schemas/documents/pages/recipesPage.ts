import { i18n } from '../../translation/documentTranslation'

export default {
  name: 'recipesPage',
  title: 'Recepti',
  type: 'document',
  i18n,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
    },
  ],
}
