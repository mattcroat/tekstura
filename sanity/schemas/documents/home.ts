import { i18n } from '../translation/documentTranslation'

export default {
  name: 'home',
  title: 'Landing Page',
  type: 'document',
  i18n,
  fieldsets: [
    {
      name: 'heading',
      title: 'Headings',
    },
    {
      name: 'newsletter',
      title: 'Newsletter',
    },
    {
      name: 'latestRecipe',
      title: 'Latest Recipe',
    },
  ],
  fields: [
    {
      name: 'siteTitle',
      title: 'Heading',
      type: 'string',
      fieldset: 'heading',
    },
    {
      name: 'siteSubtitle',
      title: 'Subheading',
      type: 'string',
      fieldset: 'heading',
    },
    {
      name: 'newsletterHeading',
      title: 'Heading',
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
    {
      name: 'latestRecipe',
      title: 'Link Text',
      type: 'string',
      fieldset: 'latestRecipe',
    },
  ],
}
