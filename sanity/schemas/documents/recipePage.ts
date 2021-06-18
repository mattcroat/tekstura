import { i18n } from '../translation/documentTranslation'

export default {
  name: 'recipePage',
  title: 'Recipe Page',
  type: 'document',
  i18n,
  fieldsets: [
    {
      name: 'recept',
      title: 'Recept',
    },
    {
      name: 'newsletter',
      title: 'Newsletter',
    },
  ],
  fields: [
    {
      name: 'priprema',
      title: 'Priprema',
      type: 'string',
      fieldset: 'recept',
    },
    {
      name: 'porcija',
      title: 'Porcija',
      type: 'string',
      fieldset: 'recept',
    },
    {
      name: 'sastojci',
      title: 'Sastojci',
      type: 'string',
      fieldset: 'recept',
    },
    {
      name: 'newsletterTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'newsletter',
    },
    {
      name: 'newsletterPlaceholder',
      title: 'Placeholder',
      type: 'string',
      fieldset: 'newsletter',
    },
    {
      name: 'newsletterText',
      title: 'Button Text',
      type: 'string',
      fieldset: 'newsletter',
    },
  ],
}
