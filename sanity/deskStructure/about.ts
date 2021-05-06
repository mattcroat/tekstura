import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .icon(() => '📄')
  .title('About')
  .child(
    S.document()
      .title('About Page')
      .id('about')
      .schemaType('about')
      .documentId('about')
  )
