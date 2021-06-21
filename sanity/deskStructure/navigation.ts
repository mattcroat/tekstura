import S from '@sanity/desk-tool/structure-builder'
import * as Structure from 'sanity-plugin-intl-input/lib/structure'
import { FiFileText } from 'react-icons/fi'

export default S.listItem()
  .icon(FiFileText)
  .title('Navigacija')
  .child(
    S.document()
      .title('Navigacija')
      .id('navigation')
      .schemaType('navigation')
      .documentId('navigation')
      .views(Structure.getDocumentNodeViewsForSchemaType('navigation'))
  )
