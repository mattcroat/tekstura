import { i18n } from '../translation/documentTranslation'

export default {
  name: 'about',
  title: 'About Page',
  type: 'document',
  i18n,
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    },
  ],
}
