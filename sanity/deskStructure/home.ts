import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .icon(() => '📄')
  .title('Home')
  .child(
    S.document()
      .title('Landing Page')
      .id('home')
      .schemaType('home')
      .documentId('home')
  )
