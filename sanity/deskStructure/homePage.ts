import S from '@sanity/desk-tool/structure-builder'
import * as Structure from 'sanity-plugin-intl-input/lib/structure'
import { FiFileText } from 'react-icons/fi'

export default S.listItem()
  .icon(FiFileText)
  .title('Početna')
  .child(
    S.document()
      .title('Početna')
      .id('home')
      .schemaType('home')
      .documentId('home')
      .views(Structure.getDocumentNodeViewsForSchemaType('home'))
  )
