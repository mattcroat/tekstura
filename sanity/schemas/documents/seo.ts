import { i18n } from '../translation/documentTranslation'

export default {
  name: 'seo',
  title: 'SEO',
  type: 'document',
  i18n,
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'Used as the title of the site',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'string',
      description: 'Meta description for SEO (not site content)',
    },
  ],
}
