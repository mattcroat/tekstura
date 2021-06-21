import S from '@sanity/desk-tool/structure-builder'
import * as Structure from 'sanity-plugin-intl-input/lib/structure'
import { FiFileText } from 'react-icons/fi'

export default S.listItem()
  .icon(FiFileText)
  .title('Saznaj više')
  .child(
    S.document()
      .title('Saznaj više')
      .id('aboutPage')
      .schemaType('aboutPage')
      .documentId('aboutPage')
      .views(Structure.getDocumentNodeViewsForSchemaType('aboutPage'))
  )
