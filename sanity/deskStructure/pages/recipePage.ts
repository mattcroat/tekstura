import S from '@sanity/desk-tool/structure-builder'
import * as Structure from 'sanity-plugin-intl-input/lib/structure'
import { FiFileText } from 'react-icons/fi'

export default S.listItem()
  .icon(FiFileText)
  .title('Recept')
  .child(
    S.document()
      .title('Recept')
      .id('recipePage')
      .schemaType('recipePage')
      .documentId('recipePage')
      .views(Structure.getDocumentNodeViewsForSchemaType('recipePage'))
  )
