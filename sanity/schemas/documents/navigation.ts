import { i18n } from '../translation/documentTranslation'

export default {
  name: 'navigation',
  title: 'Navigacija',
  type: 'document',
  i18n,
  fields: [
    {
      name: 'home',
      title: 'Home',
      type: 'string',
    },
    {
      name: 'recipes',
      title: 'Recipes',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'string',
    },
  ],
}
