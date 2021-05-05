import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .icon(() => '📄')
  .title('Home')
  .child(S.document().id('home').schemaType('home').documentId('home'))
