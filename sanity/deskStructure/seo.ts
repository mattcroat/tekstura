import S from '@sanity/desk-tool/structure-builder'
import * as Structure from 'sanity-plugin-intl-input/lib/structure'
import { FiSearch } from 'react-icons/fi'

export default S.listItem()
  .icon(FiSearch)
  .title('SEO')
  .child(
    S.document()
      .title('SEO')
      .id('seo')
      .schemaType('seo')
      .documentId('seo')
      .views(Structure.getDocumentNodeViewsForSchemaType('seo'))
  )
