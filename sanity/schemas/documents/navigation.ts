import { i18n } from '../translation/documentTranslation'

export default {
  name: 'navigation',
  title: 'Navigacija',
  type: 'document',
  i18n,
  fields: [
    {
      name: 'home',
      title: 'Početna',
      type: 'string',
    },
    {
      name: 'recipes',
      title: 'Recepti',
      type: 'string',
    },
    {
      name: 'about',
      title: 'Saznaj više',
      type: 'string',
    },
  ],
}
