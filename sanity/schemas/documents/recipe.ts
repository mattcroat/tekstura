import { FiEdit } from 'react-icons/fi'

import { i18n } from '../translation/documentTranslation'

export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  i18n,
  icon: FiEdit,
  initialValue: {
    preparationTime: 30,
    portionAmount: 2,
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Recipe Link',
      type: 'slug',
      description: 'e.g "site.cooking/recipe-name"',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Image description',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published',
      type: 'datetime',
    },
    {
      name: 'preparationTime',
      title: 'Preparation',
      type: 'number',
      description: 'Enter preparation time in minutes',
    },
    {
      name: 'portionAmount',
      title: 'Portion',
      type: 'number',
      description: 'Leave default, or change it',
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'List of Ingredients',
      of: [{ type: 'recipeIngredient' }],
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'e.g. pasta, sauce',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
  },
}
