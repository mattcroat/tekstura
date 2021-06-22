import { i18n } from '../../translation/documentTranslation'

export default {
  name: 'aboutPage',
  title: 'Saznaj više',
  type: 'document',
  i18n,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],
}
