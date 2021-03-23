export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
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
      name: 'ingredients',
      type: 'array',
      title: 'List of Ingredients',
      of: [{ type: 'recipeIngredient' }],
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      description: '"A picture is worth a thousand words"',
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
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
