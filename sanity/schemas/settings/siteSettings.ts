export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  initialValue: {
    title: 'Tekstura',
    description:
      'Tekstura je namijenjena za dijeljenje izvrsne hrane sa drugima',
  },
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
